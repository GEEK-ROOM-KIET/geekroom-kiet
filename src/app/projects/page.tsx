'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [selectedTech, setSelectedTech] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = useMemo(() => {
    return projectsData.projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All Projects' || project.category === selectedCategory;
      
      const matchesTech = selectedTech === '' || project.techStack.includes(selectedTech);
      
      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [searchTerm, selectedCategory, selectedTech]);

  const categories = projectsData.categories;
  const technologies = projectsData.technologies;


  const categoryTabs = [
    { 
      name: 'All Projects', 
      count: projectsData.projects.length 
    },
    { 
      name: 'Web Development', 
      count: projectsData.projects.filter(p => p.category === 'Web Development').length 
    },
    { 
      name: 'Mobile Apps', 
      count: projectsData.projects.filter(p => p.category === 'Mobile Apps').length 
    },
    { 
      name: 'AI/ML', 
      count: projectsData.projects.filter(p => p.category === 'AI/ML').length 
    },
    { 
      name: 'Blockchain', 
      count: projectsData.projects.filter(p => p.category === 'Blockchain').length 
    },
    { 
      name: 'IoT/Hardware', 
      count: projectsData.projects.filter(p => p.category === 'IoT/Hardware').length 
    },
    { 
      name: 'Others', 
      count: projectsData.projects.filter(p => p.category === 'Others').length 
    }
  ];

  return (
    <>
      <Navbar />
      

      {/* Hero Section */}
      <section className="min-h-screen pt-20 relative">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-gray-950">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
          
 
          <div className="text-center mb-12">
            <div className="relative font-sans p-12 rounded-lg text-center overflow-hidden">
                  
                  {/* Heading with responsive text size and bold font */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    
                    {/* First line of text in solid white */}
                    <span className="text-white">
                      <span className="text-orange-500 text-3xl mr-2">✨</span>
                      Building the Future, 
                    </span>
                    
                    {/* Second line with the gradient effect */}
                    <span className="block bg-gradient-to-r from-orange-700   to-teal-400 text-transparent bg-clip-text">
                      One Line of Code at a Time
                    </span>

                  </h1>
                </div>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover innovative projects crafted by the Geek Room KIET community. 
              From mobile apps to AI solutions, explore our journey of turning ideas into reality.
            </p>
          </div>



          {/* Search and Category Filter Bar */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-full max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#00C8B5] rounded-lg w-full"
                />
              </div>
            </div>

            {/* Horizontal Category Filter Tabs */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4 overflow-x-auto pb-2">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setSelectedCategory(tab.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === tab.name
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    <span className="font-medium">{tab.name}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      selectedCategory === tab.name
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
                
                {/* Filters Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full hover:bg-gray-700/50 transition-all duration-200 ml-4">
                  <Filter className="h-4 w-4" />
                  <span className="font-medium">Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredProjects.length}</span> of{' '}
              <span className="text-white font-semibold">{projectsData.projects.length}</span> projects
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
            }>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  className={viewMode === 'list' ? 'flex' : ''}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-6">
                <Filter className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Try adjusting your search criteria or filters to find what you're looking for.
                </p>
              </div>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Projects');
                  setSelectedTech('');
                }}
                className="bg-[#00C8B5] hover:bg-[#00A693] text-black font-medium"
              >
                Clear all filters
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#00C8B5]/10 to-[#FF2D55]/10 rounded-2xl border border-gray-700/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Have an idea for a project?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join our community and turn your innovative ideas into reality. 
              Collaborate with like-minded students and build something amazing together.
            </p>
            <Button className="bg-[#00C8B5] hover:bg-[#00A693] text-black font-medium px-8 py-3">
              Join Geek Room KIET
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}