
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProjectCard, { ProjectProps } from '@/components/projects/ProjectCard';
import ToolsCarousel from '@/components/projects/ToolsCarousel';
import { supabase } from '@/integrations/supabase/client';
import { ProjectData } from '@/components/projects/types';
import { toast } from 'sonner';

const Projects: React.FC = () => {
  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      console.log('Fetching projects from Supabase...');
      const { data, error } = await supabase
        .from('Projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }
      
      console.log('Projects fetched from Supabase:', data);
      return data as ProjectData[];
    }
  });

  useEffect(() => {
    if (error) {
      console.error('Error in useQuery:', error);
      toast.error('Failed to load projects. Please try again later.');
    }
    
    if (projects && projects.length === 0 && !isLoading) {
      console.log('No projects found in the database');
      toast.info('No projects found. Add some projects in the Supabase dashboard.');
    }
  }, [error, projects, isLoading]);

  const transformProjectData = (project: ProjectData): ProjectProps => {
    console.log('Transforming project:', project);
    return {
      title: project.Title || 'Untitled Project',
      description: project.Description ? [project.Description] : ['No description available'],
      image: 'https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      githubUrl: project.github_link || '#',
    };
  };

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

  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Explore my testing projects that have helped companies deliver high-quality software products.
        </p>
        
        {isLoading ? (
          <div className="text-center p-8">
            <div className="animate-pulse h-6 w-32 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="text-center">Loading projects...</div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-8">
            <p>Error loading projects. Please try again later.</p>
            <p className="text-sm mt-2">Error details: {error.message}</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center p-8 border border-dashed rounded-lg border-gray-300">
            <p className="mb-4">No projects found in the database.</p>
            <p className="text-sm text-muted-foreground">
              Add projects through the Supabase dashboard to see them here.
            </p>
          </div>
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
