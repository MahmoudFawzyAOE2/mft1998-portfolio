import React from 'react';
import ProjectCard, { ProjectProps } from '@/components/projects/ProjectCard';
import ToolsCarousel from '@/components/projects/ToolsCarousel';

const Projects: React.FC = () => {
  // Static project data with updated images
  const staticProjects: ProjectProps[] = [
    {
      title: "Testing The Guru99 Bank Demo Website",
      description: [
        "Tests multiple versions of Guru99 Bank Demo website.",
        "Performs SRS analysis, unit, integration, and system testing.",
        "Implement and executes test cases and reports bugs."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/Manual%20Project.webp",
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Guru99-SW-Tesing-Project-1",
    },
    {
      title: "Sutra E-commerce Test Automation",
      description: [
        "Smoke Testing Suite of 32 Test Cases for main functionalities.",
        "Streamlines the testing process for Sutra E-commerce.",
        "Built with Selenium WebDriver for robust automation."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/Web%20Automation%20project.webp", 
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Sutra_ShoppingWebsite_WebAutomation",
    },
    {
      title: "Trello API Test Automation",
      description: [
        "Regression Test Suite of 27 Tests covering main endpoints.",
        "Ensures reliable and efficient API testing.",
        "Built with RestAssured for robust API interaction."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/Trello%20project.webp", 
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Trello_API_Testing_Project",
    },
    {
      title: "Mahmoud Fawzy's Personal Website",
      description: [
        "Showcases a portfolio for a Software Testing Engineer.",
        "Highlights experience, projects, and services in QA.",
        "Provides a way for visitors to connect for inquiries."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/MFTICON.png", 
      githubUrl: "https://github.com/MahmoudFawzyAOE2/mft1998-portfolio",
    }
  ];

  const tools = [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/matlab.png',
    'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
    'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png', 
    'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux.png',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png',
    'https://avatars.githubusercontent.com/u/19369327?s=200&v=4',
    'https://miro.medium.com/v2/resize:fit:1400/1*musVE9e4bgjTWeoRmc-P_w.png', 
    'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/TestNG.png',
    'https://avatars.githubusercontent.com/u/5879127?s=280&v=4',
    'https://user-images.githubusercontent.com/25181517/183914128-3fc88b4a-4ac1-40e6-9443-9a30182379b7.png',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/intellij.png',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png',
  ];

  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
        Browse through my hands-on projects where I practice testing concepts to refine my technical expertise.
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
