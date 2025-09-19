'use client';

import React from 'react'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { TrendingUp, Building2, Users, Target, ExternalLink } from 'lucide-react'

// Complete sectors data from choose-sector.jsx component
const sectorsData = [
    {
        id: "agriculture",
        name: "Agriculture & Allied Industries",
        image: "/cultural.webp",
        description: "Agriculture and Allied Industries in India form the backbone of the rural economy, providing employment to a large portion of the population. This sector includes farming, animal husbandry, fisheries, forestry, and food processing. It benefits from vast arable land, diverse agro-climatic zones, and a strong domestic demand base. Government support through schemes like PM-KISAN, eNAM, and subsidies on inputs also drive growth in the sector.",
        majorStates: ["Punjab - Granary of India; major producer of wheat and rice; advanced mechanized farming", "Uttar Pradesh - India's largest producer of sugarcane and food grains; strong in dairy and horticulture", "Maharashtra - Leader in horticulture crops like grapes, pomegranates, and bananas; significant in cotton and sugarcane", "Andhra Pradesh - Major producer of rice, along with strong fisheries and aquaculture sectors"],
        growth: "Tech-driven transformation",
    },
    {
        id: "auto-components",
        name: "Auto Components",
        image: "/cultural.webp",
        description: "The auto components industry in India is a key sector supporting the automobile industry. It produces a wide range of products like engine parts, drive transmission parts, body parts, suspension, and braking parts. The sector benefits from cost competitiveness, skilled labor, and a robust supply chain.",
        majorStates: ["Tamil Nadu - Major hub for auto components manufacturing, especially around Chennai", "Maharashtra - Home to large OEMs and component suppliers, especially in Pune", "Haryana - Gurgaon and Faridabad are major centers for components for two-wheelers and cars", "Karnataka - Growing presence of precision engineering and components companies"],
        growth: "EV components boom",
    },
    {
        id: "automobiles",
        name: "Automobiles",
        image: "/cultural.webp",
        description: "India is one of the largest automobile markets in the world, producing two-wheelers, passenger vehicles, commercial vehicles, and electric vehicles (EVs). The sector plays a vital role in industrial growth, employment, and exports.",
        majorStates: ["Maharashtra - Major automobile production center with plants of Tata Motors, Mahindra, Bajaj, etc.", "Tamil Nadu - Known as the 'Detroit of India,' especially for cars and two-wheelers", "Haryana - Major base for Maruti Suzuki and Hero MotoCorp", "Gujarat - Rapidly growing with investments from Suzuki, Honda, and Tata"],
        growth: "Electric mobility shift",
    },
    {
        id: "aviation",
        name: "Aviation",
        image: "/cultural.webp",
        description: "The Indian aviation sector includes domestic and international air travel, cargo services, and aircraft maintenance. It has seen rapid growth due to rising middle-class incomes and government support through the UDAN scheme (regional connectivity).",
        majorStates: ["Delhi (NCR) - Home to Indira Gandhi International Airport, a major aviation hub", "Maharashtra - Mumbai has one of the busiest airports; also a center for MRO", "Karnataka - Bengaluru is a key aviation and aerospace hub with R&D and MRO facilities", "Telangana - Hyderabad has a strong aviation training and manufacturing base"],
        growth: "Infrastructure expansion",
    },
    {
        id: "banking",
        name: "Banking",
        image: "/cultural.webp",
        description: "The banking sector in India comprises public sector banks, private sector banks, regional rural banks, and cooperative banks. It plays a crucial role in financial inclusion, economic growth, and credit distribution across sectors.",
        majorStates: ["Maharashtra - Mumbai is the financial capital, housing RBI and major banks' headquarters", "Tamil Nadu - Chennai is a key hub for banking and financial services", "Delhi (NCR) - Important for regulatory institutions and bank offices", "Karnataka - Bengaluru is emerging as a fintech and digital banking center"],
        growth: "Digital transformation",
    },
    {
        id: "biotechnology",
        name: "Biotechnology",
        image: "/cultural.webp",
        description: "India's biotechnology sector is rapidly growing, driven by healthcare, agriculture, industrial biotechnology, and bio-services. It plays a vital role in pharmaceuticals, vaccines, bio-agriculture, and genetic research. India is one of the top biotech destinations in Asia.",
        majorStates: ["Karnataka - Bengaluru is known as the Biotech Capital of India", "Telangana - Hyderabad has a strong presence of biotech parks and life sciences companies", "Maharashtra - Pune and Mumbai are centers for biopharma and research institutions", "Tamil Nadu - Focused on biotechnology research and education"],
        growth: "22% CAGR projected",
    },
    {
        id: "cement",
        name: "Cement",
        image: "/cultural.webp",
        description: "India is the second-largest producer of cement globally. The industry is crucial for infrastructure and real estate development. It includes major players like UltraTech, ACC, Ambuja, and regional producers.",
        majorStates: ["Andhra Pradesh - Rich in limestone, a key raw material for cement", "Rajasthan - Major cement-producing state with large reserves", "Madhya Pradesh - Significant cement production due to limestone availability", "Tamil Nadu - Large production capacity and port-based export facilities"],
        growth: "Infrastructure boom",
    },
    {
        id: "chemicals",
        name: "Chemicals",
        image: "/cultural.webp",
        description: "The Indian chemical industry spans basic chemicals, petrochemicals, fertilizers, paints, dyes, and specialty chemicals. It supports agriculture, textiles, construction, and consumer goods sectors.",
        majorStates: ["Gujarat - Leading state with major chemical and petrochemical complexes", "Maharashtra - Strong base for chemical industries, especially around Mumbai and Pune", "Tamil Nadu - Involved in specialty and agro-chemicals", "Andhra Pradesh - Fast-growing with focus on bulk and specialty chemicals"],
        growth: "Green chemistry focus",
    },
    {
        id: "consumer-durables",
        name: "Consumer Durables",
        image: "/cultural.webp",
        description: "This sector includes household appliances and electronics like TVs, refrigerators, ACs, washing machines, etc. Growth is driven by rising incomes, urbanization, and digital penetration.",
        majorStates: ["Uttar Pradesh - Noida is a major manufacturing and assembly hub", "Tamil Nadu - Chennai is a key hub for electronics and white goods", "Maharashtra - Significant consumption market and distribution center", "Andhra Pradesh - Rapidly emerging electronics manufacturing clusters"],
        growth: "Smart home revolution",
    },
    {
        id: "defence-manufacturing",
        name: "Defence Manufacturing",
        image: "/cultural.webp",
        description: "India is focusing on indigenization of defence production under the 'Make in India' and 'Atmanirbhar Bharat' initiatives. It includes production of arms, ammunition, aircraft, warships, and defence electronics.",
        majorStates: ["Maharashtra - Major ordnance factories and private sector involvement", "Tamil Nadu - Defence corridor with strong focus on aerospace and electronics", "Uttar Pradesh - UP Defence Industrial Corridor under development", "Telangana - Hyderabad is a hub for missile and aerospace systems (DRDO, Bharat Dynamics)"],
        growth: "Self-reliance push",
    },
    {
        id: "e-commerce",
        name: "E-Commerce",
        image: "/cultural.webp",
        description: "India's e-commerce industry is one of the fastest-growing globally, driven by smartphone usage, internet penetration, digital payments, and a rising middle class. It includes retail, groceries, fashion, electronics, and B2B marketplaces.",
        majorStates: ["Karnataka - Bengaluru is the hub for major e-commerce companies like Flipkart, Myntra, and BigBasket", "Delhi (NCR) - Major logistical and consumer base, key for last-mile delivery", "Maharashtra - Mumbai is a financial and commercial center for e-commerce firms", "Telangana - Hyderabad has growing tech parks and warehousing infrastructure"],
        growth: "AI personalization",
    },
    {
        id: "education-training",
        name: "Education & Training",
        image: "/cultural.webp",
        description: "India's education sector spans primary to higher education, vocational training, and EdTech. It's supported by a young population, digital adoption, and initiatives like NEP 2020 and Skill India.",
        majorStates: ["Karnataka - Bengaluru is a major education and EdTech hub (Byju's, Vedantu)", "Maharashtra - Pune is known as the 'Oxford of the East' for its educational institutions", "Tamil Nadu - High literacy rates and strong engineering and medical colleges", "Delhi (NCR) - Host to major universities, coaching hubs, and government institutes"],
        growth: "EdTech revolution",
    },
    {
        id: "esdm",
        name: "Electronic System Design & Manufacturing",
        image: "/cultural.webp",
        description: "The ESDM sector includes design, prototyping, and manufacturing of electronics such as semiconductors, mobile phones, LED lighting, and consumer electronics. Supported by Make in India and PLI schemes.",
        majorStates: ["Uttar Pradesh - Noida is an emerging electronics manufacturing cluster", "Tamil Nadu - Chennai and Sriperumbudur are key ESDM hubs", "Karnataka - Bengaluru leads in electronic design and semiconductor R&D", "Andhra Pradesh - Rapid development of electronics manufacturing parks"],
        growth: "Semiconductor focus",
    },
    {
        id: "financial-services",
        name: "Financial Services",
        image: "/cultural.webp",
        description: "India's financial services sector includes banking, insurance, NBFCs, stock markets, asset management, and fintech. It underpins economic development and financial inclusion.",
        majorStates: ["Maharashtra - Mumbai is the financial capital of India, housing RBI, SEBI, and major banks", "Delhi (NCR) - Important for policy-making, insurance HQs, and financial institutions", "Karnataka - Bengaluru is a leading fintech innovation hub", "Tamil Nadu - Chennai has a strong presence of banks, NBFCs, and back-office operations"],
        growth: "AI-driven services",
    },
    {
        id: "healthcare",
        name: "Healthcare",
        image: "/cultural.webp",
        description: "India's healthcare sector includes hospitals, diagnostics, medical devices, pharmaceuticals, and telemedicine. It is supported by both public and private players, and has become a hub for medical tourism.",
        majorStates: ["Tamil Nadu - Chennai is a leading center for medical tourism and advanced healthcare", "Maharashtra - Mumbai and Pune have top-tier hospitals and research centers", "Karnataka - Bengaluru has strong health tech and private hospital chains", "Delhi (NCR) - Major center for super-specialty hospitals and diagnostics"],
        growth: "AI diagnostics revolution",
    },
    {
        id: "infrastructure",
        name: "Infrastructure",
        image: "/cultural.webp",
        description: "The infrastructure sector includes roads, railways, ports, airports, power, and urban development. It is vital for economic growth and employment and is driven by government schemes like PM Gati Shakti and Smart Cities Mission.",
        majorStates: ["Maharashtra - Extensive road, metro, and port infrastructure (Mumbai, JNPT)", "Gujarat - Leading in industrial corridors and port-led development", "Uttar Pradesh - Major expressways, airports (Jewar), and urban expansion", "Tamil Nadu - Strong port, airport, and industrial zone development"],
        growth: "$1.4 trillion pipeline",
    },
    {
        id: "it-bpm",
        name: "IT & BPM",
        image: "/cultural.webp",
        description: "India is a global leader in IT services, software development, and BPM. The sector drives exports, innovation, and employment, especially in urban and Tier-2 cities.",
        majorStates: ["Karnataka - Bengaluru is the Silicon Valley of India", "Maharashtra - Pune and Mumbai have major IT parks and corporate offices", "Telangana - Hyderabad is a growing IT and BPM hub", "Tamil Nadu - Chennai has strong presence in IT services and BPOs"],
        growth: "AI & Cloud dominance",
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        image: "/cultural.webp",
        description: "Manufacturing is a key pillar of India's economy, covering sectors like textiles, auto, steel, cement, electronics, and consumer goods. Driven by initiatives like Make in India and PLI schemes.",
        majorStates: ["Maharashtra - Strong base in auto, electronics, and engineering", "Tamil Nadu - Leading in textiles, auto components, and electronics", "Gujarat - Major hub for chemicals, textiles, and heavy industries", "Uttar Pradesh - Rapidly emerging through industrial corridors and MSMEs"],
        growth: "Industry 4.0 adoption",
    },
    {
        id: "pharmaceuticals",
        name: "Pharmaceuticals",
        image: "/cultural.webp",
        description: "India is the world's largest supplier of generic medicines and vaccines. The sector includes bulk drugs, formulations, biotechnology, and R&D. It's supported by strong manufacturing and skilled workforce.",
        majorStates: ["Telangana - Hyderabad is called the 'Bulk Drug Capital of India'", "Maharashtra - Mumbai and Pune are major pharma hubs", "Gujarat - Known for formulations and contract manufacturing", "Himachal Pradesh - Baddi is a major pharmaceutical manufacturing zone"],
        growth: "Global supply hub",
    },
    {
        id: "renewable-energy",
        name: "Renewable Energy",
        image: "/cultural.webp",
        description: "India is one of the world's largest producers of renewable energy, with major focus on solar, wind, hydro, and bioenergy. It supports sustainable growth and energy security, backed by policies like the National Solar Mission and Green Energy Corridor.",
        majorStates: ["Rajasthan - Leading in solar energy generation due to vast desert land", "Tamil Nadu - Top producer of wind energy", "Gujarat - Significant solar and wind energy investments", "Karnataka - Among top states in total renewable energy capacity"],
        growth: "500 GW target by 2030",
    },
    {
        id: "steel",
        name: "Steel",
        image: "/cultural.webp",
        description: "India is the second-largest producer of crude steel globally. The sector is critical for infrastructure, construction, automotive, and machinery. It includes both integrated steel plants and mini-mills.",
        majorStates: ["Jharkhand - Major steel production via SAIL (Bokaro) and Tata Steel", "Odisha - Home to large steel plants and rich in iron ore", "Chhattisgarh - Bhilai Steel Plant is a major contributor", "Maharashtra - Secondary steel manufacturing and processing"],
        growth: "Advanced production",
    },
    {
        id: "telecommunications",
        name: "Telecommunications",
        image: "/cultural.webp",
        description: "India has one of the largest telecom markets globally. The sector includes mobile services, broadband, satellite, and telecom equipment manufacturing. 5G rollout and rural connectivity are current focus areas.",
        majorStates: ["Maharashtra - Mumbai is a telecom operations and HQ base", "Karnataka - Bengaluru is a tech base for telecom R&D", "Delhi (NCR) - Center for telecom policy, TRAI, and major service providers", "Tamil Nadu - Strong network and manufacturing of telecom components"],
        growth: "5G revolution",
    },
    {
        id: "textiles",
        name: "Textiles",
        image: "/cultural.webp",
        description: "The textile industry is one of India's oldest and largest sectors, covering cotton, silk, wool, jute, and synthetic fibers. It includes spinning, weaving, garments, and exports, and is a major source of employment and foreign exchange.",
        majorStates: ["Tamil Nadu - Coimbatore and Tiruppur are major centers for textiles and knitwear", "Gujarat - Key state for cotton, denim, and textile processing", "Maharashtra - Mumbai and Nagpur have strong spinning and garment industries", "West Bengal - Known for jute textiles and handlooms", "Punjab - Ludhiana is famous for woolen and hosiery products"],
        growth: "Sustainable fashion",
    },
    {
        id: "tourism-hospitality",
        name: "Tourism & Hospitality",
        image: "/cultural.webp",
        description: "India's tourism and hospitality sector includes leisure, medical, spiritual, and heritage tourism. It supports hotels, restaurants, transport, and cultural experiences. The sector is key for employment and regional development.",
        majorStates: ["Rajasthan - Famous for heritage and cultural tourism", "Uttar Pradesh - Home to iconic sites like the Taj Mahal and religious tourism in Varanasi, Ayodhya", "Kerala - Known for wellness, backwaters, and eco-tourism", "Goa - Major destination for beach and international tourism", "Maharashtra - Mumbai and other regions attract business and film tourism"],
        growth: "Experience economy",
    }
];

