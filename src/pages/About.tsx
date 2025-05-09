
import React from 'react';
import ExperienceSection from '@/components/about/ExperienceSection';

const About: React.FC = () => {
  const experiences = [
    {
      company: 'Tadarab',
      position: 'Software Tester',
      date: 'Oct 2024 - Present',
      location: 'Alexandria, Egypt - Hybrid',
      details: 'Analyzed requirements to design test scenarios, executed manual/exploratory testing, and tracked defects in Jira. Built an automation framework covering 10% of core test cases while collaborating with developers to debug issues. Partnered with stakeholders to clarify acceptance criteria and ensure quality alignment.',
      image: '/images/tadarab2.webp',
    },
    {
      company: 'ITI',
      position: 'Softwware testing trainee',
      date: 'May 2024 - Sep 2024 · 4 mos',
      location: 'El-Mansoura, Egypt · Hybrid',
      details: 'Gained hands-on experience in software testing fundamentals, including ISTQB concepts, test case design, and defect reporting. Assisted in manual and exploratory testing, contributed to test automation, and collaborated with teams to validate fixes. Developed foundational skills in Java, SQL, and web technologies to support testing and development tasks.',
      image: '/images/iti3.webp',
    },
    {
      company: 'ESTB',
      position: 'ISTQB Certified Tester',
      date: 'ID: 214234234234',
      details: ' Certified Tester Foundation Level [CTFL] by the International Software Testing Qualifications Board [ISTQB]. This certification validates my knowledge and skills in software testing principles, techniques, and best practices.',
      image: '/images/istqb.webp',
    },
    {
      company: 'Alexandria University',
      position: 'BS of Communication and Electronics Engineering',
      date: 'Graduated in June 2022',
      location: 'Alexandria, Egypt - Hybrid',
      details: 'Studied Electrical & Telecommunication Engineering, mastering subjects like DSP, Microprocessors, and Programming (C/Python). Provided peer tutoring and lab support, creating summaries to simplify complex topics. Developed strong analytical, problem-solving, and communication skills through coursework and collaboration.',
      image: '/images/FOE.webp',
    },
    ];
  
  return (
    <div className="py-12">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
        As a junior software tester, I’m dedicated to ensuring software quality and excited to keep growing while helping deliver great user experiences.
        </p>
      </div>
      
      <ExperienceSection experiences={experiences} />
    </div>
  );
};

export default About;
