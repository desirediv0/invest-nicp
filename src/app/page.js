import ChooseSector from '@/components/choose-sector'
import HeroCarousel from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen'>

      <HeroCarousel />
      <ChooseSector />

    </main>
  )
}

export default Home
