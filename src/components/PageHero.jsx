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
            className="relative bg-cover bg-center bg-no-repeat h-64 md:h-80 flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Orange Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-orange-600/30"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                {/* Page Title */}
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-shadow-lg">
                    {title}
                </h1>

                {/* Breadcrumbs */}
                <nav className="flex items-center justify-center space-x-2 text-sm md:text-base">
                    <Link
                        href="/"
                        className="flex items-center space-x-1 text-orange-300 hover:text-orange-200 transition-colors"
                    >
                        <Home size={16} />
                        <span>Home</span>
                    </Link>

                    {breadcrumbs.map((breadcrumb, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <ChevronRight size={16} className="text-orange-400" />
                            {breadcrumb.href ? (
                                <Link
                                    href={breadcrumb.href}
                                    className="text-orange-300 hover:text-orange-200 transition-colors"
                                >
                                    {breadcrumb.label}
                                </Link>
                            ) : (
                                <span className="text-white font-medium">
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