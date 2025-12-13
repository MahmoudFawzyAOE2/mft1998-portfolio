import React from 'react';
import DocumentCard, { DocumentProps } from '@/components/documents/DocumentCard';

const documents: DocumentProps[] = [
  {
    title: "Test Strategy Template",
    description: "A comprehensive test strategy document template covering test objectives, scope, approach, and deliverables for software testing projects.",
    category: "Testing",
    driveUrl: "https://drive.google.com/file/d/example1",
    date: "2024"
  },
  {
    title: "API Testing Best Practices",
    description: "Summary of API testing best practices including REST API validation, authentication testing, and performance considerations.",
    category: "API Testing",
    driveUrl: "https://drive.google.com/file/d/example2",
    date: "2024"
  },
  {
    title: "Automation Framework Guide",
    description: "Documentation on setting up and maintaining a Selenium-based test automation framework with Page Object Model design pattern.",
    category: "Automation",
    driveUrl: "https://drive.google.com/file/d/example3",
    date: "2024"
  },
  {
    title: "Bug Report Writing Guide",
    description: "Guidelines for writing effective bug reports with proper severity classification, reproduction steps, and expected vs actual results.",
    category: "Documentation",
    driveUrl: "https://drive.google.com/file/d/example4",
    date: "2023"
  },
];

const Documents: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Documents & Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of knowledge summaries, templates, and documentation resources 
            that I've created or compiled throughout my career in software testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
