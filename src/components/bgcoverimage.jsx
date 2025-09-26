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
        <div className="flex flex-col lg:flex-row border-2 sm:border-4 border-transparent hover:border-orange-500 shadow-2xl overflow-hidden transition-all duration-500 group cursor-pointer md:max-h-[600px]">
            {/* Left Side Image */}
            <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[600px]">
                <Image
                    src={image}
                    alt={heading}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    priority
                />
                {/* Orange Line at Bottom (only for image) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-lg z-10" />
                {/* Top Left Icon */}
                {/* <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-orange-500/90 backdrop-blur-sm p-2 sm:p-3 shadow-lg rounded-md z-10">
                    <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div> */}
                {/* Top Right Icon */}
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-sm p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md z-10">
                    <ExternalLink className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500 z-0" />
            </div>

            {/* Right Side Content */}
            <div className="w-full lg:w-1/2 bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 lg:space-y-6 relative z-10">
                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight break-words">
                        {heading}
                    </h2>
                    {/* Orange Underline */}
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                </div>

                {subheading && (
                    <p className="text-orange-200 font-semibold text-base sm:text-lg leading-relaxed break-words">
                        {subheading}
                    </p>
                )}

                <div className="space-y-4">
                    {description1 && (
                        <div className="bg-black/30 backdrop-blur-sm p-4 border-l-4 border-orange-500 rounded-r">
                            <p className="text-gray-200 text-base leading-relaxed break-words">
                                {description1}
                            </p>
                        </div>
                    )}
                    {description2 && (
                        <div className="bg-black/30 backdrop-blur-sm p-4 border-l-4 border-orange-500 rounded-r">
                            <p className="text-gray-200 text-base leading-relaxed break-words">
                                {description2}
                            </p>
                        </div>
                    )}
                </div>
            </div>
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
