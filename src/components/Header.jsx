"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { FiChevronDown, FiEye } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const navigationItems = [
    { name: "Home", href: "/" },
    {
        name: "About", href: "/about", children: [
            { name: "Mission", href: "/about#mission" },
            { name: "Vision", href: "/about#vision" },
            { name: "Opportunities", href: "/about#opportunities" },
        ]
    },
    {
        name: "Investment Opportunities", href: "/investment-opportunities", children: [
            { name: "Sectors", href: "/investment-opportunities/sectors" },
            { name: "States", href: "/investment-opportunities/states" },
        ]
    },
    {
        name: "INSIGHTS", href: "/insights-updates", children: [
            { name: "Activity Updates", href: "/insights-updates#activity-updates" },
            { name: "GROWING CITIES", href: "/insights-updates#growing-cities" },
        ]
    },
    { name: "What We Do", href: "/#what-we-do" },
    {
        name: "Initiatives", href: "/initiatives", children: [
            { name: "Initiatives List", href: "/initiatives#list" },
        ]
    },
    {
        name: "Resources", href: "/resources", children: [
            { name: "GOI and Ministries", href: "/resources/goinministries" },
            { name: "Schemes", href: "/resources/schemes" },
            { name: "Authorities, Associations & Councils", href: "/resources/authorities" },
            {
                name: "POLICIES (Download)", href: "/resources#policies", children: [
                    { name: "Alternative Investment Fund", href: "/aif.pdf" },
                    { name: "FDI Policy", href: "/fdi.pdf" },
                    { name: "FDI Policy 2020", href: "/fdi2020.pdf" },
                    { name: "DPIIT", href: "/dpiit.pdf" },
                    { name: "India Industrial Corridors", href: "/corridors.pdf" },
                    { name: "Smart City Description", href: "/smartcity.pdf" },
                    { name: "Smart City Guideness", href: "/smartcity-guidance.pdf" },
                    { name: "RERA Act", href: "/rera.pdf" },
                ]
            },
            { name: "SIP Agencies", href: "/resources/sip" },

        ]
    },

    { name: "Contact Us", href: "/contact-us" },
]

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileOpenIndex, setMobileOpenIndex] = useState(null)
    const [desktopOpenIndex, setDesktopOpenIndex] = useState(null)
    const [desktopOpenSubIndex, setDesktopOpenSubIndex] = useState(null)
    const closeTimerRef = useRef(null)

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
                <div className="px-4 py-2">
                    <div className="flex items-center">
                        {/* Logo on the left */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <Image src={"/logo.gif"} alt="Logo" width={85} height={85} className="bg-white rounded-full p-1" />
                            </Link>
                        </div>

                        {/* Desktop Navigation - placed close to logo */}
                        <nav className="hidden lg:flex items-center space-x-4 ml-6">
                            {navigationItems.map((item, index) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => {
                                        if (closeTimerRef.current) {
                                            clearTimeout(closeTimerRef.current)
                                            closeTimerRef.current = null
                                        }
                                        setDesktopOpenIndex(index)
                                        setDesktopOpenSubIndex(null)
                                    }}
                                    onMouseLeave={() => {
                                        // small delay to avoid flicker when moving between menus
                                        closeTimerRef.current = setTimeout(() => {
                                            setDesktopOpenIndex(null)
                                            setDesktopOpenSubIndex(null)
                                        }, 180)
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "transition-colors duration-200 font-[family-name:var(--font-source-sans)] font-medium px-2 py-2 rounded-md flex items-center gap-1",
                                            isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                                        )}
                                        aria-expanded={desktopOpenIndex === index}
                                    >
                                        {item.name}
                                        {item.children && <FiChevronDown className={`ml-1 transition-transform duration-200 text-sm ${desktopOpenIndex === index ? "rotate-180" : ""}`} />}
                                    </Link>

                                    {/* Desktop dropdown (controlled) */}
                                    {item.children && (
                                        <div
                                            className={cn(
                                                "absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-border transition-all duration-200 z-40 transform-gpu",
                                                desktopOpenIndex === index ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
                                            )}
                                        >
                                            <div className="py-2">
                                                {item.children.map((sub, sidx) => (
                                                    <div
                                                        key={sub.name}
                                                        className="relative"
                                                        onMouseEnter={() => {
                                                            if (closeTimerRef.current) {
                                                                clearTimeout(closeTimerRef.current)
                                                                closeTimerRef.current = null
                                                            }
                                                            // only set sub index when its parent is open
                                                            if (desktopOpenIndex === index) setDesktopOpenSubIndex(sidx)
                                                        }}
                                                        onMouseLeave={() => {
                                                            closeTimerRef.current = setTimeout(() => setDesktopOpenSubIndex(null), 120)
                                                        }}
                                                    >
                                                        <Link
                                                            href={sub.href}
                                                            className="px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center justify-between"
                                                        >
                                                            <span className="flex items-center gap-3">
                                                                {/* show eye icon for Resources children */}
                                                                {item.name === "Resources" && <FiEye className="text-lg text-slate-400" />}
                                                                {sub.name}
                                                            </span>
                                                            {sub.children && <FiChevronDown className={`text-xs text-slate-400 ${desktopOpenSubIndex === sidx ? "rotate-180" : ""}`} />}
                                                        </Link>

                                                        {/* second level dropdown (controlled) */}
                                                        {sub.children && (
                                                            <div
                                                                className={cn(
                                                                    "absolute top-0 left-full ml-2 w-64 bg-white rounded-md shadow-lg border border-border transition-all duration-200 z-50 transform-gpu",
                                                                    desktopOpenIndex === index && desktopOpenSubIndex === sidx ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-1 pointer-events-none"
                                                                )}
                                                            >
                                                                <div className="py-2">
                                                                    {sub.children.map((s2) => (
                                                                        <Link
                                                                            key={s2.name}
                                                                            href={s2.href}
                                                                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                                                                        >
                                                                            {s2.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Right side: mobile toggle */}
                        <div className="flex items-center ml-auto">
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
                        {navigationItems.map((item, idx) => (
                            <div key={item.name} className="border-b border-border">
                                <div className="flex items-center justify-between">
                                    <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 flex-1 text-foreground font-[family-name:var(--font-source-sans)]">
                                        {item.name}
                                    </Link>

                                    {item.children && (
                                        <button
                                            className="px-4 py-3 text-foreground"
                                            onClick={() => setMobileOpenIndex(mobileOpenIndex === idx ? null : idx)}
                                            aria-expanded={mobileOpenIndex === idx}
                                            aria-controls={`mobile-submenu-${idx}`}
                                        >
                                            <FiChevronDown className={`transition-transform duration-200 ${mobileOpenIndex === idx ? "rotate-180" : ""}`} />
                                        </button>
                                    )}
                                </div>

                                {/* Mobile submenu (expand) */}
                                {item.children && mobileOpenIndex === idx && (
                                    <div id={`mobile-submenu-${idx}`} className="pl-6 pb-2">
                                        {item.children.map((sub, sidx) => (
                                            <div key={sub.name}>
                                                <Link
                                                    href={sub.href}
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false)
                                                        setMobileOpenIndex(null)
                                                    }}
                                                    className="py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200 flex items-center gap-2"
                                                >
                                                    {/* eye icon for Resources children */}
                                                    {item.name === "Resources" && <FiEye className="text-green-600" />}
                                                    {sub.name}
                                                </Link>

                                                {/* nested mobile submenu (sub.children) */}
                                                {sub.children && (
                                                    <div className="pl-6">
                                                        {sub.children.map((s2) => (
                                                            <Link
                                                                key={s2.name}
                                                                href={s2.href}
                                                                onClick={() => {
                                                                    setIsMobileMenuOpen(false)
                                                                    setMobileOpenIndex(null)
                                                                }}
                                                                className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                                                            >
                                                                {s2.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}
