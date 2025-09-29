import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { Building2, Users, MapPin, Award } from 'lucide-react'

const Resources = () => {
    const resourceCategories = [
        {
            title: "Government of India & Ministries",
            description: "Complete directory of government bodies, ministries, and departments",
            link: "/resources/goinministries",
            icon: <Building2 className="w-8 h-8" />,
            color: "from-blue-500 to-blue-600",
            items: "50+ Ministries & Departments"
        },
        {
            title: "Government Schemes",
            description: "List of various schemes of the Government of India for development",
            link: "/resources/schemes",
            icon: <Award className="w-8 h-8" />,
            color: "from-green-500 to-green-600",
            items: "28 Major Schemes"
        },
        {
            title: "Regulatory Authorities & Councils",
            description: "Industry associations and regulatory bodies across sectors",
            link: "/resources/authorities",
            icon: <Users className="w-8 h-8" />,
            color: "from-purple-500 to-purple-600",
            items: "39+ Associations"
        },
        {
            title: "State Investment Promotion Agencies",
            description: "State-level investment promotion agencies with contact details",
            link: "/resources/sip",
            icon: <MapPin className="w-8 h-8" />,
            color: "from-orange-500 to-orange-600",
            items: "32 State Agencies"
        },

    ]

    return (
        <div>
            <PageHero


                backgroundImage="/resources.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="bg-white p-8  ">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Investment <span className="text-orange-500">Resources Hub</span>
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-8">
                            Comprehensive directory of government bodies, schemes, policies, and agencies for investment in India
                        </p>
                    </div>

                    {/* Resource Categories Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resourceCategories.map((category, index) => (
                            <Link
                                key={index}
                                href={category.link}
                                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
                            >
                                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                                    <div className="flex items-center gap-4">
                                        <div className="text-white">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">
                                                {category.title}
                                            </h3>
                                            <span className="text-sm text-white/90">
                                                {category.items}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                        {category.description}
                                    </p>

                                    <div className="mt-4 flex items-center text-orange-600 group-hover:text-orange-700 font-semibold">
                                        <span>Explore Resources</span>
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 mt-16">
                        <h2 className="text-3xl font-bold text-center mb-8">Resource Statistics</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <div className="text-sm opacity-90">Government Bodies</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">28</div>
                                <div className="text-sm opacity-90">Major Schemes</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">39+</div>
                                <div className="text-sm opacity-90">Industry Associations</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">32</div>
                                <div className="text-sm opacity-90">State Agencies</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-white shadow-lg p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Need Personalized Guidance?
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Our experts can help you navigate these resources and find the right contacts for your investment needs
                        </p>
                        <Link
                            href="/contact-us"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 transition-colors"
                        >
                            Get Expert Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources
