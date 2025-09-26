"use client"

import { useState, useEffect, useMemo } from "react"
import useResponsiveGrid from "@/lib/useResponsiveGrid"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import HeadText from "./head-text"
import {
    IoTrendingUpOutline,
    IoTrophyOutline,
    IoPeopleOutline,
    IoDocumentTextOutline,
    IoConstructOutline,
} from "react-icons/io5"
import statesData from "@/lib/state"



const ChooseState = () => {
    const [selectedState, setSelectedState] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const { itemsPerPage } = useResponsiveGrid()

    const sortedStates = useMemo(() => {
        const normalize = (s) => String(s || "").normalize("NFKD").replace(/\s+/g, " ").trim().toLowerCase()
        return [...statesData].sort((a, b) => {
            const na = normalize(a.name)
            const nb = normalize(b.name)
            if (na === nb) return String(a.id || "").localeCompare(String(b.id || ""))
            return na.localeCompare(nb, "en")
        })
    }, [])

    const totalPages = Math.ceil(sortedStates.length / itemsPerPage)

    useEffect(() => {
        let interval = null
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentPage((prev) => (prev + 1) % totalPages)
                setSelectedState(null)
            }, 5000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isAutoPlaying, totalPages])

    useEffect(() => {
        setCurrentPage(0)
    }, [itemsPerPage])

    const getCurrentPageData = () => {
        const startIndex = currentPage * itemsPerPage
        return sortedStates.slice(startIndex, startIndex + itemsPerPage)
    }


    const pauseAutoplay = (duration = 15000) => {
        setIsAutoPlaying(false)

        if (typeof window !== "undefined") {
            if (window.__resumeStateTimer) {
                clearTimeout(window.__resumeStateTimer)
                window.__resumeStateTimer = null
            }
            if (duration > 0) {
                window.__resumeStateTimer = setTimeout(() => {
                    if (!isDialogOpen) setIsAutoPlaying(true)
                    window.__resumeStateTimer = null
                }, duration)
            }
        }
    }

    const handleStateClick = (stateId) => {
        const newSel = selectedState === stateId ? null : stateId
        setSelectedState(newSel)

        setIsDialogOpen(newSel !== null)

        pauseAutoplay(15000)
    }

    return (
        <div
            className="w-full max-w-7xl mx-auto px-4 py-5 bg-background"
            onMouseEnter={() => pauseAutoplay(0)}
            onMouseLeave={() => {
                if (!isDialogOpen) setIsAutoPlaying(true)
            }}
        >
            <HeadText
                title="CHOOSE YOUR"
                title2="STATE/UT"
                subtitle="Explore comprehensive investment opportunities across India's states and union territories with detailed insights into economic achievements, infrastructure, and policies."
            />

            <motion.div
                className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <AnimatePresence mode="wait">
                    {getCurrentPageData().map((state, index) => (
                        <motion.div
                            key={state.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card
                                className={`group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border-2 overflow-hidden relative rounded-none h-full flex flex-col ${selectedState === state.id
                                    ? "border-orange-500 shadow-2xl ring-2 ring-orange-200 bg-white"
                                    : "bg-white border-gray-200 hover:border-orange-500 hover:shadow-2xl"
                                    }`}
                                onClick={() => handleStateClick(state.id)}
                            >


                                <CardContent className="p-0">

                                    <div className="relative h-32 bg-gray-100 overflow-hidden">
                                        {state.cardImage ? (
                                            <Image src={state.cardImage} alt={state.name} fill className="object-cover" />
                                        ) : (
                                            <div className="absolute inset-0 bg-gray-100" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>

                                    <div className="p-2 bg-card">
                                        <div className="flex items-center justify-between flex-col">
                                            <h3 className="text-sm font-bold text-gray-900 leading-tight text-center">{state.name}</h3>
                                            <Badge
                                                variant={state.type === "ut" ? "secondary" : "outline"}
                                                className={`text-xs font-medium px-2 py-1  ${state.type === "ut"
                                                    ? "bg-accent/20 text-accent-foreground border-accent/30"
                                                    : "bg-secondary/20 text-secondary-foreground border-secondary/30 "
                                                    }`}
                                            >
                                                {state.type === "ut" ? "UT" : ""}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>


                <AnimatePresence>
                    {isDialogOpen && selectedState && (
                        <motion.div
                            key="state-dialog"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                        >

                            <motion.button
                                aria-label="Close dialog"
                                onClick={() => { setIsDialogOpen(false); setSelectedState(null) }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black"
                            />

                            <motion.div
                                initial={{ y: 40, opacity: 0, scale: 0.98 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 20, opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.35 }}
                                className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                                role="dialog"
                                aria-modal="true"
                            >
                                <div className="p-3 sm:p-4 md:p-6 border-b bg-gradient-to-r from-orange-50 to-white">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border-2 border-orange-200">
                                                {sortedStates.find(s => s.id === selectedState)?.cardImage ? (
                                                    <Image
                                                        src={sortedStates.find(s => s.id === selectedState)?.cardImage}
                                                        alt={sortedStates.find(s => s.id === selectedState)?.name}
                                                        width={64}
                                                        height={64}
                                                        className="object-cover w-full h-full"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-100" />
                                                )}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">
                                                        {sortedStates.find(s => s.id === selectedState)?.name}
                                                    </h2>
                                                    <Badge
                                                        variant={sortedStates.find(s => s.id === selectedState)?.type === "ut" ? "secondary" : "outline"}
                                                        className="text-xs w-fit bg-orange-100 text-orange-700 border-orange-300"
                                                    >
                                                        {sortedStates.find(s => s.id === selectedState)?.type === "ut" ? "Union Territory" : "State"}
                                                    </Badge>
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-600">Investment & Economic Overview</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => { setIsDialogOpen(false); setSelectedState(null) }}
                                            className="text-gray-400 hover:text-gray-600 transition-colors p-2 -m-2 flex-shrink-0"
                                            aria-label="Close dialog"
                                        >
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-3 sm:p-4 md:p-6">
                                    {(() => {
                                        const currentItem = sortedStates.find(item => item.id === selectedState)
                                        if (!currentItem) return null

                                        return (
                                            <div className="space-y-3 sm:space-y-4 md:space-y-6">

                                                {currentItem.investmentOpportunities && (
                                                    <div className="bg-primary/5 border border-primary/20 shadow-sm p-3 sm:p-4 md:p-5 rounded-lg">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                                <IoTrendingUpOutline className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground text-sm sm:text-base">Investment Opportunities</span>
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.investmentOpportunities}
                                                        </p>
                                                    </div>
                                                )}
                                                {currentItem.economicAchievements && (
                                                    <div className="bg-primary/5 border border-primary/20 shadow-sm p-3 sm:p-4 md:p-5 rounded-lg">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                                <IoTrophyOutline className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground text-sm sm:text-base">Economic Achievements</span>
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.economicAchievements}
                                                        </p>
                                                    </div>
                                                )}
                                                {currentItem.infrastructureHighlights && (
                                                    <div className="bg-secondary/5 border border-secondary/20 shadow-sm p-3 sm:p-4 md:p-5 rounded-lg">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                                                                <IoConstructOutline className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground text-sm sm:text-base">Infrastructure Highlights</span>
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.infrastructureHighlights}
                                                        </p>
                                                    </div>
                                                )}
                                                {currentItem.demographics && (
                                                    <div className="bg-accent/5 border border-accent/20 shadow-sm p-3 sm:p-4 md:p-5 rounded-lg">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                                                <IoPeopleOutline className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground text-sm sm:text-base">Demographics & Workforce</span>
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.demographics}
                                                        </p>
                                                    </div>
                                                )}
                                                {currentItem.policies && (
                                                    <div className="bg-primary/5 border border-primary/20 shadow-sm p-3 sm:p-4 md:p-5 rounded-lg">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                                <IoDocumentTextOutline className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                                            </div>
                                                            <span className="font-bold text-card-foreground text-sm sm:text-base">Investment Policies</span>
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                            {currentItem.policies}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })()}
                                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center">
                                        <button
                                            onClick={() => { setIsDialogOpen(false); setSelectedState(null) }}
                                            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium shadow-md min-w-[120px]"
                                        >
                                            Close Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <div className="flex justify-center items-center gap-4 mt-16">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => {
                            setCurrentPage(index)
                            setIsAutoPlaying(false)
                            setTimeout(() => setIsAutoPlaying(true), 10000)
                        }}
                        className={`transition-all duration-300 ${index === currentPage
                            ? "w-4 h-4 bg-orange-500 shadow-lg"
                            : "w-4 h-4 bg-muted-foreground/30 hover:bg-primary/60 hover:scale-125"
                            }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChooseState
