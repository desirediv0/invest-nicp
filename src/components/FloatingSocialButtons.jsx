"use client"
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'

export default function FloatingSocialButtons() {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedinIn className="w-4 h-4" />,
            url: 'https://www.linkedin.com/company/investnicp',
            bgColor: 'bg-blue-600 hover:bg-blue-700',
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp className="w-4 h-4" />,
            url: 'https://api.whatsapp.com/send?phone=+919891015220&text=Hello,%20I%20am%20interested%20in%20Invest%20NICP%20Services!%20Please%20get%C2%A0in%C2%A0touch%E2%80%A6.',
            bgColor: 'bg-green-500 hover:bg-green-600',
        }
    ];

    return (
        <div className="fixed right-4 bottom-4 z-50 space-y-3">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                        w-12 h-12 ${social.bgColor} text-white flex items-center justify-center
                        shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300
                        rounded-lg
                    `}
                    title={social.name}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
