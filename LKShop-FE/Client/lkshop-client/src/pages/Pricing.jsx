import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewsletterArea from '../components/homeone/NewsletterArea'
import PricingArea from '../components/hometwo/PricingArea'
import { Breadcrumb } from '../components/pricing/Breadcrumb'

const Pricing = () => {
  return (
    <>
    <Header/>
    <main>
        <Breadcrumb/>
        <PricingArea/>
        <NewsletterArea/>
    </main>
    <Footer/>
    </>
  )
}

export default Pricing