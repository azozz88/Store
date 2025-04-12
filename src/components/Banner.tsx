
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "أحدث الإلكترونيات",
    description: "تسوق أحدث المنتجات التقنية بخصومات حصرية",
    image: "/placeholder.svg",
    link: "/products",
  },
  {
    id: 2,
    title: "تشكيلة الموسم الجديدة",
    description: "اكتشف أحدث صيحات الموضة والأزياء",
    image: "/placeholder.svg",
    link: "/products",
  },
  {
    id: 3,
    title: "ديكورات منزلية فاخرة",
    description: "أضف لمستك الخاصة مع تشكيلتنا من الديكورات المنزلية",
    image: "/placeholder.svg",
    link: "/products",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl mb-8">
      {/* Slides */}
      <div className="h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent flex flex-col justify-center px-8 md:px-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{slide.title}</h2>
              <p className="text-lg text-white/90 mb-6 max-w-md">{slide.description}</p>
              <div>
                <Button size="lg" asChild>
                  <a href={slide.link}>تسوق الآن</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
        onClick={goToPrevSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
        onClick={goToNextSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
