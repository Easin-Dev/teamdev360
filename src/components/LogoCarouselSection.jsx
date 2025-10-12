"use client";
import React from 'react';

// --- LogoCarouselSection Component ---
const LogoCarouselSection = () => {
    // Define the data for the two scrolling sections

    // Top Programming Languages - Using standard logo URLs and applying a grayscale filter
    const programmingLogos = [
        // Updated .NET logo URL as requested
        { name: ".NET", url: "https://static.wixstatic.com/media/d78fab_5aa78cde6d51488183ad3caad7b6a51e~mv2.png/v1/fill/w_188,h_188,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04%20Net.png" },
        // Updated C# to C/C++ and used the new provided link
        { name: "C/C++", url: "https://static.wixstatic.com/media/d78fab_ff45de44c7f141baafeac202a160f3d4~mv2.png/v1/fill/w_188,h_188,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/09%20C.png" },
        { name: "JavaScript", url: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "Python", url: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        // Updated PHP logo URL as requested
        { name: "PHP", url: "https://static.wixstatic.com/media/d78fab_31eeaf36520c4c83afbdcbe8cb81ac7e~mv2.png/v1/fill/w_188,h_188,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/06%20PHP.png" },
        { name: "HTML5", url: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: "Java", url: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
        // Updated Swift logo URL as requested
        { name: "Swift", url: "https://static.wixstatic.com/media/d78fab_534774e706be40879784a68ebdbf46a5~mv2.png/v1/fill/w_188,h_188,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/07%20Swift.png" },
        // Updated Kotlin logo URL as requested
        { name: "Kotlin", url: "https://static.wixstatic.com/media/d78fab_6adc09e1b5bd4a829b451a113920d46e~mv2.png/v1/fill/w_188,h_188,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/08%20Kotlin.png" },
    ];

    // Top Methodology and Project Frameworks
    const methodologyLogos = [
        { name: "Scrum Org", url: "https://cdn.worldvectorlogo.com/logos/scrumorg-1.svg" },
        { name: "Scrum Alliance", url: "https://cdn.worldvectorlogo.com/logos/scrum-alliance.svg" },
        { name: "LeSS", url: "https://less.works/less/less-logo-2x.png" },
        { name: "PMI", url: "https://cdn.worldvectorlogo.com/logos/pmi.svg" },
        { name: "SAFe", url: "https://cdn.worldvectorlogo.com/logos/safe-scaled-agile-framework.svg" },
        { name: "Kanban", url: "https://cdn.worldvectorlogo.com/logos/kanban-board.svg" }, // Added one more for better scroll effect
    ];

    // A utility component to render the scrolling track
    const ScrollingLogos = ({ logos, id, duration = '30s' }) => {
        // Duplicate the logos array to ensure seamless looping (LogoSet 1 + LogoSet 2)
        const logosToScroll = [...logos, ...logos];

        return (
            <div
                // Vertical margin is already minimal
                className="scrolling-container my-4 overflow-hidden relative group"
                style={{ height: '100px' }} // Fixed height for consistent look
            >
                {/* Custom CSS to define the scrolling animation */}
                <style>
                    {`
                        @keyframes scroll-x-${id} {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); } /* Scrolls exactly one set length */
                        }
                        .scrolling-track-${id} {
                            animation: scroll-x-${id} ${duration} linear infinite;
                            width: 200%; /* Twice the content width for seamless loop */
                        }
                        /* Pause animation on hover */
                        .group:hover .scrolling-track-${id} {
                            animation-play-state: paused;
                        }
                    `}
                </style>

                <div
                    className={`scrolling-track-${id} flex items-center h-full`}

                >
                    {logosToScroll.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            // Updated horizontal margins: mx-6 md:mx-10 lg:mx-12 -> mx-4 md:mx-6 lg:mx-8
                            className="flex-shrink-0 flex items-center justify-center h-full mx-4 md:mx-6 lg:mx-8"
                            // Width calculation: 100% / (logos.length * 2) * 100
                            style={{ width: `${100 / logos.length}%`, minWidth: '120px' }}
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="object-contain h-16 md:h-20 transition duration-300"
                                // The original image was monochrome/grayscale. We apply filters here.
                                style={{
                                    filter: 'grayscale(100%) contrast(1.1) brightness(0.5)',
                                    opacity: 0.8
                                }}
                                // Placeholder image on error
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/100x70/E5E7EB/A1A1AA?text=${logo.name}`;
                                    e.target.style.filter = 'none'; // Remove filter for placeholder
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        // Section padding is already minimal
        <section className="py-6 md:py-8 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. Top Programming Languages Section */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
                    Top Programming Languages
                </h2>
                {/* Margin under title is already minimal */}
                <div className="flex justify-center mb-4">
                    <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <ScrollingLogos logos={programmingLogos} id="prog" duration='40s' />

                {/* Separator Line */}
                {/* Margin around separator is already minimal */}
                <div className="my-8 flex justify-center">
                    <div className="w-full max-w-2xl border-t border-gray-200"></div>
                </div>

                {/* 2. Top Methodology and Project Framework Section */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
                    Top Methodology and Project Framework
                </h2>
                {/* Margin under title is already minimal */}
                <div className="flex justify-center mb-4">
                    <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <ScrollingLogos logos={methodologyLogos} id="method" duration='30s' />

            </div>
        </section>
    );
};

export default LogoCarouselSection;
