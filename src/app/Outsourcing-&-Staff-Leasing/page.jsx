import React from 'react';

// New component for the Outsourcing content
const OutsourcingInfo = () => (
    <section id="outsourcing" className="bg-[#F5F5F5] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-base font-semibold text-[#8AA34C] tracking-wide uppercase">Our Services</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Outsourcing, Offshoring & Staff Leasing
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                    Understand the models we use to help your business grow and succeed globally.
                </p>
            </div>

            <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900">Outsourcing</h3>
                    <p className="mt-4 text-base text-gray-600 flex-grow">
                        Outsourcing is the business practice of hiring a party outside a company to perform services that traditionally were performed in-house by the company's own employees and staff. Outsourcing is a practice usually undertaken by companies as a cost-cutting measure.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900">Offshoring</h3>
                    <p className="mt-4 text-base text-gray-600 flex-grow">
                        Outsourcing often involves transferring a company’s business process, operational and/ or non-core functions usually to a remote team that may either be foreign or domestic. Outsourcing to a foreign country or relocating a business function to a distant country is usually called ‘Offshoring”.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900">Staff Leasing & Specialized Services</h3>
                    <p className="mt-4 text-base text-gray-600 flex-grow">
                        Staff Leasing and Specialized Services are business delivery models where the provider recruits staff for a client’s particular needs, provides equipment, and oversees operations. In our case, the focus is on Software Development and Project Management.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default OutsourcingInfo;
