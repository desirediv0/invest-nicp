import PageHero from '@/components/PageHero'

export default function SIPAgenciesPage() {
    const sipAgencies = [
        { id: 1, state: "Andaman & Nicobar (UT)", agency: "Andaman & Nicobar Islands Integrated Development Corporation Limited", abbr: "ANIIDCO", website: "http://aniidco.and.nic.in" },
        { id: 2, state: "Andhra Pradesh", agency: "Andhra Pradesh Industrial Development Corporation Limited", abbr: "APIIC", website: "https://www.apiic.in" },
        { id: 3, state: "Arunachal Pradesh", agency: "Arunachal Pradesh Industrial Development & Financial Corporation Limited", abbr: "APIDFC", website: "https://www.apidfc.in" },
        { id: 4, state: "Assam", agency: "Assam Industrial Development Corporation Limited", abbr: "AIDC", website: "http://www.aidcltd.com" },
        { id: 5, state: "Chandigarh (UT)", agency: "Chandigarh Industrial & Tourism Development Corporation Limited", abbr: "CITCO", website: "https://www.chandigarh.gov.in" },
        { id: 6, state: "Chhattisgarh", agency: "Chhattisgarh State Industrial Development Corporation Limited", abbr: "CSIDC", website: "https://csidc.in/" },
        { id: 7, state: "Dadra & Nagar Haveli (UT)", agency: "Department of Information Technology", abbr: "DNH", website: "https://dnh.gov.in" },
        { id: 8, state: "Daman & Diu (UT)", agency: "Department of Personnel & Administrative Reforms", abbr: "DPAR", website: "https://www.daman.nic.in" },
        { id: 9, state: "Delhi", agency: "Delhi State Industrial Development Corporation Limited", abbr: "DSIDC", website: "https://www.dsiidc.org" },
        { id: 10, state: "Goa", agency: "Goa Industrial Development Corporation", abbr: "GIDC", website: "http://www.goaidc.com" },
        { id: 11, state: "Gujarat", agency: "Gujarat Industrial Development Corporation", abbr: "GIDC", website: "https://gidc.gujarat.gov.in" },
        { id: 12, state: "Haryana", agency: "Haryana State Industrial & Infrastructure Development Corporation Limited", abbr: "HSIIDC", website: "http://hsiidc.org.in" },
        { id: 13, state: "Himachal Pradesh", agency: "The Himachal Pradesh State Industrial Development Corporation Limited", abbr: "HPSIDC", website: "https://www.hpsidc.org" },
        { id: 14, state: "Jammu & Kashmir (UT)", agency: "J&K State Industrial Development Corporation", abbr: "SIDCO", website: "https://jkindustriescommerce.nic.in/jksidco.html" },
        { id: 15, state: "Jharkhand", agency: "Department of Industry", abbr: "DOI", website: "https://www.jharkhand.gov.in/industries" },
        { id: 16, state: "Karnataka", agency: "Karnataka State Industrial & Infrastructure Development Corporation Limited", abbr: "KSIIDC", website: "http://www.ksiidc.com" },
        { id: 17, state: "Kerala", agency: "Kerala State Industrial Development Corporation Limited", abbr: "KSIDC", website: "https://www.ksidc.org" },
        { id: 18, state: "Lakshadweep (UT)", agency: "Department of Industries", abbr: "DOI", website: "https://lakshadweep.gov.in" },
        { id: 19, state: "Madhya Pradesh", agency: "Madhya Pradesh Industrial Development Corporation Ltd", abbr: "MPIDC", website: "https://www.mpindustry.gov.in/" },
        { id: 20, state: "Maharashtra", agency: "Maharashtra Industrial Development Corporation Limited", abbr: "MIDC", website: "http://www.midcindia.org" },
        { id: 21, state: "Manipur", agency: "Manipur Industrial Development Corporation Limited", abbr: "MANIDCO", website: "http://www.manidco.in" },
        { id: 22, state: "Nagaland", agency: "Nagaland Industrial Development Corporation", abbr: "NIDC", website: "http://www.nagaind.com" },
        { id: 23, state: "Odisha", agency: "Industrial Promotion and Investment Corporation of Odisha Limited", abbr: "IPICOL", website: "http://www.investodisha.org" },
        { id: 24, state: "Puducherry (UT)", agency: "Puducherry Industrial Promotion Development and Investment Corporation Limited", abbr: "PIPDIC", website: "http://www.pipdic.com" },
        { id: 25, state: "Punjab", agency: "Department of Industries and Commerce", abbr: "DIC", website: "http://pbindustries.gov.in" },
        { id: 26, state: "Rajasthan", agency: "Rajasthan State Industrial Development & Investment Corporation Limited", abbr: "RIICO", website: "https://www.rajasthan.gov.in/industries" },
        { id: 27, state: "Sikkim", agency: "Sikkim Industrial Development & Investment Corporation Limited", abbr: "SIDICO", website: "https://www.sikkim.gov.in" },
        { id: 28, state: "Tamil Nadu", agency: "Tamil Nadu Industrial Development Corporation Limited", abbr: "TIDCO", website: "http://www.tidco.com" },
        { id: 29, state: "Tripura", agency: "Tripura Industrial Development Corporation Limited", abbr: "TIDC", website: "https://tidc.tripura.gov.in" },
        { id: 30, state: "Uttar Pradesh", agency: "Uttar Pradesh State Industrial Development Corporation", abbr: "UPSIDA", website: "https://onlineupsida.com/" },
        { id: 31, state: "Uttarakhand", agency: "State Infrastructure & Industrial Development Corporation of Uttarakhand Limited", abbr: "SIDCUL", website: "https://www.siidcul.com" },
        { id: 32, state: "West Bengal", agency: "West Bengal Industrial Development Corporation Limited", abbr: "WBIDC", website: "http://www.wbidc.com" }
    ]

    return (
        <div>
            <PageHero

                backgroundImage="/agencies.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg p-8 md:p-12 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            State Investment Promotion <span className="text-orange-500">Agencies (SIPA)</span>
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-8">
                            Complete directory of state-level investment promotion agencies across India
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sipAgencies.map((sip) => (
                            <div key={sip.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:border-l-4 hover:border-orange-500">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 font-semibold">
                                            {sip.state}
                                        </span>
                                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-center text-sm font-bold">
                                            {sip.id}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                        {sip.abbr}
                                    </h3>

                                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                                        {sip.agency}
                                    </p>

                                    <div className="pt-4 border-t border-gray-100">
                                        <a
                                            href={sip.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
                                        >
                                            <span>🌐</span>
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">State-Level Investment Support</h3>
                        <p className="text-lg mb-6">
                            NICP helps you navigate state investment promotion agencies for seamless business setup across India
                        </p>
                        <a href="/contact-us" className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 transition-colors">
                            Get State-wise Guidance
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}