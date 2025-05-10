
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
      image: "/images/Manual Project.webp",
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Guru99-SW-Tesing-Project-1",
    },
    {
      title: "Sutra E-commerce Test Automation",
      description: [
        "Automates testing of multiple core functionalities.",
        "Streamlines the testing process for Sutra E-commerce.",
        "Built with Selenium WebDriver for robust automation."
      ],
      image: "/images/Web Automation project.webp", 
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Sutra_ShoppingWebsite_WebAutomation",
    },
    {
      title: "Trello API Test Automation",
      description: [
        "Automates testing of Trello API functionalities.",
        "Ensures reliable and efficient API testing.",
        "Built with RestAssured for robust API interaction."
      ],
      image: "/images/Trello project.webp", 
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Trello_API_Testing_Project",
    },
    {
      title: "Mahmoud Fawzy's Personal Website",
      description: [
        "Showcases a portfolio for a Software Testing Engineer.",
        "Highlights experience, projects, and services in QA.",
        "Provides a way for visitors to connect for inquiries."
      ],
      image: "/images/MFTICON.png", 
      githubUrl: "https://github.com/MahmoudFawzyAOE2/MahmoudFawzyAOE2.github.io",
    }
  ];

  const tools = [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', // Python
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', // C
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png', // C++
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png', // Java
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/matlab.png', // MATLAB
    'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg', // Microsoft SQL Server
    'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png', 
    'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux.png', // Linux
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png', // Postman
    'https://avatars.githubusercontent.com/u/19369327?s=200&v=4',
    'https://miro.medium.com/v2/resize:fit:1400/1*musVE9e4bgjTWeoRmc-P_w.png', 
    'https://howtodoinjava.com/wp-content/uploads/2014/12/TestNG.png', // TestNG
    'https://avatars.githubusercontent.com/u/5879127?s=280&v=4', // Allure
    'https://user-images.githubusercontent.com/25181517/183914128-3fc88b4a-4ac1-40e6-9443-9a30182379b7.png',
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/intellij.png', // IntelliJ IDEA
    'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png', // Jira
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

