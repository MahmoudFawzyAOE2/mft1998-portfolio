import React from 'react';
import DocumentCard, { DocumentProps } from '@/components/documents/DocumentCard';

const documents: DocumentProps[] = [
  {
    title: "Test Strategy Template",
    description: "A comprehensive test strategy document template covering test objectives, scope, approach, and deliverables for software testing projects.",
    categories: ["Testing", "Documentation"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/example1",
    date: "2024"
  },
  {
    title: "API Testing Best Practices",
    description: "Summary of API testing best practices including REST API validation, authentication testing, and performance considerations.",
    categories: ["API Testing", "Best Practices"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/example2",
    date: "2024"
  },
  {
    title: "Automation Framework Guide",
    description: "Documentation on setting up and maintaining a Selenium-based test automation framework with Page Object Model design pattern.",
    categories: ["Automation", "Selenium"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/example3",
    date: "2024"
  },
  {
    title: "Generic Test Suite",
    description: "A generic test suite document for manual testing with requirment analysis, test cases, and execution status tracking.",
    categories: ["Documentation", "Manual Testing"],
    fileType: "xls",
    driveUrl: "https://docs.google.com/spreadsheets/d/1WzhteKcaNp_uX_gMdw1jkHsAuATrq2nihK5xg1rGO3s/edit?usp=drive_link",
    date: "2024"
  },
];

const Documents: React.FC = () => {
  return (
    <div className="py-18">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Documents & Resources</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          A collection of knowledge summaries, templates, and documentation resources 
          that I've created or compiled throughout my career in software testing.
        </p>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
