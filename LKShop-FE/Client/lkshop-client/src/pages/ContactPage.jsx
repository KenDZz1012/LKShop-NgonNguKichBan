import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Contacts from '../components/contacts/Contacts'
import Map from '../components/contacts/Map'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewsletterArea from '../components/homeone/NewsletterArea'
const ContactPage = () => {
  return (
   <>
   <Header/>
   <main>
       <Breadcrumb title="Contact Us" pagetitle='Contact'/>
       <Contacts/>
       <Map/>
       <NewsletterArea/>
   </main>
   <Footer/>
   </>
  )
}

export default ContactPage