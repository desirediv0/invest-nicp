"use client";
import Image from "next/image";
import React from "react";

const Bgcoverimage = ({
    image = "/cultural.webp",
    heading,
    subheading,
    description1,
    description2,
}) => {
    return (
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
            {/* Background Image */}
            <Image
                src={image}
                alt={heading}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 flex items-end p-8">
                <div className="text-left text-white space-y-4">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-lg">
                        {heading}
                    </h2>

                    {/* Subheading */}
                    {subheading && (
                        <p className="text-base md:text-lg text-gray-200">{subheading}</p>
                    )}

                    {/* Body Content */}
                    <div className="space-y-2 text-sm md:text-base text-gray-300 leading-relaxed">
                        {description1 && <p>{description1}</p>}
                        {description2 && <p>{description2}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bgcoverimage;
