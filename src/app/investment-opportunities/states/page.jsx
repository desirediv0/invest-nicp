'use client';

import React, { useMemo } from 'react'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import statesData from '@/lib/state';


const StatesPage = () => {
    const sortedStates = useMemo(() => {
        const normalize = (s) => String(s || "").normalize("NFKD").replace(/\s+/g, " ").trim().toLowerCase()
        return [...statesData].sort((a, b) => {
            const na = normalize(a.name)
            const nb = normalize(b.name)
            if (na === nb) return String(a.id || "").localeCompare(String(b.id || ""))
            return na.localeCompare(nb, 'en')
        })
    }, [])

    return (
        <div>
            <PageHero
                title="Investment Opportunities by States"

                backgroundImage="/states.jpg"
            />

            <div id='states' className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
                            Investment Opportunities by <span className="text-orange-500">States</span>
                        </h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Discover investment potential across India&apos;s diverse states with comprehensive data on GDP,
                            major industries, key projects, and investment opportunities.
                        </p>
                    </div>

                    {/* States Grid */}
                    <div className="space-y-8">
                        {sortedStates.map((state, index) => (
                            <div
                                key={state.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                            >
                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Content Section */}
                                    <div className="lg:w-2/3 p-8 lg:p-12">


                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{state.name}</h3>

                                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                            {state.economicAchievements}
                                        </p>

                                        {/* Investment Opportunities */}
                                        <div className="bg-orange-50 p-4 rounded-lg mb-6 border-l-4 border-orange-500">
                                            <h5 className="font-semibold text-gray-800 mb-2">Investment Opportunities</h5>
                                            <p className="text-gray-700 text-sm">{state.investmentOpportunities}</p>
                                        </div>

                                        {/* Key Industries */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-lg mb-3 text-gray-800">Key Industries</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {state.keyIndustries.map((industry, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                                                    >
                                                        {industry}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Infrastructure & Policies */}
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-gray-800 mb-2">Infrastructure</h5>
                                                <p className="text-gray-700 text-sm">{state.infrastructureHighlights}</p>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-800 mb-2">Policies</h5>
                                                <p className="text-gray-700 text-sm">{state.policies}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="lg:w-1/3 h-64 lg:h-auto relative">
                                        <Image
                                            src={state.cardImage}
                                            alt={`${state.name} Investment Opportunities`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 text-white">
                                            <p className="text-sm font-medium">Investment Hub</p>
                                            <p className="text-lg font-bold">{state.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Invest in India&apos;s Growth Story?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Connect with our investment experts to explore opportunities in your preferred state.
                        </p>
                        <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Contact Investment Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatesPage