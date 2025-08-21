"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Sectors", href: "#" },
    { name: "States/UT's", href: "#" },
    { name: "Business Cities", href: "#" },
    { name: "Services", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Contact Us", href: "#" },
]

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div
                className={cn(
                    "transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
                        : "bg-transparent backdrop-blur-sm",
                )}
            >
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center justify-between">
                        <Image src={"/logo.gif"} alt="Logo" width={80} height={80} className="bg-white rounded-full" />

                        {/* Desktop Navigation - Hidden on mobile */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={` transition-colors duration-200 font-[family-name:var(--font-source-sans)] font-medium ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"} px-3 py-2 rounded-md`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    "bg-white/95 backdrop-blur-md border-b border-border transition-all duration-300",
                    isMobileMenuOpen ? "block shadow-lg" : "hidden",
                )}
            >
                <div className="container mx-auto px-4">
                    {/* Mobile Navigation */}
                    <nav className="lg:hidden py-4 space-y-2">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200 font-[family-name:var(--font-source-sans)]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}
