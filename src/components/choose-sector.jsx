"use client"

import { useState, useEffect } from "react"
import useResponsiveGrid from "@/lib/useResponsiveGrid"
import { motion, AnimatePresence } from "framer-motion"
import HeadText from "./head-text"
import {
    GiFarmTractor,
    GiProcessor,
    GiCarWheel,
    GiFactory,
    GiCarDoor,
    GiSmartphone,
    GiCommercialAirplane,
    GiMedicalPack,
    GiBanknote,
    GiMining,
    GiDna2,
    GiCardboardBox,
    GiToolbox,
    GiOilPump,
    GiChemicalDrop,
    GiMedicines,
    GiWashingMachine,
    GiCargoShip,
    GiShield,
    GiElectric,
    GiShoppingCart,
    GiSteamLocomotive,
    GiGraduateCap,
    GiHouse,
    GiCircuitry,
    GiWindTurbine,
    GiGears,
    GiShop,
    GiWallet,
    GiRoad,
    GiSoap,
    GiMicroscope,
    GiDiamondRing,
    GiHeadphones,
    GiHeartPlus,
    GiSteelClaws,
    GiModernCity,
    GiTvTower,
    GiClothes,
    GiPalmTree,
} from "react-icons/gi"

const sectorsData = [
    {
        id: "agriculture",
        name: "Agriculture & Allied Industries",
        icon: <GiFarmTractor className="w-8 h-8" />,
        image: "/modern-agriculture-farming-technology.jpg",
        description:
            "Technology-driven practices, sustainable farming, and increased government support. Investment opportunities in agri-tech startups, food processing, and export-oriented agriculture.",
        growth: "Tech-driven transformation",
    },
    {
        id: "it-bpm",
        name: "IT & BPM",
        icon: <GiProcessor className="w-8 h-8" />,
        image: "/it-technology-data-center-servers.jpg",
        description:
            "Digital transformation, cloud computing, and cybersecurity. AI-driven solutions, increased outsourcing, and global tech leadership.",
        growth: "AI & Cloud dominance",
    },
    {
        id: "auto-components",
        name: "Auto Components",
        icon: <GiCarWheel className="w-8 h-8" />,
        image: "/automotive-parts-manufacturing.jpg",
        description:
            "Global manufacturing hub with focus on electric vehicle components, lightweight materials, and supply chain optimization.",
        growth: "EV components boom",
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        icon: <GiFactory className="w-8 h-8" />,
        image: "/modern-manufacturing-factory-automation.jpg",
        description:
            "Make in India initiatives with automation, smart manufacturing, and sustainable practices for export competitiveness.",
        growth: "Industry 4.0 adoption",
    },
    {
        id: "automobiles",
        name: "Automobiles",
        icon: <GiCarDoor className="w-8 h-8" />,
        image: "/electric-vehicles-automotive-industry.jpg",
        description:
            "Transitioning towards electric vehicles and connected mobility solutions with high investment prospects in EV manufacturing.",
        growth: "Electric mobility shift",
    },
    {
        id: "media-entertainment",
        name: "Media & Entertainment",
        icon: <GiSmartphone className="w-8 h-8" />,
        image: "/digital-media-streaming-entertainment.jpg",
        description:
            "Digital streaming and OTT platforms driving content creation, online advertising, and global content exports.",
        growth: "OTT & Digital content",
    },
    {
        id: "aviation",
        name: "Aviation",
        icon: <GiCommercialAirplane className="w-8 h-8" />,
        image: "/placeholder-p7bu8.png",
        description:
            "Recovering with investments in airport infrastructure, regional connectivity, and fleet expansion offering growth potential.",
        growth: "Infrastructure expansion",
    },
    {
        id: "medical-devices",
        name: "Medical Devices",
        icon: <GiMedicalPack className="w-8 h-8" />,
        image: "/placeholder-68qj6.png",
        description:
            "Growing emphasis on indigenous manufacturing with investments in healthcare equipment and quality standards.",
        growth: "Self-sufficiency focus",
    },
    {
        id: "banking",
        name: "Banking",
        icon: <GiBanknote className="w-8 h-8" />,
        image: "/placeholder-um8j5.png",
        description:
            "Digital banking evolution with fintech integration and customer-centric services driving transformation.",
        growth: "Digital transformation",
    },
    {
        id: "metals-mining",
        name: "Metals & Mining",
        icon: <GiMining className="w-8 h-8" />,
        image: "/placeholder-x79x8.png",
        description:
            "Vital for infrastructure with sustainable mining practices, technology adoption, and global metal supply potential.",
        growth: "Sustainable practices",
    },
    {
        id: "biotechnology",
        name: "Biotechnology",
        icon: <GiDna2 className="w-8 h-8" />,
        image: "/placeholder-d5d7i.png",
        description:
            "Growth in pharmaceuticals, vaccines, and genetic research with opportunities in biopharmaceuticals and biotech startups.",
        growth: "22% CAGR projected",
    },
    {
        id: "msme",
        name: "MSME",
        icon: <GiCardboardBox className="w-8 h-8" />,
        image: "/placeholder-0o2sd.png",
        description:
            "Crucial economic role with technology adoption, access to finance, and digital empowerment for export growth.",
        growth: "Digital empowerment",
    },
    {
        id: "cement",
        name: "Cement",
        icon: <GiToolbox className="w-8 h-8" />,
        image: "/placeholder-ry4sz.png",
        description:
            "Robust industry driven by infrastructure development with investments in sustainable practices and capacity expansion.",
        growth: "Infrastructure boom",
    },
    {
        id: "oil-gas",
        name: "Oil & Gas",
        icon: <GiOilPump className="w-8 h-8" />,
        image: "/placeholder-6lha9.png",
        description:
            "Strategic investments in exploration, renewables, and oil refining with focus on energy diversification.",
        growth: "Energy diversification",
    },
    {
        id: "chemicals",
        name: "Chemicals",
        icon: <GiChemicalDrop className="w-8 h-8" />,
        image: "/placeholder-7rk3i.png",
        description:
            "Growing demand in pharmaceuticals, agrochemicals, and specialty chemicals with R&D and green chemistry focus.",
        growth: "Green chemistry focus",
    },
    {
        id: "pharmaceuticals",
        name: "Pharmaceuticals",
        icon: <GiMedicines className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Thriving with research and generics focus, innovation in drug discovery, and global drug supply leadership.",
        growth: "Global supply hub",
    },
    {
        id: "consumer-durables",
        name: "Consumer Durables",
        icon: <GiWashingMachine className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Driven by increasing disposable income with investments in innovative products and smart home solutions.",
        growth: "Smart home revolution",
    },
    {
        id: "ports",
        name: "Ports",
        icon: <GiCargoShip className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Pivotal for trade with investments in port infrastructure, logistics, and digital integration for efficient cargo handling.",
        growth: "Digital integration",
    },
    {
        id: "defence-manufacturing",
        name: "Defence Manufacturing",
        icon: <GiShield className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Expanding with self-reliance push, abundant opportunities in defense production and cybersecurity solutions.",
        growth: "Self-reliance push",
    },
    {
        id: "power",
        name: "Power",
        icon: <GiElectric className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Transitioning to renewable energy with investments in solar, wind, and energy storage for sustainable power generation.",
        growth: "Renewable dominance",
    },
    {
        id: "e-commerce",
        name: "E-Commerce",
        icon: <GiShoppingCart className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Booming market with investments in logistics, digital payments, and AI-driven personalization for enhanced experiences.",
        growth: "AI personalization",
    },
    {
        id: "railways",
        name: "Railways",
        icon: <GiSteamLocomotive className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Modernizing with high-speed trains, electrification, and digital ticketing for efficient connectivity.",
        growth: "High-speed modernization",
    },
    {
        id: "education-training",
        name: "Education & Training",
        icon: <GiGraduateCap className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Digital transformation with investments in edtech, online tutoring, and personalized tech-driven learning.",
        growth: "EdTech revolution",
    },
    {
        id: "real-estate",
        name: "Real Estate",
        icon: <GiHouse className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Adapting to urbanization with investments in affordable housing, smart cities, and sustainable construction.",
        growth: "Smart cities focus",
    },
    {
        id: "electronic-system",
        name: "Electronic System",
        icon: <GiCircuitry className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Aiming for global electronics manufacturing hub with investments in semiconductor fabrication and R&D.",
        growth: "Semiconductor focus",
    },
    {
        id: "renewable-energy",
        name: "Renewable Energy",
        icon: <GiWindTurbine className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Rapid growth in solar and wind power with substantial shift to renewable energy and reduced carbon emissions.",
        growth: "500 GW target by 2030",
    },
    {
        id: "engineering-capital-goods",
        name: "Engineering & Capital Goods",
        icon: <GiGears className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Supporting infrastructure and manufacturing with investments in automation, advanced machinery, and smart manufacturing.",
        growth: "Smart manufacturing",
    },
    {
        id: "retail",
        name: "Retail",
        icon: <GiShop className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Significant growth driven by e-commerce with investments in omni-channel retail and data-driven personalization.",
        growth: "Omni-channel growth",
    },
    {
        id: "financial-services",
        name: "Financial Services",
        icon: <GiWallet className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Rapid evolution with digital banking, fintech, and AI-driven services for enhanced financial inclusion.",
        growth: "AI-driven services",
    },
    {
        id: "roads",
        name: "Roads",
        icon: <GiRoad className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Improving infrastructure with emphasis on expressways and digital traffic management for enhanced connectivity.",
        growth: "Digital traffic systems",
    },
    {
        id: "fmcg",
        name: "FMCG",
        icon: <GiSoap className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Steady sector with investments in product diversification, e-commerce channels, and sustainable packaging.",
        growth: "Sustainable packaging",
    },
    {
        id: "science-technology",
        name: "Science & Technology",
        icon: <GiMicroscope className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Advancing with research and innovation in cutting-edge technology and scientific breakthroughs for global leadership.",
        growth: "Global tech leadership",
    },
    {
        id: "gems-jewellery",
        name: "Gems & Jewellery",
        icon: <GiDiamondRing className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Global leader with investments in technology, design innovation, and ethical sourcing for enhanced brand value.",
        growth: "Ethical sourcing focus",
    },
    {
        id: "services",
        name: "Services",
        icon: <GiHeadphones className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Diverse sector including IT, healthcare, and financial services with digitalization and telehealth focus.",
        growth: "Digital services boom",
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: <GiHeartPlus className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Growing with health awareness and government initiatives, improved accessibility and AI-driven diagnostics.",
        growth: "AI diagnostics revolution",
    },
    {
        id: "steel",
        name: "Steel",
        icon: <GiSteelClaws className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "Growing with emphasis on quality and exports, advanced steel production and sustainable practices.",
        growth: "Advanced production",
    },
    {
        id: "infrastructure",
        name: "Infrastructure",
        icon: <GiModernCity className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description: "Priority for economic growth with robust, sustainable infrastructure and smart urban planning.",
        growth: "$1.4 trillion pipeline",
    },
    {
        id: "telecommunications",
        name: "Telecommunications",
        icon: <GiTvTower className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Evolving with 5G technology and digital services, faster networks and IoT integration for digital inclusion.",
        growth: "5G revolution",
    },
    {
        id: "insurance",
        name: "Insurance",
        icon: <GiShield className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Evolving with digital insurance products and enhanced customer engagement through AI-assisted underwriting.",
        growth: "Digital transformation",
    },
    {
        id: "textiles",
        name: "Textiles",
        icon: <GiClothes className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Expanding with sustainable fashion focus, investments in eco-friendly materials and global textile exports.",
        growth: "Sustainable fashion",
    },
    {
        id: "tourism-hospitality",
        name: "Tourism & Hospitality",
        icon: <GiPalmTree className="w-8 h-8" />,
        image: "/placeholder.svg?height=200&width=300",
        description:
            "Recovering post-pandemic with investments in experiential tourism, unique travel experiences, and sustainable tourism.",
        growth: "Experience economy",
    },
]

