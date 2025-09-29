import PageHero from '@/components/PageHero'

export default function PrivacyPolicy() {
    return (
        <div>
            <PageHero
                title="Privacy Policy"
                breadcrumbs={[
                    { label: "Privacy Policy" }
                ]}
                backgroundImage="/states.jpg"
            />

            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg">

                        <div className="p-8 md:p-12 space-y-8">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    <strong>NICP</strong> is a leading service provider of investment and commercial services.
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    We are committed to your privacy as we believe that responsible use of personal information collected on our website is critical to our business and reputation. We only use your personal information to respond to your requests and to provide you with information about <strong>NICP</strong>, and may also use it to provide you with marketing materials about our services and offers.
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    We also use personal information provided by you for the purposes of providing our services to you, maintaining client relationships (such as informing our clients and prospective clients about investment opportunities and services that may be of interest to them) and for our other related business activities.
                                </p>

                                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                                    <h3 className="text-lg font-semibold text-orange-800 mb-3">
                                        Data Retention & Sharing
                                    </h3>
                                    <p className="text-orange-700">
                                        The personal information you provide to us will be retained only for as long as necessary to fulfill the purposes for which the information was collected or as required by law. We do not share personal information with third parties except as necessary to carry out our business or your request or as required by law or other legal processes, and we never sell your personal information.
                                    </p>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    Furthermore, personal data collected by <strong>NICP</strong> may be transferred to our subsidiaries or affiliated companies where it is necessary to carry out our business or to achieve the purpose for which you have shared the information.
                                </p>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-3">
                                        Consent & Data Transfer
                                    </h3>
                                    <p className="text-blue-700">
                                        By submitting data through <strong>NICP</strong> electronically, you are providing explicit consent to trans-border transmission of data collected via our Site.
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-orange-500 pl-4">
                                    Jurisdiction & Governance
                                </h2>

                                <p className="text-gray-700 leading-relaxed">
                                    <strong>NICP</strong> operates this Site from its office in the capital region of Delhi, India. All matters pertaining to this website are governed and interpreted under the laws of the local courts of said location.
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    By accessing this Site, you provide your consent to your acceptance of this Privacy Policy.
                                </p>

                                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                                    <h3 className="text-lg font-semibold text-green-800 mb-3">
                                        Our Commitment to Transparency
                                    </h3>
                                    <p className="text-green-700">
                                        Our goal in this policy is to be completely transparent about the data we collect, why we collect it, and how we use it, in order to make your investment experience pleasant and secure.
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-orange-500 pl-4">
                                    Information We Collect
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div className="bg-gray-50 p-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                                        <ul className="text-sm text-gray-700 space-y-2">
                                            <li>• Name and contact details</li>
                                            <li>• Email addresses</li>
                                            <li>• Phone numbers</li>
                                            <li>• Investment preferences</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Usage Information</h4>
                                        <ul className="text-sm text-gray-700 space-y-2">
                                            <li>• Website interaction data</li>
                                            <li>• Service usage patterns</li>
                                            <li>• Communication history</li>
                                            <li>• Feedback and inquiries</li>
                                        </ul>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-orange-500 pl-4">
                                    Contact Information
                                </h2>

                                <div className="bg-orange-50 p-6">
                                    <p className="text-gray-700">
                                        If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                                    </p>
                                    <div className="mt-4 space-y-2 text-sm text-gray-700">
                                        <p><strong>Email:</strong> info@investnicp.com</p>
                                        <p><strong>Phone:</strong> +91-9891015220</p>
                                        <p><strong>Address:</strong> Plot No. 4, 2nd Floor, Sector 44, Gurgaon, Haryana - 122003</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-12">
                                <p className="text-orange-800 font-semibold">
                                    Last Updated: September 2025
                                </p>
                                <p className="text-orange-700 text-sm mt-2">
                                    We may update this Privacy Policy from time to time. Please check this page periodically for changes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}