"use client";
import React from 'react';

const ContactFormSection = () => {
    // ফুটারের থিম অনুযায়ী সবুজ রং ব্যবহার করা হয়েছে: #8AA34C (হালকা সবুজ) এবং #28400F (গাঢ় সবুজ)

    return (
        <section className="py-16 md:py-24 bg-gray-100 font-lato">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="md:grid md:grid-cols-2">

                        {/* বাম দিক: ছবি/ভিজ্যুয়াল ব্লক (Left Side: Image/Visual Block) */}
                        <div className="relative h-64 md:h-full overflow-hidden">
                            <img
                                src="https://i.postimg.cc/nrmH5q5V/Whisk-ff3d2d90a789184a5e1486c5527b5762dr.jpg"
                                alt="Contact us visual - a person working with a laptop."
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x800/8AA34C/FFFFFF?text=Contact"; }}
                            />
                            {/* নান্দনিকতার জন্য ওভারলে (Overlay for aesthetic) */}
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white text-shadow-lg p-4 bg-black bg-opacity-30 rounded-lg">
                                    Let's Discuss Your Needs
                                </h2>
                            </div>
                        </div>

                        {/* ডান দিক: ফর্ম ব্লক (Right Side: Form Block) */}
                        <div className="p-8 md:p-12 lg:p-16">
                            <h3 className="text-3xl font-bold text-[#28400F] mb-6">Reach Out to TeamDev360</h3>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and one of our experts will get back to you within one business day.
                            </p>

                            <form className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#8AA34C] focus:border-[#8AA34C] transition duration-200"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@company.com"
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#8AA34C] focus:border-[#8AA34C] transition duration-200"
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#8AA34C] focus:border-[#8AA34C] transition duration-200"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Tell us about your outsourcing needs or question..."
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#8AA34C] focus:border-[#8AA34C] transition duration-200 resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full p-3 bg-[#8AA34C] text-white font-semibold rounded-lg shadow-md hover:bg-[#28400F] transition duration-300 transform hover:scale-[1.01]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
