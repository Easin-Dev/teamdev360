"use client";
import React from 'react';

// --- WhyOutsourcingSection Component ---
const WhyOutsourcingSection = () => {

    // Accent colors
    const accentColor = "#8AA34C"; // Main green color (Olive Green)
    const secondaryColor = "#A3B86F"; // Lighter shade for highlights

    // Feature data
    const reasons = [
        {
            title: "Company Growth",
            // Translated description from Bengali: "Focus on your business's core functions and scale quickly with the help of a strong remote team."
            description: "Focus on your business's core functions and scale quickly with the help of a strong remote team.",
            icon: (
                // Icon 1: Company Growth (Bar Chart and Arrow)
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="10 10 180 180" viewBox="10 10 180 180" height="200" width="200" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
                    <g>
                        {/* Bars and base */}
                        <path d="M64.783 190v-43.043a3.913 3.913 0 0 0-3.913-3.913H29.565a3.913 3.913 0 0 0-3.913 3.913V190h7.826v-39.13h23.478V190h7.827z" fill={accentColor}></path>
                        <path d="M119.565 190v-74.348a3.913 3.913 0 0 0-3.913-3.913H84.348a3.913 3.913 0 0 0-3.913 3.913V190h7.826v-70.435h23.478V190h7.826z" fill={accentColor}></path>
                        <path d="M174.348 190V76.522a3.913 3.913 0 0 0-3.913-3.913H139.13a3.913 3.913 0 0 0-3.913 3.913V190h7.826V80.435h23.478V190h7.827z" fill={accentColor}></path>
                        <path fill={accentColor} d="M190 182.174V190H10v-7.826h180z"></path>

                        {/* Arrow/Growth Line */}
                        <path d="M126.077 42.087l7.043 16.435 7.043-3.13-12.522-28.957-28.955 12.521 3.13 7.043 16.435-7.043c-9.391 21.13-21.913 38.348-38.348 52.435-10.957 9.391-23.478 16.435-35.217 21.913L32.947 118c-2.348.783-3.13.783-3.913 1.565l-3.913.783 1.565 7.826 3.913-.783c.783 0 2.348-.783 4.696-1.565 3.913-1.565 7.826-2.348 12.522-4.696 12.522-5.478 25.826-13.304 37.565-23.478 17.217-14.869 30.521-32.869 40.695-55.565z" fill={accentColor}></path>

                        {/* Small Top element */}
                        <path d="M56.957 65.565c3.913-.783 7.826-3.13 9.391-7.043 3.913-8.609 0-14.087-8.609-18.783-.783-.783 0-3.913-1.565s-3.13-1.565-3.913-2.348c-4.696-2.348-6.261-4.696-4.696-7.826 2.348-3.913 10.957-3.913 14.087-1.565l3.13 2.348 4.696-6.261L64 19.391l-7.043-2.348V10H49.13v7.043c-4.696.783-8.609 3.13-10.957 7.826-3.913 8.609 0 14.087 8.609 18.783 1.565.783.783.783 3.913 2.348s3.13 1.565 3.913 1.565c5.478 2.348 6.261 4.696 4.696 7.826-1.565 3.913-10.957 3.913-14.087 1.565l-3.13-2.348-4.696 6.261 3.13 2.348c2.348 1.565 5.478 2.348 8.609 3.13v6.261h7.826v-7.043z" fill={accentColor}></path>
                    </g>
                </svg>
            )
        },
        {
            title: "Cost Savings",
            description: "For most countries, you'll pay 70% less on labor cost and taxes.",
            icon: (
                // Icon 2: Cost Savings (Banknotes)
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="47 61 105.999 78" viewBox="47 61 105.999 78" height="200" width="200" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
                    <g>
                        {/* Main note body and outlines */}
                        <path d="M149.731 139H50.269c-1.806 0-3.269-1.452-3.269-3.243V81.204c0-1.791 1.464-3.243 3.269-3.243h99.461c1.806 0 3.269 1.452 3.269 3.243v54.553c.001 1.791-1.463 3.243-3.268 3.243zm-96.192-6.486h92.922V84.447H53.539v48.067z" fill={accentColor}></path>
                        <path fill={accentColor} d="M104.15 108.48c0 2.274-1.858 4.117-4.15 4.117-2.292 0-4.15-1.843-4.15-4.117s1.858-4.117 4.15-4.117c2.292 0 4.15 1.843 4.15 4.117z"></path>
                        <path d="M140.472 73.037H59.528a2.014 2.014 0 0 1-2.022-2.006c0-1.108.905-2.006 2.022-2.006h80.944c1.117 0 2.022.898 2.022 2.006a2.014 2.014 0 0 1-2.022 2.006z" fill={accentColor}></path>
                        <path d="M129.685 65.012h-59.37c-1.117 0-2.022-.898-2.022-2.006S69.197 61 70.315 61h59.371c1.117 0 2.022.898 2.022 2.006s-.905 2.006-2.023 2.006z" fill={accentColor}></path>
                        <path fill={accentColor} d="M74.849 109.201c0 3.329-2.72 6.027-6.076 6.027-3.356 0-6.076-2.698-6.076-6.027s2.72-6.027 6.076-6.027c3.356 0 6.076 2.698 6.076 6.027z"></path>
                        <path fill={accentColor} d="M136.872 109.201c0 3.329-2.72 6.027-6.076 6.027-3.356 0-6.076-2.698-6.076-6.027s2.72-6.027 6.076-6.027c3.356 0 6.076 2.698 6.076 6.027z"></path>

                        {/* Central circular detail */}
                        <path fill={secondaryColor} d="M117.474 108.48c0 9.573-7.823 17.334-17.474 17.334-9.65 0-17.474-7.76-17.474-17.334 0-9.573 7.823-17.334 17.474-17.334 9.65 0 17.474 7.76 17.474 17.334z"></path>
                    </g>
                </svg>
            )
        },
        {
            title: "Talent Access",
            description: "The Philippines has an enormous talent pool.",
            icon: (
                // Icon 3: Talent Access (People Silhouettes)
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="21.843 32.157 156.313 135.686" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="21.843 32.157 156.313 135.686" role="presentation" aria-hidden="true">
                    <g>
                        {/* Main body of figures */}
                        <path fill={accentColor} d="M137.337 99.445c-14.252 0-26.578 4.431-33.854 11.295v-5.713c0-14.588-17.93-26.015-40.82-26.015s-40.82 11.427-40.82 26.015v39.729l10.668 1.106a291.66 291.66 0 0 0 30.049 1.549c9.792 0 19.589-.491 29.315-1.474l4.641-.469v19.719l10.613 1.102a291.794 291.794 0 0 0 30.097 1.554c9.778 0 19.559-.49 29.269-1.47l11.661-1.177v-39.737c.001-14.587-17.929-26.014-40.819-26.014zm-40.856 38.989l-5.309.536c-2.3.232-4.605.433-6.912.609v-25.966h-2.546v26.133a285.175 285.175 0 0 1-38.104.011v-26.144h-2.546v25.978a284.205 284.205 0 0 1-7.832-.695l-4.388-.454v-33.416c0-10.306 15.486-19.013 33.818-19.013S96.48 94.72 96.48 105.026v33.408zm74.674 20.432l-5.361.54c-2.283.231-4.57.429-6.859.604v-26.207h-2.546v26.375a285.343 285.343 0 0 1-38.104.012v-26.387h-2.546v26.221a280.505 280.505 0 0 1-7.887-.7l-4.333-.449v-33.416c0-10.306 15.486-19.012 33.818-19.012s33.818 8.706 33.818 19.012v33.407z"></path>

                        {/* Heads */}
                        <path fill={accentColor} d="M137.337 94.011c11.447 0 20.76-9.312 20.76-20.76s-9.313-20.76-20.76-20.76-20.76 9.312-20.76 20.76 9.313 20.76 20.76 20.76zm0-34.517c7.586 0 13.758 6.172 13.758 13.758s-6.171 13.758-13.758 13.758-13.758-6.172-13.758-13.758 6.171-13.758 13.758-13.758z"></path>
                        <path fill={accentColor} d="M62.663 73.677c11.447 0 20.76-9.312 20.76-20.76s-9.313-20.76-20.76-20.76-20.76 9.312-20.76 20.76 9.313 20.76 20.76 20.76zm0-34.517c7.586 0 13.758 6.172 13.758 13.758S70.25 66.675 62.663 66.675s-13.758-6.172-13.758-13.758S55.077 39.16 62.663 39.16z"></path>
                    </g>
                </svg>
            )
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white font-lato">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
                    Why Outsourcing or Staff Leasing make sense?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="text-center p-6 border border-gray-100 rounded-xl shadow-lg 
                                       hover:shadow-2xl hover:border-green-300 transition duration-300 
                                       transform hover:scale-[1.03] cursor-pointer bg-white"
                        >

                            {/* Icon Container */}
                            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                                {/* Direct SVG rendering */}
                                {reason.icon}
                            </div>

                            {/* Feature Title */}
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h3>

                            {/* Description */}
                            {reason.description && (
                                <p className="text-lg text-gray-600 max-w-xs mx-auto">
                                    {reason.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyOutsourcingSection;
