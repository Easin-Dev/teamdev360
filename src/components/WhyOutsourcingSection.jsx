import React from 'react';

// --- Custom Modern SVG Icons ---
// Note: In a real project, you would import these from 'lucide-react' or a similar library.
// We define them inline here for the single-file mandate.

const IconTrendingUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const IconWalletMinimal = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="12" x="2" y="6" rx="2" />
    <path d="M12 6V18" />
  </svg>
);

const IconUsersSparkle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M22 2l-1 1-1-1" />
    <path d="M20 5l1-1 1 1" />
  </svg>
);

const FeatureCard = ({ icon: Icon, title, description, color }) => {
  const bgColor = `bg-${color}-50`;
  const iconColor = `text-[#95A844]`;
  const hoverBg = `hover:bg-${color}-100`;

  return (
    <div className={`p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 ${bgColor} ${hoverBg} transform hover:scale-[1.02] border border-[#95A844] flex flex-col items-center text-center`}>
      <div className={`p-4 rounded-full ${iconColor} bg-white shadow-md mb-6 transition-all duration-300`}>
        <Icon className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-gray-600 text-base">
        {description}
      </p>
    </div>
  );
};

export default function App() {
  const features = [
    {
      icon: IconTrendingUp,
      title: "Accelerated Company Growth",
      description: "By delegating non-core tasks, your internal teams can focus entirely on high-impact strategic initiatives.",
      color: "green",
    },
    {
      icon: IconWalletMinimal,
      title: "Significant Cost Efficiency",
      description: "For most countries, outsourcing drastically reduces operational overhead, allowing you to pay up to 70% less on labor costs and associated taxes.",
      color: "indigo",
    },
    {
      icon: IconUsersSparkle,
      title: "Access to an Enormous Talent Pool",
      description: "The Philippines, for example, offers a vast, highly-skilled, and often English-proficient workforce, expanding your recruitment capabilities globally.",
      color: "teal",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-[Inter]">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Why Outsourcing and Staff Leasing Make Sense
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Unlock new opportunities by focusing on core competencies while leveraging global expertise and efficiency.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
