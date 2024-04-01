"use client";

import { useState, useEffect } from 'react';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = ['assets/banner1.jpg', 'assets/banner2.jpg', 'assets/banner3.jpg', 'assets/banner4.jpg', 'assets/banner5.jpg'];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % images.length);
        }, 5000); // Cambia la imagen cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg object-fit sm:h-96">
            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt=""
                    className={`absolute w-full h-full object-fit transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
    );
};

export default Hero;
