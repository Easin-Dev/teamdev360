"use client";
import React from 'react';

// --- HowItWorksSection Component ---
const HowItWorksSection = () => {

    // Define the accent color from the previous component for consistency
    const ACCENT_COLOR = "#8AA34C";
    const LIGHT_GRAY = "#f3f4f6";

    // Process step data with custom SVG icons (line art, white on accent background)
    const steps = [
        {
            number: 1,
            title: "Assess Needs",
            description: "Define project scope, tech requirements, and team size.",
            icon: (
                // Icon 1: Measurement Tape (Assess required skill-sets)
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white">
                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V12H20C20 7.58172 16.4183 4 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: 2,
            title: "Talent Recruitment",
            description: "Rapid selection and presentation of qualified candidates.",
            icon: (
                // Icon 2: Group of People (Recruitment / Staff Selection)
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 21V19C21 18.0609 20.6313 17.1582 19.9749 16.5018C19.3185 15.8454 18.4158 15.4767 17.5 15.4767" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 15.4767C2.08419 15.4767 1.18153 15.8454 0.525126 16.5018C-0.131209 17.1582 -0.5 18.0609 -0.5 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.5 11C19.3284 11 20 10.3284 20 9.5C20 8.67157 19.3284 8 18.5 8C17.6716 8 17 8.67157 17 9.5C17 10.3284 17.6716 11 18.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.5 11C6.32843 11 7 10.3284 7 9.5C7 8.67157 6.32843 8 5.5 8C4.67157 8 4 8.67157 4 9.5C4 10.3284 4.67157 11 5.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: 3,
            title: "Team Initiation",
            description: "Final onboarding, tools setup, and goal alignment.",
            icon: (
                // Icon 3: Presentation/Training (Team Orientation)
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white">
                    <path d="M7 12V20H1V12H7ZM12 12V20H6V12H12ZM17 12V20H11V12H17ZM23 12V20H17V12H23Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2L16 6L14 7L12 3L10 7L8 6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2L16 6L14 7L12 3L10 7L8 6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 8L17 9L15 8L19 4L23 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 8L3 9L1 8L5 4L9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: 4,
            title: "Perform & Monitor",
            description: "Execution, regular quality checks, and performance reviews.",
            icon: (
                // Icon 4: Bar Chart (Daily updates, monitoring, reports)
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white">
                    <path d="M3 21V12C3 11.4477 3.44772 11 4 11H8C8.55228 11 9 11.4477 9 12V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 21V6C10 5.44772 10.4477 5 11 5H15C15.5523 5 16 5.44772 16 6V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 21V2C17 1.44772 17.4477 1 18 1H22C22.5523 1 23 1.44772 23 2V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 21H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <>
            {/* Custom styles for the required font and process line */}
            <style>
                {`
                    /* Import and use Lato font as requested */
                    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
                    
                    .font-lato {
                        font-family: 'Lato', sans-serif;
                    }

                    /* Custom styling for the horizontal line connecting steps (desktop only) */
                    @media (min-width: 768px) {
                        .process-line-desktop {
                            position: absolute;
                            top: 3.5rem; /* Center vertically relative to 16h circle */
                            left: 8%;
                            right: 8%;
                            height: 3px;
                            background-color: ${LIGHT_GRAY}; /* A light gray background line */
                            z-index: 0;
                        }
                    }
                    
                    /* Custom styling for the vertical line on mobile */
                    @media (max-width: 767px) {
                        .process-step:not(:last-child) {
                            position: relative;
                            margin-bottom: 2rem;
                            padding-bottom: 2rem;
                        }
                        .process-step:not(:last-child)::after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 3px;
                            height: 2rem;
                            background-color: ${LIGHT_GRAY}; /* Light gray vertical line */
                        }
                    }
                `}
            </style>

            <section className="py-16 md:py-24 bg-gray-100 font-lato">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
                        From Start to Finish: The Process Flow
                    </h2>

                    {/* Process Steps Container */}
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">

                        {/* Horizontal Line (Desktop only) */}
                        <div className="hidden md:block process-line-desktop"></div>

                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="process-step flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-xl z-10 transition duration-300 transform hover:scale-[1.03]"
                            >
                                {/* Step Icon Container */}
                                <div
                                    className="w-16 h-16 mb-4 flex items-center justify-center rounded-full text-white shadow-lg"
                                    style={{ backgroundColor: ACCENT_COLOR }} // Using accent color defined above
                                >
                                    {/* Render the new SVG icon */}
                                    {step.icon}
                                </div>

                                {/* Step Title */}
                                <h3 className="text-xl font-bold mb-2 text-gray-800">
                                    {step.title}
                                </h3>

                                {/* Step Description */}
                                <p className="text-gray-600 text-base max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorksSection;
