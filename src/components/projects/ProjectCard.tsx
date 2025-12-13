
import React from 'react';
import { Award, Calendar, Gamepad, Gamepad2Icon, Github, Link, LucideGamepad, LucideGamepad2, Presentation, Rocket, RockingChair, RussianRuble, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '../ui/badge';

export interface ProjectProps {
  title: string;
  type: string;
  description: string[];
  image: string;
  date: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, type, description, image, date, githubUrl }) => {    
  return (
    <Card className="card-hover overflow-hidden">
      <div className="card-hover bg-sky-50 rounded-lg overflow-hidden shadow-md aspect-[2/1] flex items-center justify-center ">
        <img
          src={image}
          alt={title}
          className="h-full object-contain gap-2 p-8"
        />
      </div>
      <CardHeader>
      <CardTitle>{title}</CardTitle>
      <div className="flex justify-between items-start gap-1">
        <div>
          {type.includes("real")? (
        <Badge variant="default" className="inline-flex items-center gap-1 text-sm">
          <Rocket className="h-4 w-4"  />
            Real Product
        </Badge> 
          ) : type.includes("demo")? (
        <Badge variant="default" className="inline-flex items-center gap-1 text-sm">
          <Presentation className="h-4 w-4" />
            Demo Project
        </Badge> 
          ) : (
        <Badge variant="default" className="inline-flex items-center gap-1 text-sm">
          <Star className="h-4 w-4" />
            Amazing Project
        </Badge> 
          )}   
          </div>     
        <div className="text-right">
          <Badge variant="default" className="inline-flex items-center gap-1 text-muted-foreground italic text-sm bg-secondary/50 ">
          <Calendar className="h-4 w-4" />
            {date}
        </Badge> 
        </div>
      </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-2 space-y-1 text-muted-foreground">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
  {!githubUrl.includes("https")? ( // Invalid URL
      <Button disabled className="flex items-center gap-2 cursor-not-allowed opacity-60">
      <a
      
      target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2">
        Not Yet Available
      </a>
    </Button>
  ) : githubUrl.includes("github.com")? ( // GitHub URL
    <Button asChild>
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        {githubUrl.includes("github.com") && <Github className="h-4 w-4" />}
        View on GitHub
      </a>
    </Button>
  ):( // Otherwise
        <Button>
      <a
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2">
        {<Link className="h-4 w-4" />}View Project
      </a>
    </Button>
  )}
</CardFooter>
    </Card>
  );
};

export default ProjectCard;
