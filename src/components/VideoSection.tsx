import React, { useRef, useEffect, useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current && !isPlaying) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
            setShowPlayButton(false);
          }).catch(error => {
            console.error("Video autoplay failed:", error);
            // Keep play button visible if autoplay fails
          });
        } else if (!entry.isIntersecting && videoRef.current && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isPlaying]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      }).catch(error => {
        console.error("Video play failed:", error);
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-12 px-4 bg-gradient-to-b from-blue-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl animate-fade-in-up">
          <div className="w-full h-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
              loop
              poster="https://main-website.sgp1.cdn.digitaloceanspaces.com/journey-to-psle-bootcamp-bundles/c9bd57da-c8ee-4e55-981a-c3def0189823.png"
            >
              <source 
                src="https://main-website.sgp1.cdn.digitaloceanspaces.com/journey-to-psle-bootcamp-bundles/videos/2025%20PSLE%20Bootcamp%20Highlight+Testimonial_v3.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
            
            {showPlayButton && (
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-500/10 flex items-center justify-center cursor-pointer"
                onClick={handlePlayClick}
              >
                <button 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  <Play className="h-6 w-6 md:h-8 md:w-8 text-educational-blue ml-1 group-hover:text-blue-600" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
