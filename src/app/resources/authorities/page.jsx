import PageHero from '@/components/PageHero'

export default function AuthoritiesPage() {
    const authorities = [
        { name: "The Association of Mutual Funds in India", abbr: "AMFI" },
        { name: "Society of Indian Automobile Manufacturers", abbr: "SIAM" },
        { name: "Automotive Component Manufacturers Association of India", abbr: "ACMA" },
        { name: "Association of Biotechnology Led Enterprises", abbr: "ABLE" },
        { name: "All India Industrial Gases Manufacturers' Association", abbr: "AIIGMA" },
        { name: "Confederation of Indian Industry", abbr: "CII" },
        { name: "Cellular Operators Association of India", abbr: "COAI" },
        { name: "Engineering Export Promotional Council", abbr: "EEPC" },
        { name: "Electronic Industries Association of India", abbr: "ELCINA" },
        { name: "Electronic and Computer Software Export Promotion Council", abbr: "ECSEPC" },
        { name: "Electric Lamp and Component Manufacturers' Association of India", abbr: "ELCOMA" },
        { name: "Express Industry Council of India", abbr: "EICI" },
        { name: "Federation of Indian Export Organisations", abbr: "FIEO" },
        { name: "The Federation of Hotel & Restaurant Associations of India", abbr: "FHRAI" },
        { name: "Hologram Manufacturers Association of India", abbr: "HOMAI" },
        { name: "Hotel Association of India", abbr: "HAI" },
        { name: "Electrical & Electronics Manufacturers Association", abbr: "IEEMA" },
        { name: "Indian Machine Tools India Manufacturers Association", abbr: "IMTMA" },
        { name: "Telecom Equipment Manufacturers Association of India", abbr: "TEMA" },
        { name: "Indian Chemical Council", abbr: "ICC" },
        { name: "Sugar Mill Association", abbr: "ISMA" },
        { name: "Indian Drug Manufacturers' Association", abbr: "IDMA" },
        { name: "National Ship owners' Association", abbr: "INSA" },
        { name: "Indian Printing, Packaging and Allied Machinery Manufacturers' Association", abbr: "IPAMA" },
        { name: "Indian Refractory Makers Association", abbr: "IRMA" },
        { name: "The Indian Stainless Steel Development Association", abbr: "ISSDA" },
        { name: "Indian Tea Association", abbr: "ITA" },
        { name: "Diamond Tools Association of India", abbr: "DTAI" },
        { name: "Manufacturers Association of Information Technology", abbr: "MAIT" },
        { name: "National Association of Software and Services Companies", abbr: "NASSCOM" },
        { name: "Organisation of Pharmaceutical Producers of India", abbr: "OPPI" },
        { name: "Organization of Plastics Processors of India", abbr: "OPP" },
        { name: "Project Exports Promotion Council of India", abbr: "PEPC" },
        { name: "Indian Polyurethane Association", abbr: "IPUA" },
        { name: "All India Air conditioning & Refrigeration Association", abbr: "AIACRA" },
        { name: "Software Technology Parks of India", abbr: "STPI" },
        { name: "Soybean Processors Association of India", abbr: "SOPA" },
        { name: "Telecom Regulatory Authority of India", abbr: "TRAI" },
        { name: "Textile Machinery Manufacturers Association (India)", abbr: "TMMA" }
    ]

    return (
        <div>
            <PageHero
                title="Regulatory Authorities"
                breadcrumbs={[
                    { label: "Resources", href: "/resources" },
                    { label: "Authorities" }
                ]}
                backgroundImage="/authorities.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg p-8 md:p-12 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Regulatory Authorities, <span className="text-orange-500">Associations & Councils</span>
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-8">
                            Complete list of regulatory bodies and industry associations in India
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {authorities.map((authority, index) => (
                            <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:border-l-4 hover:border-orange-500">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 font-semibold">
                                            {authority.abbr}
                                        </span>
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                                        {authority.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Connect with Industry Leaders</h3>
                        <p className="text-lg mb-6">
                            NICP helps you connect with the right regulatory authorities and industry associations for your business needs
                        </p>
                        <a href="/contact-us" className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 transition-colors">
                            Get Industry Connections
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}