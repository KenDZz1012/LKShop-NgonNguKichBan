import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Breadcrumb } from '../components/movie/Breadcrumb'
import MovieArea from '../components/movie/MovieArea'
import Newsletter from '../components/movie/Newsletter'

const Movie = () => {
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

export default Movie