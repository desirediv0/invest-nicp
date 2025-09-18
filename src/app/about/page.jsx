import React from 'react'
import PageHero from '@/components/PageHero'

const AboutUs = () => {
    return (
        <div>
            <PageHero
                title="About Us"
                breadcrumbs={[
                    { label: "About Us" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Welcome to <span className="text-orange-500">NICP</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg text-center">
                            Your trusted partner in investment and commercial services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
