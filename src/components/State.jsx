"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, MapPin, TrendingUp, Building2, Factory, Users, Briefcase } from "lucide-react"
import HeadText from "./head-text"

const statesData = [
    {
        id: "maharashtra",
        name: "Maharashtra",
        type: "state",
        mapPath: "M150,200 L200,180 L220,220 L180,250 L140,240 Z",
        keyIndustries: ["Automotive", "IT & Software", "Pharmaceuticals", "Textiles"],
        investmentOpportunities: "Leading industrial state with strong infrastructure and skilled workforce",
        growthRate: "8.2%",
        majorCities: ["Mumbai", "Pune", "Nagpur"],
        backgroudImage: "/placeholder.svg",
        economicAchievements:
            "Maharashtra contributes 14.7% to India's GDP and is the financial capital with robust industrial growth.",
        infrastructureHighlights: "World-class ports, extensive railway network, and modern industrial corridors.",
        demographics: "Population of 112 million with Marathi as the blue-600 language and high literacy rates.",


    },
    {
        id: "gujarat",
        name: "Gujarat",
        type: "state",
        mapPath: "M80,180 L130,170 L140,210 L100,230 L70,220 Z",
        keyIndustries: ["Chemicals", "Petrochemicals", "Textiles", "Pharmaceuticals"],
        investmentOpportunities: "Business-friendly policies and excellent port connectivity",
        growthRate: "9.1%",
        majorCities: ["Ahmedabad", "Surat", "Vadodara"],
        backgroudImage: "/placeholder.svg",
        economicAchievements: "Gujarat leads in chemical production and has the highest industrial growth rate in India.",
        infrastructureHighlights: "Longest coastline with major ports like Kandla and JNPT, excellent road connectivity.",
        demographics:
            "Diverse population of 60 million with Gujarati as blue-600 language and strong entrepreneurial culture.",

    },
    {
        id: "karnataka",
        name: "Karnataka",
        type: "state",
        mapPath: "M140,280 L180,270 L190,310 L160,330 L130,320 Z",
        keyIndustries: ["IT & Software", "Biotechnology", "Aerospace", "Textiles"],
        investmentOpportunities: "Silicon Valley of India with thriving startup ecosystem",
        growthRate: "8.8%",
        majorCities: ["Bangalore", "Mysore", "Hubli"],
        backgroudImage: "/placeholder.svg",
        economicAchievements: "Karnataka is India's IT hub contributing 38% of software exports and leading in innovation.",
        infrastructureHighlights:
            "World-class IT infrastructure, international airport, and excellent educational institutions.",
        demographics: "Population of 61 million with Kannada as blue-600 language and high tech literacy.",

    },
    {
        id: "tamil-nadu",
        name: "Tamil Nadu",
        type: "state",
        mapPath: "M160,340 L200,330 L210,370 L180,390 L150,380 Z",
        keyIndustries: ["Automotive", "Textiles", "Leather", "IT & Software"],
        investmentOpportunities: "Strong manufacturing base and skilled workforce",
        growthRate: "8.5%",
        majorCities: ["Chennai", "Coimbatore", "Madurai"],
        backgroudImage: "/placeholder.svg",
        economicAchievements:
            "Tamil Nadu is the second-largest economy in India with strong manufacturing and services sectors.",
        infrastructureHighlights: "Major ports in Chennai and Tuticorin, extensive industrial corridors and IT parks.",
        demographics: "Population of 72 million with Tamil as blue-600 language and rich cultural heritage.",


    },
    {
        id: "rajasthan",
        name: "Rajasthan",
        type: "state",
        mapPath: "M80,120 L140,110 L150,150 L110,170 L70,160 Z",
        keyIndustries: ["Mining", "Textiles", "Tourism", "Handicrafts"],
        investmentOpportunities: "Rich mineral resources and growing renewable energy sector",
        growthRate: "7.8%",
        majorCities: ["Jaipur", "Jodhpur", "Udaipur"],
        backgroudImage: "/placeholder.svg",
        economicAchievements: "Rajasthan leads in mineral production and is emerging as a renewable energy hub.",
        infrastructureHighlights:
            "Rich mineral deposits, solar and wind energy projects, and heritage tourism infrastructure.",
        demographics: "Population of 68 million with Hindi and Rajasthani as blue-600 languages and vibrant culture.",

    },
    {
        id: "uttar-pradesh",
        name: "Uttar Pradesh",
        type: "state",
        mapPath: "M140,100 L200,90 L220,130 L180,150 L130,140 Z",
        keyIndustries: ["Agriculture", "Textiles", "Sugar", "Leather"],
        investmentOpportunities: "Large consumer market and improving infrastructure",
        growthRate: "7.2%",
        majorCities: ["Lucknow", "Kanpur", "Agra"],
        backgroudImage: "/placeholder.svg",
        economicAchievements:
            "UP is India's most populous state with significant agricultural and industrial contributions.",
        infrastructureHighlights: "Extensive railway network, major highways, and developing industrial corridors.",
        demographics: "Population of 200 million with Hindi as blue-600 language and diverse cultural landscape.",

    },
    {
        id: "west-bengal",
        name: "West Bengal",
        type: "state",
        mapPath: "M220,150 L260,140 L270,180 L240,200 L210,190 Z",
        keyIndustries: ["Jute", "Tea", "Steel", "Engineering"],
        investmentOpportunities: "Strategic location and skilled workforce",
        growthRate: "7.9%",
        majorCities: ["Kolkata", "Howrah", "Durgapur"],
        backgroudImage: "/placeholder.svg",
        economicAchievements:
            "West Bengal has a rich industrial heritage and is a major center for jute and tea production.",
        infrastructureHighlights: "Major port in Kolkata, extensive railway network, and industrial clusters.",
        demographics: "Population of 91 million with Bengali as blue-600 language and rich literary tradition.",

    },
    {
        id: "delhi",
        name: "Delhi",
        type: "ut",
        mapPath: "M150,80 L170,75 L175,95 L165,105 L145,100 Z",
        keyIndustries: ["Services", "Manufacturing", "Tourism", "IT"],
        investmentOpportunities: "National capital with excellent connectivity",
        growthRate: "8.9%",
        majorCities: ["New Delhi", "Delhi"],
        backgroudImage: "/placeholder.svg",
        economicAchievements: "Delhi is the political and commercial center of India with highest per capita income.",
        infrastructureHighlights: "World-class metro system, international airport, and excellent connectivity.",
        demographics: "Population of 30 million with Hindi as blue-600 language and cosmopolitan culture.",

    },
]

