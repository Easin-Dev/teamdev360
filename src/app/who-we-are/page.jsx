"use client";
import React from 'react';

// Custom styles for elements that used non-Tailwind CSS in the original HTML
const customStyles = {
    // Replicating the custom green gradient background for the Management Team section
    managementBg: {
        background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
    },
    // LinkedIn SVG Icon Component (Inline definition for single-file mandate)
    LinkedInIcon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "20"} height={props.size || "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    ),
};

// Main App component
export default function App() {

    const { LinkedInIcon } = customStyles;

    return (
        <div className="text-gray-800 min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f7f7f7' }}>
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
                                {/* UPDATED LINKEDIN BUTTON */}
                                <a
                                    href="https://www.linkedin.com/in/markbenedictgonzales/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Mark Benedict Gonzales's LinkedIn Profile"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-lg"
                                >
                                    <LinkedInIcon />
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
                                {/* UPDATED LINKEDIN BUTTON */}
                                <a
                                    href="https://www.linkedin.com/in/mark-lemuel-bodino-6b2701194/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Mark Lemuel Bodino's LinkedIn Profile"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-lg"
                                >
                                    <LinkedInIcon />
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
                                {/* UPDATED LINKEDIN BUTTON */}
                                <a
                                    href="https://www.linkedin.com/in/jayson-mandal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Jayson Mandal's LinkedIn Profile"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-lg"
                                >
                                    <LinkedInIcon />
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Meet the Staff Section (Updated) */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet the Staff</h2>

                    {/* Grid layout matching the image's structure */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Staff Card - John */}
                        <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">John</h4>
                            <p className="text-sm text-green-700">Software Engineer</p>
                            <p className="text-xs text-gray-600">(JavaScript, C#, PHP, .Net)</p>
                        </div>

                        {/* Staff Card - Vina */}
                        <div className="bg-green-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Vina</h4>
                            <p className="text-sm text-green-700">Project Manager, Scrum Master, Power BI Developer, SQA Engineer</p>
                            <p className="text-xs text-gray-600"></p> {/* No specific skills listed in image */}
                        </div>

                        {/* Staff Card - Chris May */}
                        <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Chris May</h4>
                            <p className="text-sm text-green-700">Software Engineer</p>
                            <p className="text-xs text-gray-600">(.Net, C#, Entity Framework, SQL Server, etc.)</p>
                        </div>

                        {/* Staff Card - Jhoan */}
                        <div className="bg-green-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Jhoan</h4>
                            <p className="text-sm text-green-700">SQA Automation Engineer, PBI Developer</p>
                            <p className="text-xs text-gray-600">(Selenium, Cypress, C#, Power BI)</p>
                        </div>

                        {/* Staff Card - Harold */}
                        <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Harold</h4>
                            <p className="text-sm text-green-700">SQA Automation, Software Developer</p>
                            <p className="text-xs text-gray-600">(Robot Framework, Selenium, Cypress, C#, Python, Java, PHP, C++)</p>
                        </div>

                        {/* Staff Card - Grace */}
                        <div className="bg-green-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Grace</h4>
                            <p className="text-sm text-green-700">SQA Automation, Software Developer</p>
                            <p className="text-xs text-gray-600">(Cypress, Python, JavaScript)</p>
                        </div>

                        {/* Staff Card - Lois */}
                        <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Lois</h4>
                            <p className="text-sm text-green-700">SQA Automation, Software Developer</p>
                            <p className="text-xs text-gray-600">(Cypress, Selenium WebDriver, TestIM, JavaScript)</p>
                        </div>

                        {/* Staff Card - Gregory */}
                        <div className="bg-green-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Gregory</h4>
                            <p className="text-sm text-green-700">SQL Developer</p>
                            <p className="text-xs text-gray-600">(SQL, .NET, PHP, JavaScript, etc.)</p>
                        </div>

                        {/* Staff Card - Michael */}
                        <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Michael</h4>
                            <p className="text-sm text-green-700">Production Engineer</p>
                            <p className="text-xs text-gray-600">(C#, .NET, PHP, AngularJS, Angular2, SQL, jQuery, Java, React, etc.)</p>
                        </div>

                        {/* Staff Card - Kate */}
                        <div className="bg-green-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Kate</h4>
                            <p className="text-sm text-green-700">Business Service Bookkeeper</p>
                            <p className="text-xs text-gray-600">(Xero, QuickBooks, Dext Prepare, HubDoc)</p>
                        </div>

                        {/* Staff Card - Rose Anne */}
                        <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Rose Anne</h4>
                            <p className="text-sm text-green-700">Business Service Bookkeeper</p>
                            <p className="text-xs text-gray-600">(Xero, QuickBooks, Dext Prepare, HubDoc)</p>
                        </div>

                        {/* Staff Card - Maria */}
                        <div className="bg-green-200 p-4 rounded-lg shadow-md flex flex-col justify-center items-center h-40 text-center">
                            <h4 className="font-semibold text-gray-900 text-lg">Maria</h4>
                            <p className="text-sm text-green-700">Business Service Bookkeeper</p>
                            <p className="text-xs text-gray-600">(Xero, QuickBooks, Dext Prepare, HubDoc)</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
