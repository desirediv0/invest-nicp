import PageHero from '@/components/PageHero'
import React from 'react'

const whatWeDo = () => {
    return (
        <div>
            <PageHero
                title="What We Do"
                breadcrumbs={[
                    { label: "What We Do" }
                ]}
                backgroundImage="/skyline.jpg"
            />

            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

                    {/* 1 - Market Entry & Expansion */}
                    <section id="market-entry-expansion-mergers-acquisitions" className="bg-white shadow-md rounded-lg p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Market Entry & Expansion</h2>
                                <p className="text-sm text-gray-600">Strategic Gateways to New Markets</p>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-800 mb-4">
                            &quot;OPENING DOORS, EXPANDING HORIZONS: Your Partner in Global Market Entry and Growth&quot;
                        </blockquote>

                        <div className="space-y-3 text-gray-700">
                            <p className="font-semibold">Strategic Events:</p>
                            <p>We design and deliver a broad range of globally focused investment events, bringing together private investors, corporate leaders, and cross-border market participants.</p>

                            <p className="font-semibold">Insightful Platforms for Expansion:</p>
                            <p>These events serve as key platforms for knowledge exchange and strategic networking, empowering stakeholders to explore market entry opportunities, identify expansion pathways, and assess potential mergers and acquisitions.</p>

                            <p className="font-semibold">Collaborative Growth Ecosystem:</p>
                            <p>Our gatherings cultivate an environment of collaboration, encouraging dialogue between investors and growth-driven businesses, and enabling strategic partnerships that support sustainable global expansion.</p>
                        </div>
                    </section>

                    {/* 2 - Investment Promotion */}
                    <section id="workshops-investment-promotions" className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Investment Promotion</h2>
                                <p className="text-sm text-gray-600">Driving Growth Through Targeted Investment Opportunities</p>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 mb-4">
                            &quot;From Opportunity to Action : STRATEGIC PLANNING and PROCESS IMPLEMENTATION.&quot;
                        </blockquote>

                        <div className="space-y-3 text-gray-700">
                            <p className="font-semibold">Immersive, Action‑Oriented Learning:</p>
                            <p>Our workshops are designed to provide hands-on, practical exposure. Participants engage directly with live investment models, sector-specific case studies, and India-focused simulations — empowering them to make informed decisions in real-world contexts.</p>

                            <p className="font-semibold">Timely Insights & Emerging Opportunities:</p>
                            <p>We deliver cutting-edge insights into evolving investment landscapes, with a strong focus on India&apos;s dynamic market. From policy shifts and regulatory updates to new growth sectors like green energy, digital infrastructure, and manufacturing, our sessions equip you with the latest intelligence to stay ahead.</p>

                            <p className="font-semibold">Designed for Global Investors:</p>
                            <p>Whether you&apos;re exploring India for the first time or expanding an existing portfolio, our workshops meet you where you are. We offer strategic guidance on navigating India&rsquo;s diverse business ecosystem, unlocking high-growth opportunities, and aligning with national investment priorities such as &ldquo;Make in India&rdquo; and &ldquo;Viksit Bharat 2047.&rdquo;</p>
                        </div>
                    </section>

                    {/* 3 - Seminars for New Policies and Opportunities */}
                    <section id="seminars-new-policies-opportunities" className="bg-white shadow-md rounded-lg p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Seminars for New Policies and Opportunities</h2>
                                <p className="text-sm text-gray-600">Empowering Decisions Through Expertise - Insights that Shape Tomorrow</p>
                            </div>
                        </div>

                        <p className="text-gray-800 italic mb-3">&quot;From INSIGHT to INVESTMENTS : Navigate Sectors with Confidence.&quot;</p>

                        <p className="text-gray-700 mb-3">Our seminars bring together renowned industry leaders and subject matter experts who share strategic insights on market trends, policy shifts, sector-specific developments, and emerging opportunities.</p>

                        <div className="space-y-2 text-gray-700">
                            <p className="font-semibold">Expert-Led Market Intelligence:</p>
                            <p>Participants gain a well-rounded understanding of targeted industries — from macroeconomic influences to operational challenges — equipping them with the knowledge required to navigate complex market environments.</p>

                            <p className="font-semibold">Data-Driven Investment Decisions:</p>
                            <p>The insights acquired enable investors to identify high-potential opportunities, mitigate risks effectively, and refine their investment strategies — driving confident, informed decision-making in a dynamic global landscape.</p>
                        </div>
                    </section>

                    {/* 4 - Investment Advisory */}
                    <section id="investment-advisory-jvs-fois" className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-lg">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Investment Advisory</h2>
                                <p className="text-sm text-gray-600">Expert Advisory for Joint Ventures, Fractional Ownership, Buying and Selling</p>
                            </div>
                        </div>

                        <p className="text-gray-800 italic mb-3">Tailored Advisory for STRATEGIC Partnerships & FUTURE-FOCUSED SMART CAPITAL INVESTMENTS</p>

                        <p className="text-gray-700 mb-3">At INVEST NICP, our multidisciplinary advisory team — including financial analysts, market researchers, and industry experts — delivers tailored investment solutions across joint ventures, fractional ownership structures, and buy/sell transactions.</p>

                        <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                            <div>
                                <h4 className="font-semibold">In-Depth Market Intelligence</h4>
                                <p>Comprehensive analysis and due diligence to assess the viability and potential of each investment opportunity.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Bespoke Investment Strategies</h4>
                                <p>Customized recommendations aligned with your risk profile, return expectations, and long-term financial objectives.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Ongoing Market Insights</h4>
                                <p>Timely updates on sector movements, emerging opportunities, and regulatory developments to support agile investment decisions.</p>
                            </div>
                        </div>

                        <p className="text-gray-700 mt-4">Our commitment is to empower private investors to navigate complex investment environments with clarity, control, and confidence — optimizing returns while managing risk.</p>
                    </section>

                    {/* 5 - Sector Engagement & Facilitation Services */}
                    <section id="sector-engagement-facilitation" className="bg-white shadow-md rounded-lg p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sector Engagement & Facilitation Services</h2>
                                <p className="text-sm text-gray-600">Strategic Sector Engagement and Market Facilitation</p>
                            </div>
                        </div>

                        <p className="font-semibold text-gray-800">Connecting Sectors. Unlocking Potential</p>

                        <p className="text-gray-700 mb-3">Our tailored services bridge investors and industry sectors by cultivating meaningful connections, optimizing engagement processes, and providing streamlined access to lucrative market opportunities.</p>

                        <div className="space-y-3 text-gray-700">
                            <p className="font-semibold">Targeted Sector Intelligence:</p>
                            <p>Comprehensive analysis of industry ecosystems, key stakeholders, and emerging trends to pinpoint high-growth prospects.</p>

                            <p className="font-semibold">Partnership Facilitation:</p>
                            <p>Orchestrating strategic collaborations, joint ventures, and multi-stakeholder engagements to accelerate project realization and investment success.</p>

                            <p className="font-semibold">Regulatory and Market Guidance:</p>
                            <p>Expert support in navigating sector-specific regulations, compliance frameworks, and operational requirements to minimize entry barriers.</p>
                        </div>

                        <p className="text-gray-700 mt-4">Leveraging deep market expertise and facilitation acumen, we empower investors and businesses to effectively unlock and maximize sector opportunities with confidence and sustainability.</p>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default whatWeDo

