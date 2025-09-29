"use client"
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

export default function FloatingSocialButtons() {
    const socialLinks = [
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp className="w-6 h-6" />,
            url: 'https://api.whatsapp.com/send?phone=+919891015220&text=Hello,%20I%20am%20interested%20in%20Invest%20NICP%20Services!%20Please%20get%C2%A0in%C2%A0touch%E2%80%A6.',
            bgColor: 'bg-green-500 hover:bg-green-600',
            position: 'right', // Right side (WhatsApp)
        },
        {
            name: 'Twitter',
            icon: <FaXTwitter className="w-6 h-6" />,
            url: 'https://x.com/investnicp',
            bgColor: 'bg-black hover:bg-gray-800',
            position: 'left', // Left side (Twitter)
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn className="w-6 h-6" />,
            url: 'https://www.linkedin.com/company/investnicp',
            bgColor: 'bg-blue-600 hover:bg-blue-700',
            position: 'left', // Left side (LinkedIn)
        }
    ];

    return (
        <>
            {/* WhatsApp Button - Right Bottom */}
            <div className="fixed right-0 bottom-1/2 translate-y-1/2 z-50">
                <a
                    href={socialLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        w-14 h-14 ${socialLinks[0].bgColor} text-white flex items-center justify-center
                        shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300
                        rounded-none
                    `}
                    title={socialLinks[0].name}
                >
                    {socialLinks[0].icon}
                </a>
            </div>

            {/* Twitter & LinkedIn Buttons - Left Bottom */}
            <div className="fixed left-0 bottom-1/2 z-50 space-y-2 translate-y-1/2 ">
                {socialLinks.slice(1).map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                            w-14 h-14 ${social.bgColor} text-white flex items-center justify-center
                            shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300
                            rounded-none
                        `}
                        title={social.name}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </>
    );
}
