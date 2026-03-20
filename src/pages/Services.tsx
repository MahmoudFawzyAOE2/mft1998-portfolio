import React from 'react';
import ServiceCard, { ServiceProps } from '@/components/services/ServiceCard';

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      title: 'Manual Web & UI Testing',
      description: [
        'Identify usability issues through detailed manual testing',
        'Perform cross-browser/device testing for consistency',
        'Document bugs and collaborate for resolution'
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/manual.webp',
      tools: [
        'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png', // Jira
        'https://img.utdstc.com/icon/5c6/b29/5c6b29f8bc2051f62849b1e218dfe5bc190a197aedbdf7649d390dd0754df28f:200' // Google Sheets
      ],
    },
    {
      title: 'Test Automation',
      description: [
        'Develop and maintain Selenium scripts for testing',
        'Implement TestNG frameworks for test execution',
        'Use Allure to generate comprehensive reports'
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/automation.webp',
      tools: [
        'https://cdn-icons-png.flaticon.com/512/226/226777.png', // Java
        'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/TestNG.png', // TestNG
        'https://miro.medium.com/v2/resize:fit:1400/1*musVE9e4bgjTWeoRmc-P_w.png', // Selenium
        'https://avatars.githubusercontent.com/u/5879127?s=280&v=4', // Allure
      ],
    },
    {
      title: 'API Manual Testing',
      description: [
        'Execute and validate API endpoints for functionality and accuracy.',
        'Identify and document response errors, status codes, and data inconsistencies.',
        'Verify API behavior against requirements and report defects.'
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/api.webp',
      tools: [
        'https://www.svgrepo.com/show/354202/postman-icon.svg', // Postman
        'https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png', // Jira
        'https://img.utdstc.com/icon/5c6/b29/5c6b29f8bc2051f62849b1e218dfe5bc190a197aedbdf7649d390dd0754df28f:200' // Google Sheets
      ],
    },
    {
      title: 'API Test Automation',
      description: [
        'Develop robust API test scripts using RestAssured for reliable automation.',
        'Implement and execute test suites with TestNG for scalable validation.',
        'Generate detailed test reports and analytics using Allure for actionable insights.'
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/api%20automation.webp',
      tools: [
        'https://cdn-icons-png.flaticon.com/512/226/226777.png', // Java
        'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/TestNG.png', // TestNG
        'https://avatars.githubusercontent.com/u/19369327?s=200&v=4', // RestAssured
        'https://avatars.githubusercontent.com/u/5879127?s=280&v=4', // Allure
      ],
    },
    {
      title: 'Technical Documentation',
      description: [
        'Develop clear, structured technical manuals and API documentation.',
        'Design intuitive user guides and onboarding materials for software products.',
        'Update and version-control documentation to align with system changes.'
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/documentation.webp',
      tools: [
        'https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png', // Figma
        'https://img.utdstc.com/icon/5c6/b29/5c6b29f8bc2051f62849b1e218dfe5bc190a197aedbdf7649d390dd0754df28f:200', // Google Sheets
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Docs_2020_Logo.svg/960px-Google_Docs_2020_Logo.svg.png', // Google Docs
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1280px-2023_Obsidian_logo.svg.png' // Obsidian
      ],
    }
  ];
  
  return (
    <div className="py-18">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Services</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Comprehensive testing services to help you deliver high-quality software products.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
