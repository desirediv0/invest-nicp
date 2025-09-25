"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { BorderBeam } from "./magicui/border-beam"
import { banner1, banner2, banner3 } from "@/assets"

const slides = [
    {
        img: banner1,
        title: "Strategic Investments in India's Infrastructure",
        subtitle: "BUILDING TOMORROW",
    },
    {
        img: banner2,
        title: "India's Industrial Corridors Drive Growth",
        subtitle: "CONNECTING  PROSPERITY",
    },
    {
        img: banner3,
        title: "INVEST SMART - INVEST NOW",
        subtitle: "MISSION GROWTH",
    },

]

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="bg-background">
            <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    {slides.map((slide, index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === currentSlide ? 1 : 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src={slide.img || "/placeholder.svg"}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </motion.div>
                    ))}
                    {/* Top gradient overlay - only cover top 50vh for stronger foreground contrast */}
                    <div className="absolute top-0 left-0 right-0 h-[60vh] lg:h-[70vh] bg-gradient-to-br from-black/30 via-purple-900/25 to-black/10" />
                </div>

                {/* BorderBeam Animation */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <BorderBeam
                        duration={6}
                        size={400}
                        className="from-transparent via-red-500 to-transparent"
                        colorFrom="#ff3d00"
                        colorTo="#ff6d00"
                    />
                </div>

                <button
                    onClick={prevSlide}
                    className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Main Content */}
                <div className="relative z-20 text-center px-4 max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="my-8"
                    >


                        <div className="px-4 py-2 mx-auto inline-block max-w-[95vw]">
                            <motion.h1
                                className="whitespace-nowrap truncate text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-0 tracking-tight capitalize leading-tight"
                                style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.8)" }}
                            >
                                {slides[currentSlide].subtitle}
                            </motion.h1>
                        </div>
                        <motion.div className="flex flex-col  px-6 py-4 my-4  w-fit mx-auto">
                            <p className="text-2xl md:text-3xl  font-semibold text-white tracking-wide uppercase">
                                {slides[currentSlide].title}
                            </p>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Floating Particles Animation */}
                <div className="absolute inset-0 z-5 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-20, -100, -20],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                                }`}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
