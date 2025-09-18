"use client"
import { FaWhatsapp, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'

export default function FloatingSocialButtons() {
    const [isExpanded, setIsExpanded] = useState(false)

    const socialLinks = [
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp className="w-6 h-6" />,
            url: 'https://api.whatsapp.com/send?phone=+919891015220&text=Hello,%20I%20am%20interested%20in%20Invest%20NICP%20Services!%20Please%20get%C2%A0in%C2%A0touch%E2%80%A6.',
            bgColor: 'bg-green-500 hover:bg-green-600',
            delay: 'animation-delay-100'
        },
        {
            name: 'Twitter',
            icon: <FaTwitter className="w-6 h-6" />,
            url: 'https://x.com/investnicp',
            bgColor: 'bg-black hover:bg-gray-800',
            delay: 'animation-delay-200'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn className="w-6 h-6" />,
            url: 'https://www.linkedin.com/company/investnicp/',
            bgColor: 'bg-blue-600 hover:bg-blue-700',
            delay: 'animation-delay-300'
        }
    ]

    return (
        <div className="fixed right-6 bottom-6 z-50">
            <div className="flex flex-col items-end space-y-3">
                {/* Social Media Buttons */}
                <div className={`flex flex-col space-y-3 transition-all duration-500 transform ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
                    }`}>
                    {socialLinks.map((social, index) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                w-14 h-14 ${social.bgColor} text-white flex items-center justify-center
                                shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300
                                animate-fadeInUp ${social.delay}
                            `}
                            title={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`
                        w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center
                        shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300
                        ${isExpanded ? 'rotate-45' : 'rotate-0'}
                    `}
                    title="Social Media"
                >
                    {isExpanded ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                    )}
                </button>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                .animation-delay-100 {
                    animation-delay: 0.1s;
                }
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
            `}</style>
        </div>
    )
}