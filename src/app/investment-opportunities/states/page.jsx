'use client';

import React from 'react'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { MapPin, TrendingUp, Users, Building2, ExternalLink } from 'lucide-react'

// Complete states data from State.jsx component
const statesData = [
    {
        id: "andhra-pradesh",
        name: "Andhra Pradesh",
        type: "state",
        keyIndustries: ["Agriculture", "IT", "Manufacturing"],
        investmentOpportunities: "Strong opportunities in agriculture, IT parks, ports and renewable energy",
        majorCities: ["Amaravati", "Visakhapatnam", "Vijayawada"],
        economicAchievements: "Andhra Pradesh has seen significant economic growth with a focus on agriculture, IT, and manufacturing sectors.",
        infrastructureHighlights: "Development of Amaravati as the new capital, expansion of ports and airports.",
        demographics: "Diverse population with Telugu as the primary language.",
        policies: "Focus on promoting industries through policies like 'Sunrise Andhra Pradesh' and 'Ease of Doing Business.'",
    },
    {
        id: "nagaland",
        name: "Nagaland",
        type: "state",
        keyIndustries: ["Agriculture", "Tourism", "Handicrafts"],
        investmentOpportunities: "Tourism and handicrafts with scope for niche agri-products",
        majorCities: ["Kohima", "Dimapur"],
        economicAchievements: "Predominantly agrarian economy with potential for growth in tourism and handicrafts.",
        infrastructureHighlights: "Improving road networks and connectivity in a hilly terrain.",
        demographics: "Predominantly Naga tribal population with diverse languages.",
        policies: "Emphasis on preserving tribal heritage and promoting agriculture.",
    },
    {
        id: "arunachal-pradesh",
        name: "Arunachal Pradesh",
        type: "state",
        keyIndustries: ["Hydropower", "Tourism"],
        investmentOpportunities: "Hydropower and eco-tourism",
        majorCities: ["Itanagar", "Naharlagun"],
        economicAchievements: "Developing its economy with an emphasis on hydropower projects and tourism.",
        infrastructureHighlights: "Expanding road connectivity in a geographically challenging region.",
        demographics: "Diverse tribal population.",
        policies: "Focus on sustainable development and preserving indigenous culture.",
    },
    {
        id: "odisha",
        name: "Odisha",
        type: "state",
        keyIndustries: ["Mining", "Agriculture", "Manufacturing"],
        investmentOpportunities: "Ports, mining, and downstream industries",
        majorCities: ["Bhubaneswar", "Cuttack", "Paradip"],
        economicAchievements: "Steady growth with a focus on mining, agriculture, and manufacturing.",
        infrastructureHighlights: "Developing ports, highways, and power infrastructure.",
        demographics: "Diverse population with Odia as the primary language.",
        policies: "Focus on industrialization, mining, and social development.",
    },
    {
        id: "assam",
        name: "Assam",
        type: "state",
        keyIndustries: ["Tea", "Oil", "Agro-Processing"],
        investmentOpportunities: "Logistics and agro-processing",
        majorCities: ["Guwahati", "Dibrugarh"],
        economicAchievements: "Economic growth driven by tea, oil, and agriculture.",
        infrastructureHighlights: "Expanding road and rail networks, improving connectivity.",
        demographics: "Diverse ethnic groups and languages.",
        policies: "Various policies to promote tea, tourism, and skill development.",
    },
    {
        id: "punjab",
        name: "Punjab",
        type: "state",
        keyIndustries: ["Agriculture", "Food Processing"],
        investmentOpportunities: "Agri-processing and agro-exports",
        majorCities: ["Chandigarh", "Ludhiana", "Amritsar"],
        economicAchievements: "Strong agriculture-based economy, with a growing services sector.",
        infrastructureHighlights: "Modern transportation and irrigation facilities.",
        demographics: "Predominantly Punjabi-speaking population.",
        policies: "Focus on agriculture, education, and skill development.",
    },
    {
        id: "bihar",
        name: "Bihar",
        type: "state",
        keyIndustries: ["Agriculture", "Small-scale Industries"],
        investmentOpportunities: "Food processing and skill development",
        majorCities: ["Patna", "Gaya"],
        economicAchievements: "Gradual economic growth with an emphasis on agriculture and small-scale industries.",
        infrastructureHighlights: "Improvement in road and electricity infrastructure.",
        demographics: "High population density with a predominantly Hindi-speaking population.",
        policies: "Initiatives to promote industries and skill development.",
    },
    {
        id: "rajasthan",
        name: "Rajasthan",
        type: "state",
        keyIndustries: ["Tourism", "Mining", "Agriculture"],
        investmentOpportunities: "Tourism infrastructure and mining value-chains",
        majorCities: ["Jaipur", "Jodhpur", "Udaipur"],
        economicAchievements: "Diverse economy with agriculture, tourism, and mining sectors.",
        infrastructureHighlights: "Developing tourism infrastructure, transportation, and irrigation projects.",
        demographics: "Predominantly Rajasthani-speaking population.",
        policies: "Emphasis on tourism promotion and water resource management.",
    },
    {
        id: "chhattisgarh",
        name: "Chhattisgarh",
        type: "state",
        keyIndustries: ["Mining", "Steel", "Power"],
        investmentOpportunities: "Mining and downstream manufacturing",
        majorCities: ["Raipur", "Bilaspur"],
        economicAchievements: "Rapid industrial growth, especially in the mining and steel sectors.",
        infrastructureHighlights: "Development of industrial and transport infrastructure.",
        demographics: "Diverse population with a focus on tribal communities.",
        policies: "Policies to promote industrial growth and welfare of tribal populations.",
    },
    {
        id: "sikkim",
        name: "Sikkim",
        type: "state",
        keyIndustries: ["Tourism", "Organic Agriculture"],
        investmentOpportunities: "Eco-tourism and organic farming",
        majorCities: ["Gangtok"],
        economicAchievements: "Developing a sustainable economy with a focus on tourism and organic agriculture.",
        infrastructureHighlights: "Improving road connectivity in mountainous terrain.",
        demographics: "Diverse population with Nepali as the primary language.",
        policies: "Focus on organic farming, tourism, and environmental conservation.",
    },
    {
        id: "delhi",
        name: "Delhi",
        type: "ut",
        keyIndustries: ["Services", "Trade"],
        investmentOpportunities: "Services, education, and healthcare",
        majorCities: ["New Delhi"],
        economicAchievements: "Strong economy driven by the service sector and trade.",
        infrastructureHighlights: "Modern transportation, educational institutions, and healthcare facilities.",
        demographics: "Diverse population, including people from all over India.",
        policies: "Focus on improving public services, education, and healthcare.",
    },
    {
        id: "tamil-nadu",
        name: "Tamil Nadu",
        type: "state",
        keyIndustries: ["Manufacturing", "Services", "Automotive"],
        investmentOpportunities: "Manufacturing and exports",
        majorCities: ["Chennai", "Coimbatore"],
        economicAchievements: "Robust manufacturing and services sector with strong infrastructure.",
        infrastructureHighlights: "Well-developed industrial hubs, ports, and educational institutions.",
        demographics: "Diverse population with Tamil as the primary language.",
        policies: "Pro-business policies, focus on industry, and education.",
    },
    {
        id: "goa",
        name: "Goa",
        type: "state",
        keyIndustries: ["Tourism", "Mining"],
        investmentOpportunities: "Tourism and hospitality",
        majorCities: ["Panaji", "Margao"],
        economicAchievements: "Tourism and mining contribute significantly to the economy.",
        infrastructureHighlights: "Modernized tourism infrastructure and transportation.",
        demographics: "Diverse population with Konkani as the primary language.",
        policies: "Emphasis on sustainable tourism and environmental conservation.",
    },
    {
        id: "tripura",
        name: "Tripura",
        type: "state",
        keyIndustries: ["Agriculture", "Tourism"],
        investmentOpportunities: "Tourism and agri-value chains",
        majorCities: ["Agartala"],
        economicAchievements: "Economic growth with an emphasis on agriculture and tourism.",
        infrastructureHighlights: "Developing road and rail connectivity in a hilly region.",
        demographics: "Diverse population with Bengali and Kokborok as prominent languages.",
        policies: "Emphasis on promoting tourism and agriculture.",
    },
    {
        id: "gujarat",
        name: "Gujarat",
        type: "state",
        keyIndustries: ["Manufacturing", "Petrochemicals", "Ports"],
        investmentOpportunities: "Manufacturing, petrochemicals and port-led growth",
        majorCities: ["Ahmedabad", "Surat"],
        economicAchievements: "Vibrant economy with a focus on manufacturing, petrochemicals, and ports.",
        infrastructureHighlights: "World-class industrial and port facilities.",
        demographics: "Diverse population with a strong industrial and business culture.",
        policies: "Pro-business policies, such as 'Make in Gujarat' and 'Vibrant Gujarat.'",
    },
    {
        id: "telangana",
        name: "Telangana",
        type: "state",
        keyIndustries: ["IT", "Agriculture", "Manufacturing"],
        investmentOpportunities: "IT parks and agro-processing",
        majorCities: ["Hyderabad"],
        economicAchievements: "Rapid economic growth, driven by IT, agriculture, and manufacturing sectors.",
        infrastructureHighlights: "Well-developed IT parks, transportation, and educational institutions.",
        demographics: "Diverse population with Telugu as the primary language.",
        policies: "Pro-business policies, focus on IT, and skill development.",
    },
    {
        id: "haryana",
        name: "Haryana",
        type: "state",
        keyIndustries: ["Automotive", "Manufacturing"],
        investmentOpportunities: "Automotive and manufacturing clusters",
        majorCities: ["Gurugram", "Faridabad"],
        economicAchievements: "Rapid industrial growth with a focus on agriculture and manufacturing.",
        infrastructureHighlights: "Modern infrastructure and connectivity.",
        demographics: "Diverse population with a focus on agriculture and industry.",
        policies: "Pro-industry and investment-friendly policies.",
    },
    {
        id: "uttar-pradesh",
        name: "Uttar Pradesh",
        type: "state",
        keyIndustries: ["Agriculture", "Industry", "Services"],
        investmentOpportunities: "Industrial corridors and agro-processing",
        majorCities: ["Lucknow", "Kanpur", "Noida"],
        economicAchievements: "Mixed economy with agriculture, industry, and services sectors.",
        infrastructureHighlights: "Expanding transportation networks and industrial areas.",
        demographics: "Highly populous with Hindi as the primary language.",
        policies: "Initiatives to promote industrial growth and social welfare.",
    },
    {
        id: "himachal-pradesh",
        name: "Himachal Pradesh",
        type: "state",
        keyIndustries: ["Tourism", "Agriculture"],
        investmentOpportunities: "Eco-tourism and horticulture",
        majorCities: ["Shimla", "Dharamshala"],
        economicAchievements: "Steady growth in agriculture and tourism sectors.",
        infrastructureHighlights: "Developing road networks in the hilly terrain, improving healthcare and education.",
        demographics: "Diverse population with a mix of languages.",
        policies: "Emphasis on sustainable development, eco-tourism, and agricultural growth.",
    },
    {
        id: "uttarakhand",
        name: "Uttarakhand",
        type: "state",
        keyIndustries: ["Tourism", "Agriculture"],
        investmentOpportunities: "Tourism and small-scale industries",
        majorCities: ["Dehradun", "Nainital"],
        economicAchievements: "Developing its economy with a focus on tourism, agriculture, and small-scale industries.",
        infrastructureHighlights: "Improving road connectivity in a hilly region, promoting tourism.",
        demographics: "Diverse population with various languages.",
        policies: "Emphasis on sustainable tourism, agriculture, and skill development.",
    },
    {
        id: "jharkhand",
        name: "Jharkhand",
        type: "state",
        keyIndustries: ["Mining", "Manufacturing"],
        investmentOpportunities: "Mining and mineral-based industries",
        majorCities: ["Ranchi", "Jamshedpur"],
        economicAchievements: "Economic growth driven by mining and mineral resources.",
        infrastructureHighlights: "Improving road and rail connectivity in a resource-rich region.",
        demographics: "Tribal and non-tribal populations with a variety of languages.",
        policies: "Policies to promote mining, industry, and inclusive growth.",
    },
    {
        id: "west-bengal",
        name: "West Bengal",
        type: "state",
        keyIndustries: ["Agriculture", "Manufacturing", "Services"],
        investmentOpportunities: "Ports, manufacturing and services",
        majorCities: ["Kolkata", "Howrah"],
        economicAchievements: "Diverse economy with a focus on agriculture, manufacturing, and services.",
        infrastructureHighlights: "Well-developed transportation networks, ports, and educational institutions.",
        demographics: "Highly populous with Bengali as the primary language.",
        policies: "Emphasis on industrial growth, agriculture, and education.",
    },
    {
        id: "karnataka",
        name: "Karnataka",
        type: "state",
        keyIndustries: ["IT", "Manufacturing", "Agriculture"],
        investmentOpportunities: "IT and tech manufacturing",
        majorCities: ["Bengaluru", "Mysore"],
        economicAchievements: "Strong economy with a focus on IT, manufacturing, and agriculture.",
        infrastructureHighlights: "Well-developed road networks, IT hubs, and educational institutions.",
        demographics: "Diverse population with Kannada as the primary language.",
        policies: "Pro-business policies, focus on IT and innovation, and sustainable development.",
    },
    {
        id: "andaman-and-nicobar",
        name: "Andaman and Nicobar",
        type: "ut",
        keyIndustries: ["Tourism", "Fisheries"],
        investmentOpportunities: "Eco-tourism and fisheries",
        majorCities: ["Port Blair"],
        economicAchievements: "Developing tourism and fisheries sectors.",
        infrastructureHighlights: "Improving connectivity, eco-tourism, and sustainable resource management.",
        demographics: "Diverse population with multiple languages spoken.",
        policies: "Focus on promoting tourism, environmental conservation, and fisheries.",
    },
    {
        id: "kerala",
        name: "Kerala",
        type: "state",
        keyIndustries: ["Tourism", "Services"],
        investmentOpportunities: "Healthcare, tourism and services",
        majorCities: ["Thiruvananthapuram", "Kochi"],
        economicAchievements: "High human development indicators, driven by tourism, remittances, and services.",
        infrastructureHighlights: "Quality healthcare, education, and modern transportation.",
        demographics: "Literate and diverse population with Malayalam as the primary language.",
        policies: "Emphasis on social welfare, healthcare, and education.",
    },
    {
        id: "chandigarh",
        name: "Chandigarh",
        type: "ut",
        keyIndustries: ["Services", "Education"],
        investmentOpportunities: "Education and services",
        majorCities: ["Chandigarh"],
        economicAchievements: "A prosperous city with a diverse economy, including government services and education.",
        infrastructureHighlights: "Well-planned city with modern infrastructure and educational institutions.",
        demographics: "Diverse population, primarily Hindi and Punjabi speakers.",
        policies: "Focus on urban development, education, and healthcare.",
    },
    {
        id: "maharashtra",
        name: "Maharashtra",
        type: "state",
        keyIndustries: ["Finance", "Industry", "Agriculture"],
        investmentOpportunities: "Finance, industry and infrastructure",
        majorCities: ["Mumbai", "Pune"],
        economicAchievements: "Economic powerhouse with a diverse economy, including finance, industry, and agriculture.",
        infrastructureHighlights: "Well-developed transport, industrial hubs, and educational institutions.",
        demographics: "Diverse population with Marathi as the primary language.",
        policies: "Business-friendly policies, focus on industrialization, and infrastructure development.",
    },
    {
        id: "dadra-and-nagar-haveli",
        name: "Dadra & Nagar Haveli",
        type: "ut",
        keyIndustries: ["Small-scale Industry"],
        investmentOpportunities: "Local industry development",
        majorCities: ["Silvassa"],
        economicAchievements: "Developing agriculture and small-scale industries.",
        infrastructureHighlights: "Improving road networks and promoting local industries.",
        demographics: "Diverse population with various languages.",
        policies: "Emphasis on local industry development and welfare.",
    },
    {
        id: "madhya-pradesh",
        name: "Madhya Pradesh",
        type: "state",
        keyIndustries: ["Agriculture", "Manufacturing"],
        investmentOpportunities: "Agri-processing and industry",
        majorCities: ["Bhopal", "Indore"],
        economicAchievements: "Gradual economic growth with an emphasis on agriculture and manufacturing.",
        infrastructureHighlights: "Expanding road and rail networks, improving connectivity.",
        demographics: "Diverse population with a predominantly Hindi-speaking population.",
        policies: "Initiatives to promote industries and skill development.",
    },
    {
        id: "daman-and-diu",
        name: "Daman & Diu",
        type: "ut",
        keyIndustries: ["Tourism", "Small Industry"],
        investmentOpportunities: "Tourism and small-scale industry",
        majorCities: ["Daman"],
        economicAchievements: "Focus on tourism and small-scale industries.",
        infrastructureHighlights: "Improving transportation and tourism infrastructure.",
        demographics: "Diverse population with various languages.",
        policies: "Promoting tourism and small-scale industries.",
    },
    {
        id: "manipur",
        name: "Manipur",
        type: "state",
        keyIndustries: ["Agriculture", "Handicrafts"],
        investmentOpportunities: "Handicrafts and agri-value chains",
        majorCities: ["Imphal"],
        economicAchievements: "Developing its economy with a focus on agriculture and handicrafts.",
        infrastructureHighlights: "Improving road connectivity in a hilly region.",
        demographics: "Diverse tribal population with Meiteilon as the primary language.",
        policies: "Focus on preserving indigenous culture and promoting cottage industries.",
    },
    {
        id: "jammu-and-kashmir",
        name: "Jammu & Kashmir",
        type: "ut",
        keyIndustries: ["Agriculture", "Tourism", "Handicrafts"],
        investmentOpportunities: "Tourism and horticulture",
        majorCities: ["Srinagar", "Jammu"],
        economicAchievements: "Transitioning economy with agriculture, horticulture, and handicrafts.",
        infrastructureHighlights: "Developing connectivity and tourism infrastructure.",
        demographics: "Diverse population with multiple languages, including Urdu, Dogri, and Kashmiri.",
        policies: "Emphasis on tourism, agriculture, and inclusive development.",
    },
    {
        id: "meghalaya",
        name: "Meghalaya",
        type: "state",
        keyIndustries: ["Agriculture", "Tourism", "Minerals"],
        investmentOpportunities: "Eco-tourism and mineral value chains",
        majorCities: ["Shillong"],
        economicAchievements: "Agriculture, tourism, and mineral resources contribute to the economy.",
        infrastructureHighlights: "Developing transportation and tourism infrastructure.",
        demographics: "Diverse tribal population with Khasi and Garo as prominent languages.",
        policies: "Emphasis on sustainable tourism and preserving tribal heritage.",
    },
    {
        id: "lakshadweep",
        name: "Lakshadweep",
        type: "ut",
        keyIndustries: ["Fisheries", "Tourism"],
        investmentOpportunities: "Fisheries and eco-tourism",
        majorCities: ["Kavaratti"],
        economicAchievements: "Economic growth through fisheries and tourism.",
        infrastructureHighlights: "Improving transportation networks and eco-tourism.",
        demographics: "Predominantly Muslim population with Malayalam as the primary language.",
        policies: "Focus on sustainable fishing, tourism, and environmental conservation.",
    },
    {
        id: "mizoram",
        name: "Mizoram",
        type: "state",
        keyIndustries: ["Agriculture", "Handicrafts"],
        investmentOpportunities: "Handicrafts and niche agriculture",
        majorCities: ["Aizawl"],
        economicAchievements: "Gradual economic growth with a focus on agriculture and handicrafts.",
        infrastructureHighlights: "Improving road connectivity in a hilly region.",
        demographics: "Diverse tribal population with Mizo as the primary language.",
        policies: "Focus on preserving indigenous culture and promoting cottage industries.",
    },
    {
        id: "puducherry",
        name: "Puducherry",
        type: "ut",
        keyIndustries: ["Tourism", "Services"],
        investmentOpportunities: "Tourism and services",
        majorCities: ["Puducherry"],
        economicAchievements: "Growing economy with tourism, agriculture, and services sectors.",
        infrastructureHighlights: "Well-developed transportation and healthcare facilities.",
        demographics: "Diverse population with multiple languages spoken.",
        policies: "Emphasis on tourism, education, and healthcare.",
    },
];

