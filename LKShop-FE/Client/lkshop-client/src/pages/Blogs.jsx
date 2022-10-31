import React from 'react'
import BlogArea from '../components/blog/BlogArea'
import { Breadcrumb } from '../components/blog/Breadcrumb'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewsletterArea from '../components/homeone/NewsletterArea'

const Blogs = () => {
  return (
    <>
    <Header/>
        <main>
            <Breadcrumb/>
            <BlogArea/>
            <NewsletterArea/>
        </main>
    <Footer/>
    
    </>
  )
}

export default Blogs