
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

type Experience = {
  company: string;
  position: string;
  details: string;
  image: string;
  date?: string;
  location?: string;
};

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="section-container">
      <h2 className="text-3xl font-bold mb-12 text-center">My Professional Journey</h2>
      
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 ${
              index % 2 === 0 ? 'md:grid-cols-[1fr_2fr]' : 'md:grid-cols-[2fr_1fr] md:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="bg-sky-50 rounded-lg overflow-hidden shadow-md aspect-[2/1] flex items-center justify-center">
                <img 
                  src={exp.image} 
                  alt={exp.company} 
                  className="h-full object-contain"
                />
              </div>
            </div>
                        
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <div className="flex justify-between items-start mb-2">
                <div className="w-full md:w-auto mb-2 md:mb-0">
                  <h3 className="text-2xl font-semibold">{exp.position}</h3>
                  <h4 className="text-xl text-primary">{exp.company}</h4>
                </div>
                <div className="w-full md:w-auto text-right">
                  <p className="text-muted-foreground mt-2">{exp.date}</p>
                  <div className="flex items-center justify-end gap-1">
                    <p className="text-muted-foreground">{exp.location}</p>
                    {exp.location && <MapPin className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button asChild className="flex items-center gap-2">
          <a href="/docs/Mahmoud Fawzy-CV-SoftwareTester 4-25.pdf" download>
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ExperienceSection;
