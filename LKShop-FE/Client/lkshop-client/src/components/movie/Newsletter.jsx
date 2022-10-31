import React from 'react'

const Newsletter = () => {
  return (
    <section className="newsletter-area newsletter-bg" style={{backgroundImage:'url("../img/bg/newsletter_bg.jpg")'}}>
    <div className="container">
      <div className="newsletter-inner-wrap">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="newsletter-content">
              <h4>Trial Start First 30 Days.</h4>
              <p>Enter your email to create or restart your membership.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <form action="#" className="newsletter-form">
              <input type="email" required placeholder="Enter your email" />
              <button className="btn">get started</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Newsletter