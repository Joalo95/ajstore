/* eslint-disable react/jsx-sort-props */
"use client";

import {useState, useEffect} from "react";

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "assets/banner1.jpg",
    "assets/banner2.jpg",
    "assets/banner3.jpg",
    "assets/banner4.jpg",
    "assets/banner5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos
    // eslint-disable-next-line padding-line-between-statements
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="object-fit relative h-full w-full overflow-hidden rounded-lg sm:h-96">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt=""
          className={`object-fit absolute h-full w-full transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

export default Hero;
