import React from 'react'

const BlogArea = () => {
  return (
    <section className="blog-area blog-bg" style={{backgroundImage:'url("../img/bg/blog_bg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-post-item">
            <div className="blog-post-thumb">
              <a href="/blog-details"><img src="img/blog/blog_thumb01.jpg" alt="" /></a>
            </div>
            <div className="blog-post-content">
              <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
              <h2 className="title"><a href="/blog-details">Your Free Movie Streaming Purposes</a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa
                commodo consequat. Duis aute
                irure dolor in reprehend .</p>
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /> by <a href="/#">Admin</a></li>
                  <li><i className="far fa-thumbs-up" /> 63</li>
                  <li><i className="far fa-comments" /><a href="/#">12 Comments</a></li>
                </ul>
                <div className="read-more">
                  <a href="/blog-details">Read More <i className="fas fa-angle-double-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-post-item">
            <div className="blog-post-thumb">
              <a href="/blog-details"><img src="img/blog/blog_thumb02.jpg" alt="" /></a>
            </div>
            <div className="blog-post-content">
              <span className="date"><i className="far fa-clock" /> 10 Mar 2021</span>
              <h2 className="title"><a href="/blog-details">Where watch English movies free?</a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa
                commodo consequat. Duis aute
                irure dolor in reprehend .</p>
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /> by <a href="/#">Admin</a></li>
                  <li><i className="far fa-thumbs-up" /> 63</li>
                  <li><i className="far fa-comments" /><a href="/#">12 Comments</a></li>
                </ul>
                <div className="read-more">
                  <a href="/blog-details">Read More <i className="fas fa-angle-double-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-post-item">
            <div className="blog-post-thumb">
              <a href="/blog-details"><img src="img/blog/blog_thumb03.jpg" alt="" /></a>
            </div>
            <div className="blog-post-content">
              <span className="date"><i className="far fa-clock" /> 10 Mar 2021</span>
              <h2 className="title"><a href="/blog-details">House movie to is streaming website?</a></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa
                commodo consequat. Duis aute
                irure dolor in reprehend .</p>
              <div className="blog-post-meta">
                <ul>
                  <li><i className="far fa-user" /> by <a href="/#">Admin</a></li>
                  <li><i className="far fa-thumbs-up" /> 63</li>
                  <li><i className="far fa-comments" /><a href="/#">12 Comments</a></li>
                </ul>
                <div className="read-more">
                  <a href="/blog-details">Read More <i className="fas fa-angle-double-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-wrap mt-60">
            <nav>
              <ul>
                <li className="active"><a href="/#">1</a></li>
                <li><a href="/#">2</a></li>
                <li><a href="/#">3</a></li>
                <li><a href="/#">4</a></li>
                <li><a href="/#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-4">
          <aside className="blog-sidebar">
            <div className="widget blog-widget">
              <div className="widget-title mb-30">
                <h5 className="title">Search Objects</h5>
              </div>
              <form className="sidebar-search">
                <input type="text" placeholder="Search..." />
                <button><i className="fas fa-search" /></button>
              </form>
            </div>
            <div className="widget blog-widget">
              <div className="widget-title mb-30">
                <h5 className="title">Categories</h5>
              </div>
              <div className="sidebar-cat">
                <ul>
                  <li><a href="/#">Movies</a> <span>12</span></li>
                  <li><a href="/#">Action Movies</a> <span>10</span></li>
                  <li><a href="/#">Streaming</a> <span>9</span></li>
                  <li><a href="/#">Download</a> <span>16</span></li>
                </ul>
              </div>
            </div>
            <div className="widget blog-widget">
              <div className="widget-title mb-30">
                <h5 className="title">Recent Posts</h5>
              </div>
              <div className="rc-post">
                <ul>
                  <li className="rc-post-item">
                    <div className="thumb">
                      <a href="/blog-details"><img src="img/blog/rc_post_thumb01.jpg" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">Express Management Effective</a></h5>
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2021</span>
                    </div>
                  </li>
                  <li className="rc-post-item">
                    <div className="thumb">
                      <a href="/blog-details"><img src="img/blog/rc_post_thumb02.jpg" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">Where watch English movies free?</a></h5>
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2021</span>
                    </div>
                  </li>
                  <li className="rc-post-item">
                    <div className="thumb">
                      <a href="/blog-details"><img src="img/blog/rc_post_thumb03.jpg" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">House movie streaming website</a></h5>
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2021</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget blog-widget">
              <div className="widget-title mb-30">
                <h5 className="title">Tag Post</h5>
              </div>
              <div className="tag-list">
                <ul>
                  <li><a href="/#">Movies</a></li>
                  <li><a href="/#">Creative</a></li>
                  <li><a href="/#">News</a></li>
                  <li><a href="/#">Romantic</a></li>
                  <li><a href="/#">Who</a></li>
                  <li><a href="/#">English</a></li>
                  <li><a href="/#">Blending</a></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogArea