import React, { useState, useEffect } from "react";

const slides = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VPXoNjQ8HMSEoO1MocRsIBnxtZm83zgQwA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6NM1fppR2pay5R8k54AnmyWdYk9WjtlpaA&s",
  "https://itseeze.com/_webedit/cached-images/3652-0-0-1892-10000-8108-1200.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQht2z55nrpk1cf8YbRXLudLYbm_aO2z5RVww&s"
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full relative overflow-hidden rounded-lg h-70">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item w-full transition-transform duration-700 ${index === current ? "translate-x-0" : "translate-x-full absolute"}`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="w-full object-cover" />
        </div>
      ))}

     
    </div>
  );
}
