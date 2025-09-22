import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star, Users, Calendar } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

interface ProjectLinks {
  github?: string;
  demo?: string;
  documentation?: string;
  figma?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  status: string;
  techStack: string[];
  features: string[];
  team: TeamMember[];
  links: ProjectLinks;
  images: string[];
  startDate: string;
  endDate?: string;
  rating?: number;
  users?: string;
  downloads?: string;
  events?: string;
  accuracy?: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Mobile App':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Web Platform':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'AI/ML':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case 'IoT':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className={`group relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden ${className}`}>
      {/* Project Image/Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : null}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Status and Category badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={`${getStatusColor(project.status)} border`}>
            {project.status.replace('-', ' ').toUpperCase()}
          </Badge>
          <Badge className={`${getCategoryColor(project.category)} border`}>
            {project.category}
          </Badge>
        </div>

        {/* Rating */}
        {project.rating && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs text-white font-medium">{project.rating}</span>
          </div>
        )}
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Title and Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-[#00C8B5] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed overflow-hidden">
            {project.description.length > 120 
              ? `${project.description.substring(0, 120)}...` 
              : project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-300">Tech Stack</h4>
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-gray-800/50 text-gray-300 border-gray-700/50">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge variant="secondary" className="text-xs bg-gray-800/50 text-gray-400 border-gray-700/50">
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-1">
            <Users className="h-3 w-3" />
            Team ({project.team.length})
          </h4>
          <div className="flex -space-x-2">
            {project.team.slice(0, 4).map((member, index) => (
              <Avatar key={index} className="h-8 w-8 border-2 border-gray-700">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="text-xs bg-gray-800 text-gray-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            ))}
            {project.team.length > 4 && (
              <div className="h-8 w-8 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-400">+{project.team.length - 4}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(project.startDate)}</span>
            {project.endDate && <span>- {formatDate(project.endDate)}</span>}
          </div>
          {(project.users || project.downloads || project.events || project.accuracy) && (
            <div className="flex items-center gap-1">
              <span>•</span>
              <span>
                {project.users && `${project.users} users`}
                {project.downloads && `${project.downloads} downloads`}
                {project.events && `${project.events} events`}
                {project.accuracy && `${project.accuracy} accuracy`}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {project.links.demo && (
            <Button 
              asChild 
              className="flex-1 bg-[#00C8B5] hover:bg-[#00A693] text-black font-medium"
            >
              <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </Link>
            </Button>
          )}
          {project.links.github && (
            <Button 
              asChild 
              variant="outline" 
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}