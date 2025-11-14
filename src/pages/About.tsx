import React from 'react';
import ExperienceSection from '@/components/about/ExperienceSection';
import CertificationsSection from '@/components/about/CertificationsSection';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      company: 'DataGear',
      position: 'Software QC Engineer',
      date: 'Oct 2025 - Present',
      location: 'Cairo, Egypt - Hybrid',
      details: [
        "Collaborated with team members to define and review test scenarios and edge cases.",
        "Develop and maintain test cases, execute test plans, and report defects using Jira.", 
        "Engage with stakeholders to clarify requirements and suggest enhancements."
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/DataGear.webp',
    },{
      company: 'Tadarab',
      position: 'Software Tester',
      date: 'Oct 2024 - July 2025 - 10 mos',
      location: 'Alexandria, Egypt - Hybrid',
      details: [
        "Analyzed user stories to derive test scenarios, including edge cases and exploratory paths.",
        "Designed and executed 600+ test cases based on acceptance criteria.",
        "Logged and tracked defects using Jira and Google Sheets to ensure quick resolution.",
        "Built a Selenium (Java) framework covering 10% of core flows to kickstart test automation.",
        "Collaborated with developers and stakeholders for clearer requirements and better coverage."
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/tadarab2.webp',
    },
    {
      company: 'ITI',
      position: 'Softwware testing trainee',
      date: 'May 2024 - Sep 2024 · 4 mos',
      location: 'El-Mansoura, Egypt · Hybrid',
      details: [
        "Learned ISTQB-aligned testing concepts, test case design, and bug reporting.",
        "Practiced manual testing on real projects, covering edge cases and exploratory tests.",
        "Gained hands-on experience with web technologies, SQL, and Java for testing tasks.",
        "Assisted in test automation, contributing to framework setup for core scenarios.",
        "Collaborated with teams to analyze requirements, report defects, and validate fixes.",
        "Built foundational skills in Linux, C++, and OOP to support testing and debugging."
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/ITI3.webp',
    },
    {
      company: 'Alexandria University',
      position: 'BS of Communication and Electronics Engineering',
      date: 'Graduated in June 2022',
      location: 'Alexandria, Egypt - Hybrid',
      details: [
        "Studied Electronic & Communication Engineering, including DSP, Microprocessors, Programming.",
        "Provided peer tutoring and lab support, creating summaries to simplify complex topics.",
        "Built analytical, problem-solving, and communication skills via coursework and teamwork."
      ],
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/FOE.webp',
    },
    ];

  const certifications = [
    {
      certificateName: 'ISTQB CTFL v4',
      date: 'January 2024',
      credentialId: '240117071',
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/ISTQBCTFL.png',
    },
    {
      certificateName: 'ISTQB MAT',
      date: 'August 2025',
      credentialId: '250806034',
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/ISTQBMAT.png',
    }

  ];
  
  return (
    <div className="py-18">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8 mx-auto text-center">
          As a junior software tester, I'm dedicated to ensuring software quality and excited to keep growing while helping deliver great user experiences.
        </p>
        <div className="mb-12 flex justify-center">
          <Button asChild className="flex items-center w-fit">
            <a href="https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/docs/Mahmoud%20Fawzy-CV-SoftwareTester%20.pdf" download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12">
          <div className="order-1">
            <ExperienceSection experiences={experiences} />
          </div>
          <div className="order-2">
            <CertificationsSection certifications={certifications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
