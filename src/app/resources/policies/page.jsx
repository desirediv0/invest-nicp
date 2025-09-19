"use client"
import PageHero from '@/components/PageHero'
import { FileText, Download, ExternalLink } from 'lucide-react'

export default function PoliciesPage() {
    const policies = [
        { name: "Alternative Investment Fund", id: "aif", description: "Guidelines and regulations for Alternative Investment Funds in India" },
        { name: "FDI Policy", id: "fdi", description: "Foreign Direct Investment policy framework and guidelines" },
        { name: "FDI Policy 2020", id: "fdi2020", description: "Updated FDI policy with latest amendments and sectors" },
        { name: "DPIIT", id: "dpiit", description: "Department for Promotion of Industry and Internal Trade policies" },
        { name: "India Industrial Corridors", id: "corridors", description: "Industrial corridor development policies and guidelines" },
        { name: "Smart City Description", id: "smartcity", description: "Smart Cities Mission framework and implementation guidelines" },
        { name: "Smart City Guidelines", id: "smartcity-guidance", description: "Comprehensive guidelines for smart city development" },
        { name: "RERA Act", id: "rera", description: "Real Estate Regulatory Authority Act and regulations" }
    ]

    return (
        <div>
            <PageHero
                title="Government Policies & Guidelines"
                breadcrumbs={[
                    { label: "Resources", href: "/resources" },
                    { label: "Policies" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg p-8 md:p-12 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Government <span className="text-orange-500">Policies & Guidelines</span>
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-8">
                            Essential policy documents and guidelines for investment and business in India
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {policies.map((policy, index) => (
                            <div key={policy.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-center">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                                    {policy.name}
                                                </h3>
                                                <span className="text-sm text-gray-500">Policy Document</span>
                                            </div>
                                        </div>
                                        <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 font-semibold">
                                            {index + 1}
                                        </span>
                                    </div>

                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {policy.description}
                                    </p>

                                    <div className="flex gap-3">
                                        <button
                                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 transition-colors flex items-center justify-center gap-2"
                                            onClick={() => alert(`PDF for ${policy.name} will be available soon. Please contact us for immediate access.`)}
                                        >
                                            <Download className="w-4 h-4" />
                                            Download PDF
                                        </button>
                                        <button
                                            className="flex-1 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold py-3 px-4 transition-colors flex items-center justify-center gap-2"
                                            onClick={() => alert(`External link for ${policy.name} will be available soon.`)}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Online
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Info Banner */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mt-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center">
                                ℹ️
                            </div>
                            <h3 className="text-xl font-bold text-blue-900">Document Access Information</h3>
                        </div>
                        <p className="text-blue-800 mb-4">
                            Policy documents are being digitized and will be available for download soon.
                            For immediate access to any specific policy document, please contact our team.
                        </p>
                        <a href="/contact-us" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 transition-colors">
                            Request Document Access
                        </a>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Policy Guidance & Compliance</h3>
                        <p className="text-lg mb-6">
                            NICP helps you understand and comply with Indian government policies for successful business operations
                        </p>
                        <a href="/contact-us" className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 transition-colors">
                            Get Policy Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}