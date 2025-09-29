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
            { name: "Invest In India", href: "/about#invest-in-india" },
            { name: "Why Choose India", href: "/about#why-choose-india" },
        ]
    },
    {
        name: "Investment Opportunities", href: "/investment-opportunities", children: [
            { name: "Sectors", href: "/investment-opportunities/sectors#sectors" },
            { name: "States", href: "/investment-opportunities/states#states" },
        ]
    },
    {
        name: "Insights", href: "/insights-updates", children: [
            { name: "News Updates", href: "/insights-updates#activity-updates" },
            { name: "Growing Cities", href: "/insights-updates#growing-cities" },
        ]
    },
    {
        name: "What We Do", href: "/what-we-do", children: [
            { name: "Market Entry & Expansion Mergers and Acquisitions", href: "/what-we-do#market-entry-expansion-mergers-acquisitions" },
            { name: "Workshops for Investment Promotions", href: "/what-we-do#workshops-investment-promotions" },
            { name: "Seminars For New Policies & Opportunities", href: "/what-we-do#seminars-new-policies-opportunities" },
            { name: "Investment Advisory JV'S & FOI'S", href: "/what-we-do#investment-advisory-jvs-fois" },
            { name: "Sector Engagement & Facilitation", href: "/what-we-do#sector-engagement-facilitation" },
        ]
    },
    {
        name: "Initiatives", href: "/initiatives", children: [
            { name: "Make in India", href: "/initiatives#make-in-india" },
            { name: "Bonded Manufacturing Scheme", href: "/initiatives#bonded-manufacturing" },
            {
                name: "National Single Window System (NSWS)", href: "/initiatives#nsws"
            }, {
                name: "DPIIT – Department for Promotion of Industry and Internal Trade", href: "/initiatives#dpiit"
            }, {
                name: "India Investment Grid (IIG)", href: "/initiatives#iig"
            }, {
                name: "One District One Product (ODOP)", href: "/initiatives#odop"
            }
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
    const [dropdownPosition, setDropdownPosition] = useState({})
    const [subDropdownPosition, setSubDropdownPosition] = useState({})
    const closeTimerRef = useRef(null)
    const dropdownRefs = useRef({})
    const subDropdownRefs = useRef({})

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Calculate dropdown position to prevent overflow
    useEffect(() => {
        const calculatePosition = (index) => {
            try {
                const el = dropdownRefs.current[index]
                if (!el) return

                const rect = el.getBoundingClientRect()
                const viewportWidth = window.innerWidth
                const dropdownWidth = 256 // w-64 = 16rem = 256px

                // Check if dropdown would overflow on the right
                const wouldOverflowRight = rect.left + dropdownWidth > viewportWidth - 20

                setDropdownPosition(prev => ({
                    ...prev,
                    [index]: {
                        alignRight: wouldOverflowRight,
                        style: wouldOverflowRight ? { right: 0 } : { left: 0 }
                    }
                }))
            } catch (e) {
                console.error('Error calculating dropdown position:', e)
            }
        }

        if (desktopOpenIndex !== null) {
            // Use RAF to ensure DOM is updated
            requestAnimationFrame(() => calculatePosition(desktopOpenIndex))
        }

        const handleResize = () => {
            if (desktopOpenIndex !== null) {
                calculatePosition(desktopOpenIndex)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [desktopOpenIndex])

    // Calculate sub-dropdown position
    useEffect(() => {
        const calculateSubPosition = (parentIndex, subIndex) => {
            try {
                const parentEl = dropdownRefs.current[parentIndex]
                const subEl = subDropdownRefs.current[`${parentIndex}-${subIndex}`]

                if (!parentEl || !subEl) return

                const parentRect = parentEl.getBoundingClientRect()
                const viewportWidth = window.innerWidth
                const subDropdownWidth = 256

                // Check if parent dropdown is aligned right
                const isParentAlignedRight = dropdownPosition[parentIndex]?.alignRight

                let shouldAlignLeft = false

                if (isParentAlignedRight) {
                    // If parent is right-aligned, open submenu to the left
                    shouldAlignLeft = true
                } else {
                    // If parent is left-aligned, check if submenu would overflow
                    const wouldOverflowRight = parentRect.right + subDropdownWidth > viewportWidth - 20
                    shouldAlignLeft = wouldOverflowRight
                }

                setSubDropdownPosition(prev => ({
                    ...prev,
                    [`${parentIndex}-${subIndex}`]: {
                        alignLeft: shouldAlignLeft
                    }
                }))
            } catch (e) {
                console.error('Error calculating sub-dropdown position:', e)
            }
        }

        if (desktopOpenIndex !== null && desktopOpenSubIndex !== null) {
            requestAnimationFrame(() => calculateSubPosition(desktopOpenIndex, desktopOpenSubIndex))
        }
    }, [desktopOpenIndex, desktopOpenSubIndex, dropdownPosition])

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
                    <div className="flex items-center w-full justify-between">
                        {/* Logo on the left */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <Image src={"/logo.gif"} alt="Logo" width={85} height={85} className="bg-white rounded-full p-1" />
                            </Link>
                        </div>

                        <nav className="hidden lg:flex items-center space-x-4 ml-auto">
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
                                        closeTimerRef.current = setTimeout(() => {
                                            setDesktopOpenIndex(null)
                                            setDesktopOpenSubIndex(null)
                                        }, 180)
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "transition-colors duration-200 font-[family-name:var(--font-source-sans)] font-medium px-2 py-2 rounded-md flex items-center gap-1 whitespace-nowrap",
                                            isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                                        )}
                                        aria-expanded={desktopOpenIndex === index}
                                    >
                                        {item.name}
                                        {item.children && <FiChevronDown className={`ml-1 transition-transform duration-200 text-sm ${desktopOpenIndex === index ? "rotate-180" : ""}`} />}
                                    </Link>

                                    {/* Desktop dropdown */}
                                    {item.children && (
                                        <div
                                            ref={(el) => (dropdownRefs.current[index] = el)}
                                            className={cn(
                                                "absolute mt-2 w-64 bg-white rounded-md shadow-lg border border-border transition-all duration-200 z-40 transform-gpu",
                                                desktopOpenIndex === index ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
                                            )}
                                            style={dropdownPosition[index]?.style || { left: 0 }}
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
                                                                {item.name === "Resources" && <FiEye className="text-lg text-slate-400" />}
                                                                {sub.name}
                                                            </span>
                                                            {sub.children && <FiChevronDown className={`text-xs text-slate-400 ${desktopOpenSubIndex === sidx ? "rotate-180" : ""}`} />}
                                                        </Link>

                                                        {/* Sub-dropdown */}
                                                        {sub.children && (
                                                            <div
                                                                ref={(el) => (subDropdownRefs.current[`${index}-${sidx}`] = el)}
                                                                className={cn(
                                                                    "absolute top-0 w-64 bg-white rounded-md shadow-lg border border-border transition-all duration-200 z-50 transform-gpu",
                                                                    subDropdownPosition[`${index}-${sidx}`]?.alignLeft
                                                                        ? 'right-full mr-2'
                                                                        : 'left-full ml-2',
                                                                    desktopOpenIndex === index && desktopOpenSubIndex === sidx
                                                                        ? "opacity-100 visible translate-x-0"
                                                                        : "opacity-0 invisible -translate-x-1 pointer-events-none"
                                                                )}
                                                            >
                                                                <div className="py-2 max-h-80 overflow-y-auto">
                                                                    {sub.children.map((s2) => (
                                                                        <Link
                                                                            key={s2.name}
                                                                            href={s2.href}
                                                                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted whitespace-nowrap"
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

                        {/* Mobile menu toggle */}
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

            {/* Mobile menu */}
            <div
                className={cn(
                    "bg-white/95 backdrop-blur-md border-b border-border transition-all duration-300",
                    isMobileMenuOpen ? "block shadow-lg" : "hidden",
                )}
            >
                <div className="container mx-auto px-4">
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

                                {/* Mobile submenu */}
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
                                                    {item.name === "Resources" && <FiEye className="text-green-600" />}
                                                    {sub.name}
                                                </Link>

                                                {/* Nested mobile submenu */}
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