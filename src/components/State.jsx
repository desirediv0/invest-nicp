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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
        growthRate: "",
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
            className="w-full max-w-7xl mx-auto px-4 py-16 bg-background"
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
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"
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
                                    {/* Header Section - simplified to match choose-sector styling */}
                                    <div className="relative h-36 bg-gray-100 overflow-hidden">
                                        {state.cardImage ? (
                                            <Image src={state.cardImage} alt={state.name} fill className="object-cover" />
                                        ) : (
                                            <div className="absolute inset-0 bg-gray-100" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4 z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-white/90 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 border">
                                                    {state.mapIcon ? (
                                                        <Image src={state.mapIcon} alt="map" width={20} height={20} className="object-contain" />
                                                    ) : (
                                                        <IoLocationOutline className="w-6 h-6" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2">{state.name}</h3>
                                                        <Badge
                                                            variant={state.type === "ut" ? "secondary" : "outline"}
                                                            className={`text-xs font-medium px-3 py-1 ${state.type === "ut"
                                                                ? "bg-accent/20 text-accent-foreground border-accent/30"
                                                                : "bg-secondary/20 text-secondary-foreground border-secondary/30"
                                                                }`}
                                                        >
                                                            {state.type === "ut" ? "UT" : "State"}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                                        <IoTrendingUpOutline className="w-5 h-5 text-green-600" />
                                                        <span className="font-semibold">Growth: {state.growthRate || "—"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Info */}
                                    <div className="p-6 bg-card">
                                        <div className="space-y-5">
                                            <div>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <IoBusinessOutline className="w-5 h-5 text-primary" />
                                                    <span className="text-sm font-bold text-card-foreground">Key Industries</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {state.keyIndustries.slice(0, 3).map((industry) => (
                                                        <Badge
                                                            key={industry}
                                                            variant="outline"
                                                            className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors px-3 py-1"
                                                        >
                                                            {industry}
                                                        </Badge>
                                                    ))}
                                                    {state.keyIndustries.length > 3 && (
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs border-accent/30 text-accent hover:bg-accent/10"
                                                        >
                                                            +{state.keyIndustries.length - 3} more
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-border">
                                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                    {state.investmentOpportunities}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    <AnimatePresence>
                                        {selectedState === state.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 bg-muted/30 border-t border-border backdrop-blur-sm">
                                                    <div className="space-y-6">
                                                        {/* Economic Achievements */}
                                                        <div className="bg-card border border-primary/20 shadow-sm p-5">
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                                                                    <IoTrophyOutline className="w-5 h-5 text-primary" />
                                                                </div>
                                                                <span className="font-bold text-card-foreground">Economic Achievements</span>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                {state.economicAchievements}
                                                            </p>
                                                        </div>

                                                        {/* Infrastructure */}
                                                        <div className="bg-card border border-secondary/20 shadow-sm p-5">
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center">
                                                                    <IoConstructOutline className="w-5 h-5 text-secondary" />
                                                                </div>
                                                                <span className="font-bold text-card-foreground">Infrastructure Highlights</span>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                {state.infrastructureHighlights}
                                                            </p>
                                                        </div>

                                                        {/* Demographics */}
                                                        <div className="bg-card border border-accent/20 shadow-sm p-5">
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                                                                    <IoPeopleOutline className="w-5 h-5 text-accent" />
                                                                </div>
                                                                <span className="font-bold text-card-foreground">Demographics & Workforce</span>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">{state.demographics}</p>
                                                        </div>

                                                        {/* Government Policies */}
                                                        <div className="bg-card border border-primary/20 shadow-sm p-5">
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                                                                    <IoDocumentTextOutline className="w-5 h-5 text-primary" />
                                                                </div>
                                                                <span className="font-bold text-card-foreground">Investment Policies</span>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">{state.policies}</p>
                                                        </div>

                                                        {/* All Industries */}
                                                        <div className="bg-card border border-secondary/20 shadow-sm p-5">
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center">
                                                                    <IoBusinessOutline className="w-5 h-5 text-secondary" />
                                                                </div>
                                                                <span className="font-bold text-card-foreground">All Key Industries</span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {state.keyIndustries.map((industry) => (
                                                                    <Badge
                                                                        key={industry}
                                                                        variant="outline"
                                                                        className="text-xs border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors"
                                                                    >
                                                                        {industry}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Major Cities */}
                                                        <div className="bg-card border border-accent/20 shadow-sm p-5">
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                                                                    <IoStorefrontOutline className="w-5 h-5 text-accent" />
                                                                </div>
                                                                <span className="font-bold text-card-foreground">Major Cities</span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {state.majorCities.map((city) => (
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
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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
                                // remove rounded corners to match request
                                className="relative max-w-5xl w-full mx-4 bg-white shadow-2xl overflow-hidden"
                                role="dialog"
                                aria-modal="true"
                            >
                                <div className="p-6 border-b flex items-start justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold">{statesData.find(s => s.id === selectedState)?.name}</h2>
                                        <p className="text-sm text-muted-foreground mt-1">Detailed overview</p>
                                    </div>
                                    <div>
                                        <button onClick={() => { setIsDialogOpen(false); setSelectedState(null) }} className="text-gray-500 hover:text-gray-800">Close</button>
                                    </div>
                                </div>

                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Left: Image grid (4 images in 2x2) */}
                                    <div className="grid grid-cols-2 grid-rows-2 gap-3">
                                        {(() => {
                                            const g = statesData.find(s => s.id === selectedState)?.gallery || []
                                            const imgs = [g[0], g[1], g[2], g[3]]
                                            return imgs.map((src, i) => (
                                                <div key={i} className="w-full h-40 relative bg-gray-100 overflow-hidden">
                                                    {src ? (
                                                        <Image src={src} alt={`img-${i}`} fill className="object-cover" />
                                                    ) : (
                                                        <Image src="/placeholder.svg" alt={`img-${i}`} fill className="object-contain p-4" />
                                                    )}
                                                </div>
                                            ))
                                        })()}
                                    </div>

                                    {/* Right: Detail grid (4x4 style but adapted for content) */}
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-3 bg-gray-50 rounded border">
                                                <h4 className="text-sm font-semibold mb-1">Economic Achievements</h4>
                                                <p className="text-sm text-muted-foreground">{statesData.find(s => s.id === selectedState)?.economicAchievements}</p>
                                            </div>
                                            <div className="p-3 bg-gray-50 rounded border">
                                                <h4 className="text-sm font-semibold mb-1">Infrastructure Highlights</h4>
                                                <p className="text-sm text-muted-foreground">{statesData.find(s => s.id === selectedState)?.infrastructureHighlights}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-3 bg-gray-50 rounded border">
                                                <h4 className="text-sm font-semibold mb-1">Demographics</h4>
                                                <p className="text-sm text-muted-foreground">{statesData.find(s => s.id === selectedState)?.demographics}</p>
                                            </div>
                                            <div className="p-3 bg-gray-50 rounded border">
                                                <h4 className="text-sm font-semibold mb-1">Government Policies</h4>
                                                <p className="text-sm text-muted-foreground">{statesData.find(s => s.id === selectedState)?.policies}</p>
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <h4 className="text-sm font-semibold mb-2">Key Industries</h4>
                                            <div className="grid grid-cols-4 gap-2">
                                                {statesData.find(s => s.id === selectedState)?.keyIndustries.map((k) => (
                                                    <div key={k} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded text-center">{k}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
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
                            ? "w-12 h-4 bg-primary shadow-lg"
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
