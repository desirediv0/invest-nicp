"use client";
import Image from "next/image";
import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

const Bgcoverimage = ({
    image = "/cultural.webp",
    heading,
    subheading,
    description1,
    description2,
    buttonLink = "#",
    isClickable = false,
}) => {
    const content = (
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden shadow-2xl group cursor-pointer border-2 sm:border-4 border-transparent hover:border-orange-500 transition-all duration-500 ">
            {/* Background Image */}
            <Image
                src={image}
                alt={heading}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 "
                priority
            />

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-transparent group-hover:from-black/85 transition-all duration-500 "></div>

            {/* Orange Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-lg"></div>

            {/* Top Right Icon */}
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-sm p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md">
                <ExternalLink className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </div>

            {/* Location Pin */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-orange-500/90 backdrop-blur-sm p-2 sm:p-3 shadow-lg rounded-md">
                <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="text-left text-white space-y-3 sm:space-y-4 md:space-y-6 transform group-hover:-translate-y-2 transition-transform duration-500 max-w-full">
                    {/* Enhanced Heading */}
                    <div className="space-y-2">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black leading-tight drop-shadow-2xl break-words">
                            {heading}
                        </h2>
                        {/* Orange Underline */}
                        <div className="w-12 sm:w-16 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                    </div>

                    {/* Enhanced Subheading */}
                    {subheading && (
                        <div className="max-w-full">
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-orange-200 font-semibold leading-relaxed break-words">
                                {subheading}
                            </p>
                        </div>
                    )}

                    {/* Enhanced Body Content */}
                    <div className="space-y-2 sm:space-y-3 max-w-full">
                        {description1 && (
                            <div className="backdrop-blur-sm bg-black/30 p-2 sm:p-3 md:p-4 border-l-2 sm:border-l-4 border-orange-500 rounded-r">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed break-words">
                                    {description1}
                                </p>
                            </div>
                        )}
                        {description2 && (
                            <div className="backdrop-blur-sm bg-black/30 p-2 sm:p-3 md:p-4 border-l-2 sm:border-l-4 border-orange-500 rounded-r">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed break-words">
                                    {description2}
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );

    if (isClickable && buttonLink) {
        return (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="block">
                {content}
            </a>
        );
    }

    return content;
};

export default Bgcoverimage;
