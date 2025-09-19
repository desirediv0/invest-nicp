"use client"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export default function PageHero({
    title,
    breadcrumbs = [],
    backgroundImage = "/assets/banner1.jpg"
}) {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-96 flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Orange Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-orange-600/30"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
                {/* Page Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight break-words">
                    {title}
                </h1>

                {/* Breadcrumbs */}
                <nav className="flex items-center justify-center flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-orange-300 hover:text-orange-200 transition-colors bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                    >
                        <Home size={14} className="sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">Home</span>
                    </Link>

                    {breadcrumbs.map((breadcrumb, index) => (
                        <div key={index} className="flex items-center gap-1 sm:gap-2">
                            <ChevronRight size={14} className="text-orange-400 sm:w-4 sm:h-4 flex-shrink-0" />
                            {breadcrumb.href ? (
                                <Link
                                    href={breadcrumb.href}
                                    className="text-orange-300 hover:text-orange-200 transition-colors bg-black/30 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap"
                                >
                                    {breadcrumb.label}
                                </Link>
                            ) : (
                                <span className="text-white font-medium bg-orange-500/80 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap">
                                    {breadcrumb.label}
                                </span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Bottom Orange Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"></div>
        </div>
    )
}