import ChooseSector from '@/components/choose-sector'
import GrowthInvestment from '@/components/growth-investment'
import HeroCarousel from '@/components/Hero'
import ChooseState from '@/components/State'

import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen'>

      <HeroCarousel />
      <ChooseSector />
      <div className="bg-gray-50">
        <ChooseState />
      </div>
      <GrowthInvestment />

    </main>
  )
}

export default Home
