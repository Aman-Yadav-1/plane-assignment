import { useState } from "react";
import { Play } from "lucide-react";

export default function IntegrationCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    {
      platform: "Jira",
      description: "Jira Cloud. Jira Server. Jira Whatever. Just move to Plane in a few clicks. Facts.",
      platformIcon: "🔷",
      platformColor: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 via-purple-50 to-blue-100"
    },
    {
      platform: "Linear",
      description: "Bring all your data in Linear over to Plane and experience the exponential with less-their-opinion-more-your flexibility.",
      platformIcon: "⚡",
      platformColor: "from-purple-400 to-purple-600", 
      bgGradient: "from-purple-50 via-blue-50 to-purple-100"
    },
    {
      platform: "Asana",
      description: "Don't lose any of your data when you lose that uncomfortable asana for a totally flexible work pose.",
      platformIcon: "⚪",
      platformColor: "from-red-400 to-red-600",
      bgGradient: "from-pink-50 via-red-50 to-pink-100"
    },
  ];

  const handleSlideClick = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
  };

  const getSlidePosition = (index) => {
    const isActive = index === currentSlide;
    const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
    const isNext = index === (currentSlide + 1) % slides.length;
    
    if (isActive) return "center";
    if (isPrev) return "left";
    if (isNext) return "right";
    return null;
  };

  const getTransform = (position) => {
    switch (position) {
      case "center":
        return "translateX(0) scale(1)";
      case "left":
        return "translateX(-760px) scale(0.9)";
      case "right":
        return "translateX(760px) scale(0.9)";
      default:
        return "translateX(0) scale(0.5) translateY(100px)";
    }
  };

  const getOpacity = (position) => {
    switch (position) {
      case "center":
        return 1;
      case "left":
      case "right":
        return 0.6;
      default:
        return 0;
    }
  };

  const getZIndex = (position) => {
    switch (position) {
      case "center":
        return 30;
      case "left":
        return 20;
      case "right":
        return 20;
      default:
        return 10;
    }
  };

  // Custom Asana icon component
  const AsanaIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="3" fill="#f56565"/>
      <circle cx="7" cy="17" r="3" fill="#f56565"/>
      <circle cx="17" cy="17" r="3" fill="#f56565"/>
    </svg>
  );

  // Custom Plane icon component  
  const PlaneIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
      <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
      <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
      <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor"/>
    </svg>
  );

  return (
    <section className="pt-16 pb-40 mt-0 bg-white dark:bg-[#0A0A0A] overflow-hidden relative transition-colors duration-300">

        <div className="relative w-full max-w-6xl h-[580px] flex items-center justify-center overflow-hidden mx-auto">
          {slides.map((slide, index) => {
            const position = getSlidePosition(index);
            if (!position) return null;

            const isActive = position === "center";

            return (
              <div
                key={`${slide.platform}-${index}`}
                className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                style={{
                  transform: getTransform(position),
                  opacity: getOpacity(position),
                  zIndex: getZIndex(position),
                  width: "700px",
                  height: "560px",
                }}
                onClick={() => handleSlideClick(index)}
              >
                <div className={`
                  bg-white dark:bg-[#14151A] overflow-hidden h-full transition-all duration-700 rounded-3xl p-6
                  ${isActive ? 'border border-blue-300 dark:border-[#3F76FF]' : 'border border-gray-300 dark:border-gray-600'}
                  ${!isActive ? 'hover:scale-105 hover:border-blue-400 dark:hover:border-blue-400' : ''}
                `}>
                  {/* Video Preview Section */}
                  <div className={`relative bg-gradient-to-br ${slide.bgGradient} dark:bg-gradient-to-br dark:from-gray-800/50 dark:via-gray-700/30 dark:to-gray-800/50 h-80 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600`}>
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div 
                        className="w-full h-full"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(147, 197, 253, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(147, 197, 253, 0.3) 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px'
                        }}
                      />
                    </div>

                    {/* 3D Perspective Grid Floor */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
                      <div 
                        className="absolute inset-0 opacity-40"
                          style={{
                            backgroundImage: `
                              linear-gradient(rgba(147, 197, 253, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(147, 197, 253, 0.3) 1px, transparent 1px)
                            `,
                          backgroundSize: '30px 8px',
                          transform: 'perspective(200px) rotateX(60deg) translateY(20px)'
                        }}
                      />
                    </div>

                    {/* Integration Flow */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="flex items-center gap-8">
                        {/* Source Platform */}
                        <div className={`
                          w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center border-2 border-white/20 dark:border-gray-700/50
                          bg-gradient-to-br ${slide.platformColor}
                        `}>
                          {slide.platform === "Asana" ? (
                            <AsanaIcon size={32} />
                          ) : (
                            <div className="text-white text-2xl font-bold">
                              {slide.platform === "Jira" ? "🔷" : "⚡"}
                            </div>
                          )}
                        </div>

                        {/* Arrow */}
                        <div className="text-gray-400 dark:text-gray-500">
                          <svg 
                            width="32" 
                            height="32" 
                            viewBox="0 0 24 24" 
                            fill="none"
                            className="drop-shadow-sm"
                          >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>

                        {/* Plane Icon */}
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center border-2 border-white/20 dark:border-gray-700/50">
                          <PlaneIcon size={28} />
                        </div>
                      </div>
                    </div>

                    {/* Play Button */}
                    {isActive && (
                      <div className="absolute bottom-6 right-6">
                        <div className="w-10 h-10 bg-black/40 dark:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 hover:bg-black/60 dark:hover:bg-white/30 transition-all duration-300 cursor-pointer">
                          <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-4 mt-4">
                    {/* Platform Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-600
                        bg-gradient-to-br ${slide.platformColor}
                      `}>
                        {slide.platform === "Asana" ? (
                          <AsanaIcon size={16} />
                        ) : (
                          <div className="text-white text-sm font-bold">
                            {slide.platform === "Jira" ? "🔷" : "⚡"}
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {slide.platform}
                      </h3>
                    </div>

                    {/* Description */}
                    {isActive && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed animate-fade-in-up mt-2">
                        {slide.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.4s ease-out 0.2s both;
          }
        `}</style>
      </section>
    );
  }