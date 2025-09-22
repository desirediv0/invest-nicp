import Bgcoverimage from '@/components/bgcoverimage'
import ChooseSector from '@/components/choose-sector'
import GrowthInvestment from '@/components/growth-investment'
import HeroCarousel from '@/components/Hero'
import ChooseState from '@/components/State'

import React from 'react'
import MissionVision from './about/mission-vision'
import WhatWeDo from '@/components/what-we-do'

const Home = () => {
  return (
    <main className='min-h-screen'>

      <HeroCarousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <MissionVision />
      </div>
      <ChooseSector />
      <div className="bg-gray-50">
        <ChooseState />
      </div>
      <WhatWeDo />
      <GrowthInvestment />
      <div className="w-full bg-gray-50 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6">
          {/* First Card */}
          <Bgcoverimage
            image="/cultural.webp"
            heading="Growth Unleashed by Uncharted Territories and Trade"
            subheading="Our worldwide aspiration is to stand as a paragon of investment wisdom, radiating the path to lasting prosperity on a global scale."
            description1="We envisage a Bharat where investors seamlessly explore the multifaceted opportunities of India's dynamic urban centers and emerging industrial hubs."
            description2="INVEST NICP is committed to being a catalyst for international economic growth, nurturing innovation, and realizing dreams as global achievements — shaping an elegant, interwoven, and thriving world for all."
          />

          {/* Second Card */}
          <Bgcoverimage
            image="/cultural.webp"
            heading="Empowering Investors, Fueling Growth"
            subheading="At INVEST NICP, our mission is to be the catalyst for investors seeking to grow and expand their businesses across the rich tapestry of INDIA/BHARAT."
            description1="We aim to connect global investors with the upcoming industrial corridors and thriving urban mosaic of tier 1, 2, and 3 cities."
            description2="Our endeavour is to forge strong, long-lasting partnerships, enabling investors to unlock the immense potential of this diverse and dynamic market."
          />
        </div>
      </div>


    </main>
  )
}

export default Home
