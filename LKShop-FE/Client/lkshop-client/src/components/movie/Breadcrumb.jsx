import React from 'react'

export const Breadcrumb = () => {
  return (
    <section className="breadcrumb-area breadcrumb-bg" style={{backgroundImage:'url("../img/bg/breadcrumb_bg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb-content">
            <h2 className="title">Our <span>Movie</span></h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/homeone">Homeone</a></li>
                <li className="breadcrumb-item active" aria-current="page">Movie</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
