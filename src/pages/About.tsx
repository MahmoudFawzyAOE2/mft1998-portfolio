import React from 'react';
import ExperienceSection from '@/components/about/ExperienceSection';
import CertificationsSection from '@/components/about/CertificationsSection';

const About: React.FC = () => {
  const experiences = [
    {
      company: 'Tadarab',
      position: 'Software Tester',
      date: 'Oct 2024 - July 2025 - 10 mos',
      location: 'Alexandria, Egypt - Hybrid',
      details: 'Analyzed requirements to design test scenarios, executed manual/exploratory testing, and tracked defects in Jira. Built an automation framework covering 10% of core test cases while collaborating with developers to debug issues. Partnered with stakeholders to clarify acceptance criteria and ensure quality alignment.',
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/tadarab2.webp',
    },
    {
      company: 'ITI',
      position: 'Softwware testing trainee',
      date: 'May 2024 - Sep 2024 · 4 mos',
      location: 'El-Mansoura, Egypt · Hybrid',
      details: 'Gained hands-on experience in software testing fundamentals, including ISTQB concepts, test case design, and defect reporting. Assisted in manual and exploratory testing, contributed to test automation, and collaborated with teams to validate fixes. Developed foundational skills in Java, SQL, and web technologies to support testing and development tasks.',
      image: 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/ITI3.webp',
    },
    {
      company: 'Alexandria University',
      position: 'BS of Communication and Electronics Engineering',
      date: 'Graduated in June 2022',
      location: 'Alexandria, Egypt - Hybrid',
      details: 'Studied Electrical & Telecommunication Engineering, mastering subjects like DSP, Microprocessors, and Programming (C/Python). Provided peer tutoring and lab support, creating summaries to simplify complex topics. Developed strong analytical, problem-solving, and communication skills through coursework and collaboration.',
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
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
        As a junior software tester, I'm dedicated to ensuring software quality and excited to keep growing while helping deliver great user experiences.
        </p>
      </div>
      
      {/* Desktop: Side by side, Mobile: Stacked */}
      <div className="section-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16">
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
