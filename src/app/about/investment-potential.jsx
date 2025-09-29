import Image from 'next/image'
import React from 'react'

const InvestmentPotential = () => {
    return (
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white   p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src="/skyline.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">India&apos;s Investment Potential</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
                    <p className="text-lg opacity-90">Discover the opportunities that await your investment</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                    <div className="text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <h3 className="font-bold mb-2 text-lg">Robust GDP Growth</h3>
                        <p className="text-base opacity-90">6.5% annual growth with long-term upside positioning</p>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl mb-2">💻</div>
                        <h3 className="font-bold mb-2 text-lg">Semiconductor Hub</h3>
                        <p className="text-base opacity-90">Rapidly building ecosystem with policy incentives and partnerships</p>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl mb-2">🎓</div>
                        <h3 className="font-bold mb-2 text-lg">Digital Learning</h3>
                        <p className="text-base opacity-90">900+ universities and booming edtech sector creating skilled talent</p>
                    </div>

                </div>
                <div className="grid md:grid-cols-2 gap-6 w-full my-5">
                    <div className="text-center">
                        <div className="text-4xl mb-2">🏗️</div>
                        <h3 className="font-bold mb-2 text-lg">Infrastructure Development</h3>
                        <p className="text-base opacity-90">$1.4 trillion investment under National Infrastructure Pipeline</p>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl mb-2">🏭</div>
                        <h3 className="font-bold mb-2 text-lg">Sectoral Growth</h3>
                        <p className="text-base opacity-90">Diverse opportunities from manufacturing to green energy and tourism</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestmentPotential


