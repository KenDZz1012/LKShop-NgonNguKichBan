import React from 'react'

const ServiceArea = () => {
  return (
    <section className="services-area services-bg-two" style={{backgroundImage:'url("../../img/bg/services_bg02.jpg")'}}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 order-0 order-lg-2">
              <div className="services-img-wrap">
                <img src="img/images/services_img02.jpg" alt="" />
                <a href="img/images/services_img02.jpg" className="download-btn" download>Download <img src="fonts/download.svg" alt="" /></a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="services-content-wrap">
                <div className="section-title mb-40">
                  <span className="sub-title">ONLINE STREAMING</span>
                  <h2 className="title">Download Your Shows Watch Offline.</h2>
                </div>
                <div className="services-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="flaticon-television" />
                      </div>
                      <div className="content">
                        <h5>Enjoy on Your TV.</h5>
                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-video-camera" />
                      </div>
                      <div className="content">
                        <h5>Watch Everywhere.</h5>
                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ServiceArea