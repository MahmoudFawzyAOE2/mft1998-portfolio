
import React from 'react';
import ProjectCard, { ProjectProps } from '@/components/projects/ProjectCard';
import ToolsCarousel from '@/components/projects/ToolsCarousel';

const Projects: React.FC = () => {
  // Static project data (hardcoded)
  const staticProjects: ProjectProps[] = [
    {
      title: "Automated Testing Framework",
      description: [
        "Developed comprehensive test automation framework using Selenium and Java",
        "Implemented CI/CD integration with Jenkins for continuous testing",
        "Reduced regression testing time by 70% while increasing test coverage"
      ],
      image: "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/yourusername/automation-framework",
    },
    {
      title: "API Testing Suite",
      description: [
        "Created REST API testing framework with Postman and Newman",
        "Built custom assertions and validation libraries for complex responses",
        "Documented over 200 API endpoints with examples and test cases"
      ],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/yourusername/api-testing",
    },
    {
      title: "Performance Testing Tool",
      description: [
        "Implemented JMeter scripts for load and stress testing of e-commerce platforms",
        "Created custom dashboards for real-time performance monitoring",
        "Identified and resolved bottlenecks resulting in 35% improved response time"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/yourusername/performance-testing",
    },
    {
      title: "Mobile Test Automation",
      description: [
        "Built cross-platform mobile testing solution with Appium",
        "Implemented BDD approach with Cucumber for improved test readability",
        "Set up parallel test execution reducing test time by 60%"
      ],
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com/yourusername/mobile-testing",
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staticProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <ToolsCarousel tools={tools} />
      </div>
    </div>
  );
};

export default Projects;
