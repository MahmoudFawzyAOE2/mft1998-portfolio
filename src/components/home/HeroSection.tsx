
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-background">
      <div className="section-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hello, I'm <p className="text-primary">Mahmoud Fawzy</p>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
            I help companies build better software by making sure everything works smoothly through smart testing, automation, and quality checks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex items-center gap-2">
                <a href="/docs/Mahmoud Fawzy-CV-SoftwareTester 4-25.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="md:pl-8 animate-fade-in">
            <div
              className="relative rounded-xl overflow-hidden shadow-xl justify-center items-center flex mx-auto"
              style={{ width: '80%', maxWidth: '300px', height: 'auto' }}
            >
              <img
                src="/images/MFT_Pic.webp"
                alt="Software testing professional"
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
