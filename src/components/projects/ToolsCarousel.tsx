import React from 'react';

interface ToolsCarouselProps {
  tools: string[];
}

const ToolsCarousel: React.FC<ToolsCarouselProps> = ({ tools }) => {
  return (
    <section className="py-12 bg-secondary overflow-hidden">
      <h3 className="text-center text-2xl font-bold mb-8">Technologies & Tools</h3>

      <div className="flex whitespace-nowrap">
        {/* First marquee loop */}
        <div className="animate-marquee flex">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center min-w-[64px] flex-shrink-0"
            >
              <div className="bg-background p-2 rounded-full">
                <img
                  src={tool}
                  alt={`Tool ${i + 1}`}
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${tool}`);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate marquee loop for continuous scroll effect */}
        <div className="animate-marquee flex" aria-hidden="true">
          {tools.map((tool, i) => (
            <div
              key={`duplicate-${i}`}
              className="mx-8 flex items-center justify-center min-w-[64px] flex-shrink-0"
            >
              <div className="bg-background p-2 rounded-full">
                <img
                  src={tool}
                  alt={`Tool ${i + 1}`}
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${tool}`);
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;
