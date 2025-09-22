"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeadText from "./head-text"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog"
import Image from "next/image"
import sectorsData from "@/lib/sector"


const InvestmentSectors = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [selectedSector, setSelectedSector] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    // Custom responsive logic: 3 -> 5 -> 8 items per page
    const getResponsiveItemsPerPage = () => {
        if (typeof window === "undefined") return 3
        const w = window.innerWidth
        if (w >= 1280) return 8  // xl screens
        if (w >= 768) return 5   // md screens  
        return 3                 // sm screens
    }

    const [itemsPerPage, setItemsPerPage] = useState(3)
    const totalPages = Math.ceil(sectorsData.length / itemsPerPage)

    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(getResponsiveItemsPerPage())
        }

        updateItemsPerPage()
        window.addEventListener('resize', updateItemsPerPage)
        return () => window.removeEventListener('resize', updateItemsPerPage)
    }, [])

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages)
            setSelectedSector(null)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, totalPages])

    // Reset page when itemsPerPage changes (prevents out-of-range pages)
    useEffect(() => {
        setCurrentPage(0)
    }, [itemsPerPage])

    const getCurrentPageSectors = () => {
        const startIndex = currentPage * itemsPerPage
        return sectorsData.slice(startIndex, startIndex + itemsPerPage)
    }

    const handleSectorClick = (sectorId) => {
        const newSel = selectedSector === sectorId ? null : sectorId
        setSelectedSector(newSel)
        setIsDialogOpen(newSel !== null)
        // pause autoplay when dialog opens, resume when it closes
        setIsAutoPlaying(newSel === null)
    }

    return (
        <div className=" bg-white py-4 px-4">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-4">
                <HeadText
                    title={"Choose Your"}
                    title2={"Investment Sector"}
                    subtitle={"Explore India\'s most promising sectors with comprehensive data on growth opportunities, major markets, and investment potential tailored to your strategic goals."}
                />
            </div>

            {/* Main Grid Container */}
            <div
                className="max-w-7xl mx-auto"
                onMouseEnter={() => {
                    // Only pause autoplay on hover if dialog is not open
                    if (!isDialogOpen) {
                        setIsAutoPlaying(false)
                    }
                }}
                onMouseLeave={() => {
                    // Only resume autoplay on mouse leave if dialog is not open
                    if (!isDialogOpen) {
                        setIsAutoPlaying(true)
                    }
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="flex gap-3"
                    >
                        {getCurrentPageSectors().map((sector, index) => (
                            <motion.div
                                key={sector.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group cursor-pointer flex-1"
                                onClick={() => handleSectorClick(sector.id)}
                            >
                                <div className="bg-white border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden flex flex-col items-center justify-center p-4 text-center cursor-pointer h-32">
                                    <div className="w-12 h-12 bg-white/90 flex items-center justify-center text-orange-500 transition-all duration-300 border rounded-full mb-2">
                                        {sector.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-900 leading-tight line-clamp-2">{sector.name}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 transition-all duration-300 ${currentPage === index ? "bg-orange-500 scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            onClick={() => {
                                setCurrentPage(index)
                                setSelectedSector(null)
                            }}
                        />
                    ))}
                </div>

                {/* Page Counter */}
                <div className="text-center mt-6">
                    <span className="text-sm text-gray-500">
                        Page {currentPage + 1} of {totalPages} • {sectorsData.length} Investment Sectors
                    </span>
                </div>

                {/* Sector Details Dialog */}
                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open)
                    if (!open) {
                        // dialog closed - clear selection and resume autoplay
                        setSelectedSector(null)
                        setIsAutoPlaying(true)
                    } else {
                        // dialog opened - pause autoplay
                        setIsAutoPlaying(false)
                    }
                }}>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto w-[95vw] sm:w-full">
                        <div className="flex justify-between items-start mb-4">
                            <DialogTitle className="text-lg font-semibold text-gray-900 pr-4">
                                {sectorsData.find(s => s.id === selectedSector)?.name}
                            </DialogTitle>
                        </div>

                        <DialogDescription>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="w-full h-48 sm:h-56 bg-gray-100 overflow-hidden relative rounded-lg">
                                        {sectorsData.find(s => s.id === selectedSector)?.image ? (
                                            <Image
                                                src={sectorsData.find(s => s.id === selectedSector)?.image}
                                                alt={sectorsData.find(s => s.id === selectedSector)?.name || ""}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <Image src="/placeholder.svg" alt="placeholder" fill className="object-contain p-4" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                            {sectorsData.find(s => s.id === selectedSector)?.description}
                                        </p>
                                        <div className="text-sm bg-green-50 p-3 rounded-lg border border-green-200">
                                            <span className="font-semibold text-green-800">Growth Outlook:</span>
                                            <span className="text-green-600 ml-2">{sectorsData.find(s => s.id === selectedSector)?.growth}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Major States Section */}
                                {sectorsData.find(s => s.id === selectedSector)?.majorStates && (
                                    <div>
                                        <h4 className="font-semibold text-lg mb-4 text-gray-800 border-b border-gray-200 pb-2">
                                            Major Investment States
                                        </h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            {sectorsData.find(s => s.id === selectedSector)?.majorStates.map((state, index) => (
                                                <div key={index} className="bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-100 hover:shadow-md transition-shadow">
                                                    <p className="text-sm text-gray-700 leading-relaxed">{state}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </DialogDescription>

                        <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center">
                            <DialogClose className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium">
                                Close Details
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default InvestmentSectors
