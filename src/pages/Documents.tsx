import React from 'react';
import DocumentCard, { DocumentProps } from '@/components/documents/DocumentCard';

const documents: DocumentProps[] = [
  {
    title: "ETL Testing Summary",
    description: "An overview of ETL testing concepts, methodologies, and best practices for ensuring data integrity and quality in ETL processes.",
    categories: ["ETL Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/18GDIpSnSjy8iDaYLsirsKwIzDXVJzHgL/view?usp=drive_link",
    date: "2026"
  },
  {
    title: "Practical Testing Summary",
    description: "A concise summary of practical testing lifecycle and work products for effective software quality assurance.",
    categories: ["Manual Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/19-1vjeTGqVPBBuY6eqyFYod3KMAz7hoV/view?usp=drive_link",
    date: "2024"
  },
  {
    title: "Generic Test Suite",
    description: "A generic test suite document for manual testing with requirement analysis, test cases, and execution status tracking.",
    categories: ["Manual Testing", "Artifact"],
    fileType: "xls",
    driveUrl: "https://docs.google.com/spreadsheets/d/1WzhteKcaNp_uX_gMdw1jkHsAuATrq2nihK5xg1rGO3s/edit?gid=2013700769#gid=2013700769",
    date: "2025"
  },
    {
    title: "Generic Bug Report",
    description: "A generic bug report document for logging defects with steps, expected and actual results, severity, and status tracking.",
    categories: ["Manual Testing", "Artifact"],
    fileType: "xls",
    driveUrl: "https://docs.google.com/spreadsheets/d/15YXokfAZNER6CBOiUyoQDQPWTgh6AZ3dOoXGmYM_QEs/edit?usp=drive_link",
    date: "2026"
  },
    {
    title: "ISTQB MAT Summary",
    description: "A summary document covering key concepts, techniques, and exam-focused notes for the ISTQB® Mobile Application Testing certification.",
    categories: ["Mobile Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/1vTHXn1Zg6dw8E8-YQTV_TyxN2mB5spMJ/view?usp=drive_link",
    date: "2025"
  },
    {
    title: "Agile Course Summary",
    description: "A concise summary document outlining core Agile principles, roles, ceremonies, and practical implementation concepts.",
    categories: ["Test Process", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/1JWWvJqQt72Npo53xXDOK5BBM3Rt9eqgU/view?usp=drive_link",
    date: "2024"
  },
    {
    title: "ISTQB FL V4 Summary",
    description: "A concise summary document covering key concepts, principles, and terminology from the ISTQB Foundation Level (CTFL v4) syllabus.",
    categories: ["Manual Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/19EFn9jFOiGAtWNZAW5zGfuq3ISG2uxpN/view?usp=drive_link",
    date: "2024"
  }
];

const Documents: React.FC = () => {
  return (
    <div className="py-18">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Documents & Resources</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          A collection of documents and resources related to software testing that I've created throughout my career.
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
