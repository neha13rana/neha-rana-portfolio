import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowLeft } from 'lucide-react';

const TopmateSection = () => {
  const [iframeKey, setIframeKey] = useState(0);

  return (
    <section id="services" className="py-20 bg-gray-50/50 relative">
      <div className="section-container relative">
        <div className="flex flex-col items-center mb-10 animate-fade-in-up">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="section-title mb-0">Book a 1:1 Call</h2>
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center pt-2">
            Looking to accelerate your tech career, refine your startup strategy, or dive deeper into AI? 
            Let's connect for targeted <span className="font-semibold text-portfolio-purple">mentorship and actionable guidance</span>.
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8">
        <Card className="w-full overflow-hidden shadow-lg animate-fade-in-up relative" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-0 relative">
            {/* Overlay Back Button Floating on top of the iframe */}
            <button 
              onClick={() => setIframeKey(prev => prev + 1)}
              className="absolute top-[80px] left-4 md:top-[90px] md:left-6 p-2 text-gray-700 hover:text-portfolio-purple bg-white shadow-md border border-gray-100 rounded-full transition-all hover:scale-105 z-50 flex items-center justify-center animate-fade-in"
              aria-label="Go back to services list"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="w-full h-[500px] md:h-[680px] bg-white relative">
              {/* Optional fallback overlay while loading */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-50">
                <div className="flex flex-col items-center gap-2 text-portfolio-purple">
                  <Calendar className="animate-bounce" size={32} />
                  <span>Loading Booking Calendar...</span>
                </div>
              </div>
              <iframe
                key={iframeKey}
                src="https://pages.topmate.io/site.html?thread_id=56b2c8bc-adc0-4207-98ca-5f8a94ccb77f"
                className="w-full h-full border-0 z-10 relative bg-transparent"
                title="Book a call with Neha on Topmate"
                allow="camera; microphone"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TopmateSection;
