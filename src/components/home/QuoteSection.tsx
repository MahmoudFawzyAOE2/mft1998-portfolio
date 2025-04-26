
import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <blockquote className="text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium italic">
            "The Software's Guardian: Catching what others overlook."
          </p>
          <footer className="mt-4 text-lg text-primary-foreground/80">
            — My Testing Philosophy
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
