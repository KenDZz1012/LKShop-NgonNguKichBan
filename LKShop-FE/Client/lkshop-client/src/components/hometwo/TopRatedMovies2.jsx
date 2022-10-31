import React, { useEffect } from 'react'
import "magnific-popup";
import $ from "jquery";

const TopRatedMovies2 = () => {
  useEffect(()=>{
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
  
  
  },[])

  
    
  return (
  
    <section className="top-rated-movie tr-movie-bg2" style={{backgroundImage:'url("img/bg/tr_movies_bg.jpg")'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title title-style-three text-center mb-70">
            <span className="sub-title">top rated movies</span>
            <h2 className="title">Top Online Shows Watch</h2>
          </div>
        </div>
      </div>
      <div className="row movie-item-row">
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster01.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">Message in a Bottle</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster02.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">The Parkar Legend</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster03.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">The Ackle Bottle</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster04.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">The Speed 2</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster05.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">The Legend Emo</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster06.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">Envato Bottle 88</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster07.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">Message Bottle II</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster08.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">The Message B.</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster09.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">Tiger World Q.</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">Bluray</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster10.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
            <div className="movie-content">
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="title"><a href="/movie-details">Avenger World IV</a></h5>
              <span className="rel">Adventure</span>
              <div className="movie-content-bottom">
                <ul>
                  <li className="tag">
                    <a href="/#">HD</a>
                    <a href="/#">English</a>
                  </li>
                  <li>
                    <span className="like"><i className="fas fa-thumbs-up" /> 3.5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tr-movie-btn text-center mt-25">
        <a href="/#" className="btn">BROWSE ALL MOVIES</a>
      </div>
    </div>
  </section>
  )
}

export default TopRatedMovies2