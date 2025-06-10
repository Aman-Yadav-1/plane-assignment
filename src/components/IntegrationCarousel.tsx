import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function IntegrationCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      platform: "Jira",
      description:
        "Jira Cloud. Jira Server. Jira Whatever. Just move to Plane in a few clicks. Facts.",
      video: "/placeholder-jira-video.jpg",
    },
    {
      platform: "Linear",
      description:
        "Seamlessly migrate from Linear to Plane with all your issues, projects, and team structure intact.",
      video: "/placeholder-linear-video.jpg",
    },
    {
      platform: "Asana",
      description:
        "Transform your Asana workspace into a powerful Plane environment in minutes, not hours.",
      video: "/placeholder-asana-video.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="relative">
          <div className="flex overflow-hidden rounded-2xl bg-white shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={slide.platform}
                className={`flex-shrink-0 w-full flex transition-transform duration-500 ease-in-out`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Video Preview */}
                <div className="w-3/5 relative">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center">
                    <div className="text-white text-xl">
                      {slide.platform} Import Demo
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-2/5 p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-plane-blue rounded-lg flex items-center justify-center text-white font-semibold mb-6">
                    {slide.platform.charAt(0)}
                  </div>

                  <h3 className="text-3xl font-semibold text-black mb-6">
                    {slide.platform}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-plane-blue" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
