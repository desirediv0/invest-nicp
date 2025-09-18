"use client"

import { useState, useEffect } from "react"
import useResponsiveGrid from "@/lib/useResponsiveGrid"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
const placeholderImg = '/placeholder.svg'
import { BorderBeam } from "./magicui/border-beam"
import HeadText from "./head-text"

import {
    IoLocationOutline,
    IoTrendingUpOutline,
    IoStorefrontOutline,
    IoBusinessOutline,
    IoTrophyOutline,
    IoPeopleOutline,
    IoDocumentTextOutline,
    IoConstructOutline,
} from "react-icons/io5"

const statesData = [
    {
        id: "andhra-pradesh",
        name: "Andhra Pradesh",
        cardImage: banner1,
        gallery: [banner1, banner2, banner3],
        mapIcon: placeholderImg,
        type: "state",
        keyIndustries: ["Agriculture", "IT", "Manufacturing"],
        investmentOpportunities: "Strong opportunities in agriculture, IT parks, ports and renewable energy",
        majorCities: ["Amaravati", "Visakhapatnam", "Vijayawada"],
        economicAchievements:
            "Andhra Pradesh has seen significant economic growth with a focus on agriculture, IT, and manufacturing sectors.",
        infrastructureHighlights: "Development of Amaravati as the new capital, expansion of ports and airports.",
        demographics: "Diverse population with Telugu as the primary language.",
        policies: "Focus on promoting industries through policies like 'Sunrise Andhra Pradesh' and 'Ease of Doing Business.'",
    },
    {
        id: "nagaland",
        name: "Nagaland",
        cardImage: banner2,
        gallery: [banner2, banner3, placeholderImg],
        mapIcon: placeholderImg,
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
        cardImage: banner3,
        gallery: [banner3, banner1, placeholderImg],
        mapIcon: placeholderImg,
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
        cardImage: banner1,
        gallery: [banner1, banner2],
        mapIcon: placeholderImg,
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
]

const ChooseState = () => {
    const [selectedState, setSelectedState] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const resumeTimerRef = null

    const { itemsPerPage, gridClass } = useResponsiveGrid()
    const totalPages = Math.ceil(statesData.length / itemsPerPage)

    useEffect(() => {
        let interval = null
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentPage((prev) => (prev + 1) % totalPages)
                setSelectedState(null)
            }, 5000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isAutoPlaying, totalPages])

    // Reset page when itemsPerPage changes (prevents out-of-range pages)
    useEffect(() => {
        setCurrentPage(0)
    }, [itemsPerPage])

    const getCurrentPageData = () => {
        const startIndex = currentPage * itemsPerPage
        return statesData.slice(startIndex, startIndex + itemsPerPage)
    }

    // helper to pause autoplay and optionally resume after a delay
    const pauseAutoplay = (duration = 15000) => {
        setIsAutoPlaying(false)
        // clear any existing timers stored on the component
        if (typeof window !== "undefined") {
            if (window.__resumeStateTimer) {
                clearTimeout(window.__resumeStateTimer)
                window.__resumeStateTimer = null
            }
            if (duration > 0) {
                window.__resumeStateTimer = setTimeout(() => {
                    // only resume if dialog is not open
                    if (!isDialogOpen) setIsAutoPlaying(true)
                    window.__resumeStateTimer = null
                }, duration)
            }
        }
    }

    const handleStateClick = (stateId) => {
        const newSel = selectedState === stateId ? null : stateId
        setSelectedState(newSel)
        // open dialog when selecting a state
        setIsDialogOpen(newSel !== null)
        // pause autoplay while user is interacting
        pauseAutoplay(15000)
    }

    return (
        <div
            className="w-full max-w-7xl mx-auto px-4 py-5 bg-background"
            onMouseEnter={() => pauseAutoplay(0)}
            onMouseLeave={() => {
                // only resume when dialog is not open
                if (!isDialogOpen) setIsAutoPlaying(true)
            }}
        >
            <HeadText
                title="CHOOSE YOUR"
                title2="STATE/UT"
                subtitle="Explore comprehensive investment opportunities across India's states and union territories with detailed insights into economic achievements, infrastructure, and policies."
            />

            <motion.div
                className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <AnimatePresence mode="wait">
                    {getCurrentPageData().map((state, index) => (
                        <motion.div
                            key={state.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card
                                className={`group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border-2 overflow-hidden relative rounded-none h-full flex flex-col ${selectedState === state.id
                                    ? "border-orange-500 shadow-2xl ring-2 ring-orange-200 bg-white"
                                    : "bg-white border-gray-200 hover:border-orange-500 hover:shadow-2xl"
                                    }`}
                                onClick={() => handleStateClick(state.id)}
                            >
                                <BorderBeam
                                    duration={12 + index}
                                    size={250}
                                    className="from-transparent via-primary to-transparent opacity-40"
                                    colorFrom="hsl(var(--primary))"
                                    colorTo="hsl(var(--secondary))"
                                />

                                <CardContent className="p-0">
                                    {/* Image Section */}
                                    <div className="relative h-32 bg-gray-100 overflow-hidden">
                                        {state.cardImage ? (
                                            <Image src={state.cardImage} alt={state.name} fill className="object-cover" />
                                        ) : (
                                            <div className="absolute inset-0 bg-gray-100" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>

                                    {/* Name Section */}
                                    <div className="p-3 bg-card">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-bold text-gray-900 leading-tight">{state.name}</h3>
                                            <Badge
                                                variant={state.type === "ut" ? "secondary" : "outline"}
                                                className={`text-xs font-medium px-2 py-1  ${state.type === "ut"
                                                    ? "bg-accent/20 text-accent-foreground border-accent/30"
                                                    : "bg-secondary/20 text-secondary-foreground border-secondary/30 "
                                                    }`}
                                            >
                                                {state.type === "ut" ? "UT" : ""}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Details Dialog */}
                <AnimatePresence>
                    {isDialogOpen && selectedState && (
                        <motion.div
                            key="state-dialog"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center"
                        >
                            {/* Backdrop */}
                            <motion.button
                                aria-label="Close dialog"
                                onClick={() => { setIsDialogOpen(false); setSelectedState(null) }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black"
                            />

                            <motion.div
                                initial={{ y: 40, opacity: 0, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 20, opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.35 }}
                                className="relative w-full max-w-4xl mx-4 my-4 bg-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                                role="dialog"
                                aria-modal="true"
                            >
                                <div className="p-4 md:p-6 border-b flex items-start justify-between">
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 overflow-hidden flex-shrink-0">
                                            {statesData.find(s => s.id === selectedState)?.cardImage ? (
                                                <Image
                                                    src={statesData.find(s => s.id === selectedState)?.cardImage}
                                                    alt={statesData.find(s => s.id === selectedState)?.name}
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-100" />
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h2 className="text-lg md:text-2xl font-bold flex items-center gap-2 flex-wrap">
                                                <span className="truncate">{statesData.find(s => s.id === selectedState)?.name}</span>
                                                <Badge
                                                    variant={statesData.find(s => s.id === selectedState)?.type === "ut" ? "secondary" : "outline"}
                                                    className="text-xs flex-shrink-0"
                                                >
                                                    {statesData.find(s => s.id === selectedState)?.type === "ut" ? "UT" : "State"}
                                                </Badge>
                                            </h2>
                                            <p className="text-sm text-muted-foreground mt-1">Detailed overview</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button
                                            onClick={() => { setIsDialogOpen(false); setSelectedState(null) }}
                                            className="text-gray-500 hover:text-gray-800 p-2 text-xl"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 md:p-6">
                                    {(() => {
                                        const currentItem = statesData.find(item => item.id === selectedState)
                                        if (!currentItem) return null

                                        return (
                                            <div className="space-y-4 md:space-y-6">
                                                {/* Investment Opportunities */}
                                                {currentItem.investmentOpportunities && (
                                                    <div className="bg-primary/5 border border-primary/20 shadow-sm p-4 md:p-5">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                                                                <IoTrendingUpOutline className="w-5 h-5 text-primary" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground">Investment Opportunities</span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.investmentOpportunities}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Major Cities */}
                                                {currentItem.majorCities && currentItem.majorCities.length > 0 && (
                                                    <div className="bg-accent/5 border border-accent/20 shadow-sm p-4 md:p-5">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                                                                <IoStorefrontOutline className="w-5 h-5 text-accent" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground">Major Cities</span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {currentItem.majorCities.map((city) => (
                                                                <Badge
                                                                    key={city}
                                                                    variant="secondary"
                                                                    className="text-xs bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                                                                >
                                                                    {city}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Economic Achievements */}
                                                {currentItem.economicAchievements && (
                                                    <div className="bg-primary/5 border border-primary/20 shadow-sm p-4 md:p-5">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                                                                <IoTrophyOutline className="w-5 h-5 text-primary" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground">Economic Achievements</span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.economicAchievements}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Infrastructure */}
                                                {currentItem.infrastructureHighlights && (
                                                    <div className="bg-secondary/5 border border-secondary/20 shadow-sm p-4 md:p-5">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center">
                                                                <IoConstructOutline className="w-5 h-5 text-secondary" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground">Infrastructure Highlights</span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.infrastructureHighlights}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Demographics */}
                                                {currentItem.demographics && (
                                                    <div className="bg-accent/5 border border-accent/20 shadow-sm p-4 md:p-5">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                                                                <IoPeopleOutline className="w-5 h-5 text-accent" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground">Demographics & Workforce</span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.demographics}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Government Policies */}
                                                {currentItem.policies && (
                                                    <div className="bg-primary/5 border border-primary/20 shadow-sm p-4 md:p-5">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                                                                <IoDocumentTextOutline className="w-5 h-5 text-primary" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground">Investment Policies</span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.policies}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })()}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-16">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => {
                            setCurrentPage(index)
                            setIsAutoPlaying(false)
                            setTimeout(() => setIsAutoPlaying(true), 10000)
                        }}
                        className={`transition-all duration-300 ${index === currentPage
                            ? "w-12 h-4 bg-orange-500 shadow-lg"
                            : "w-4 h-4 bg-muted-foreground/30 hover:bg-primary/60 hover:scale-125"
                            }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChooseState
