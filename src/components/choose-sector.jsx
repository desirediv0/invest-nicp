"use client"

import { useState, useEffect } from "react"
import HeadText from "./head-text"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
    ChevronDown,
    Cpu,
    Car,
    Plane,
    Banknote,
    Dna,
    Hammer,
    Smartphone,
    Wrench,
    Factory,
    Leaf,
    Shield,
    Shirt,
    Hotel,
    Heart,
    Building,
    Package,
    Cog,
    Pill,
    Sheet as Steel,
    Phone,
} from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { BorderBeam } from "./magicui/border-beam"
import { autocomponents, automobiles, aviation, banking, biotechnology, cement, chemicals, consumerdurables, defencemanufacturing, esdm, healthcare, infrastructure, itbpm, manufacturing, pharmaceuticals, renewablenergy, steel, telecommunications, textiles, tourism } from "@/assets"


const sectorsData = [
    {
        id: "auto-components",
        name: "Auto Components",
        icon: <Wrench className="w-6 h-6" />,
        image: autocomponents,
        description:
            "The auto components industry produces engine parts, drive transmission, body parts, suspension, and braking systems. Benefits from cost competitiveness, skilled labor, and robust supply chain.",
        majorStates: ["Tamil Nadu", "Maharashtra", "Haryana", "Karnataka"],
        growth: "15% CAGR expected",
    },
    {
        id: "automobiles",
        name: "Automobiles",
        icon: <Car className="w-6 h-6" />,
        image: automobiles,
        description:
            "India is one of the largest automobile markets globally, producing two-wheelers, passenger vehicles, commercial vehicles, and electric vehicles (EVs).",
        majorStates: ["Maharashtra", "Tamil Nadu", "Haryana", "Gujarat"],
        growth: "8-10% annual growth",
    },
    {
        id: "aviation",
        name: "Aviation",
        icon: <Plane className="w-6 h-6" />,
        image: aviation,
        description:
            "Rapid growth in domestic and international air travel, cargo services, and aircraft maintenance. Supported by UDAN scheme for regional connectivity.",
        majorStates: ["Delhi NCR", "Maharashtra", "Karnataka", "Telangana"],
        growth: "12% passenger growth",
    },
    {
        id: "banking",
        name: "Banking & Financial Services",
        icon: <Banknote className="w-6 h-6" />,
        image: banking,
        description:
            "Crucial role in financial inclusion, economic growth, and credit distribution across sectors. Includes public, private, and digital banking.",
        majorStates: ["Maharashtra", "Tamil Nadu", "Delhi NCR", "Karnataka"],
        growth: "Digital transformation",
    },
    {
        id: "biotechnology",
        name: "Biotechnology",
        icon: <Dna className="w-6 h-6" />,
        image: biotechnology,
        description:
            "Rapidly growing sector driven by healthcare, agriculture, industrial biotechnology, and bio-services. India is a top biotech destination in Asia.",
        majorStates: ["Karnataka", "Telangana", "Maharashtra", "Tamil Nadu"],
        growth: "22% CAGR projected",
    },
    {
        id: "cement",
        name: "Cement",
        icon: <Hammer className="w-6 h-6" />,
        image: cement,
        description:
            "India is the second-largest cement producer globally. Critical for infrastructure and real estate development with major players like UltraTech and ACC.",
        majorStates: ["Andhra Pradesh", "Rajasthan", "Madhya Pradesh", "Tamil Nadu"],
        growth: "Infrastructure boom",
    },
    {
        id: "chemicals",
        name: "Chemicals & Petrochemicals",
        icon: <Factory className="w-6 h-6" />,
        image: chemicals,
        description:
            "Spans basic chemicals, petrochemicals, fertilizers, paints, dyes, and specialty chemicals. Supports agriculture, textiles, and consumer goods.",
        majorStates: ["Gujarat", "Maharashtra", "Tamil Nadu", "Andhra Pradesh"],
        growth: "9% annual growth",
    },
    {
        id: "consumer-durables",
        name: "Consumer Durables",
        icon: <Package className="w-6 h-6" />,
        image: consumerdurables,
        description:
            "Household appliances and electronics driven by rising incomes, urbanization, and digital penetration. Includes TVs, refrigerators, ACs, washing machines.",
        majorStates: ["Uttar Pradesh", "Tamil Nadu", "Maharashtra", "Andhra Pradesh"],
        growth: "Rising middle class",
    },
    {
        id: "defence-manufacturing",
        name: "Defence Manufacturing",
        icon: <Shield className="w-6 h-6" />,
        image: defencemanufacturing,
        description:
            "Focus on indigenization under 'Make in India' and 'Atmanirbhar Bharat'. Production of arms, ammunition, aircraft, warships, and defence electronics.",
        majorStates: ["Maharashtra", "Tamil Nadu", "Uttar Pradesh", "Telangana"],
        growth: "Self-reliance push",
    },
    {
        id: "esdm",
        name: "Electronics & Semiconductors",
        icon: <Cpu className="w-6 h-6" />,
        image: esdm,
        description:
            "Design and manufacturing of electronics including semiconductors, mobile phones, LED lighting, and consumer electronics. Supported by PLI schemes.",
        majorStates: ["Uttar Pradesh", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
        growth: "PLI scheme boost",
    },
    {
        id: "healthcare",
        name: "Healthcare & Medical Devices",
        icon: <Heart className="w-6 h-6" />,
        image: healthcare,
        description:
            "Expanding with digital health initiatives, telemedicine, medical device manufacturing, and medical tourism. Strong private and public sector presence.",
        majorStates: ["Tamil Nadu", "Maharashtra", "Karnataka", "Delhi NCR"],
        growth: "Medical tourism hub",
    },
    {
        id: "infrastructure",
        name: "Infrastructure",
        icon: <Building className="w-6 h-6" />,
        image: infrastructure,
        description:
            "Booming with smart cities, highways, railways, and urban development. Driven by National Infrastructure Pipeline and government initiatives.",
        majorStates: ["Maharashtra", "Gujarat", "Uttar Pradesh", "Tamil Nadu"],
        growth: "$1.4 trillion pipeline",
    },
    {
        id: "it-bpm",
        name: "IT & Software Services",
        icon: <Smartphone className="w-6 h-6" />,
        image: itbpm,
        description:
            "Global leader in IT services, software development, and BPM. Opportunities in AI, cloud computing, and digital transformation services.",
        majorStates: ["Karnataka", "Maharashtra", "Telangana", "Tamil Nadu"],
        growth: "Digital transformation",
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        icon: <Cog className="w-6 h-6" />,
        image: manufacturing,
        description:
            "Evolving with 'Make in India' initiatives. Focus on automation, smart manufacturing, and sustainable practices across multiple sectors.",
        majorStates: ["Maharashtra", "Tamil Nadu", "Gujarat", "Uttar Pradesh"],
        growth: "Industry 4.0 adoption",
    },
    {
        id: "pharmaceuticals",
        name: "Pharmaceuticals",
        icon: <Pill className="w-6 h-6" />,
        image: pharmaceuticals,
        description:
            "World's largest supplier of generic medicines and vaccines. Strong in bulk drugs, formulations, biotechnology, and R&D with skilled workforce.",
        majorStates: ["Telangana", "Maharashtra", "Gujarat", "Himachal Pradesh"],
        growth: "Global supply hub",
    },
    {
        id: "renewable-energy",
        name: "Renewable Energy",
        icon: <Leaf className="w-6 h-6" />,
        image: renewablenergy,
        description:
            "Rapidly expanding with solar, wind, and green hydrogen opportunities. One of the world's largest renewable energy producers driving sustainable growth.",
        majorStates: ["Rajasthan", "Tamil Nadu", "Gujarat", "Karnataka"],
        growth: "500 GW target by 2030",
    },
    {
        id: "steel",
        name: "Steel & Metals",
        icon: <Steel className="w-6 h-6" />,
        image: steel,
        description:
            "Second-largest steel producer globally. Critical for infrastructure, construction, automotive, and machinery with integrated plants and mini-mills.",
        majorStates: ["Jharkhand", "Odisha", "Chhattisgarh", "Maharashtra"],
        growth: "Infrastructure demand",
    },
    {
        id: "telecommunications",
        name: "Telecommunications",
        icon: <Phone className="w-6 h-6" />,
        image: telecommunications,
        description:
            "One of the largest telecom markets globally with 5G rollout and digital transformation. Focus on network infrastructure, IoT solutions, and digital services.",
        majorStates: ["Maharashtra", "Karnataka", "Delhi NCR", "Tamil Nadu"],
        growth: "5G revolution",
    },
    {
        id: "textiles",
        name: "Textiles & Apparel",
        icon: <Shirt className="w-6 h-6" />,
        image: textiles,
        description:
            "Major export earner covering cotton, silk, wool, jute, and synthetic fibers. Opportunities in technical textiles, sustainable fashion, and value-added products.",
        majorStates: ["Tamil Nadu", "Gujarat", "Maharashtra", "West Bengal"],
        growth: "Sustainable fashion",
    },
    {
        id: "tourism",
        name: "Tourism & Hospitality",
        icon: <Hotel className="w-6 h-6" />,
        image: tourism,
        description:
            "Immense potential with cultural heritage, adventure tourism, and hospitality services. Key for employment and regional development.",
        majorStates: ["Rajasthan", "Uttar Pradesh", "Kerala", "Goa"],
        growth: "Experience economy",
    },
]

const ChooseSector = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [openAccordion, setOpenAccordion] = useState("")

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Math.ceil(sectorsData.length / 9))
            setOpenAccordion("")
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const handleAccordionChange = (value) => {
        setOpenAccordion(value === openAccordion ? "" : value)
    }

    return (
        <div className="py-16 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
            <HeadText
                title="Choose Your"
                title2="Investment Sector"
                subtitle="Explore India's most promising sectors with comprehensive data on growth opportunities, major states, and market potential tailored to your investment goals."
            />

            <div
                className="max-w-7xl mx-auto"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <Carousel className="w-full" plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}>
                    <CarouselContent>
                        {Array.from({ length: Math.ceil(sectorsData.length / 9) }).map((_, slideIndex) => (
                            <CarouselItem key={slideIndex}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
                                    {sectorsData.slice(slideIndex * 9, slideIndex * 9 + 9).map((sector, index) => (
                                        <motion.div
                                            key={sector.id}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="relative group"
                                        >
                                            <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                                <BorderBeam
                                                    duration={8 + index}
                                                    size={200}
                                                    className="from-transparent via-blue-500 to-transparent opacity-60"
                                                />

                                                <div
                                                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                                                    onClick={() => handleAccordionChange(sector.id)}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                                            {sector.icon}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors">
                                                                {sector.name}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground font-medium">{sector.growth}</p>
                                                        </div>
                                                    </div>
                                                    <ChevronDown
                                                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openAccordion === sector.id ? "rotate-180 text-blue-500" : ""
                                                            }`}
                                                    />
                                                </div>

                                                {openAccordion === sector.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="border-t border-border"
                                                    >
                                                        <div className="relative h-48 w-full overflow-hidden">
                                                            <Image
                                                                src={sector.image || "/placeholder.svg"}
                                                                alt={sector.name}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                                        </div>

                                                        <div className="p-6 space-y-4">
                                                            <p className="text-sm text-muted-foreground leading-relaxed">{sector.description}</p>

                                                            <div className="space-y-2">
                                                                <h4 className="text-sm font-semibold text-foreground">Major States:</h4>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {sector.majorStates.map((state) => (
                                                                        <span
                                                                            key={state}
                                                                            className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-medium rounded-full border border-blue-500/20"
                                                                        >
                                                                            {state}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4 bg-card/80 backdrop-blur-sm border-border hover:bg-blue-500 hover:text-blue-500" />
                    <CarouselNext className="right-4 bg-card/80 backdrop-blur-sm border-border hover:bg-blue-500 hover:text-blue-500" />
                </Carousel>

                <div className="flex justify-center gap-3 mt-8">
                    {Array.from({ length: Math.ceil(sectorsData.length / 9) }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "bg-blue-500 scale-125 shadow-lg"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            onClick={() => {
                                setCurrentSlide(index)
                                setOpenAccordion("")
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChooseSector
