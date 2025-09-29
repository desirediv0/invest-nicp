import PageHero from '@/components/PageHero'

export default function SchemesPage() {
    const schemes = [
        "Atmanirbhar Bharat Abhiyaan",
        "Atal Pension Yojana",
        "Ayushman Bharat",
        "Beti Bachao Beti Padhao",
        "Bhartiya Janaushadhi Pariyojana",
        "Digital India",
        "Fasal Bima Yojana",
        "Garib Kalyan Yojana",
        "Gold Monetization Scheme",
        "Jan Dhan Yojana",
        "Jeevan Jyoti Bima Yojana",
        "Kaushal Vikas Yojana",
        "Kisan Vikas Patra",
        "Krishi Sinchayee Yojana",
        "Pradhan Mantri Awaas Yojana",
        "Matsya Sampada Yojana",
        "Mission Poshan",
        "Mission Shakti",
        "Mudra Yojana",
        "National Mission For Clean Ganga",
        "National Water Mission",
        "Skill India",
        "Smart Cities Mission",
        "Stand Up India",
        "Swachh Bharat Mission",
        "Ujala Yojana",
        "Ujjwala Yojana",
        "Ujwal Discom Assurance Yojana"
    ]

    return (
        <div>
            <PageHero
                title="Government Schemes"
                breadcrumbs={[
                    { label: "Resources", href: "/resources" },
                    { label: "Schemes" }
                ]}
                backgroundImage="/schemes.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg p-8 md:p-12 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Government of India <span className="text-orange-500">Schemes</span>
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-8">
                            List of various schemes of the Government of India for economic development and social welfare
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {schemes.map((scheme, index) => (
                            <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-l-4 border-orange-500">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {scheme}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
                        <p className="text-lg mb-6">
                            Contact NICP for detailed guidance on government schemes and investment opportunities
                        </p>
                        <a href="/contact-us" className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 transition-colors">
                            Get Expert Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}