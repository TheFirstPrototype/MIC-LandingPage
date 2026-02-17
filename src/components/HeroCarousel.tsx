import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Users, Handshake } from 'lucide-react';
import paula from '../paula.jpg'
const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const images = [
        {
            url: 'https://thefirstprototype.com/mic/pitch.jpg',
            title: '2026 Inventor\'s Summit',
            subtitle: 'Join Michigan\'s premier event for invention and creativity.'
        },
        {
            url: 'https://thefirstprototype.com/mic/event.jpg',
            title: 'Connecting Inventors',
            subtitle: 'Building a collaborative network for Michigan inventors.'
        },
        {
            url: paula,
            title: 'Empowering Ideas',
            subtitle: 'From concept to commercialization with expert guidance.'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#C6DA31] mb-4 drop-shadow-lg uppercase tracking-tight">
                            {img.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
                            {img.subtitle}
                        </p>
                        <Link
                            to="/summit"
                            className="bg-[#C6DA31] text-[#112E4A] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            Explore the Summit <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#C6DA31]' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};
export default HeroCarousel;
