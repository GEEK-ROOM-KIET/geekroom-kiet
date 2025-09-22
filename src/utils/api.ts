import type { ApiResponse } from '@/types/index';

/**
 * API Error class for handling API-specific errors
 */
class ApiError extends Error {
  public status: number;
  public code?: string;
  public details?: Record<string, unknown>;

  constructor(status: number, message: string, code?: string, details?: Record<string, unknown>) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
    this.name = 'ApiError';
  }
}

/**
 * Generic API client with error handling and type safety
 */
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = process.env.NEXT_PUBLIC_API_URL || '') {
    this.baseURL = baseURL;
  }

  private async request<T>({
    method,
    endpoint,
    body,
    query,
    headers = {},
  }: {
    method: string;
    endpoint: string;
    body?: Record<string, unknown>;
    query?: Record<string, string | number | boolean>;
    headers?: Record<string, string>;
  }): Promise<ApiResponse<T>> {
    try {
      const url = new URL(`${this.baseURL}${endpoint}`);

      // Add query parameters
      if (query) {
        for (const [key, value] of Object.entries(query)) {
          url.searchParams.append(key, String(value));
        }
      }

      const config: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      // Add body for non-GET requests
      if (body && method !== 'GET') {
        config.body = JSON.stringify(body);
      }

      const response = await fetch(url.toString(), config);
      const data = await response.json();

      if (!response.ok) {
        throw new ApiError(
          response.status,
          data.message || 'An error occurred',
          data.code,
          data.details
        );
      }

      return {
        success: true,
        data: data.data || data,
        message: data.message,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        return {
          success: false,
          error: error.message,
        };
      }

      const errorMessage = error instanceof Error ? error.message : 'Network error. Please check your connection.';
      return {
        success: false,
        error: errorMessage,
      };
    }
  }

  // HTTP Methods
  async get<T>(endpoint: string, query?: Record<string, string | number | boolean>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'GET',
      endpoint,
      query,
    });
  }

  async post<T>(endpoint: string, body?: Record<string, unknown>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'POST',
      endpoint,
      body,
    });
  }

  async put<T>(endpoint: string, body?: Record<string, unknown>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PUT',
      endpoint,
      body,
    });
  }

  async patch<T>(endpoint: string, body?: Record<string, unknown>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PATCH',
      endpoint,
      body,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'DELETE',
      endpoint,
    });
  }
}

// Create a default instance
export const apiClient = new ApiClient();

// Export the class for custom instances
export { ApiClient };
