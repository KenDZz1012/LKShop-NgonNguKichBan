import React from 'react'
import GalleryArea from '../components/hometwo/GalleryArea'
import PricingArea from '../components/hometwo/PricingArea'
import SliderArea from '../components/hometwo/SliderArea'
import HeaderTwo from '../components/HeaderTwo';
import Footer from '../components/Footer'
import ServiceArea from '../components/hometwo/ServiceArea'
import TopRatedMovies2 from '../components/hometwo/TopRatedMovies2'

const HomeTwo = () => {
  return (
        <>
                <HeaderTwo/>
            <main>
                <SliderArea/>
                <TopRatedMovies2/>
                <GalleryArea/>
                <ServiceArea/>
                <TopRatedMovies2/>
                <PricingArea/>
            </main>
                <Footer/>
        </>
  )
}

export default HomeTwo
