
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CV_URL = 'https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/docs/Mahmoud%20Fawzy-CV-SoftwareTester%20.pdf';

const CV: React.FC = () => {
  return (
    <div className="py-18">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4 text-center">My Resume</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8 mx-auto text-center">
          View or download my latest resume below.
        </p>
        <div className="mb-8 flex justify-center">
          <Button asChild className="flex items-center w-fit">
            <a href={CV_URL} download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-border shadow-lg bg-card">
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(CV_URL)}&embedded=true`}
            className="w-full h-[80vh]"
            title="Resume PDF Viewer"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default CV;
