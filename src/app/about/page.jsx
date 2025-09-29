import React from 'react'
import PageHero from '@/components/PageHero'
import Image from 'next/image'
import { TrendingUp, Users, Zap, Shield, Building2, Globe } from 'lucide-react'
import MissionVision from './mission-vision'
import InvestmentPotential from './investment-potential'

const AboutUs = () => {
    return (
        <div>
            <PageHero
                title="About Us"
                breadcrumbs={[
                    { label: "About Us" }
                ]}
                backgroundImage="/banner3.jpg"
            />

            <div className=" bg-gray-50">
                {/* Company Header Section */}
                <div className="py-4 md:py-6 bg-gradient-to-r from-orange-50 to-red-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-3 ">
                            <div className="inline-block bg-white p-6 shadow-lg mb-6">
                                <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-2">
                                    INVEST NICP
                                </h1>
                                <div className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mb-4"></div>
                                <p className="text-lg md:text-2xl text-gray-700 font-semibold text-nowrap">
                                    MISSION GROWTH - INVEST SMART
                                </p>
                                <p className="text-base md:text-xl text-green-600 font-bold">
                                    India&apos;s Industrial Corridors and Smart Cities Investments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Mission & Vision Cards */}
                        <MissionVision />
                        {/* Strategic Initiatives Section */}
                        <div id='invest-in-india' className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 mb-16 border-l-8 border-orange-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Globe className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        Invest in India: Strategic Initiatives Driving Growth
                                    </h2>
                                </div>

                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <p className="text-base text-gray-700 leading-relaxed mb-4">
                                    India is fast becoming a global investment destination, powered by visionary reforms, digital transformation,
                                    and investor-first initiatives. The Government of India has launched several programs to ease business setup,
                                    enhance competitiveness, and ensure transparent and efficient operations for global and domestic investors.
                                </p>
                                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                    <p className="text-orange-600 font-semibold text-base">
                                        Explore India&apos;s key initiatives that are transforming the investment landscape:
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose India Section */}
                        <div id='why-choose-india' className="bg-white shadow-xl p-8 md:p-12 mb-16 border-t-4 border-orange-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        Why Choose India for Investment?
                                    </h2>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Economic Momentum */}
                                <div className="bg-orange-50 p-6 border-l-4 border-orange-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <TrendingUp className="w-5 h-5 text-orange-600" />
                                        <h3 className="font-bold text-gray-900">Unmatched Economic Momentum</h3>
                                    </div>
                                    <p className="text-base text-gray-700">
                                        India is the world&apos;s fastest-growing major economy, offering sustained GDP growth driven by rising
                                        consumption, infrastructure expansion, and digital transformation.
                                    </p>
                                </div>

                                {/* Startup Ecosystem */}
                                <div className="bg-green-50 p-6 border-l-4 border-green-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Zap className="w-5 h-5 text-green-600" />
                                        <h3 className="font-bold text-gray-900">Global Startup Powerhouse</h3>
                                    </div>
                                    <p className="text-base text-gray-700">
                                        Home to the 3rd largest startup ecosystem, India nurtures over 100 unicorns across sectors like
                                        fintech, AI, healthtech, and clean energy.
                                    </p>
                                </div>

                                {/* Policy Reforms */}
                                <div className="bg-blue-50 p-6 border-l-4 border-blue-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Shield className="w-5 h-5 text-blue-600" />
                                        <h3 className="font-bold text-gray-900">🏛️ Investor-Friendly Reforms</h3>
                                    </div>
                                    <p className="text-base text-gray-700">
                                        Pro-business reforms, simplified compliance, and digital governance make India one of the most
                                        transparent environments for global investors.
                                    </p>
                                </div>

                                {/* Demographic Dividend */}
                                <div className="bg-purple-50 p-6 border-l-4 border-purple-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Users className="w-5 h-5 text-purple-600" />
                                        <h3 className="font-bold text-gray-900">👥 Demographic Dividend</h3>
                                    </div>
                                    <p className="text-base text-gray-700">
                                        With a young, English-speaking workforce—over 65% under 35—India offers skilled professionals
                                        ready to power global operations.
                                    </p>
                                </div>

                                {/* Legal Infrastructure */}
                                <div className="bg-indigo-50 p-6 border-l-4 border-indigo-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Shield className="w-5 h-5 text-indigo-600" />
                                        <h3 className="font-bold text-gray-900">⚖️ Robust Legal Framework</h3>
                                    </div>
                                    <p className="text-base text-gray-700">
                                        India boasts strong democratic framework, independent judiciary, and well-regulated financial
                                        system ensuring legal protection and investor confidence.
                                    </p>
                                </div>

                                {/* Investment Potential */}
                                <div className="bg-yellow-50 p-6 border-l-4 border-yellow-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Building2 className="w-5 h-5 text-yellow-600" />
                                        <h3 className="font-bold text-gray-900">🏗️ Investment Potential</h3>
                                    </div>
                                    <p className="text-base text-gray-700">
                                        From manufacturing and fintech to EVs, healthcare, and green energy, India offers scalable,
                                        multi-sector investment potential aligned with global trends.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Investment Highlights */}
                        <div id='opportunities'>

                            <InvestmentPotential />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs
