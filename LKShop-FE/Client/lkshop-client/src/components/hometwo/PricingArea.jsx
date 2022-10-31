import React from 'react'

const PricingArea = () => {
  return (
    <section className="pricing-area pricing-bg" style={{backgroundImage:'url("img/bg/pricing_bg.jpg")'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title title-style-three text-center mb-70">
            <span className="sub-title">our pricing plans</span>
            <h2 className="title">Our Pricing Strategy</h2>
          </div>
        </div>
      </div>
      <div className="pricing-box-wrap">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
              <div className="pricing-top">
                <h6>premium</h6>
                <div className="price">
                  <h3>$7.99</h3>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="pricing-list">
                <ul>
                  <li className="quality"><i className="fas fa-check" /> Video quality <span>Good</span></li>
                  <li><i className="fas fa-check" /> Resolution <span>480p</span></li>
                  <li><i className="fas fa-check" /> Screens you can watch <span>1</span></li>
                  <li><i className="fas fa-check" /> Cancel anytime</li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="/#" className="btn">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="pricing-box-item active mb-30">
              <div className="pricing-top">
                <h6>standard</h6>
                <div className="price">
                  <h3>$9.99</h3>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="pricing-list">
                <ul>
                  <li className="quality"><i className="fas fa-check" /> Video quality <span>Better</span></li>
                  <li><i className="fas fa-check" /> Resolution <span>1080p</span></li>
                  <li><i className="fas fa-check" /> Screens you can watch <span>2</span></li>
                  <li><i className="fas fa-check" /> Cancel anytime</li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="/#" className="btn">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
              <div className="pricing-top">
                <h6>premium</h6>
                <div className="price">
                  <h3>$11.99</h3>
                  <span>Monthly</span>
                </div>
              </div>
              <div className="pricing-list">
                <ul>
                  <li className="quality"><i className="fas fa-check" /> Video quality <span>Best</span></li>
                  <li><i className="fas fa-check" /> Resolution <span>4K+HDR</span></li>
                  <li><i className="fas fa-check" /> Screens you can watch <span>4</span></li>
                  <li><i className="fas fa-check" /> Cancel anytime</li>
                </ul>
              </div>
              <div className="pricing-btn">
                <a href="/#" className="btn">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PricingArea