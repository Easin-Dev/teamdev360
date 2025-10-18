"use client";
import React, { useState } from 'react';

// NOTE: For the Lato font, ensure it is imported and configured in your main CSS/Tailwind setup.
// Example: @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
// And set the font-family in Tailwind config. For this mockup, we'll use font-sans.

// Hex Codes for Brand Colors:
// Main Green: #8AA34C
// Dark Green (Hover): #6F833E
// Light Gray: #F5F5F5

// NavLink component is updated to accept an 'href' prop for navigation
const NavLink = ({ href, children }) => (
    <a href={href} className="text-gray-600 hover:text-[#8AA34C] transition duration-200 block py-2 md:py-0 md:inline">
        {children}
    </a>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function for mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // 1. Header/Navigation
        <header className="shadow-sm bg-white sticky top-0 z-40 font-lato">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

                {/* Logo */}
                <a href="/" className="text-2xl font-bold flex items-center">
                    {/* Use the provided image link for the logo icon */}
                    <img
                        src="https://i.postimg.cc/xTSGNwkR/Team-Dev360-icon-transparent-bg.avif"
                        alt="TeamDev360 Logo"
                        className="h-8 w-auto"
                        // Fallback in case image fails to load (optional but good practice)
                        onError={(e) => { e.target.style.display = 'none'; }}
                    /><h1 className='text-gray-900'><span className='text-[#8AA34C]'>TeamDev</span>360</h1>
                </a>

                {/* Desktop Navigation - Updated with href links */}
                <nav className="hidden md:flex space-x-8">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="#outsourcing">Outsourcing & Staff Leasing</NavLink>
                    <NavLink href="#about">Who we are</NavLink>
                    <NavLink href="#solutions">Solutions</NavLink>
                    <NavLink href="/contact-us">Contact Us</NavLink>
                </nav>

                {/* CTA Button - Desktop */}
                <a href="#get-a-quote" className="hidden md:inline-flex px-4 py-2 bg-[#8AA34C] text-white font-medium rounded-lg hover:bg-[#6F833E] transition duration-300 shadow-md">
                    Get a Quote
                </a>

                {/* Mobile Menu Button (Hamburger Icon) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-[#F5F5F5] transition duration-200"
                    aria-label="Toggle mobile menu"
                >
                    {isMenuOpen ? (
                        // Close Icon (X)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu (Conditionally rendered) - Updated with href links */}
            <div
                className={`md:hidden bg-white px-4 pb-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <div className="flex flex-col space-y-1">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#outsourcing">Outsourcing & Staff Leasing</NavLink>
                    <NavLink href="#about">Who we are</NavLink>
                    <NavLink href="#solutions">Solutions</NavLink>
                    <NavLink href="#contact">Contact Us</NavLink>
                </div>
                <a href="#get-a-quote" className="block mt-4 text-center py-2 bg-[#8AA34C] text-white font-medium rounded-lg hover:bg-[#6F833E] transition duration-300 shadow-md">
                    Get a Quote
                </a>
            </div>
        </header>
    );
};

export default Header;

