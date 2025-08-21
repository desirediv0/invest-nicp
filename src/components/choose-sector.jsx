"use client"

import { useState, useEffect } from "react"
import HeadText from "./head-text"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

const sectorsData = [
    {
        id: "healthcare",
        name: "Healthcare",
        icon: "🏥",
        image: "/healthcare-medical-equipment.png",
        description:
            "India's healthcare sector is rapidly expanding with digital health initiatives, telemedicine, and medical device manufacturing. Investment opportunities in hospitals, pharmaceuticals, and health-tech startups are promising.",
    },
    {
        id: "steel",
        name: "Steel",
        icon: "🏗️",
        image: "/steel-manufacturing.png",
        description:
            "India is the world's second-largest steel producer. The sector offers opportunities in infrastructure development, automotive applications, and green steel production technologies.",
    },
    {
        id: "infrastructure",
        name: "Infrastructure",
        icon: "🏢",
        image: "/infrastructure-construction.png",
        description:
            "India's infrastructure sector is booming with smart cities, highways, railways, and urban development projects. Government initiatives like National Infrastructure Pipeline drive growth.",
    },
    {
        id: "telecommunications",
        name: "Telecommunications",
        icon: "📡",
        image: "/5g-network-towers.png",
        description:
            "With 5G rollout and digital transformation, India's telecom sector offers opportunities in network infrastructure, IoT solutions, and digital services.",
    },
    {
        id: "insurance",
        name: "Insurance",
        icon: "🛡️",
        image: "/insurance-financial-protection.png",
        description:
            "India's insurance sector is growing with increasing awareness and regulatory reforms. Opportunities exist in life, health, and general insurance segments.",
    },
    {
        id: "textiles",
        name: "Textiles",
        icon: "🧵",
        image: "/textile-manufacturing.png",
        description:
            "India's textile industry is a major export earner with opportunities in technical textiles, sustainable fashion, and value-added products.",
    },
    {
        id: "tourism",
        name: "Tourism and Hospitality",
        icon: "🏨",
        image: "/placeholder-eo973.png",
        description:
            "India's tourism sector offers immense potential with cultural heritage, adventure tourism, and hospitality services driving growth.",
    },
    {
        id: "agriculture",
        name: "Agriculture and Allied Industries",
        icon: "🌾",
        image: "/modern-agriculture.png",
        description:
            "India's agriculture sector is modernizing with precision farming, agri-tech solutions, and food processing opportunities.",
    },
    {
        id: "it-bpm",
        name: "IT & BPM",
        icon: "💻",
        image: "/it-software-development.png",
        description:
            "India's IT sector continues to lead globally with opportunities in software development, AI, cloud computing, and digital transformation services.",
    },
    {
        id: "auto-components",
        name: "Auto Components",
        icon: "🔧",
        image: "/automotive-components-manufacturing.png",
        description:
            "India's auto component industry is evolving with electric vehicles, advanced manufacturing, and export opportunities.",
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        icon: "🏭",
        image: "/manufacturing-automation.png",
        description:
            "India's manufacturing sector is evolving with 'Make in India' initiatives. Investments in automation, smart manufacturing, and sustainable practices are promising. The future envisions high-tech manufacturing, export competitiveness, and reduced environmental impact.",
    },
    {
        id: "renewable-energy",
        name: "Renewable Energy",
        icon: "☀️",
        image: "/renewable-energy-solar-wind.png",
        description:
            "India's renewable energy sector is rapidly expanding with solar, wind, and green hydrogen opportunities driving sustainable growth.",
    },
]

const ChooseSector = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [openAccordion, setOpenAccordion] = useState("")

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Math.ceil(sectorsData.length / 4))
            setOpenAccordion("")
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])



    const handleAccordionChange = (value) => {
        setOpenAccordion(value === openAccordion ? "" : value)
    }

    return (
        <div className="py-12 px-4">
            <HeadText
                title={"Choose Your"}
                title2={"Sector"}
                subtitle={"Select a sector to explore investment opportunities and resources tailored to your needs."}

            />

            <div
                className="max-w-7xl mx-auto"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <Carousel className="w-full"
                    plugins={[Autoplay({ delay: 2500 })]}
                >
                    <CarouselContent>
                        {Array.from({ length: Math.ceil(sectorsData.length / 4) }).map((_, slideIndex) => (
                            <CarouselItem key={slideIndex}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                                    {sectorsData.slice(slideIndex * 4, slideIndex * 4 + 4).map((sector) => (
                                        <div
                                            key={sector.id}
                                            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                                        >
                                            <div
                                                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                                                onClick={() => handleAccordionChange(sector.id)}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                                                        {sector.icon}
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-800">{sector.name}</h3>
                                                </div>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openAccordion === sector.id ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </div>

                                            {openAccordion === sector.id && (
                                                <div className="border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                                                    <div className="relative h-48 w-full">
                                                        <Image
                                                            src={"/placeholder.svg"}
                                                            alt={sector.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-black/40" />
                                                        <div className="absolute bottom-4 left-4 right-4">
                                                            <p className="text-white text-base leading-relaxed">{sector.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>

                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: Math.ceil(sectorsData.length / 4) }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"
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
