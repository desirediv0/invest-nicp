'use client';

import React from 'react'
import PageHero from '@/components/PageHero'

import { Linkedin } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";

const InsightsUpdates = () => {
    return (
        <div>
            <PageHero
                title="INSIGHTS"
                breadcrumbs={[
                    { label: "INSIGHTS" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Latest Insights & Updates from <span className="text-orange-500">INVEST NICP</span>
                        </h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Stay connected with our latest announcements, market insights, and investment opportunities through our official social media channels.
                        </p>
                    </div>


                    {/* Additional Information Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Stay Connected with <span className="text-orange-500">Invest NICP</span>
                            </h3>
                            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                                Follow us on our official social media channels for real-time updates on investment opportunities,
                                policy changes, and infrastructure development across India&apos;s industrial corridors.
                            </p>

                            <div className="flex justify-center space-x-4">
                                <a
                                    href="https://linkedin.com/company/investnicp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                >
                                    <Linkedin className="h-5 w-5 mr-2" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://x.com/investnicp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center px-6 py-3 bg-black hover:bg-black/80 text-white rounded-lg transition-colors"
                                >
                                    <FaXTwitter className="h-5 w-5 mr-2" />
                                    Twitter (X)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsightsUpdates
