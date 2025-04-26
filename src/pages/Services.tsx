
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
        '/images/githubeditgold.webp',
        '/images/gmaileditgold.webp',
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
        '/images/linkedineditgold.webp',
        '/images/upworkeditgold.webp',
        '/images/githubeditgold.webp',
        '/images/whatsappeditgold.webp',
      ],
    },
    {
      title: 'API Manual Testing',
      description: [
        'Write clear, comprehensive API documentation',
        'Create user guides for software applications',
        'Document results and identify response issues'
      ],
      image: '/images/api.webp',
      tools: [
        '/images/githubeditgold.webp',
        '/images/gmaileditgold.webp',
        '/images/linkedineditgold.webp',
      ],
    },
    {
      title: 'API Test Automation',
      description: [
        'Create automated tests with RestAssured',
        'Execute API test cases using TestNG frameworks',
        'Report the Test Process outcome using Allure'
      ],
      image: '/images/api automation.webp',
      tools: [
        '/images/upworkeditgold.webp',
        '/images/githubeditgold.webp',
        '/images/whatsappeditgold.webp',
        '/images/linkedineditgold.webp',
      ],
    },
    {
      title: 'Technical Documentation',
      description: [
        'Write clear, comprehensive technical documentation',
        'Create user guides for software applications',
        'Maintain accurate project documentation'
      ],
      image: '/images/documentation.webp',
      tools: [
        '/images/gmaileditgold.webp',
        '/images/linkedineditgold.webp',
        '/images/githubeditgold.webp',
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
