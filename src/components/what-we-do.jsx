"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import HeadText from "./head-text"
import { businessmeetinghandshakemergeracquisition, businessseminarconferencepolicydiscussion, businessworkshoppresentationinvestment, industrysectorengagementbusinesspartnership, investmentadvisoryfinancialconsultation } from "@/assets"
import { useRouter } from "next/navigation"



const imageServices = [
    {
        title: "Market Entry & Expansion",
        subtitle: "Mergers and Acquisitions",
        image: businessmeetinghandshakemergeracquisition,
        href: "/what-we-do#market-entry-expansion-mergers-acquisitions"
    },
    {
        title: "Workshops for Investment Promotions",
        subtitle: "Strategic Planning Sessions",
        image: businessworkshoppresentationinvestment,
        href: "/what-we-do#workshops-investment-promotions"
    },
    {
        title: "Seminars For New Policies & Opportunities",
        subtitle: "Policy Updates & Market Insights",
        image: businessseminarconferencepolicydiscussion,
        href: "/what-we-do#seminars-new-policies-opportunities"
    },
    {
        title: "INVESTMENT ADVISORY",
        subtitle: "JVs / FOIs",
        image: investmentadvisoryfinancialconsultation,
        href: "/what-we-do#investment-advisory-jvs-fois"
    },
    {
        title: "Sector Engagement & Facilitation",
        subtitle: "Industry Partnerships",
        image: industrysectorengagementbusinesspartnership,
        href: "/what-we-do#sector-engagement-facilitation"
    },
]

export default function WhatWeDo() {
    const route = useRouter()
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <HeadText
                    title={"WHAT"}
                    title2={"WE DO"}
                    subtitle={" Empowering Businesses with Comprehensive Investment Solutions."}
                />


                {/* Image-based Service Cards Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {imageServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            onClick={() => route.push(service.href)}
                            className="relative overflow-hidden bg-card border border-border group cursor-pointer h-48"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image || "/placeholder.svg"}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-4">
                                <div className="bg-orange-500/90 text-white px-3 py-1 text-xs font-semibold mb-2 inline-block">
                                    {service.title}
                                </div>
                                <p className="text-white text-sm font-medium">{service.subtitle}</p>
                            </div>

                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
