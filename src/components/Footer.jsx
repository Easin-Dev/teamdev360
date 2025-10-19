"use client";
import React from 'react';

// TeamDev360 Footer Component
const AppFooter = () => {
    // Custom colors used:
    // bg-[#4C7C1F] - TeamDev360 Green (Main Footer BG)
    // bg-[#28400F] - TeamDev360 Dark Green (Button BG/Hover Text)
    // text-[#8AA34C] - TeamDev Text Color

    return (
        // Setting font globally. Note: Background color updated to bg-[#8AA34C] from previous iteration.
        <footer className="bg-[#8AA34C] text-white py-12 font-lato">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Email Signup Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-white border-opacity-30 pb-8 mb-8">
                    <h3 className="text-2xl font-semibold mb-4 md:mb-0">Stay Updated on Outsourcing Trends</h3>
                    <div className="w-full md:w-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your business email"
                            // Added bg-white as per user's current code
                            className="p-3 rounded-lg text-gray-900 w-full bg-white sm:w-80 focus:ring-2 focus:ring-[#28400F] focus:outline-none"
                        />
                        <button className="p-3 cursor-pointer bg-[#28400F] text-white font-medium rounded-lg hover:bg-gray-800 transition duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Main 4-Column Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info (Col 1) */}
                    <div>
                        <h4 className="sr-only">TeamDev360</h4>
                        {/* Logo Block - Updated for Black Text and Black Icon */}
                        <a href="#" className="text-2xl font-bold flex items-center">
                            <img
                                src="https://i.postimg.cc/xTSGNwkR/Team-Dev360-icon-transparent-bg.avif"
                                alt="TeamDev360 Logo"
                                className="h-8 w-auto"
                                style={{
                                    filter: 'invert(100%) grayscale(100%) brightness(50%)', // Makes the icon dark/black
                                    transition: 'filter 0.3s' // Smooth transition for visual effect
                                }}
                                onError={(e) => { e.target.style.display = 'none'; console.error('Logo image failed to load'); }}
                            />
                            {/* Changed text color to black #000000 */}
                            <h1 className='text-white'><span className='text-[#000000]'>TeamDev</span>360</h1>
                        </a>
                        <p className="text-sm text-gray-200 mt-4">
                            Your trusted partner for corporate outsourcing and remote staff leasing. Scaling your team, minimizing your risk.
                        </p>
                    </div>

                    {/* Quick Links (Col 2) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-200 hover:text-white transition duration-200">About Us</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition duration-200">Client Stories</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition duration-200">FAQ</a></li>
                            <li><a href="#" className="text-gray-200 hover:text-white transition duration-200">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact (Col 3) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-200">Email: mqonzales@teamdev360.com</li>
                            <li className="text-gray-200">Phone: +63 922 330 4391</li>
                            <li className="text-gray-200">Unit 3FB Romercial Bldg, Angeles City, Philippines 2009</li>
                        </ul>
                    </div>

                    {/* Social Media (Col 4) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            {/* LinkedIn */}
                            <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#28400F] transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" aria-label="Facebook" className="text-white hover:text-[#28400F] transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            {/* RSS */}
                            <a href="#" aria-label="RSS Feed" className="text-white hover:text-[#28400F] transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8zm0 5a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4zm0 5a2 2 0 0 1 2 2H4z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright (Moved to the bottom, outside the grid, to span full width like in the image) */}
                {/* NOTE: Removed the 'md:col-span-4' as it's outside the grid now */}
                <div className="mt-8 pt-6 border-t border-white border-opacity-30 text-center text-sm text-gray-200">
                    &copy; 2025 TeamDev360. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
