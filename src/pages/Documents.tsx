import React from 'react';
import DocumentCard, { DocumentProps } from '@/components/documents/DocumentCard';

const documents: DocumentProps[] = [
  {
    title: "ETL Testing Summary",
    description: "An overview of ETL testing concepts, methodologies, and best practices for ensuring data integrity and quality in ETL processes.",
    categories: ["ETL Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/1YbqwIf8YDIhxxoRlOwdnQldac0Pp0Nax/view?usp=drive_link",
    date: "2025"
  },
  {
    title: "Practical Testing Summary",
    description: "A concise summary of practical testing lifecycle and work products for effective software quality assurance.",
    categories: ["Manual Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/19-1vjeTGqVPBBuY6eqyFYod3KMAz7hoV/view?usp=sharing",
    date: "2024"
  },
  {
    title: "Generic Test Suite",
    description: "A generic test suite document for manual testing with requirement analysis, test cases, and execution status tracking.",
    categories: ["Manual Testing", "Test Suite"],
    fileType: "xls",
    driveUrl: "https://docs.google.com/spreadsheets/d/1WzhteKcaNp_uX_gMdw1jkHsAuATrq2nihK5xg1rGO3s/edit?usp=drive_link",
    date: "2025"
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
