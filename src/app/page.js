import ChooseSector from '@/components/choose-sector'
import HeroCarousel from '@/components/Hero'
import ChooseState from '@/components/State'

import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen'>

      <HeroCarousel />
      <ChooseSector />
      <ChooseState />

    </main>
  )
}

export default Home
