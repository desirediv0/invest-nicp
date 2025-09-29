'use client';

import React, { useMemo } from 'react'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { TrendingUp, Building2, Users, Target, ExternalLink } from 'lucide-react'
import sectorsData from '@/lib/sector';



const SectorsPage = () => {
    const sortedSectors = useMemo(() => {
        const normalize = (s) => String(s || "").normalize("NFKD").replace(/\s+/g, " ").trim().toLowerCase()
        return [...sectorsData].sort((a, b) => {
            const na = normalize(a.name)
            const nb = normalize(b.name)
            if (na === nb) return String(a.id || "").localeCompare(String(b.id || ""))
            return na.localeCompare(nb, 'en')
        })
    }, [])

    return (
        <div>
            <PageHero


                backgroundImage="/sector.jpg"
            />

            <div id='sectors' className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
                            Investment Opportunities in <span className="text-orange-500">Sectors</span>
                        </h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Explore India&apos;s high-growth investment sectors with comprehensive analysis of market potential,
                            growth trends, and investment opportunities across diverse industries.
                        </p>
                    </div>

                    {/* Sectors Grid */}
                    <div className="space-y-8">
                        {sortedSectors.map((sector, index) => (
                            <div
                                key={sector.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Content Section */}
                                    <div className="lg:w-1/2 p-8 lg:p-12">
                                        <div className="flex items-center mb-4">
                                            <Building2 className="w-6 h-6 text-orange-500 mr-2" />
                                            <span className="text-orange-500 font-semibold">Investment Sector</span>
                                        </div>

                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{sector.name}</h3>

                                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                            {sector.description}
                                        </p>

                                        {/* Growth Highlight */}
                                        <div className="bg-green-50 p-4 rounded-lg mb-6 border-l-4 border-green-500">
                                            <div className="flex items-center">
                                                <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                                                <h5 className="font-semibold text-gray-800">Growth Trend</h5>
                                            </div>
                                            <p className="text-green-700 font-medium mt-1">{sector.growth}</p>
                                        </div>

                                        {/* Major States */}
                                        <div>
                                            <h4 className="font-semibold text-lg mb-4 text-gray-800">Major Investment Hubs & Analysis</h4>
                                            <div className="space-y-3">
                                                {sector.majorStates.map((state, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500"
                                                    >
                                                        <p className="text-gray-700 text-sm leading-relaxed">{state}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="lg:w-1/2 h-64 lg:h-auto relative">
                                        <Image
                                            src={sector.image}
                                            alt={`${sector.name} Investment Opportunities`}
                                            width={1000}
                                            height={1000}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="text-sm font-medium">Growth Sector</p>
                                            <p className="text-lg font-bold">{sector.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Statistics Section */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Building2 className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">50+</h3>
                            <p className="text-gray-600 text-sm">Investment Sectors</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <TrendingUp className="w-6 h-6 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">₹250L Cr+</h3>
                            <p className="text-gray-600 text-sm">Total Investment</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Users className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">250M+</h3>
                            <p className="text-gray-600 text-sm">Employment Created</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Target className="w-6 h-6 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">15%+</h3>
                            <p className="text-gray-600 text-sm">Average Growth</p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Invest in High-Growth Sectors?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Get detailed sector analysis and connect with our investment experts to explore opportunities.
                        </p>
                        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Sector Analysis
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectorsPage