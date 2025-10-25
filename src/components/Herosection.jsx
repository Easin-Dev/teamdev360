"use client";
import React, { useState, useEffect } from 'react';

// Main component, renamed to App for standalone execution
export default function App() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Need to outsource your software development team?",
            description: "We provide the developers you require for any programming language. Hire a single developer or a whole team with our flexible staff leasing and specialized services.",
            buttonText: "Get a Quote",
            hrefLink: "/contact-us",
            backgroundImage: "https://i.postimg.cc/LsB71tDx/Whisk-4ae7889325e62fc99fe4e4652885f855dr.jpg", // Outsourcing image
        },
        {
            title: "Proven and Experienced Managers to Lead Your Projects.",
            description: "We'll work with your team to optimize efficiency, productivity, and value delivery, employing various Agile methods and practices that work best for your chosen team.",
            buttonText: "Meet Our Leaders",
            hrefLink: "/who-we-are",
            backgroundImage: "https://i.postimg.cc/yd8f3wkg/Whisk-7661cb39b884a48bdbe41c17ae81daf2dr.jpg", // Managers image
        },
        {
            title: "Competent Software Developers for Any Tech Stack.",
            description: "With skillsets in Java, .Net, C#, PHP, and more. If we don't have the staff right away, we'll scour our network to deliver the right developer that you need.",
            buttonText: "View Developer Profiles",
            hrefLink: "/who-we-are",
            backgroundImage: "https://i.postimg.cc/8zdwK162/Whisk-aca690e675db8dd81f643732680936c6dr.jpg", // Developers image
        },
    ];

    // Auto-advance logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden shadow-2xl bg-gray-900">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    // --- FIX APPLIED HERE: Added pointer-events-none/auto and z-index control ---
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                                ${index === currentSlide
                            ? 'opacity-100 pointer-events-auto z-10'
                            : 'opacity-0 pointer-events-none z-0'
                        }`}
                    style={{
                        // Using linear-gradient for consistent dark overlay on images
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // Added animation for a subtle effect
                        animation: index === currentSlide ? 'zoomIn 6s linear infinite alternate' : 'none'
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-full text-center text-white p-6 max-w-5xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug tracking-tight font-sans">
                            {slide.title}
                        </h2>
                        <p className="text-lg sm:text-xl mb-10 opacity-90 font-light max-w-3xl">
                            {slide.description}
                        </p>
                        {/* Replaced Link with standard <a> tag */}
                        <a
                            href={slide.hrefLink}
                            className="px-8 py-3 bg-[#8AA34C] text-white font-bold text-lg rounded-full shadow-xl transition duration-300 transform 
                                       hover:scale-[1.02] hover:bg-[#6F833E] ring-4 ring-[#8AA34C] ring-offset-2 ring-offset-gray-900"
                            aria-label={slide.buttonText}
                        >
                            {slide.buttonText}
                        </a>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 rounded-full bg-white transition-all duration-300 shadow-md
                                    ${index === currentSlide ? 'w-8 bg-[#8AA34C]' : 'opacity-50 hover:bg-gray-300'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Custom CSS for the animation */}
            {/* FIX: Removed 'jsx' and 'global' attributes to resolve the React console warning */}
            <style>{`
                @keyframes zoomIn {
                    0% {
                        background-size: 105%;
                    }
                    100% {
                        background-size: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
