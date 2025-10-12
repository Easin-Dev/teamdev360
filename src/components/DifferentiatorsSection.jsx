"use client";
import React from 'react';

// --- DifferentiatorsSection Component ---
const DifferentiatorsSection = () => {
    // Feature data defined with SVG path contents
    const features = [
        {
            title: "Modern Frameworks",
            description: "Strict adherence to modern software engineering standards.",
            icon: <><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></>
        },
        {
            title: "Global Locations",
            description: "Access to talent across multiple time zones for 24/7 coverage.",
            icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>
        },
        {
            title: "Elite Staffing",
            description: "Rigorous vetting ensures only the top 3% of talent is recruited.",
            icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
        },
        {
            title: "Operational Agility",
            description: "Quick scaling up or down to match your project's exact needs.",
            icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        },
        {
            title: "Transparent Pricing",
            description: "Clear, fixed rates with no hidden fees or surprise costs.",
            icon: <><path d="M12 20V10" /><path d="M18.4 4H5.6c-.92 0-1.6.86-1.6 1.76v12.48c0 .9.68 1.76 1.6 1.76h12.8c.92 0 1.6-.86 1.6-1.76V5.76c0-.9-.68-1.76-1.6-1.76z" /><circle cx="12" cy="15" r="3" /><path d="M12 12V4" /></>
        },
    ];

    // Note: The color used for td360-green is the same accent color used in the HeroSlider: #8AA34C
    const accentColor = "#8AA34C";

    return (
        <section className="py-16 md:py-24 bg-gray-50 font-lato">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">The TeamDev360 Edge</h2>
                <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto mb-16">
                    Five key differentiators that make us the ideal partner for scaling your technological future.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl text-center 
                                       transform hover:-translate-y-1 transition duration-300 border border-gray-100"
                        >
                            <div
                                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-opacity-10"
                                style={{ backgroundColor: `${accentColor}1A` }} // 1A is 10% opacity in hex
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    style={{ color: accentColor }}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {feature.icon}
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferentiatorsSection;
