"use client";
import React from 'react';

// Custom styles for elements that used non-Tailwind CSS in the original HTML
const customStyles = {
    // Replicating the custom green gradient background for the Management Team section
    managementBg: {
        background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
    },
};

// Main App component
export default function App() {
    return (
        <div className="text-gray-800 min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f7f7f7' }}>
            {/* * NOTE: The Navbar (Header) has been removed as requested. 
            * The page now starts directly with the main content.
            */}
            
            {/* Main Content Section */}
            <main className="pt-12 pb-24">
                
                {/* About Us Section */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-gray-900">About Us</h1>
                    
                    <div className="bg-white p-8 sm:p-12 rounded-xl shadow-xl">
                        <h2 className="text-3xl font-bold mb-6 text-green-700 border-b pb-2">My Team: At a Glance</h2>
                        <p className="text-lg leading-relaxed mb-6 text-gray-700">We are a highly motivated and expert team, committed to providing innovative solutions. For the past five years, we have been working to help clients achieve their goals. We believe our dedicated staff and customer-centric attitude are the key to our success.</p>
                        <p className="text-lg leading-relaxed text-gray-700">Our team members are experts in various fields and each is highly attentive to their work. We do more than just complete tasks—we create solutions that add long-term value. Working with us will give you the confidence that your project is in safe hands.</p>
                    </div>
                </section>

                {/* Mission and Core Values Section */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Mission and Core Values</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        
                        {/* Mission */}
                        <div className="bg-white p-8 rounded-xl shadow-xl">
                            <h3 className="text-2xl font-semibold mb-4 text-red-600 border-b pb-2">Mission</h3>
                            <p className="text-gray-700 leading-relaxed">To create maximum value for our clients through innovative strategies and continuous quality, and to help their businesses reach new heights. We aim to establish ourselves as a trustworthy and reliable partner.</p>
                        </div>
                        
                        {/* Core Values */}
                        <div className="bg-white p-8 rounded-xl shadow-xl">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b pb-2">Core Values</h3>
                            <ul className="space-y-3 text-gray-700 list-inside">
                                <li className="flex items-start">
                                    <span className="font-bold text-green-600 mr-2">•</span>
                                    <span className="flex-1"><strong>Customer-Centricity:</strong> Prioritizing customer needs in every decision.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-green-600 mr-2">•</span>
                                    <span className="flex-1"><strong>Integrity:</strong> Maintaining transparency and ethical standards in all our work.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-green-600 mr-2">•</span>
                                    <span className="flex-1"><strong>Innovation:</strong> Constantly seeking new and improved solutions.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-green-600 mr-2">•</span>
                                    <span className="flex-1"><strong>Accountability:</strong> Being responsible for our work and towards society.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Management Team Section */}
                <section className="py-16" style={customStyles.managementBg}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-center mb-12 text-white">Management Team</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            {/* Team Member Card 1 - Mark Benedict Gonzales */}
                            <div className="bg-white p-6 rounded-xl text-center shadow-xl">
                                <img 
                                    src="https://static.wixstatic.com/media/d78fab_a3c0937390224e7bba28a814e8a8b08a~mv2.jpg/v1/fill/w_192,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mark.jpg" 
                                    alt="Mark Benedict Gonzales's professional photo" 
                                    className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-green-500" 
                                />
                                <h3 className="text-xl font-bold text-gray-900">Mark Benedict Gonzales</h3>
                                <p className="text-sm font-semibold text-green-600 mb-4">Project Manager & Co-Founder</p>
                                <p className="text-gray-700 text-sm mb-4">With over 10 years of experience, Mark is a master at successfully managing complex projects. He is highly skilled in team leadership.</p>
                                <a href="https://www.linkedin.com/in/markbenedictgonzales/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </div>

                            {/* Team Member Card 2 - Mark Lemuel Bodino */}
                            <div className="bg-white p-6 rounded-xl text-center shadow-xl">
                                <img 
                                    src="https://static.wixstatic.com/media/d78fab_bad100ebb69c4e7f8c83004dca4ed7bd~mv2.jpg/v1/crop/x_0,y_18,w_709,h_956/fill/w_184,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Budz%20cropped_edited.jpg" 
                                    alt="Mark Lemuel Bodino's professional photo" 
                                    className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-green-500" 
                                />
                                <h3 className="text-xl font-bold text-gray-900">Mark Lemuel Bodino</h3>
                                <p className="text-sm font-semibold text-green-600 mb-4">Technical Lead</p>
                                <p className="text-gray-700 text-sm mb-4">Mark specializes in cutting-edge technology and leads all our technical solutions. He is uncompromising on code quality.</p>
                                <a href="https://www.linkedin.com/in/mark-lemuel-bodino-6b2701194/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </div>
                            
                            {/* Team Member Card 3 - Jayson Mandal */}
                            <div className="bg-white p-6 rounded-xl text-center shadow-xl">
                                <img 
                                    src="https://static.wixstatic.com/media/d78fab_26df085c559944ad84d2d785eb60c391~mv2.jpg/v1/crop/x_13,y_0,w_388,h_531/fill/w_184,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shemong%20Passport%20Size.jpg" 
                                    alt="Jayson Mandal's professional photo" 
                                    className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-green-500" 
                                />
                                <h3 className="text-xl font-bold text-gray-900">Jayson Mandal</h3>
                                <p className="text-sm font-semibold text-green-600 mb-4">Head of Operations</p>
                                <p className="text-gray-700 text-sm mb-4">Jayson handles client relationships and internal operations, ensuring everything runs smoothly.</p>
                                <a href="https://www.linkedin.com/in/jayson-mandal/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Meet the Staff Section (Unchanged) */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet the Staff</h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        
                        {/* Staff Card 1 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-900">Nusrat Jahan</h4>
                            <p className="text-sm text-green-700">Junior Developer</p>
                        </div>

                        {/* Staff Card 2 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-900">Asif Iqbal</h4>
                            <p className="text-sm text-green-700">UX/UI Designer</p>
                        </div>
                        
                        {/* Staff Card 3 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-900">Fariha Rahman</h4>
                            <p className="text-sm text-green-700">Business Analyst</p>
                        </div>

                        {/* Staff Card 4 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-900">Zahid Hossain</h4>
                            <p className="text-sm text-green-700">Software Architect</p>
                        </div>
                        
                        {/* Staff Card 5 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-900">Priyanka Sen</h4>
                            <p className="text-sm text-green-700">QA Engineer</p>
                        </div>

                        {/* Staff Card 6 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-900">Tanmoy Mitra</h4>
                            <p className="text-sm text-green-700">Front-End Developer</p>
                        </div>

                        {/* Staff Card 7 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-900">Tania Sultana</h4>
                            <p className="text-sm text-green-700">HR Specialist</p>
                        </div>
                        
                        {/* Staff Card 8 */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-900">Imran Sheikh</h4>
                            <p className="text-sm text-green-700">Network Admin</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

