
import React from 'react';
import { Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  // Function to calculate months between start date and now
  const calculateMonthsToPresent = (startDateStr: string) => {
    // Extract the start date from format like "Oct 2024 - Present"
    const startMonth = startDateStr.split(' ')[0]; // e.g., "Oct"
    const startYear = parseInt(startDateStr.split(' ')[1]); // e.g., "2024"
    
    const monthNameToNumber: Record<string, number> = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    const startDate = new Date(startYear, monthNameToNumber[startMonth], 1);
    const currentDate = new Date();
    
    // Calculate difference in months
    const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                   (currentDate.getMonth() - startDate.getMonth());
    
    return months;
  };
  
  // Function to format the date string
  const formatDateWithDuration = (dateStr: string) => {
    if (!dateStr) return '';
    
    if (dateStr.includes('Present')) {
      const months = calculateMonthsToPresent(dateStr);
      return `${dateStr} - ${months} mos`;
    }
    
    return dateStr;
  };

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
              <div className=" card-hover bg-sky-50 rounded-lg overflow-hidden shadow-md aspect-[1.8/1] flex items-center justify-center">
                <img 
                  src={exp.image} 
                  alt={exp.company} 
                  className="object-contain gap-2 p-4"
                />
              </div>
            </div>
                        
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="w-full md:w-auto mb-2 md:mb-0">
                  <h3 className="text-2xl font-semibold">{exp.position}</h3>
                  <h4 className="text-xl text-primary">{exp.company}</h4>
                </div>
                <div className="w-full md:w-auto md:text-right">
                  {exp.date && (
                    <p className="text-muted-foreground italic font-medium text-sm md:text-base bg-secondary/50 px-3 py-1 rounded-full inline-block mb-1">
                      {formatDateWithDuration(exp.date)}
                    </p>
                  )}
                  {exp.location && (
                    <div className="flex items-center gap-1 text-sm md:justify-end">
                      <MapPin className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground font-medium">{exp.location}</p>
                    </div>
                  )}
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