const StatesPage = () => {
    return (
        <div>
            <PageHero
                title="Investment Opportunities by States"
                breadcrumbs={[
                    { label: "Investment Opportunities", href: "/investment-opportunities" },
                    { label: "States" }
                ]}
                backgroundImage="/cultural.webp"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Investment Opportunities by <span className="text-orange-500">States</span>
                        </h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Discover investment potential across India&apos;s diverse states with comprehensive data on GDP,
                            major industries, key projects, and investment opportunities.
                        </p>
                    </div>

                    {/* States Grid */}
                    <div className="space-y-8">
                        {statesData.map((state, index) => (
                            <div
                                key={state.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Content Section */}
                                    <div className="lg:w-2/3 p-8 lg:p-12">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                <MapPin className="w-6 h-6 text-orange-500 mr-2" />
                                                <span className="text-orange-500 font-semibold">
                                                    {state.majorCities && state.majorCities[0] ? state.majorCities[0] : "Capital"}
                                                </span>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${state.type === 'ut' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                                }`}>
                                                {state.type === 'ut' ? 'Union Territory' : 'State'}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{state.name}</h3>

                                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                            {state.economicAchievements}
                                        </p>

                                        {/* Investment Opportunities */}
                                        <div className="bg-orange-50 p-4 rounded-lg mb-6 border-l-4 border-orange-500">
                                            <h5 className="font-semibold text-gray-800 mb-2">Investment Opportunities</h5>
                                            <p className="text-gray-700 text-sm">{state.investmentOpportunities}</p>
                                        </div>

                                        {/* Key Industries */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-lg mb-3 text-gray-800">Key Industries</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {state.keyIndustries.map((industry, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                                                    >
                                                        {industry}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Major Cities */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-lg mb-3 text-gray-800">Major Cities</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {state.majorCities.map((city, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                                    >
                                                        {city}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Infrastructure & Policies */}
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-gray-800 mb-2">Infrastructure</h5>
                                                <p className="text-gray-700 text-sm">{state.infrastructureHighlights}</p>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
                                                <p className="text-gray-700 text-sm">{state.policies}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="lg:w-1/3 h-64 lg:h-auto relative">
                                        <Image
                                            src="/cultural.webp"
                                            alt={`${state.name} Investment Opportunities`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="text-sm font-medium">Investment Hub</p>
                                            <p className="text-lg font-bold">{state.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Invest in India&apos;s Growth Story?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Connect with our investment experts to explore opportunities in your preferred state.
                        </p>
                        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Contact Investment Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatesPage