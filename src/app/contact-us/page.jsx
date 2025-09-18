"use client"
import React, { useState } from 'react'
import PageHero from '@/components/PageHero'
import { MapPin, Phone, Mail, Clock, Building2, Users, Send, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        queryType: "",
        query: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data:", formData)
        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            contactNumber: "",
            queryType: "",
            query: "",
        })
        alert("Thank you for your message! We'll get back to you soon.")
    }

    return (
        <div>
            <PageHero
                title="Contact Us"
                breadcrumbs={[
                    { label: "Contact Us" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Get In Touch With <span className="text-orange-500">NICP</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to explore investment opportunities in India? Connect with our team for expert guidance and personalized solutions.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Office Information */}
                            <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">Our Office</h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-4 bg-orange-50 hover:bg-orange-100 transition-colors">
                                        <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                            <p className="text-gray-700 text-sm">
                                                Plot No. 4, 2nd Floor, Sector 44,<br />
                                                Gurgaon, Haryana - 122003
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-blue-50 hover:bg-blue-100 transition-colors">
                                        <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                            <p className="text-gray-700 text-sm">
                                                <a href="tel:+919891015220" className="hover:text-blue-600 transition-colors">
                                                    +91-9891015220
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-green-50 hover:bg-green-100 transition-colors">
                                        <Mail className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <p className="text-gray-700 text-sm">
                                                <a href="mailto:connect@bicsc.com" className="hover:text-green-600 transition-colors">
                                                    connect[at]bicsc[dot]com
                                                </a>
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* Business Associate Info */}
                            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="w-8 h-8 text-white" />
                                    <h2 className="text-xl font-bold">Business Associate</h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">📞</span>
                                        <h3 className="text-sm font-semibold">
                                            Connect with Bharat Industrial Corridor and Smart Cities (BICSC) Investment
                                        </h3>
                                    </div>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg">📧</span>
                                            <span>Email: connect[at]bicsc[dot]com</span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <span className="text-lg">🌐</span>
                                            <div>
                                                <span className="block mb-2">Websites:</span>
                                                <div className="space-y-1">
                                                    <a href="https://www.bicsc.com" target="_blank" rel="noopener noreferrer"
                                                        className="block text-orange-200 hover:text-white transition-colors underline">
                                                        www.bicsc.com
                                                    </a>
                                                    <a href="https://www.investnicp.com" target="_blank" rel="noopener noreferrer"
                                                        className="block text-orange-200 hover:text-white transition-colors underline">
                                                        www.investnicp.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white shadow-lg p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="https://x.com/investnicp" target="_blank" rel="noopener noreferrer"
                                        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-colors">
                                        <span className="text-lg">𝕏</span>
                                    </a>
                                    <a href="https://www.linkedin.com/company/investnicp/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
                                        className="w-12 h-12 bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white transition-colors">
                                        <span className="text-lg">in</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white shadow-lg p-8 md:p-12">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email address"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Contact Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="contactNumber"
                                                placeholder="Enter your contact number"
                                                value={formData.contactNumber}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Query Type *
                                            </label>
                                            <select
                                                name="queryType"
                                                value={formData.queryType}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            >
                                                <option value="">Select query type</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="business">Business Partnership</option>
                                                <option value="investment">Investment Opportunity</option>
                                                <option value="support">Support</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="query"
                                            placeholder="Tell us about your investment goals or business requirements..."
                                            value={formData.query}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none text-gray-900"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>

                                <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-500">
                                    <h4 className="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h4>
                                    <p className="text-sm text-gray-700">
                                        We typically respond to all inquiries within 24 hours during business days.
                                        For urgent matters, please call us directly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 md:p-12 text-center">
                        <h3 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
                        <p className="text-xl mb-8 opacity-90">
                            Join thousands of successful investors who chose NICP as their trusted partner in India.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/about"
                                className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 transition-colors">
                                Learn More About Us
                            </Link>
                            <Link href="/investment-opportunities"
                                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-8 transition-colors">
                                View Opportunities
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs


