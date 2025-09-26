import PageHero from '@/components/PageHero'

export default function GOIAndMinistriesPage() {
    const governmentBodies = {
        "Constitutional Bodies": [
            "President of India",
            "Vice President of India",
            "Prime Minister's Office (PMO)",
            "Cabinet Secretariat",
            "Election Commission of India (ECI)",
            "Union Public Service Commission (UPSC)",
            "Comptroller and Auditor General (CAG) of India"
        ],

        "Parliament": [
            "Rajya Sabha",
            "Lok Sabha"
        ],

        "Judiciary": [
            "Supreme Court of India",
            "National Human Rights Commission (NHRC), India",
            "NITI Aayog - National Institution for Transforming India",
            "National Commission for Women (NCW)",
            "National Commission for Scheduled Tribes (NCST)",
            "Fifteenth Finance Commission of India",
            "National Commission for Minorities (NCM)",
            "Insurance Regulatory and Development Authority (IRDA)",
            "Office of the Principal Scientific Adviser"
        ]
    }

    const ministries = [
        "Prime Minister's Office (PMO)",
        "Ministry of Agriculture and Farmers Welfare",
        "Ministry of AYUSH",
        "Ministry of Chemical and Fertilizers",
        "Ministry of Civil Aviation",
        "Ministry of Coal",
        "Ministry of Commerce and Industry",
        "Ministry of Consumer Affairs, Food and Public Distribution",
        "Ministry of Communications",
        "Ministry of Corporate Affairs (MCA)",
        "Ministry of Culture",
        "Ministry of Defence (MoD)",
        "Ministry of Development of North Eastern Region (DoNER)",
        "Ministry of Earth Sciences (MoES)",
        "Ministry of Electronics and Information Technology (MEITY)",
        "Ministry of External Affairs (MEA)",
        "Ministry of Finance (MoF)",
        "Ministry of Food Processing Industries (MOFPI)",
        "Ministry of Health & Family Welfare (MoHFW)",
        "Ministry of Heavy Industries & Public Enterprises",
        "Ministry of Home Affairs (MHA)",
        "Ministry of Housing and Urban Affairs (MoHUA)",
        "Ministry of Education (MoE)",
        "Ministry of Information and Broadcasting",
        "Ministry of Jal Shakti (MoWR)",
        "Ministry of Labour & Employment",
        "Ministry of Law and Justice",
        "Ministry of Micro, Small and Medium Enterprises (MSME)",
        "Ministry of Mines",
        "Ministry of Minority Affairs",
        "Ministry of New and Renewable Energy (MNRE)",
        "Ministry of Panchayati Raj",
        "Ministry of Parliamentary Affairs (MPA)",
        "Ministry of Personnel, Public Grievances and Pension",
        "Ministry of Petroleum and Natural Gas (MOP&NG)",
        "Ministry of Power",
        "Ministry of Railways",
        "Ministry of Rural Development",
        "Ministry of Science and Technology",
        "Ministry of Shipping",
        "Ministry of Skill Development and Entrepreneurship",
        "Ministry of Social Justice and Empowerment",
        "Ministry of Statistics and Programme Implementation (MoSPI)",
        "Ministry of Steel",
        "Ministry of Textiles (TEXMIN)",
        "Ministry of Tourism",
        "Ministry of Tribal Affairs",
        "Ministry of Women and Child Development",
        "Ministry of Youth Affairs and Sports"
    ]

    const centralArmedForces = [
        "Assam Rifles",
        "Border Security Force (BSF)",
        "Central Industrial Security Force (CISF)",
        "Central Reserve Police Force (CRPF)",
        "Directorate of Coordination Police Wireless",
        "Indo Tibetan Border Police (ITBP)",
        "National Security Guard (NSG)",
        "Sashastra Seema Bal (SSB)"
    ]

    return (
        <div>
            <PageHero
                title="Government of India & Ministries"
                breadcrumbs={[
                    { label: "Resources", href: "/resources" },
                    { label: "GOI and Ministries" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg p-8 md:p-12 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Government of India & <span className="text-orange-500">Ministries Directory</span>
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-8">
                            Complete directory of government bodies, ministries, and departments
                        </p>
                    </div>

                    {/* Constitutional Bodies */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center">🏛️</div>
                            Constitutional Bodies
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Object.entries(governmentBodies).map(([category, bodies]) => (
                                <div key={category} className="space-y-4">
                                    <h3 className="font-semibold text-lg text-orange-600 border-b border-orange-200 pb-2">
                                        {category}
                                    </h3>
                                    {bodies.map((body, index) => (
                                        <div key={index} className="bg-white shadow p-4 hover:shadow-md transition-shadow border-l-4 border-orange-200 hover:border-orange-500">
                                            <p className="text-gray-800 text-sm font-medium">{body}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ministries */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center">🏢</div>
                            Central Ministries
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {ministries.map((ministry, index) => (
                                <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow p-4 border-l-4 border-blue-200 hover:border-blue-500 group">
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                                            {ministry}
                                        </p>
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 font-semibold">
                                            {index + 1}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Central Armed Police Forces */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center">🛡️</div>
                            Central Armed Police Forces
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {centralArmedForces.map((force, index) => (
                                <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow p-4 border-l-4 border-green-200 hover:border-green-500 group">
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-800 font-medium group-hover:text-green-600 transition-colors text-sm">
                                            {force}
                                        </p>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 font-semibold">
                                            {index + 1}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">Navigate Government Processes</h3>
                        <p className="text-lg mb-6">
                            NICP provides expert guidance for interacting with government ministries and regulatory bodies
                        </p>
                        <a href="/contact-us" className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 transition-colors">
                            Get Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}