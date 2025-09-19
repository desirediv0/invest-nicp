"use client"
import { Linkedin, MapPin, Users, Award, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaXTwitter } from "react-icons/fa6";


export default function BusinessFooter() {
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
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Feel free to contact</h3>
                            </div>
                        </div>

                        <div className=" p-6   hover:border-orange-500/50 transition-colors">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-orange-400">
                                    <span className="text-xl">📞</span>
                                    <h4 className="text-white font-semibold text-sm">
                                        Connect with Invest National Industrial Corridor Projects
                                    </h4>
                                </div>

                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <span className="text-base">📧</span>
                                        <span>Email: info@investnicp.com</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-300">
                                        <span className="text-base">🌐</span>
                                        <div className="flex flex-col">
                                            <span>Website:</span>
                                            <div className="space-x-2 mt-1">
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
                            {/* Name and Mobile Number */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm transition-colors"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    placeholder="Mobile Number *"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm transition-colors"
                                    required
                                />
                            </div>

                            {/* Email and Subject */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail Address *"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm transition-colors"
                                    required
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject for Appointment *"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm transition-colors"
                                    required
                                />
                            </div>

                            {/* State and Sector */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <select
                                    name="stateOfInterest"
                                    value={formData.stateOfInterest}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm transition-colors"
                                    required
                                >
                                    <option value="" className="bg-gray-800 text-gray-400">State of Interest *</option>
                                    <option value="andhra-pradesh" className="bg-gray-800 text-white">Andhra Pradesh</option>
                                    <option value="arunachal-pradesh" className="bg-gray-800 text-white">Arunachal Pradesh</option>
                                    <option value="assam" className="bg-gray-800 text-white">Assam</option>
                                    <option value="bihar" className="bg-gray-800 text-white">Bihar</option>
                                    <option value="chhattisgarh" className="bg-gray-800 text-white">Chhattisgarh</option>
                                    <option value="goa" className="bg-gray-800 text-white">Goa</option>
                                    <option value="gujarat" className="bg-gray-800 text-white">Gujarat</option>
                                    <option value="haryana" className="bg-gray-800 text-white">Haryana</option>
                                    <option value="himachal-pradesh" className="bg-gray-800 text-white">Himachal Pradesh</option>
                                    <option value="jharkhand" className="bg-gray-800 text-white">Jharkhand</option>
                                    <option value="karnataka" className="bg-gray-800 text-white">Karnataka</option>
                                    <option value="kerala" className="bg-gray-800 text-white">Kerala</option>
                                    <option value="madhya-pradesh" className="bg-gray-800 text-white">Madhya Pradesh</option>
                                    <option value="maharashtra" className="bg-gray-800 text-white">Maharashtra</option>
                                    <option value="manipur" className="bg-gray-800 text-white">Manipur</option>
                                    <option value="meghalaya" className="bg-gray-800 text-white">Meghalaya</option>
                                    <option value="mizoram" className="bg-gray-800 text-white">Mizoram</option>
                                    <option value="nagaland" className="bg-gray-800 text-white">Nagaland</option>
                                    <option value="odisha" className="bg-gray-800 text-white">Odisha</option>
                                    <option value="punjab" className="bg-gray-800 text-white">Punjab</option>
                                    <option value="rajasthan" className="bg-gray-800 text-white">Rajasthan</option>
                                    <option value="sikkim" className="bg-gray-800 text-white">Sikkim</option>
                                    <option value="tamil-nadu" className="bg-gray-800 text-white">Tamil Nadu</option>
                                    <option value="telangana" className="bg-gray-800 text-white">Telangana</option>
                                    <option value="tripura" className="bg-gray-800 text-white">Tripura</option>
                                    <option value="uttar-pradesh" className="bg-gray-800 text-white">Uttar Pradesh</option>
                                    <option value="uttarakhand" className="bg-gray-800 text-white">Uttarakhand</option>
                                    <option value="west-bengal" className="bg-gray-800 text-white">West Bengal</option>
                                    <option value="delhi" className="bg-gray-800 text-white">Delhi</option>
                                </select>

                                <select
                                    name="sectorOfInterest"
                                    value={formData.sectorOfInterest}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm transition-colors"
                                    required
                                >
                                    <option value="" className="bg-gray-800 text-gray-400">Sector of Interest *</option>
                                    <option value="agriculture" className="bg-gray-800 text-white">Agriculture & Allied Industries</option>
                                    <option value="automobiles" className="bg-gray-800 text-white">Automobiles</option>
                                    <option value="aviation" className="bg-gray-800 text-white">Aviation</option>
                                    <option value="banking" className="bg-gray-800 text-white">Banking</option>
                                    <option value="biotechnology" className="bg-gray-800 text-white">Biotechnology</option>
                                    <option value="chemicals" className="bg-gray-800 text-white">Chemicals</option>
                                    <option value="defence-manufacturing" className="bg-gray-800 text-white">Defence Manufacturing</option>
                                    <option value="e-commerce" className="bg-gray-800 text-white">E-Commerce</option>
                                    <option value="education-training" className="bg-gray-800 text-white">Education & Training</option>
                                    <option value="healthcare" className="bg-gray-800 text-white">Healthcare</option>
                                    <option value="infrastructure" className="bg-gray-800 text-white">Infrastructure</option>
                                    <option value="it-bpm" className="bg-gray-800 text-white">IT & BPM</option>
                                    <option value="manufacturing" className="bg-gray-800 text-white">Manufacturing</option>
                                    <option value="pharmaceuticals" className="bg-gray-800 text-white">Pharmaceuticals</option>
                                    <option value="renewable-energy" className="bg-gray-800 text-white">Renewable Energy</option>
                                    <option value="steel" className="bg-gray-800 text-white">Steel</option>
                                    <option value="telecommunications" className="bg-gray-800 text-white">Telecommunications</option>
                                    <option value="textiles" className="bg-gray-800 text-white">Textiles</option>
                                    <option value="tourism-hospitality" className="bg-gray-800 text-white">Tourism & Hospitality</option>
                                </select>
                            </div>

                            {/* Budget and Appointment Date */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white text-sm transition-colors"
                                    required
                                >
                                    <option value="" className="bg-gray-800 text-gray-400">Budget *</option>
                                    <option value="under-1cr" className="bg-gray-800 text-white">Under ₹1 Crore</option>
                                    <option value="1-5cr" className="bg-gray-800 text-white">₹1-5 Crores</option>
                                    <option value="5-10cr" className="bg-gray-800 text-white">₹5-10 Crores</option>
                                    <option value="10-25cr" className="bg-gray-800 text-white">₹10-25 Crores</option>
                                    <option value="25-50cr" className="bg-gray-800 text-white">₹25-50 Crores</option>
                                    <option value="50-100cr" className="bg-gray-800 text-white">₹50-100 Crores</option>
                                    <option value="above-100cr" className="bg-gray-800 text-white">Above ₹100 Crores</option>
                                </select>

                                <input
                                    type="date"
                                    name="appointmentDate"
                                    placeholder="Appointment Date"
                                    value={formData.appointmentDate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm transition-colors"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="MESSAGE/QUERY * Short Description (Max 200 Character)"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                maxLength={200}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-white placeholder-gray-400 text-sm resize-none transition-colors"
                                required
                            ></textarea>

                            {/* Checkboxes */}
                            <div className="space-y-3">
                                <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="requestOtp"
                                        checked={formData.requestOtp}
                                        onChange={(e) => setFormData(prev => ({ ...prev, requestOtp: e.target.checked }))}
                                        className="mt-1 w-4 h-4 text-orange-500 bg-gray-800 border-gray-600 focus:ring-orange-500"
                                    />
                                    <span>Request for OTP *</span>
                                </label>

                                <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={(e) => setFormData(prev => ({ ...prev, agreeTerms: e.target.checked }))}
                                        className="mt-1 w-4 h-4 text-orange-500 bg-gray-800 border-gray-600 focus:ring-orange-500"
                                        required
                                    />
                                    <span>I agree with your <Link href="/terms-and-conditions" className="text-orange-400 hover:text-orange-300 underline">terms & conditions</Link></span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 transition-colors duration-200 uppercase tracking-wider text-sm"
                                disabled={!formData.agreeTerms}
                            >
                                Submit
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
