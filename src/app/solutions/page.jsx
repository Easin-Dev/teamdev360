"use client";
import React from 'react';

// Define the custom accent color for easy re-use
const ACCENT_COLOR = '#8AA34C';

// Custom reusable card component for Solutions/Clients
const SolutionCard = ({ title, url, description }) => (
    <a href={url} target="_blank" rel="noopener noreferrer"
        className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 min-h-[140px]">
        <h3 className="text-xl font-semibold mb-2" style={{ color: ACCENT_COLOR }}>{title}</h3>
        {description && <p className="text-sm text-gray-500 mb-2">{description}</p>}
        {/* URL link remains blue for visual differentiation */}
        <p className="text-xs text-blue-500 truncate">{url.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')}</p>
    </a>
);

// Main App component
export default function App() {

    const outsourcingClients = [
        { title: "BlueTread Software Development", url: "https://www.bluetread.com/" },
        { title: "SMB Tomorrow Consulting Services", url: "https://www.smbtomorrowconsulting.com.au" },
        { title: "Bonafide Medical Group, LLC", url: "https://www.bonafide.com/" },
        { title: "Sleep Solutions & Services (S3 Resupply)", url: "https://www.s3sleepcoach.com/" },
        { title: "WellSky Corporation", url: "https://wellsky.com/" },
        { title: "AlpCast", url: "https://www.alpcast.com/" },
    ];

    const developmentProducts = [
        {
            title: "PaperLessify",
            description: "A paperless medical records system for doctors. Powered by TeamDev360.",
            url: "#"
        },
    ];

    const itSupport = [
        {
            title: "NRJW Trading",
            description: "Product line and infrastructure support.",
            url: "#" // Assuming no external link for Product line
        },
    ];

    return (
        <div className="text-gray-800 min-h-screen antialiased" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f8fafc' }}>

            <main className="pt-16 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Header */}
                <header className="mb-20 text-center">
                    <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Our <span style={{ color: ACCENT_COLOR }}>Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-4xl mx-auto">
                        Delivering innovative and reliable solutions across various sectors, from outsourced development to proprietary products and robust IT support.
                    </p>
                </header>

                {/* Outsourcing Clients Section */}
                <section className="mb-24">
                    <div className="flex items-center justify-center mb-10">
                        {/* Icon for Outsourcing */}
                        <svg className="w-10 h-10 mr-4" style={{ color: ACCENT_COLOR }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.049-8.775-2.745M21 13.255v2.859a2 2 0 01-2.522 1.935l-7.468-1.571a2 2 0 00-1.884 0l-7.468 1.571A2 2 0 013 16.114v-2.859m18 0a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0H3"></path></svg>
                        <h2 className="text-4xl font-bold text-gray-900">Outsourcing Clients</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {outsourcingClients.map((client, index) => (
                            <SolutionCard
                                key={index}
                                title={client.title}
                                url={client.url}
                                description="Software Development Partnership"
                            />
                        ))}
                    </div>
                </section>

                {/* Development Product Section */}
                <section className="mb-24 p-12 rounded-3xl bg-white shadow-2xl border border-gray-200">
                    <div className="flex items-center justify-center mb-10">
                        {/* Icon for Development */}
                        <svg className="w-10 h-10 mr-4" style={{ color: ACCENT_COLOR }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        <h2 className="text-4xl font-bold text-gray-900">Development Product</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-xl mx-auto">
                        {developmentProducts.map((product, index) => (
                            <SolutionCard
                                key={index}
                                title={product.title}
                                url={product.url}
                                description={product.description}
                            />
                        ))}
                    </div>
                </section>

                {/* IT Support Section */}
                <section className="mb-20">
                    <div className="flex items-center justify-center mb-10">
                        {/* Icon for IT Support */}
                        <svg className="w-10 h-10 mr-4" style={{ color: ACCENT_COLOR }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h2 className="text-4xl font-bold text-gray-900">IT Support</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-xl mx-auto">
                        {itSupport.map((support, index) => (
                            <SolutionCard
                                key={index}
                                title={support.title}
                                url={support.url}
                                description={support.description}
                            />
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}
