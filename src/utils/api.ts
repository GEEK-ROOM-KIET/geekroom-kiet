import { ApiRequest, ApiError, ApiResponse } from '@/types/api';

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
  }: ApiRequest): Promise<ApiResponse<T>> {
    try {
      const url = new URL(`${this.baseURL}${endpoint}`);
      
      // Add query parameters
      if (query) {
        Object.entries(query).forEach(([key, value]) => {
          url.searchParams.append(key, String(value));
        });
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

      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // HTTP Methods
  async get<T>(endpoint: string, query?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'GET',
      endpoint,
      query,
    });
  }

  async post<T>(endpoint: string, body?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'POST',
      endpoint,
      body,
    });
  }

  async put<T>(endpoint: string, body?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PUT',
      endpoint,
      body,
    });
  }

  async patch<T>(endpoint: string, body?: Record<string, any>): Promise<ApiResponse<T>> {
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
