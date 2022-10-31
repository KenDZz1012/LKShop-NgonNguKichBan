import React,{ useEffect } from 'react';
import Slider from "react-slick";
import "magnific-popup";
import $ from "jquery";
import 'animate.css';

const SliderArea = () => {

  useEffect(()=>{
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
  
  
  },[])
  const settings={
    
    slidesToShow: 1,
    speed:500,
    arrows:false,
    autoplay:true,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
              autoplay:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed:500,
                infinite: true,
            }
        },
        {
            breakpoint: 1500,
            settings: {
              autoplay:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed:500,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
              autoplay:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed:500,
                arrows: false,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                speed:500,
                arrows: false,
                autoplay:true,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                speed:500,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed:500,
                autoplay:true,
                arrows: false,
            }
        },
    ]

}

  return (
   
    <section className="slider-area slider-bg" style={{ backgroundImage:'url("../../img/banner/s_slider_bg.jpg")' }}>
        <Slider className="slider-active" {...settings}>
          <div className="slider-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-0 order-lg-2">
                 
                  <div className="slider-img text-center text-lg-right animate__animated animate__fadeInRight"  data-delay="1s">
                 
                    <img src="img/banner/slider_img01.jpg" alt="" />
                    
                  </div>
                 
                 
                </div>
                <div className="col-lg-6">
               
                <div className="banner-content">
               
                    <h6 className="sub-title" data-delay=".2s">Movflx</h6>
                   
                    <h2 className="title animate__animated animate__fadeInUp"  data-delay=".4s">Unlimited <span>Movie</span>, TV Shows, &amp; More.</h2>
                  
                    
                    <div className="banner-meta animate__animated animate__fadeInUp"  data-delay=".6s">
                      <ul>
                        <li className="quality">
                          <span>Pg 18</span>
                          <span>hd</span>
                        </li>
                        <li className="category">
                          <a href="/#">Romance,</a>
                          <a href="/#">Drama</a>
                        </li>
                        <li className="release-time">
                          <span><i className="far fa-calendar-alt" /> 2022</span>
                          <span><i className="far fa-clock" /> 128 min</span>
                        </li>
                      </ul>
                    </div>
                 
                  
                  
                    <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="banner-btn btn popup-video"  data-delay=".8s"><i className="fas fa-play" /> Watch Now</a>
                  

                    </div>
                
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-0 order-lg-2">
               
                 <div className="slider-img text-center text-lg-right animate__animated animate__fadeInRight"  data-delay=".2s">
                    <img src="img/banner/slider_img02.jpg" alt="" />
                  </div>
              
                </div>
                <div className="col-lg-6">
                       
               
                  <div className="banner-content">
                    <h6 className="sub-title animate__animated animate__fadeInUp"  data-delay=".2s">Movflx</h6>
                    <h2 className="title animate__animated animate__fadeInUp" data-delay=".4s">Unlimited <span>Movie</span>, TV Shows, &amp; More.</h2>
                    <div className="banner-meta animate__animated animate__fadeInUp" data-delay=".6s">
                      <ul>
                        <li className="quality">
                          <span>Pg 18</span>
                          <span>hd</span>
                        </li>
                        <li className="category">
                          <a href="/#">Romance,</a>
                          <a href="/#">Drama</a>
                        </li>
                        <li className="release-time">
                          <span><i className="far fa-calendar-alt" /> 2022</span>
                          <span><i className="far fa-clock" /> 120 min</span>
                        </li>
                      </ul>
                    </div>
                    <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="banner-btn btn popup-video" data-animation="fadeInUp" data-delay=".8s"><i className="fas fa-play" /> Watch Now</a>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-0 order-lg-2">
                
                  <div className="slider-img text-center text-lg-right animate__animated animate__fadeInRight" data-delay="1s">
                    <img src="img/banner/slider_img03.jpg" alt="" />
                  </div>
               
                </div>
                <div className="col-lg-6">
              
                  <div className="banner-content">
                    <h6 className="sub-title animate__animated animate__fadeInUp"  data-delay=".2s">Movflx</h6>
                    <h2 className="title animate__animated animate__fadeInUp"  data-delay=".4s">Unlimited <span>Movie</span>, TV Shows, &amp; More.</h2>
                    <div className="banner-meta animate__animated animate__fadeInUp"  data-delay=".6s">
                      <ul>
                        <li className="quality">
                          <span>Pg 18</span>
                          <span>hd</span>
                        </li>
                        <li className="category">
                          <a href="/#">Romance,</a>
                          <a href="/#">Drama</a>
                        </li>
                        <li className="release-time">
                          <span><i className="far fa-calendar-alt" /> 2022</span>
                          <span><i className="far fa-clock" /> 120 min</span>
                        </li>
                      </ul>
                    </div>
                    <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="banner-btn btn popup-video" data-animation="fadeInUp" data-delay=".8s"><i className="fas fa-play" /> Watch Now</a>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
  )
}

export default SliderArea