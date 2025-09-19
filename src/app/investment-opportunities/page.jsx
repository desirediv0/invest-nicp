'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { MapPin, TrendingUp, Building, ChevronRight } from 'lucide-react'

const InvestmentOpportunities = () => {
    const [activeTab, setActiveTab] = useState('states')

    return (
        <div>
            <PageHero
                title="Investment Opportunities"
                breadcrumbs={[
                    { label: "Investment Opportunities" }
                ]}
                backgroundImage="/cultural.webp"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Explore Investment <span className="text-orange-500">Opportunities</span>
                        </h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
                            Discover lucrative investment opportunities across India&apos;s growth corridors, industrial hubs, and emerging sectors.
                        </p>

                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-white rounded-lg p-2 shadow-lg border">
                                <button
                                    onClick={() => setActiveTab('states')}
                                    className={`px-8 py-3 rounded-md transition-all duration-300 font-semibold ${activeTab === 'states'
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'text-gray-600 hover:text-orange-500'
                                        }`}
                                >
                                    <MapPin className="inline-block w-5 h-5 mr-2" />
                                    States & Cities
                                </button>
                                <button
                                    onClick={() => setActiveTab('sectors')}
                                    className={`px-8 py-3 rounded-md transition-all duration-300 font-semibold ml-2 ${activeTab === 'sectors'
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'text-gray-600 hover:text-orange-500'
                                        }`}
                                >
                                    <Building className="inline-block w-5 h-5 mr-2" />
                                    Investment Sectors
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="transition-all duration-500">
                        {activeTab === 'states' && (
                            <div>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">States & Cities</h3>
                                    <p className="text-gray-600">Explore investment opportunities across India&apos;s growth corridors</p>
                                </div>
                                <Link
                                    href="/investment-opportunities/states"
                                    className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 hover:border-orange-500"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                            <div className="flex items-center mb-4">
                                                <MapPin className="w-6 h-6 text-orange-500 mr-2" />
                                                <span className="text-orange-500 font-semibold">Geographic Opportunities</span>
                                            </div>
                                            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                                Discover Investment Hubs Across India
                                            </h4>
                                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                                Explore investment opportunities across India&apos;s most dynamic states and cities. From industrial corridors
                                                to smart city initiatives, discover the perfect location for your investment goals.
                                            </p>
                                            <div className="flex items-center text-orange-500 font-semibold">
                                                <span>Explore States & Cities</span>
                                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 h-64 lg:h-auto relative">
                                            <Image
                                                src="/cultural.webp"
                                                alt="States and Cities"
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {activeTab === 'sectors' && (
                            <div>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Sectors</h3>
                                    <p className="text-gray-600">Discover high-growth sectors and emerging opportunities</p>
                                </div>
                                <Link
                                    href="/investment-opportunities/sectors"
                                    className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 hover:border-orange-500"
                                >
                                    <div className="flex flex-col lg:flex-row-reverse">
                                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                            <div className="flex items-center mb-4">
                                                <Building className="w-6 h-6 text-orange-500 mr-2" />
                                                <span className="text-orange-500 font-semibold">Sectoral Analysis</span>
                                            </div>
                                            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                                High-Growth Investment Sectors
                                            </h4>
                                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                                Discover India&apos;s most promising investment sectors from IT and manufacturing to renewable energy
                                                and healthcare. Access comprehensive data on growth potential and market opportunities.
                                            </p>
                                            <div className="flex items-center text-orange-500 font-semibold">
                                                <span>Explore Investment Sectors</span>
                                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 h-64 lg:h-auto relative">
                                            <Image
                                                src="/cultural.webp"
                                                alt="Investment Sectors"
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 to-transparent"></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Statistics Section */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">36+</h3>
                            <p className="text-gray-600">States & Union Territories</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                            <p className="text-gray-600">Investment Sectors</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">₹100L Cr+</h3>
                            <p className="text-gray-600">Investment Opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestmentOpportunities
