import React,{ useEffect } from 'react';
import $ from "jquery";
import 'magnific-popup';
import Counterup from '../Counterup';
import 'animate.css';



const LiveArea = () => {
  useEffect(()=>{
    
    $('.popup-video').magnificPopup({
			type: 'iframe'
		});
	

  },[])

  return (
    <section className="live-area live-bg fix" style={{backgroundImage:'url("../../img/bg/live_bg.jpg")'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6">
          <div className="section-title title-style-two mb-25">
            <span className="sub-title">ONLINE STREAMING</span>
            <h2 className="title">Live Movie &amp; TV Shows For Friends &amp; Family</h2>
          </div>
        
          <div className="live-movie-content">
            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration.</p>
            <div className="live-fact-wrap">
              <div className="resolution">
                <h2>HD 4K</h2>
              </div>
            
              <div className="active-customer">
                <h4> <span> <Counterup end={20}/> </span>  K+</h4>
               
                <p>Active Customer</p>
              </div>
            
            </div>
            <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="btn popup-video"><i className="fas fa-play" /> Watch Now</a>
          </div>
       

          
        </div>
        <div className="col-xl-7 col-lg-6">
          <div className="live-movie-img animate__animated animate__fadeInRight" data-wow-delay=".2s" data-wow-duration="1.8s">
            <img src="img/images/live_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LiveArea