const InvestmentSectors = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [selectedSector, setSelectedSector] = useState(null)

    const { itemsPerPage } = useResponsiveGrid()
    const totalPages = Math.ceil(sectorsData.length / itemsPerPage)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages)
            setSelectedSector(null)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, totalPages])

    // Reset page when itemsPerPage changes (prevents out-of-range pages)
    useEffect(() => {
        setCurrentPage(0)
    }, [itemsPerPage])

    const getCurrentPageSectors = () => {
        const startIndex = currentPage * itemsPerPage
        return sectorsData.slice(startIndex, startIndex + itemsPerPage)
    }

    const handleSectorClick = (sectorId) => {
        setSelectedSector(selectedSector === sectorId ? null : sectorId)
    }

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <HeadText
                    title={"Choose Your"}
                    title2={"Investment Sector"}
                    subtitle={"Explore India\'s most promising sectors with comprehensive data on growth opportunities, major markets, and investment potential tailored to your strategic goals."}
                />
            </div>

            {/* Main Grid Container */}
            <div
                className="max-w-7xl mx-auto"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {getCurrentPageSectors().map((sector, index) => (
                            <motion.div
                                key={sector.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group cursor-pointer"
                                onClick={() => handleSectorClick(sector.id)}
                            >
                                <div className="bg-white border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden">
                                    {/* Sector Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={sector.image || "/placeholder.svg"}
                                            alt={sector.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-white/90 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                                    {sector.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">{sector.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1">
                                                {sector.growth}
                                            </span>
                                        </div>

                                        {/* Expandable Content */}
                                        <AnimatePresence>
                                            {selectedSector === sector.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 border-t border-gray-100">
                                                        <p className="text-sm text-gray-600 leading-relaxed">{sector.description}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 transition-all duration-300 ${currentPage === index ? "bg-orange-500 scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            onClick={() => {
                                setCurrentPage(index)
                                setSelectedSector(null)
                            }}
                        />
                    ))}
                </div>

                {/* Page Counter */}
                <div className="text-center mt-6">
                    <span className="text-sm text-gray-500">
                        Page {currentPage + 1} of {totalPages} • {sectorsData.length} Investment Sectors
                    </span>
                </div>
            </div>
        </div>
    )
}

export default InvestmentSectors
