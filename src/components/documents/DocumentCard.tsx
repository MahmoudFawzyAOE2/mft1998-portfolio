import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, FileSpreadsheet, FileAxis3D, FileType, Presentation, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface DocumentProps {
  title: string;
  description: string;
  categories: string[];
  fileType: 'pdf' | 'xls' | 'doc' | 'ppt';
  driveUrl: string;
  date?: string;
}

const fileTypeConfig = {
  pdf: { icon: FileAxis3D , color: 'text-red-500' },
  xls: { icon: FileSpreadsheet, color: 'text-green-500' },
  doc: { icon: FileType, color: 'text-blue-500' },
  ppt: { icon: Presentation, color: 'text-orange-500' },
};

const DocumentCard: React.FC<DocumentProps> = ({ title, description, categories, fileType, driveUrl, date }) => {
  const { icon: FileIcon, color } = fileTypeConfig[fileType];
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <FileIcon className={`h-6 w-6 ${color}`} />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
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
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <Badge key={index} variant="secondary">{cat}</Badge>
          ))}
        </div>
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
