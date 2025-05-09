
import React from 'react';

const InfiniteCarousel: React.FC = () => {
  const phrases = [
    "Quality is not an act, it's a habit",
    "Find the bugs before your users do",
    "Future partnerships in progress.",
    "Testing is about confidence, not perfection",
    "Quality assurance is a developer's best friend",
    "Trusted by future partners.",
    "Test early, test often, test smart",
    "Leave no bug unturned",
    "Quality is the best marketing strategy",
    "Opportunities await—let's connect!",
    "Testing is a journey, not a destination",
    "Quality is the best business plan",
    "Your software deserves the best",
    "Testing is the art of finding the unseen",
    "Testing is not just a phase, it's a mindset",
    "Testing is the key to customer satisfaction",
    "Testing is the bridge between development and success",    
    "Good quality means good business",
    "Automation is the key to scalable testing",
    "Quality is everyone's responsibility",
    "Ready to make an impact in software testing!"
  ];

  return (
    <>
    <style>
      {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 100s linear infinite; /* Change 20s to adjust speed */
        }
      `}
    </style>
    <section className="bg-background py-12 overflow-hidden border-y">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex">
          {phrases.map((phrase, i) => (
            <div key={i} className="mx-8 text-xl md:text-2xl font-medium">
              {phrase} <span className="text-primary mx-2">•</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex" aria-hidden="true">
          {phrases.map((phrase, i) => (
            <div key={i} className="mx-8 text-xl md:text-2xl font-medium">
              {phrase} <span className="text-primary mx-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default InfiniteCarousel;
