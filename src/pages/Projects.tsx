import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProjectCard, { ProjectProps } from '@/components/projects/ProjectCard';
import ToolsCarousel from '@/components/projects/ToolsCarousel';
import { supabase } from '@/integrations/supabase/client';
import { ProjectData } from '@/components/projects/types';

const Projects: React.FC = () => {
  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('Projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as ProjectData[];
    }
  });

  const tools = [
    'https://www.selenium.dev/images/selenium_logo_square_green.png',
    'https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png',
    'https://avatars.githubusercontent.com/u/3221291?s=200&v=4', // Appium
    'https://upload.wikimedia.org/wikipedia/commons/e/e5/Jest_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/Cucumber_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/59/JMeter.svg',
    'https://www.postman.com/assets/logos/postman-logo-icon-orange.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e3/Jenkins_logo_with_title.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg',
  ];

  const transformProjectData = (project: ProjectData): ProjectProps => ({
    title: project.Title || 'Untitled Project',
    description: project.Description ? [project.Description] : ['No description available'],
    image: 'https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    githubUrl: project.github_link || '#',
  });

  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Explore my testing projects that have helped companies deliver high-quality software products.
        </p>
        
        {isLoading ? (
          <div className="text-center">Loading projects...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error loading projects. Please try again later.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...transformProjectData(project)} />
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-16">
        <ToolsCarousel tools={tools} />
      </div>
    </div>
  );
};

export default Projects;
