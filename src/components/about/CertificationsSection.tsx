import React from 'react';
import { Award, Calendar, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Certification = {
  certificateName: string;
  date: string;
  credentialId: string;
  image: string;
};

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section className="h-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
      
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="card-hover overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
                <div className="card-hover bg-sky-50 rounded-lg overflow-hidden aspect-[1.5/1] flex items-center justify-center p-4">
                  <img 
                    src={cert.image} 
                    alt={cert.certificateName} 
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Certificate';
                    }}
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      {cert.certificateName}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">Issued: {cert.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CreditCard className="h-4 w-4" />
                      <span className="text-sm font-medium">ID: {cert.credentialId}</span>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="inline-flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    Verified Certification
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;