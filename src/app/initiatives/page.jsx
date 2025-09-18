import React from 'react'
import PageHero from '@/components/PageHero'

const Initiatives = () => {
    return (
        <div>
            <PageHero
                title="Our Initiatives"
                breadcrumbs={[
                    { label: "Initiatives" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            <span className="text-orange-500">NICP</span> Initiatives
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg text-center">
                            Discover our ongoing initiatives and projects that drive investment and growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Initiatives
