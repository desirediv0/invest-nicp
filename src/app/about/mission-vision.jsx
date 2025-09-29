import { Eye, Target } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MissionVision = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mission Card */}
            <div id='mission' className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 flex h-32 p-1 md:p-2">
                    {/* Left - Icon + Heading */}
                    <div className="w-1/2 flex items-center gap-2 md:gap-3 p-3 md:p-6">
                        <div className="md:w-12 md:h-12 h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">MISSION</h2>
                    </div>
                    {/* Right - Image */}
                    <div className="relative w-1/2 h-full">
                        <Image
                            src="/indian-growth.jpg"
                            alt="India Map"
                            fill
                            className="object-cover opacity-80"
                        />
                    </div>
                </div>

                <div className="p-8">
                    <h3 className="text-lg font-bold mb-4 text-orange-600">
                        Empowering Investors, Fueling Growth:
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed text-justify">
                        At INVEST NICP, our mission is to be the catalyst for investors seeking to grow and expand
                        their businesses across the rich tapestry of INDIA / BHARAT. We aim to connect global investors
                        with the upcoming industrial corridors and thriving urban mosaic of tier 1, 2, and 3 cities.
                        Our endeavour is to forge strong, long-lasting partnerships, enabling investors to unlock the
                        immense potential of this diverse and dynamic market.
                    </p>
                </div>
            </div>

            {/* Vision Card */}
            <div id='vision' className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 flex h-32 p-1 md:p-2">
                    {/* Left - Icon + Heading */}
                    <div className="w-1/2 flex items-center gap-2 md:gap-3 p-3 md:p-6">
                        <div className="md:w-12 md:h-12 h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Eye className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">VISION</h2>
                    </div>
                    {/* Right - Image */}
                    <div className="relative w-1/2 h-full ">
                        <Image
                            src="/vision.png"
                            alt="Global Business"
                            fill
                            className="object-cover opacity-80 object-center"
                        />
                    </div>
                </div>

                <div className="p-8">
                    <h3 className="text-lg font-bold mb-4 text-orange-600">
                        Growth Unleashed by Uncharted Territories and Trade:
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed text-justify">
                        Our worldwide aspiration is to stand as a paragon of investment wisdom, radiating the path to
                        lasting prosperity on a global scale. We envisage a Bharat where investors seamlessly explore
                        the multifaceted opportunities of India&apos;s dynamic urban centers and emerging industrial hubs.
                        INVEST NICP is committed to being a catalyst for international economic growth, nurturing innovation,
                        and realizing dreams as global achievements, shaping an elegant, interwoven, and thriving world for all.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MissionVision
