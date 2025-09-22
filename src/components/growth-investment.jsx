"use client"
import React from 'react'
import HeadText from './head-text'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { ExternalLink, MapPin } from 'lucide-react'
import { amritsar, dehradun, delhincr, dholera, jaipur, kochi, lucknow, ludhiana, nagpur, tripura } from '@/assets'

const GrowthInvestment = () => {
    const states = [
        {
            name: "Amritsar",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/amritsar",
            description: "Industrial Hub of Punjab",
            img: amritsar,
        },
        {
            name: "Delhi NCR",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "National Capital Region",
            img: delhincr
        },
        {
            name: "Dehradun",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "Uttarakhand Growth Center",
            img: dehradun
        },
        {
            name: "Dholera",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "Gujarat Smart City",
            img: dholera
        },
        {
            name: "Jaipur",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "Pink City Industrial Hub",
            img: jaipur
        },
        {
            name: "Ludhiana",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "Punjab Manufacturing Hub",
            img: ludhiana
        },
        {
            name: "Nagpur",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "Central India Logistics",
            img: nagpur
        },
        {
            name: "Lucknow",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "UP Industrial Center",
            img: lucknow
        },
        {
            name: "Kochi",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "Kerala Port City",
            img: kochi
        },
        {
            name: "Tirupati",
            linkedinUrl: "https://www.linkedin.com/company/investnicp/",
            description: "Andhra Pradesh Hub",
            img: tripura
        }
    ];

    return (
        <div className='max-w-7xl mx-auto px-4 py-4 '>
            <HeadText
                title={"EXPLORE CITIES OF"}
                title2={"GROWTH & INVESTMENT"}
                subtitle={"Discover the key cities driving growth and investment opportunities in India."}
            />

            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 2,
                    loop: true
                }}
                plugins={[Autoplay({ delay: 4000 })]}
                className="w-full"
            >
                <CarouselContent className="flex -ml-3 md:-ml-6">
                    {states.map((state, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-3 md:pl-6 basis-1/2 lg:basis-1/4"
                        >
                            <a
                                href={state.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group cursor-pointer"
                            >
                                <div className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-white border-2 border-gray-200 hover:border-orange-500">
                                    {/* Image Container - Bigger Height */}
                                    <div className="relative h-64 md:h-72 overflow-hidden">
                                        <Image
                                            src={state.img}
                                            alt={state.name}
                                            width={400}
                                            height={300}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                                        />
                                        {/* Better Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                                        {/* LinkedIn Icon - Bigger */}
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                            <ExternalLink className="h-5 w-5 text-blue-600" />
                                        </div>

                                        {/* Location Pin - Bigger */}
                                        <div className="absolute top-4 left-4 bg-orange-500 p-3 shadow-lg">
                                            <MapPin className="h-5 w-5 text-white" />
                                        </div>
                                    </div>

                                    {/* Content - Better Positioning */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/90 to-transparent">
                                        <h3 className="font-bold text-xl md:text-2xl mb-2 group-hover:text-orange-400 transition-colors">
                                            {state.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-200 font-medium">
                                            {state.description}
                                        </p>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Arrows - Bigger and Better */}
                <div className="flex justify-center mt-8 space-x-6">
                    <CarouselPrevious className="relative translate-x-0 translate-y-0 w-12 h-12 bg-white border-3 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl" />
                    <CarouselNext className="relative translate-x-0 translate-y-0 w-12 h-12 bg-white border-3 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl" />
                </div>
            </Carousel>
        </div>
    );
};

export default GrowthInvestment;
