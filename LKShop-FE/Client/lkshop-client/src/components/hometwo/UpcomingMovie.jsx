import React from 'react'

const UpcomingMovie = () => {
  return (
    <section className="ucm-area ucm-bg2" style={{backgroundImage:'url("../../img/bg/ucm_bg02.jpg")'}}>
    <div className="container">
      <div className="row align-items-end mb-55">
        <div className="col-lg-6">
          <div className="section-title title-style-three text-center text-lg-left">
            <span className="sub-title">ONLINE STREAMING</span>
            <h2 className="title">New Release Movies</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ucm-nav-wrap">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="tvShow-tab" data-toggle="tab" href="/#tvShow" role="tab" aria-controls="tvShow" aria-selected="true">TV Shows</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="movies-tab" data-toggle="tab" href="/#movies" role="tab" aria-controls="movies" aria-selected="false">Movies</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="anime-tab" data-toggle="tab" href="/#anime" role="tab" aria-controls="anime" aria-selected="false">Anime</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="tvShow" role="tabpanel" aria-labelledby="tvShow-tab">
          <div className="ucm-active-two ">
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster01.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster02.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster03.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5 className="title"><a href="/movie-details">The Tonoy 88 Bottle</a></h5>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster04.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster05.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster06.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5 className="title"><a href="/movie-details">The Dog Woof</a></h5>
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
        <div className="tab-pane fade" id="movies" role="tabpanel" aria-labelledby="movies-tab">
          <div className="ucm-active-two owl-carousel">
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster06.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster07.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster08.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5 className="title"><a href="movie-details">The Tonoy 88 Bottle</a></h5>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster09.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster02.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster01.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5 className="title"><a href="/movie-details">The Dog Woof</a></h5>
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
        <div className="tab-pane fade" id="anime" role="tabpanel" aria-labelledby="anime-tab">
          <div className="ucm-active-two ">
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster01.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster02.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster03.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5 className="title"><a href="/movie-details">The Tonoy 88 Bottle</a></h5>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster04.jpg" alt="" /></a>
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
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster05.jpg" alt="" /></a>
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
                      <span className='like'> 

                      <i className= "fas fa-thumbs-up" /> 3.5
                       </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="movie-item movie-item-two mb-30">
              <div className="movie-poster">
                <a href="/movie-details"><img src="img/poster/s_ucm_poster06.jpg" alt="" /></a>
              </div>
              <div className="movie-content">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h5 className="title"><a href="/movie-details">The Dog Woof</a></h5>
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
      </div>
    </div>
  </section>
  )
}

export default UpcomingMovie