
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface ServiceProps {
  title: string;
  description: string[];
  image: string;
  tools: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, image, tools }) => {
  return (
    <Card className=" card-hover relative pt-12 mt-12">
      {/* Floating image on top */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="bg-background rounded-full p-4 shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Tools & Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <div 
                key={i} 
                className="bg-secondary rounded-full p-1"
              >
                <img 
                  src={tool} 
                  alt="Tool" 
                  className="h-6 w-6 object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link
            to={`/contact?subject=Request for ${title}`}
            className="flex items-center gap-2 justify-center"
          >
            Request Service <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