const SectorsPage = () => {
    return (
        <div>
            <PageHero
                title="Investment Opportunities by Sectors"
                breadcrumbs={[
                    { label: "Investment Opportunities", href: "/investment-opportunities" },
                    { label: "Sectors" }
                ]}
                backgroundImage="/cultural.webp"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Investment Opportunities by <span className="text-orange-500">Sectors</span>
                        </h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Explore India&apos;s high-growth investment sectors with comprehensive analysis of market potential,
                            growth trends, and investment opportunities across diverse industries.
                        </p>
                    </div>

                    {/* Sectors Grid */}
                    <div className="space-y-8">
                        {sectorsData.map((sector, index) => (
                            <div
                                key={sector.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Content Section */}
                                    <div className="lg:w-2/3 p-8 lg:p-12">
                                        <div className="flex items-center mb-4">
                                            <Building2 className="w-6 h-6 text-orange-500 mr-2" />
                                            <span className="text-orange-500 font-semibold">Investment Sector</span>
                                        </div>

                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{sector.name}</h3>

                                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                            {sector.description}
                                        </p>

                                        {/* Growth Highlight */}
                                        <div className="bg-green-50 p-4 rounded-lg mb-6 border-l-4 border-green-500">
                                            <div className="flex items-center">
                                                <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                                                <h5 className="font-semibold text-gray-800">Growth Trend</h5>
                                            </div>
                                            <p className="text-green-700 font-medium mt-1">{sector.growth}</p>
                                        </div>

                                        {/* Major States */}
                                        <div>
                                            <h4 className="font-semibold text-lg mb-4 text-gray-800">Major Investment Hubs & Analysis</h4>
                                            <div className="space-y-3">
                                                {sector.majorStates.map((state, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500"
                                                    >
                                                        <p className="text-gray-700 text-sm leading-relaxed">{state}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="lg:w-1/3 h-64 lg:h-auto relative">
                                        <Image
                                            src={sector.image}
                                            alt={`${sector.name} Investment Opportunities`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="text-sm font-medium">Growth Sector</p>
                                            <p className="text-lg font-bold">{sector.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Statistics Section */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Building2 className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">50+</h3>
                            <p className="text-gray-600 text-sm">Investment Sectors</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <TrendingUp className="w-6 h-6 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">₹250L Cr+</h3>
                            <p className="text-gray-600 text-sm">Total Investment</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">250M+</h3>
                            <p className="text-gray-600 text-sm">Employment Created</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Target className="w-6 h-6 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">15%+</h3>
                            <p className="text-gray-600 text-sm">Average Growth</p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Invest in High-Growth Sectors?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Get detailed sector analysis and connect with our investment experts to explore opportunities.
                        </p>
                        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Sector Analysis
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectorsPage