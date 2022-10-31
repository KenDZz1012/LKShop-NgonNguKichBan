import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieArea from '../components/movie/MovieArea'
import Newsletter from '../components/movie/Newsletter'
import Breadcrumb from '../components/tv/Breadcrumb'

const TvSeries = () => {
  return (
    <div>
        <Header/>
        <main>
            <Breadcrumb/>
            <MovieArea/>
            <Newsletter/>
        </main>
        <Footer/>
    </div>
  )
}

export default TvSeries