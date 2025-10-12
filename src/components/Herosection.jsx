"use client";
import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Need to outsource your software development team?",
            description: "We provide the developers you require for any programming language. Hire a single developer or a whole team with our flexible staff leasing and specialized services.",
            buttonText: "Get a Quote",
            backgroundImage: "https://i.postimg.cc/LsB71tDx/Whisk-4ae7889325e62fc99fe4e4652885f855dr.jpg", // Outsourcing image
        },
        {
            title: "Proven and Experienced Managers to Lead Your Projects.",
            description: "We'll work with your team to optimize efficiency, productivity, and value delivery, employing various Agile methods and practices that work best for your chosen team.",
            buttonText: "Meet Our Leaders",
            backgroundImage: "https://i.postimg.cc/yd8f3wkg/Whisk-7661cb39b884a48bdbe41c17ae81daf2dr.jpg", // Managers image
        },
        {
            title: "Competent Software Developers for Any Tech Stack.",
            description: "With skillsets in Java, .Net, C#, PHP, and more. If we don't have the staff right away, we'll scour our network to deliver the right developer that you need.",
            buttonText: "View Developer Profiles",
            backgroundImage: "https://i.postimg.cc/8zdwK162/Whisk-aca690e675db8dd81f643732680936c6dr.jpg", // Developers image
        },
    ];

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
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                                ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-full text-center text-white p-4 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight font-lato">
                            {slide.title}
                        </h2>
                        <p className="text-base md:text-xl mb-8 opacity-90 font-lato">
                            {slide.description}
                        </p>
                        <a
                            href="#"
                            className="px-6 py-3 bg-[#8AA34C] text-white font-semibold rounded-lg shadow-lg
                                         hover:bg-[#6F833E] transition duration-300 transform hover:scale-105 font-lato"
                        >
                            {slide.buttonText}
                        </a>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 rounded-full bg-white transition-all duration-300
                                     ${index === currentSlide ? 'w-8 bg-[#8AA34C]' : 'opacity-50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;