const ChooseState = () => {
    const [selectedState, setSelectedState] = useState(null)
    const [hoveredState, setHoveredState] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const itemsPerPage = 4
    const totalPages = Math.ceil(statesData.length / itemsPerPage)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages)
            setSelectedState(null) // Close any open accordion when page changes
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, totalPages])

    const getCurrentPageData = () => {
        const startIndex = currentPage * itemsPerPage
        return statesData.slice(startIndex, startIndex + itemsPerPage)
    }

    const handleStateClick = (stateId) => {
        setSelectedState(selectedState === stateId ? null : stateId)
        setIsAutoPlaying(false) // Pause auto-play when user interacts

        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => {
            setIsAutoPlaying(true)
        }, 10000)
    }

    const handleMouseEnter = () => {
        setIsAutoPlaying(false)
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsAutoPlaying(true)
        }, 2000)
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <HeadText
                title={"CHOOSE YOUR"}
                title2={"STATE/UT"}
                subtitle={"Select a state or union territory to explore investment opportunities."}
            />

            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {getCurrentPageData().map((state) => (
                    <Card
                        key={state.id}
                        className={`group cursor-pointer transition-all max-h-min duration-500 hover:shadow-2xl hover:scale-[1.02] border-2 overflow-hidden ${selectedState === state.id
                            ? "border-blue-600 shadow-2xl ring-2 ring-blue-600/20"
                            : "border-border hover:border-blue-600/50 hover:shadow-lg"
                            }`}
                        onClick={() => handleStateClick(state.id)}
                        onMouseEnter={() => setHoveredState(state.id)}
                        onMouseLeave={() => setHoveredState(null)}
                    >
                        <CardContent className="p-0">
                            {/* Header Section */}
                            <div className="p-6 bg-gradient-to-r from-background to-muted/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">


                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                                                    {state.name}
                                                </h3>
                                                <Badge variant={state.type === "ut" ? "secondary" : "outline"} className="text-xs font-medium">
                                                    {state.type === "ut" ? "UT" : "State"}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <TrendingUp className="w-4 h-4 text-green-500" />
                                                <span className="font-medium">Growth Rate: {state.growthRate}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ChevronRight
                                        className={`w-5 h-5 transition-all duration-300 text-blue-600 ${selectedState === state.id ? "rotate-90 scale-110" : ""
                                            }`}
                                    />
                                </div>
                            </div>

                            {selectedState === state.id && (
                                <div className="animate-in slide-in-from-top-2 duration-500">
                                    {/* Background Image Section */}
                                    <div
                                        className="relative h-64 bg-cover bg-center"
                                        style={{
                                            backgroudImage: "/placeholder.svg",
                                            backgroundImage: `url(${state.backgroudImage})`,

                                        }}
                                    >
                                        <div className="absolute inset-0 p-6 text-black">
                                            <div className="space-y-3">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <TrendingUp className="w-4 h-4" />
                                                        <span className="text-sm font-semibold">Economic Achievements</span>
                                                    </div>
                                                    <p className="text-sm ">{state.economicAchievements}</p>
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Building2 className="w-4 h-4" />
                                                        <span className="text-sm font-semibold">Infrastructure Highlights</span>
                                                    </div>
                                                    <p className="text-sm">{state.infrastructureHighlights}</p>
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Users className="w-4 h-4" />
                                                        <span className="text-sm font-semibold">Demographics</span>
                                                    </div>
                                                    <p className="text-sm">{state.demographics}</p>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    {/* Details Section */}
                                    <div className="p-6 bg-gradient-to-b from-muted/30 to-background">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Factory className="w-5 h-5 text-blue-600" />
                                                    <span className="font-semibold text-foreground">Key Industries</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {state.keyIndustries.map((industry) => (
                                                        <Badge
                                                            key={industry}
                                                            variant="outline"
                                                            className="text-xs font-medium border-blue-600/30 hover:bg-blue-600/10"
                                                        >
                                                            {industry}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <MapPin className="w-5 h-5 text-blue-600" />
                                                    <span className="font-semibold text-foreground">Major Cities</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {state.majorCities.map((city) => (
                                                        <Badge
                                                            key={city}
                                                            variant="secondary"
                                                            className="text-xs font-medium bg-blue-600/10 text-blue-600 hover:bg-blue-600/20"
                                                        >
                                                            {city}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="flex gap-3">
                                            <Button
                                                size="sm"
                                                className="flex-1 bg-blue-600 hover:bg-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                            >
                                                <MapPin className="w-4 h-4 mr-2" />
                                                Explore Opportunities
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1 border-blue-600/30 hover:bg-blue-600/10 hover:border-blue-600 transition-all duration-300 bg-transparent"
                                            >
                                                <TrendingUp className="w-4 h-4 mr-2" />
                                                Investment Data
                                            </Button>
                                        </div> */}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center items-center gap-3 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentPage(index)
                            setIsAutoPlaying(false)
                            setTimeout(() => setIsAutoPlaying(true), 5000)
                        }}
                        className={`transition-all duration-300 rounded-full ${index === currentPage
                            ? "w-8 h-3 bg-blue-600 shadow-lg"
                            : "w-3 h-3 bg-border hover:bg-blue-600/50 hover:scale-125"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChooseState
