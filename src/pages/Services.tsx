
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
      image: '/images/manual.webp',
      tools: [
        'https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png', // Jira
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png', // Google Sheets
      ],
    },
    {
      title: 'Test Automation',
      description: [
        'Develop and maintain Selenium scripts for testing',
        'Implement TestNG frameworks for test execution',
        'Use Allure to generate comprehensive reports'
      ],
      image: '/images/automation.webp',
      tools: [
        'https://cdn-icons-png.flaticon.com/512/226/226777.png', // Java
        'https://howtodoinjava.com/wp-content/uploads/2014/12/TestNG.png', // TestNG
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
      image: '/images/api.webp',
      tools: [
        'https://www.svgrepo.com/show/354202/postman-icon.svg', // Postman
        'https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png', // Jira
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png', // Google Sheets
      ],
    },
    {
      title: 'API Test Automation',
      description: [
        'Develop robust API test scripts using RestAssured for reliable automation.',
        'Implement and execute test suites with TestNG for scalable validation.',
        'Generate detailed test reports and analytics using Allure for actionable insights.'
      ],
      image: '/images/api automation.webp',
      tools: [
        'https://cdn-icons-png.flaticon.com/512/226/226777.png', // Java
        'https://howtodoinjava.com/wp-content/uploads/2014/12/TestNG.png', // TestNG
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
      image: '/images/documentation.webp',
      tools: [
        'https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png', // Figma
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png', // Google Sheets
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Docs_2020_Logo.svg/174px-Google_Docs_2020_Logo.svg.png', // Google Docs
      ],
    }
  ];
  
  return (
    <div className="py-12">
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
