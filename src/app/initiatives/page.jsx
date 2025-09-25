import React from 'react'
import PageHero from '@/components/PageHero'
import { Factory, Globe, FileText, Building2, MapPin, TrendingUp } from 'lucide-react'

const Initiatives = () => {
    const initiatives = [
        {
            id: 'make-in-india',
            title: 'Make in India',
            icon: <Factory className="w-8 h-8" />,
            description: 'Building India as a Global Manufacturing Hub',
            details: 'Launched in 2014, Make in India is a flagship initiative to foster innovation, enhance skills, and attract investments in manufacturing.',
            highlights: [
                '100% FDI in most sectors',
                'Production Linked Incentive (PLI) Schemes across 14+ sectors',
                'Reforms in labor, taxation, and infrastructure'
            ],
            ctaText: 'EXPLORE VARIOUS SECTORS to INVEST NOW',
            color: 'blue'
        },
        {
            id: 'bonded-manufacturing',
            title: 'Bonded Manufacturing Scheme',
            icon: <Building2 className="w-8 h-8" />,
            description: 'A Duty-Free Manufacturing & Processing Ecosystem',
            details: 'India\'s Bonded Manufacturing Scheme allows businesses to import raw materials and capital goods without upfront duties, provided outputs are exported or kept under bond.',
            highlights: [
                'No import duty on goods meant for export',
                'Deferred customs duty for domestic sales',
                'Simplified customs compliance under a digital interface'
            ],
            ctaText: 'Ideal for Export-oriented MANUFACTURERS, Global supply chain INTEGRATORS',
            color: 'green'
        },
        {
            id: 'nsws',
            title: 'National Single Window System (NSWS)',
            icon: <FileText className="w-8 h-8" />,
            description: 'One Platform. All Approvals. No Hassle.',
            details: 'The NSWS is a unified digital platform offering end-to-end support for business approvals and clearances from Central and State Governments.',
            highlights: [
                '3,000+ approvals integrated',
                'Real-time status tracking',
                'Document repository and dashboard'
            ],
            ctaText: 'LAUNCH your BUSINESS – INVEST SMART',
            color: 'purple'
        },
        {
            id: 'dpiit',
            title: 'DPIIT – Department for Promotion of Industry and Internal Trade',
            icon: <TrendingUp className="w-8 h-8" />,
            description: 'Policy Leadership & Investment Facilitation',
            details: 'DPIIT is the nodal agency driving industrial growth and investor facilitation in India.',
            highlights: [
                'FDI policy formulation & clarifications',
                'Investor grievance redressal',
                'Inter-ministerial coordination for project clearances'
            ],
            ctaText: 'EXPLORE OPPORTUNITIES',
            color: 'orange'
        },
        {
            id: 'iig',
            title: 'India Investment Grid (IIG)',
            icon: <Globe className="w-8 h-8" />,
            description: 'Your Gateway to Investable Opportunities in India',
            details: 'The India Investment Grid showcases real-time, investor-ready projects from across the country — across sectors like infrastructure, manufacturing, energy, and more.',
            highlights: [
                'Sector-wise and state-wise listings',
                'Direct connect with project promoters',
                'Regularly updated pipeline of opportunities'
            ],
            ctaText: 'Explore Projects',
            color: 'cyan'
        },
        {
            id: 'odop',
            title: 'One District One Product (ODOP)',
            icon: <MapPin className="w-8 h-8" />,
            description: 'Promoting Local Products, Creating Global Impact',
            details: 'ODOP aims to identify and promote one unique product per district to support local industries and create employment.',
            highlights: [
                'Handicrafts, textiles, food processing, engineering goods',
                'Export promotion and branding',
                'Skill development and value chain enhancement'
            ],
            ctaText: 'DISCOVER DISTRICT OFFERINGS (if applicable)',
            color: 'red'
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: 'border-blue-500 bg-blue-50 text-blue-700',
            green: 'border-green-500 bg-green-50 text-green-700',
            purple: 'border-purple-500 bg-purple-50 text-purple-700',
            orange: 'border-orange-500 bg-orange-50 text-orange-700',
            cyan: 'border-cyan-500 bg-cyan-50 text-cyan-700',
            red: 'border-red-500 bg-red-50 text-red-700'
        };
        return colors[color] || colors.blue;
    };

    const getButtonClasses = (color) => {
        const colors = {
            blue: 'bg-blue-600 hover:bg-blue-700',
            green: 'bg-green-600 hover:bg-green-700',
            purple: 'bg-purple-600 hover:bg-purple-700',
            orange: 'bg-orange-600 hover:bg-orange-700',
            cyan: 'bg-cyan-600 hover:bg-cyan-700',
            red: 'bg-red-600 hover:bg-red-700'
        };
        return colors[color] || colors.blue;
    };

    return (
        <div>
            <PageHero
                title="Our Initiatives"
                breadcrumbs={[
                    { label: "Initiatives" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase">
                            Initiatives
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Discover our ongoing initiatives and projects that drive investment and growth across India.
                            These strategic programs are designed to transform India into a global manufacturing and investment hub.
                        </p>
                    </div>



                    {/* Initiatives Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {initiatives.map((initiative) => (
                            <div key={initiative.id} className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                {/* Header - icon moved to right and text right-aligned */}
                                <div className={`p-6 border-l-4 ${getColorClasses(initiative.color)}`}>
                                    <div className="flex items-center mb-4 justify-between">
                                        <div className="flex-1 text-right">
                                            <h3 className="text-xl font-bold text-gray-900">
                                                {initiative.title}
                                            </h3>
                                            <p className="text-gray-600 font-medium">
                                                {initiative.description}
                                            </p>
                                        </div>
                                        <div className={`p-3  ml-4 ${getColorClasses(initiative.color)}`} aria-hidden>
                                            {initiative.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {initiative.details}
                                    </p>

                                    {/* Key Highlights */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                            Key Highlights:
                                        </h4>
                                        <ul className="space-y-2">
                                            {initiative.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span className="text-gray-700">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full ${getButtonClasses(initiative.color)} text-white px-6 py-3  font-semibold flex items-center justify-center hover:transform hover:scale-105 transition-all duration-200`}>
                                        {initiative.ctaText}

                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Section */}
                    <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Invest in India&apos;s Future?
                        </h3>
                        <p className="text-xl mb-6 opacity-90">
                            Explore these initiatives and discover investment opportunities that align with India&apos;s vision for growth and development.
                        </p>
                        <button className="bg-white text-orange-600 px-8 py-4  font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                            Start Your Investment Journey

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Initiatives