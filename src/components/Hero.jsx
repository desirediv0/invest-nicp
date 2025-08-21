"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [api, setApi] = useState(null)

    const router = useRouter()

    const slides = [
        {
            ctaLink: "/category/protein",
            img: "https://www.investnicp.com/images/India's%20Industrial%20Corridors%20Drive%20Growth%20Connecting%20Prosperity%20(1).png",

            title: "Strategic Investments in India's Infrastructure",
            subtitle: "BUILDING TOMORROW",
        },
        {
            ctaLink: "/category/protein",
            img: "https://www.investnicp.com/images/banner-3%20(5).png",

            title: "INVEST SMART - INVEST  NOW",
            subtitle: "Mission Growth",
        },
    ]



    // Handle autoplay functionality
    useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            api.scrollNext()
        }, 3500)

        return () => clearInterval(interval)
    }, [api])

    // Update current slide index when carousel changes
    useEffect(() => {
        if (!api) return

        const onSelect = () => {
            setCurrentSlide(api.selectedScrollSnap())
        }

        api.on("select", onSelect)
        return () => {
            api.off("select", onSelect)
        }
    }, [api])

    const handleSlideClick = (ctaLink) => {
        router.push(ctaLink)
    }

    return (
        <div className="relative w-full">
            {/* Mobile: Smaller height, Desktop: Larger height */}
            <div className="relative overflow-hidden">
                <Carousel
                    setApi={setApi}
                    className="h-full w-full"
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                >
                    <CarouselContent className="h-full">
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="h-full p-0">
                                <div
                                    className="relative h-[350px] md:h-[500px] w-full cursor-pointer group overflow-hidden"
                                    onClick={() => handleSlideClick(slide.ctaLink)}
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={slide.img || "/placeholder.svg"}
                                        alt={slide.title || "Hero banner"}
                                        fill
                                        className="object-cover md:object-fill transition-transform duration-700 "
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

                                    {/* Overlay Text Content */}
                                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-12 lg:px-16">
                                        <div className="max-w-2xl">
                                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 leading-tight">
                                                {slide.title}
                                            </h1>
                                            <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
                                                {slide.subtitle}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Controls - Better positioned and sized */}
                    <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-10 sm:w-10 md:h-12 md:w-12 z-30 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm" />
                    <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-10 sm:w-10 md:h-12 md:w-12 z-30 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm" />

                    {/* Dot Indicators - Better responsive sizing */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`w-2 h-2  rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/70"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default HeroCarousel
