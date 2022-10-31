import React from 'react';
import Banner from '../components/homeone/Banner';
import LiveArea from '../components/homeone/LiveArea';
import NewsletterArea from '../components/homeone/NewsletterArea';
import Service from '../components/homeone/Service';
import TopRatedMovies from '../components/homeone/TopRatedMovies';
import TvSerise from '../components/homeone/TvSerise';
import UpcomingMovie from '../components/homeone/UpcomingMovie';
import Footer from '../components/Footer';
import Header from "../components/Header";


const Homeone = () => {
  return (
  <div>
      <Header/>
    <main>
        <Banner/>
        <UpcomingMovie/>
        <Service/>
        <TopRatedMovies/>
        <LiveArea/>
        <TvSerise/>
        <NewsletterArea/>
    </main>
      <Footer/>
  </div>

  )
}

export default Homeone
