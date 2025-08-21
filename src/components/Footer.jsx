"use client";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand / Logo Section */}
                <div>
                    <Image
                        src={"/logo.gif"}
                        width={120}
                        height={120}
                        alt="Logo"

                    />
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                        Building trust with innovation and expertise.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-500 after:mt-2">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Our Services</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Industries</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-500 after:mt-2">
                        Resources
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">FAQs</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 relative after:content-[''] after:block after:w-10 after:h-[2px] after:bg-blue-500 after:mt-2">
                        Follow Us
                    </h3>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 rounded-full bg-white shadow hover:bg-blue-100 transition">
                            <Facebook size={20} className="text-blue-600" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white shadow hover:bg-blue-100 transition">
                            <Twitter size={20} className="text-blue-600" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white shadow hover:bg-blue-100 transition">
                            <Linkedin size={20} className="text-blue-600" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white shadow hover:bg-blue-100 transition">
                            <Instagram size={20} className="text-blue-600" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="bg-gray-900 mt-12 py-4">
                <p className="text-center text-sm text-gray-300">
                    © {new Date().getFullYear()} <span className="font-semibold text-blue-400">INVEST NICP</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
