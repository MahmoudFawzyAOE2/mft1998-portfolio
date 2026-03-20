import React from 'react';
import ProjectCard, { ProjectProps } from '@/components/projects/ProjectCard';

const Projects: React.FC = () => {
  // Static project data with updated images
  const staticProjects: ProjectProps[] = [
    {
      title: "DG-CRP",
      type: "real",
      description: [
        "Defined and reviewed test scenarios and edge cases for the product.",
        "Created and executed test cases, reporting defects via Jira.", 
        "Clarified requirements and suggested product enhancements."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/DataGear.webp",
      date: "Oct 2025 - Presesnt",
      githubUrl: "https://www.datagearbi.com/dgcrp.html",
    }, 
    {
      title: "DG-FATCA",
      type: "real",
      description: [
        "Designed and analyzed test scenarios on multiple system modules.",
        "Developed and ran test cases, reporting and tracking issues through Jira.", 
        "Interpreted requirements and proposing product improvements."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/DataGear.webp",
      date: "Oct 2025 - Presesnt",
      githubUrl: "https://datagearbi.com/dgfatca.html",
    }, 
        {
      title: "Tadarab V3",
      type: "real",
      description: [
        "New version of Tadarab's platform with enhanced features.",
        "Created  more than 600 test cases for all functionalities.",
        "Implemented automation framework for 10% of test cases.",
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/tadarab2.webp",
      date: "Oct 2024 - Jul 2025",
      githubUrl: "https://tadarab.com",
    },    
    {
      title: "Test Automation Framework with CI/CD",
      type: "demo",
      description: [
        "Enhanced Test Automation Framework for My Portfolio.",
        "Improved Utility classes and Page Object Model structure.",
        "Integrated CI/CD using GitHub Actions for Testing and Reporting.",
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/MFTICONBLU_BugR.png",
      date: "Aug 2025 - Sep 2025",
      githubUrl: "https://github.com/MahmoudFawzyAOE2/mft1998-portfolio-TestAutomation",
    }, 
    {
      title: "Testing The Guru99 Bank Demo Website",
      type: "demo",
      description: [
        "Tests multiple versions of Guru99 Bank Demo website.",
        "Performs SRS analysis, unit, integration, and system testing.",
        "Implement and executes test cases and reports bugs."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/Manual%20Project.webp",
      date: "Feb 2023 - Mar 2023",
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Guru99-SW-Tesing-Project-1",
    },
    {
      title: "Sutra E-commerce Test Automation",
      type: "demo",
      description: [
        "Smoke Testing Suite of 32 Test Cases for main functionalities.",
        "Streamlines the testing process for Sutra E-commerce.",
        "Built with Selenium WebDriver for robust automation."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/Web%20Automation%20project.webp", 
      date: "",
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Sutra_ShoppingWebsite_WebAutomation",
    },
    {
      title: "Trello API Test Automation",
      type: "demo",
      description: [
        "Regression Test Suite of 27 Tests covering main endpoints.",
        "Ensures reliable and efficient API testing.",
        "Built with RestAssured for robust API interaction."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/Trello%20project.webp", 
      date: "",
      githubUrl: "https://github.com/MahmoudFawzyAOE2/Trello_API_Testing_Project",
    },
    {
      title: "Mahmoud Fawzy's Personal Website",
      type: "demo",
      description: [
        "Showcases a portfolio for a Software Testing Engineer.",
        "Highlights experience, projects, and services in QA.",
        "Provides a way for visitors to connect for inquiries."
      ],
      image: "https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/MFTICON.png", 
      date: "Apr 2025 - Presesnt",
      githubUrl: "https://github.com/MahmoudFawzyAOE2/mft1998-portfolio",
    }
  ];


  return (
    <div className="py-18">
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
    </div>
  );
};

export default Projects;
