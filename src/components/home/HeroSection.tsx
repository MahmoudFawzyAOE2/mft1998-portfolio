
import React from 'react';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-background">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hello, I'm <p className="text-primary">Mahmoud Fawzy</p>
            </h1>
            <p className="text-3xl font-semibold mb-4">
            Software Tester
            </p>
            <p className="text-xl text-muted-foreground mb-8">
            I help companies build better software by making sure everything works smoothly through smart testing, automation, and quality checks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/cv" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" /> View Resume
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/docs/Mahmoud%20Fawzy-CV-SoftwareTester%20.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
<div className="md:pl-8 animate-fade-in">
  <div className="relative w-[80%] max-w-[320px] mx-auto">

    {/* Blurred glow behind the image */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/40 to-blue-600/40 blur-2xl rounded-2xl"></div>

    {/* Gradient border frame */}
    <div className="p-[3px] rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl">
      <div className="rounded-xl overflow-hidden">
        <img
          src="https://raw.githubusercontent.com/MahmoudFawzyAOE2/mft1998-portfolio/refs/heads/main/images/MFT_Pic.webp"
          alt="Software testing professional"
          className="w-full h-auto"
          onError={(e) => {
            console.error('Failed to load profile image');
            e.currentTarget.src = "/mft1998-portfolio/placeholder.svg";
          }}
        />
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
