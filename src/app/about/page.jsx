import React from 'react'
import PageHero from '@/components/PageHero'
import Image from 'next/image'
import { Target, Eye, TrendingUp, Users, Zap, Shield, Building2, Globe, Award, BookOpen } from 'lucide-react'

const AboutUs = () => {
    return (
        <div>
            <PageHero
                title="About Us"
                breadcrumbs={[
                    { label: "About Us" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="min-h-screen bg-gray-50">
                {/* Company Header Section */}
                <div className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-block bg-white p-6 shadow-lg mb-6">
                                <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-2">
                                    INVEST NICP
                                </h1>
                                <div className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mb-4"></div>
                                <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
                                    MISSION GROWTH - INVEST SMART
                                </p>
                                <p className="text-lg md:text-xl text-green-600 font-bold">
                                    INDIA INDUSTRIAL CORRIDOR AND SMART CITIES INVESTMENT ADVISORS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Mission & Vision Cards */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {/* Mission Card */}
                            <div id='mission' className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                                <Target className="w-6 h-6 text-white" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-white">MISSION</h2>
                                        </div>
                                        <div className="relative w-16 h-12 overflow-hidden">
                                            <Image
                                                src="/assets/banner1.jpg"
                                                alt="India Map"
                                                fill
                                                className="object-cover opacity-30"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-500"></div>
                                    <h3 className="text-xl font-bold  mb-4 text-red-600">
                                        Empowering Investors, Fueling Growth:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-justify">
                                        At INVEST NICP, our mission is to be the catalyst for investors seeking to grow and expand
                                        their businesses across the rich tapestry of INDIA / BHARAT. We aim to connect global investors
                                        with the upcoming industrial corridors and thriving urban mosaic of tier 1, 2, and 3 cities.
                                        Our endeavour is to forge strong, long-lasting partnerships, enabling investors to unlock the
                                        immense potential of this diverse and dynamic market.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div id='vision' className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                                <Eye className="w-6 h-6 text-white" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-white">VISION</h2>
                                        </div>
                                        <div className="relative w-20 h-12 overflow-hidden">
                                            <Image
                                                src="/assets/banner3.jpg"
                                                alt="Global Business"
                                                fill
                                                className="object-cover opacity-30"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-500"></div>
                                    <h3 className="text-xl font-bold  mb-4 text-red-600">
                                        Growth Unleashed by Uncharted Territories and Trade:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-justify">
                                        Our worldwide aspiration is to stand as a paragon of investment wisdom, radiating the path to
                                        lasting prosperity on a global scale. We envisage a Bharat where investors seamlessly explore
                                        the multifaceted opportunities of India&apos;s dynamic urban centers and emerging industrial hubs.
                                        INVEST NICP is committed to being a catalyst for international economic growth, nurturing innovation,
                                        and realizing dreams as global achievements, shaping an elegant, interwoven, and thriving world for all.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Strategic Initiatives Section */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 mb-16 border-l-8 border-orange-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Globe className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        🌐 Invest in India: Strategic Initiatives Driving Growth
                                    </h2>
                                </div>
                                <div className="relative w-full md:w-32 h-20 md:ml-auto">
                                    <Image
                                        src="/assets/banner2.jpg"
                                        alt="India Growth"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                    India is fast becoming a global investment destination, powered by visionary reforms, digital transformation,
                                    and investor-first initiatives. The Government of India has launched several programs to ease business setup,
                                    enhance competitiveness, and ensure transparent and efficient operations for global and domestic investors.
                                </p>
                                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                    <p className="text-orange-600 font-semibold text-lg">
                                        Explore India&apos;s key initiatives that are transforming the investment landscape:
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose India Section */}
                        <div className="bg-white shadow-xl p-8 md:p-12 mb-16 border-t-4 border-orange-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        🚀 Why Choose India for Investment?
                                    </h2>
                                </div>
                                <div className="relative w-full md:w-40 h-24 md:ml-auto">
                                    <Image
                                        src="/assets/banner3.jpg"
                                        alt="India Investment"
                                        fill
                                        className="object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Economic Momentum */}
                                <div className="bg-orange-50 p-6 border-l-4 border-orange-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <TrendingUp className="w-5 h-5 text-orange-600" />
                                        <h3 className="font-bold text-gray-900">Unmatched Economic Momentum</h3>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        India is the world&apos;s fastest-growing major economy, offering sustained GDP growth driven by rising
                                        consumption, infrastructure expansion, and digital transformation.
                                    </p>
                                </div>

                                {/* Startup Ecosystem */}
                                <div className="bg-green-50 p-6 border-l-4 border-green-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Zap className="w-5 h-5 text-green-600" />
                                        <h3 className="font-bold text-gray-900">🚀 Global Startup Powerhouse</h3>
                                    </div>
                                    <p className="text-sm text-gray-700">
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
                                    <p className="text-sm text-gray-700">
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
                                    <p className="text-sm text-gray-700">
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
                                    <p className="text-sm text-gray-700">
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
                                    <p className="text-sm text-gray-700">
                                        From manufacturing and fintech to EVs, healthcare, and green energy, India offers scalable,
                                        multi-sector investment potential aligned with global trends.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Investment Highlights */}
                        <div id='opportunities' className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 md:p-12 relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <Image
                                    src="/skyline.jpg"
                                    alt="Background"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative z-10">
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4">India&apos;s Investment Potential</h2>
                                    <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
                                    <p className="text-xl opacity-90">Discover the opportunities that await your investment</p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">📊</div>
                                        <h3 className="font-bold mb-2">Robust GDP Growth</h3>
                                        <p className="text-sm opacity-90">6.5% annual growth with long-term upside positioning</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl mb-2">💻</div>
                                        <h3 className="font-bold mb-2">Semiconductor Hub</h3>
                                        <p className="text-sm opacity-90">Rapidly building ecosystem with policy incentives and partnerships</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🎓</div>
                                        <h3 className="font-bold mb-2">Digital Learning</h3>
                                        <p className="text-sm opacity-90">900+ universities and booming edtech sector creating skilled talent</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🏗️</div>
                                        <h3 className="font-bold mb-2">Infrastructure Development</h3>
                                        <p className="text-sm opacity-90">$1.4 trillion investment under National Infrastructure Pipeline</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl mb-2">🏭</div>
                                        <h3 className="font-bold mb-2">Sectoral Growth</h3>
                                        <p className="text-sm opacity-90">Diverse opportunities from manufacturing to green energy and tourism</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs
