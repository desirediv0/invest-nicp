"use client"
import React, { useState } from 'react'
import PageHero from '@/components/PageHero'
import { MapPin, Phone, Mail, Building2, Users, Send, MessageSquare } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobileNumber: "",
        email: "",
        subject: "",
        stateOfInterest: "",
        sectorOfInterest: "",
        budget: "",
        appointmentDate: "",
        message: "",
        requestOtp: false,
        agreeTerms: false,
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
            mobileNumber: "",
            email: "",
            subject: "",
            stateOfInterest: "",
            sectorOfInterest: "",
            budget: "",
            appointmentDate: "",
            message: "",
            requestOtp: false,
            agreeTerms: false,
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

                                    <div className="flex items-start gap-3 p-4 bg-green-50 hover:bg-green-100 transition-colors">
                                        <FaWhatsapp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                                            <p className="text-gray-700 text-sm">
                                                <a href="https://api.whatsapp.com/send?phone=+919891015220&text=Hello,%20I%20am%20interested%20in%20Invest%20NICP%20Services!%20Please%20get%C2%A0in%C2%A0touch%E2%80%A6." className="hover:text-green-600 transition-colors">
                                                    +91-9891015220
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 bg-blue-50 hover:bg-blue-100 transition-colors">
                                        <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <div className="space-y-1">
                                                <p className="text-gray-700 text-sm">
                                                    <a href="mailto:info@investnicp.com" className="hover:text-blue-600 transition-colors">
                                                        info@investnicp.com
                                                    </a>
                                                </p>
                                                <p className="text-gray-700 text-sm">
                                                    <a href="mailto:nicpindia@gmail.com" className="hover:text-blue-600 transition-colors">
                                                        📧 nicpindia@gmail.com
                                                    </a>
                                                </p>
                                            </div>
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
                                            Connect with Invest National Industrial Corridor Projects
                                        </h3>
                                    </div>

                                    <div className="space-y-3 text-sm">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-lg">📧</span>
                                                <span>Email: info@investnicp.com</span>
                                            </div>
                                            <div className="flex items-center gap-3 ml-6">
                                                <span className="text-lg">📧</span>
                                                <span>nicpindia@gmail.com</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <span className="text-lg">🌐</span>
                                            <div>
                                                <span className="block mb-2">Website:</span>
                                                <div className="space-y-1">
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
                                    <h2 className="text-3xl font-bold text-gray-900">Appointment Form</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name and Mobile Number */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Name *
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
                                                Mobile Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="mobileNumber"
                                                placeholder="Enter your mobile number"
                                                value={formData.mobileNumber}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email and Subject */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                E-mail Address *
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
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Subject for Appointment *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Enter appointment subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* State and Sector */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                State of Interest *
                                            </label>
                                            <select
                                                name="stateOfInterest"
                                                value={formData.stateOfInterest}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            >
                                                <option value="">Select state of interest</option>
                                                <option value="andhra-pradesh">Andhra Pradesh</option>
                                                <option value="arunachal-pradesh">Arunachal Pradesh</option>
                                                <option value="assam">Assam</option>
                                                <option value="bihar">Bihar</option>
                                                <option value="chhattisgarh">Chhattisgarh</option>
                                                <option value="goa">Goa</option>
                                                <option value="gujarat">Gujarat</option>
                                                <option value="haryana">Haryana</option>
                                                <option value="himachal-pradesh">Himachal Pradesh</option>
                                                <option value="jharkhand">Jharkhand</option>
                                                <option value="karnataka">Karnataka</option>
                                                <option value="kerala">Kerala</option>
                                                <option value="madhya-pradesh">Madhya Pradesh</option>
                                                <option value="maharashtra">Maharashtra</option>
                                                <option value="manipur">Manipur</option>
                                                <option value="meghalaya">Meghalaya</option>
                                                <option value="mizoram">Mizoram</option>
                                                <option value="nagaland">Nagaland</option>
                                                <option value="odisha">Odisha</option>
                                                <option value="punjab">Punjab</option>
                                                <option value="rajasthan">Rajasthan</option>
                                                <option value="sikkim">Sikkim</option>
                                                <option value="tamil-nadu">Tamil Nadu</option>
                                                <option value="telangana">Telangana</option>
                                                <option value="tripura">Tripura</option>
                                                <option value="uttar-pradesh">Uttar Pradesh</option>
                                                <option value="uttarakhand">Uttarakhand</option>
                                                <option value="west-bengal">West Bengal</option>
                                                <option value="delhi">Delhi</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Sector of Interest *
                                            </label>
                                            <select
                                                name="sectorOfInterest"
                                                value={formData.sectorOfInterest}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            >
                                                <option value="">Select sector of interest</option>
                                                <option value="agriculture">Agriculture & Allied Industries</option>
                                                <option value="automobiles">Automobiles</option>
                                                <option value="aviation">Aviation</option>
                                                <option value="banking">Banking</option>
                                                <option value="biotechnology">Biotechnology</option>
                                                <option value="chemicals">Chemicals</option>
                                                <option value="defence-manufacturing">Defence Manufacturing</option>
                                                <option value="e-commerce">E-Commerce</option>
                                                <option value="education-training">Education & Training</option>
                                                <option value="healthcare">Healthcare</option>
                                                <option value="infrastructure">Infrastructure</option>
                                                <option value="it-bpm">IT & BPM</option>
                                                <option value="manufacturing">Manufacturing</option>
                                                <option value="pharmaceuticals">Pharmaceuticals</option>
                                                <option value="renewable-energy">Renewable Energy</option>
                                                <option value="steel">Steel</option>
                                                <option value="telecommunications">Telecommunications</option>
                                                <option value="textiles">Textiles</option>
                                                <option value="tourism-hospitality">Tourism & Hospitality</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Budget and Appointment Date */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Budget *
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                            >
                                                <option value="">Select your budget range</option>
                                                <option value="under-1cr">Under ₹1 Crore</option>
                                                <option value="1-5cr">₹1-5 Crores</option>
                                                <option value="5-10cr">₹5-10 Crores</option>
                                                <option value="10-25cr">₹10-25 Crores</option>
                                                <option value="25-50cr">₹25-50 Crores</option>
                                                <option value="50-100cr">₹50-100 Crores</option>
                                                <option value="above-100cr">Above ₹100 Crores</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Appointment Date of Weekend *
                                            </label>
                                            <input
                                                type="date"
                                                name="appointmentDate"
                                                value={formData.appointmentDate}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors text-gray-900"
                                                required
                                                min={new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString().split('T')[0]}
                                            />
                                            <p className="text-xs text-gray-500 mt-1">
                                                Preferred date should be more than 48 hours from today
                                            </p>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            MESSAGE/QUERY * Short Description (Max 200 Character)
                                        </label>
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your investment goals or business requirements..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            maxLength={200}
                                            className="w-full px-4 py-3 border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none text-gray-900"
                                            required
                                        ></textarea>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {formData.message.length}/200 characters
                                        </p>
                                    </div>

                                    {/* Checkboxes */}
                                    <div className="space-y-4">
                                        <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="requestOtp"
                                                checked={formData.requestOtp}
                                                onChange={(e) => setFormData(prev => ({ ...prev, requestOtp: e.target.checked }))}
                                                className="mt-1 w-4 h-4 text-orange-500 bg-white border-gray-300 focus:ring-orange-500"
                                            />
                                            <span className="font-semibold">Request for OTP *</span>
                                        </label>

                                        <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="agreeTerms"
                                                checked={formData.agreeTerms}
                                                onChange={(e) => setFormData(prev => ({ ...prev, agreeTerms: e.target.checked }))}
                                                className="mt-1 w-4 h-4 text-orange-500 bg-white border-gray-300 focus:ring-orange-500"
                                                required
                                            />
                                            <span>I agree with your <Link href="/terms-and-conditions" className="text-orange-500 hover:text-orange-600 underline font-semibold">terms & conditions</Link></span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={!formData.agreeTerms}
                                    >
                                        <Send className="w-5 h-5" />
                                        SUBMIT
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


