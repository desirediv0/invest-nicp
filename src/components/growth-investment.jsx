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

const GrowthInvestment = () => {
    const states = [
        { name: "Amritsar" }, { name: "Delhi NCR" }, { name: "Dehradun" }, { name: "Dholera" },
        { name: "Jaipur" }, { name: "Ludhiana" }, { name: "Nagpur" }, { name: "Lucknow" },
        { name: "Kochi" }, { name: "Tirupati" }
    ];

    return (
        <div className='max-w-7xl mx-auto px-4 py-4 '>
            <HeadText
                title={"EXPLORE CITIES OF"}
                title2={"GROWTH & INVESTMENT"}
                subtitle={"Discover the key cities driving growth and investment opportunities in India."}
            />

            <Carousel opts={{ align: "start", slidesToScroll: 4 }}
                plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent className="flex">
                    {states.map((state, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/2 md:basis-1/4"
                        >
                            <div className="relative group rounded-lg overflow-hidden transition-shadow duration-300">
                                <Image
                                    src={"/cultural.webp"}
                                    alt={state.name}
                                    width={200}
                                    height={200}
                                    className='w-full h-48 object-contain'
                                />
                                <div className="absolute inset-0 group-hover:bg-black group-hover:opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center group-hover:text-white font-bold bg-black/5">
                                    {state.name}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    );
};

export default GrowthInvestment;
