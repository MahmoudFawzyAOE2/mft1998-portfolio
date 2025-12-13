import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface DocumentProps {
  title: string;
  description: string;
  category: string;
  driveUrl: string;
  date?: string;
}

const DocumentCard: React.FC<DocumentProps> = ({ title, description, category, driveUrl, date }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <Badge variant="secondary" className="mt-1">{category}</Badge>
            </div>
          </div>
          {date && (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              {date}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
        <Button 
          asChild 
          className="w-full gap-2"
          variant="default"
        >
          <a href={driveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            View Document
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DocumentCard;
