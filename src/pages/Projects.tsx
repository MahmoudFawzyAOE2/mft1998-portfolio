
import React from 'react';
import ProjectCard, { ProjectProps } from '@/components/projects/ProjectCard';
import ToolsCarousel from '@/components/projects/ToolsCarousel';

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: 'E-commerce Test Automation Framework',
      description: [
        'Developed a robust Selenium-based framework for testing e-commerce applications',
        'Implemented Page Object Model and data-driven testing patterns',
        'Integrated with CI/CD pipeline for continuous testing',
        'Achieved 95% test coverage across critical user journeys'
      ],
      image: 'https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      githubUrl: 'https://github.com/yourusername/ecommerce-test-automation',
    },
    {
      title: 'Mobile App Testing Suite',
      description: [
        'Created Appium-based automated tests for iOS and Android applications',
        'Built a cross-platform framework that reduced test maintenance by 50%',
        'Implemented screenshot comparison for visual regression testing',
        'Added performance testing modules to track app responsiveness'
      ],
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      githubUrl: 'https://github.com/yourusername/mobile-testing-suite',
    },
    {
      title: 'API Testing Framework',
      description: [
        'Developed a RestAssured-based framework for comprehensive API testing',
        'Created a modular approach to test request/response validation',
        'Implemented contract testing between microservices',
        'Added security testing modules to identify vulnerabilities'
      ],
      image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      githubUrl: 'https://github.com/yourusername/api-testing-framework',
    },
    {
      title: 'Performance Testing Dashboard',
      description: [
        'Built a JMeter-based load testing solution with custom dashboard',
        'Created visualizations for key performance metrics',
        'Implemented threshold-based alerting system',
        'Automated performance test execution and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      githubUrl: 'https://github.com/yourusername/performance-testing-dashboard',
    },
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
          {projects.map((project, index) => (
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
