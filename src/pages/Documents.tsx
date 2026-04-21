import React from 'react';
import DocumentCard, { DocumentProps } from '@/components/documents/DocumentCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const documents: DocumentProps[] = [
  {
    title: "ETL Testing Summary",
    description: "Overview of ETL testing concepts and best practices to ensure data integrity and quality.",
    categories: ["Database", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/18GDIpSnSjy8iDaYLsirsKwIzDXVJzHgL/view?usp=drive_link",
    date: "2026"
  },
  {
    title: "Practical Testing Summary",
    description: "Summary of the testing lifecycle and key work products in software quality assurance.",
    categories: ["Manual Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/19-1vjeTGqVPBBuY6eqyFYod3KMAz7hoV/view?usp=drive_link",
    date: "2024"
  },
  {
    title: "Generic Test Suite",
    description: "Reusable manual testing template covering requirements, test cases, and execution tracking.",
    categories: ["Manual Testing", "Artifact"],
    fileType: "xls",
    driveUrl: "https://docs.google.com/spreadsheets/d/1WzhteKcaNp_uX_gMdw1jkHsAuATrq2nihK5xg1rGO3s/edit?gid=2013700769#gid=2013700769",
    date: "2025"
  },
    {
    title: "Generic Bug Report",
    description: "Standard defect reporting template with steps, expected/actual results, and severity tracking.",
    categories: ["Manual Testing", "Artifact"],
    fileType: "xls",
    driveUrl: "https://docs.google.com/spreadsheets/d/15YXokfAZNER6CBOiUyoQDQPWTgh6AZ3dOoXGmYM_QEs/edit?usp=drive_link",
    date: "2026"
  },
    {
    title: "ISTQB MAT Summary",
    description: "Concise notes covering key concepts and techniques for ISTQB Mobile Application Testing.",
    categories: ["Mobile Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/1vTHXn1Zg6dw8E8-YQTV_TyxN2mB5spMJ/view?usp=drive_link",
    date: "2025"
  },
    {
    title: "Agile Course Summary",
    description: "Overview of Agile principles, roles, ceremonies, and practical implementation concepts.",
    categories: ["Test Process", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/1JWWvJqQt72Npo53xXDOK5BBM3Rt9eqgU/view?usp=drive_link",
    date: "2024"
  },
    {title: "SQL Summary",
    description: "Key SQL concepts, commands, and other DB fundamentals to effectively work with databases.",
    categories: ["Database", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/1HwXri7zB0b8S7R2W2-nXCyCQqRpxoGae/view?usp=drive_link",
    date: "2025"
  },
    {
    title: "ISTQB FL V4 Summary",
    description: "Summary of key concepts and terminology from the ISTQB Foundation Level (CTFL v4).",
    categories: ["Manual Testing", "Summary"],
    fileType: "pdf",
    driveUrl: "https://drive.google.com/file/d/19EFn9jFOiGAtWNZAW5zGfuq3ISG2uxpN/view?usp=drive_link",
    date: "2024"
  }
];
const manualSummaries = documents.filter(doc =>
  doc.categories.includes("Summary") &&
  doc.categories.includes("Manual Testing")
)

const specializedSummaries = documents.filter(doc =>
  doc.categories.includes("Summary") &&
  !doc.categories.includes("Manual Testing")
)

const artifacts = documents.filter(doc =>
  doc.categories.includes("Artifact")
)

const DocumentCarouselSection = ({
  title,
  items,
}: {
  title: string
  items: DocumentProps[]
}) => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full px-10"
      >
        <CarouselContent>
          {items.map((doc, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/2 xl:basis-1/3"
            >
              <DocumentCard {...doc} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

const Documents: React.FC = () => {
  return (
    <div className="py-18">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">Documents & Resources</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          A collection of documents and resources related to software testing that I've created throughout my career.
        </p>
      
        <div className="space-y-12">

          <DocumentCarouselSection
            title="Manual Testing Summaries"
            items={manualSummaries}
          />

          <DocumentCarouselSection
            title="Specialized Testing Summaries"
            items={specializedSummaries}
          />

          <DocumentCarouselSection
            title="Testing Artifacts & Templates"
            items={artifacts}
            />

        </div>
      </div>
    </div>
  );
};

export default Documents;
