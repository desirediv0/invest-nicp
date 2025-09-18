"use client"
import { Linkedin, MapPin, Users, Award, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaXTwitter } from "react-icons/fa6";


export default function BusinessFooter() {
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
    }

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Top Orange Accent Line */}
            <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"></div>

            {/* Main Footer Content */}
            <div className=" px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Office Section */}
                    <div className="space-y-6">
                        <div className="border-l-4 border-orange-500 pl-6">
                            <Link href="/" className="flex items-center gap-3 mb-4">
                                <Image src={"/logo2.png"} alt="NICP Logo" width={120} height={60} className="h-16 w-auto object-contain" />
                                <span className="text-2xl font-bold text-white uppercase tracking-wider">NICP</span>
                            </Link>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 hover:bg-gray-800/50 p-3 transition-colors">
                                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Plot No. 4, 2nd Floor, Sector 44,<br />
                                        Gurgaon, Haryana - 122003
                                    </p>
                                </div>
                            </div>


                        </div>

                        {/* Social Links */}
                        <div className="pt-4 border-t border-gray-700">
                            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Follow Us</p>
                            <div className="flex gap-3">
                                <a target="_blank" href="https://x.com/investnicp" className="w-10 h-10 bg-gray-700 hover:bg-orange-500 flex items-center justify-center transition-colors">
                                    <FaXTwitter size={18} className="text-white" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/company/investnicp/posts/?feedView=all" className="w-10 h-10 bg-gray-700 hover:bg-orange-500 flex items-center justify-center transition-colors">
                                    <Linkedin size={18} className="text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Business Associate Section */}
                    <div className="space-y-6">
                        <div className="border-l-4 border-orange-500 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Business Associate</h3>
                            </div>
                        </div>

                        <div className=" p-6   hover:border-orange-500/50 transition-colors">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-orange-400">
                                    <span className="text-xl">📞</span>
                                    <h4 className="text-white font-semibold text-sm">
                                        Connect with Bharat Industrial Corridor and Smart Cities (BICSC) Investment
                                    </h4>
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <span className="text-base">📧</span>
                                        <span>Email: connect[at]bicsc[dot]com</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-300">
                                        <span className="text-base">🌐</span>
                                        <div className="flex flex-col">
                                            <span>Website:</span>
                                            <div className="space-x-2 mt-1">
                                                <a href="https://www.bicsc.com" target="_blank" rel="noopener noreferrer"
                                                    className="text-orange-400 hover:text-orange-300 transition-colors">
                                                    www.bicsc.com
                                                </a>
                                                <span className="text-gray-400">|</span>
                                                <a href="https://www.investnicp.com" target="_blank" rel="noopener noreferrer"
                                                    className="text-orange-400 hover:text-orange-300 transition-colors">
                                                    www.investnicp.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-6">
                        <div className="border-l-4 border-orange-500 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Quick Links</h3>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            <Link href="/" className="block text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 px-4 py-2 transition-all duration-200 border-l-2 border-transparent hover:border-orange-500 text-sm font-medium">
                                HOME
                            </Link>


                            <Link href="/contact-us" className="block text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 px-4 py-2 transition-all duration-200 border-l-2 border-transparent hover:border-orange-500 text-sm font-medium">
                                CONTACT US
                            </Link>

                        </nav>
                    </div>

                    {/* Contact Form Section */}
                    <div className="space-y-6">
                        <div className="border-l-4 border-orange-500 pl-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-orange-500 flex items-center justify-center">
                                    <Briefcase className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Contact Us</h3>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm transition-colors"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email ID"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm transition-colors"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    placeholder="Contact Number"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm transition-colors"
                                    required
                                />
                                <select
                                    name="queryType"
                                    value={formData.queryType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm transition-colors"
                                    required
                                >
                                    <option value="" className="bg-gray-800 text-gray-400">Type Of Query</option>
                                    <option value="general" className="bg-gray-800 text-white">General Inquiry</option>
                                    <option value="business" className="bg-gray-800 text-white">Business Partnership</option>
                                    <option value="investment" className="bg-gray-800 text-white">Investment Opportunity</option>
                                    <option value="support" className="bg-gray-800 text-white">Support</option>
                                </select>
                            </div>
                            <textarea
                                name="query"
                                placeholder="Your Query"
                                value={formData.query}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm resize-none transition-colors"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 transition-colors duration-200 uppercase tracking-wider text-sm"
                            >
                                Submit Query
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="bg-black py-6 border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-center md:text-left text-sm text-gray-400">
                            Copyright © 2023 <span className="text-orange-400 font-semibold">NICP</span> - All Rights Reserved.
                        </p>
                        <div className="flex flex-wrap gap-6 text-xs text-gray-500">
                            <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
                            <Link href="/terms-and-conditions" className="hover:text-orange-400 transition-colors">Terms of Service</Link>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
