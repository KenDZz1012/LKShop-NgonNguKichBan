import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import EpipsodeArea from '../components/moviedetails/EpipsodeArea'
import MovieDetail from '../components/moviedetails/MovieDetail'
import TvSeries from '../components/moviedetails/TvSeries'

const MovieDetails = () => {
  return (
    <div>
        <Header/>
        <main>
            <MovieDetail/>
            <EpipsodeArea/>
            <TvSeries/>
        </main>
        <Footer/>
    </div>
  )
}

export default MovieDetails