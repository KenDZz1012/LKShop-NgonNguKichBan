import React from 'react'

const BlogDetailsArea = () => {
  return (
    <section className="blog-details-area blog-bg" style={{backgroundImage:'url("img/bg/blog_bg.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-post-item blog-details-wrap">
            <div className="blog-post-thumb">
              <a href="/blog-details"><img src="img/blog/blog_thumb01.jpg" alt="" /></a>
            </div>
            <div className="blog-post-content">
              <div className="blog-details-top-meta">
                <span className="user"><i className="far fa-user" /> by <a href="/#">Admin</a></span>
                <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
              </div>
              <h2 className="title">Your Free Movie Streaming Purposes</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuies, but also the leap into electronic typesetting, remaining essentially
                unchanged. It was populrised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently .</p>
              <p>Printing and typetting industry. Lorem Ipsum has been the industry's standrd dummy text ever since the, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuies, but
                also the leap into electronic typesetting, remaining essentially unched. It was populrised in the 1960s with the release
                of Letraset sheets containing .</p>
              <blockquote>
                <i className="fas fa-quote-right" />
                <p>Watch Mobflx movies &amp; TV shows online or stream rights to your smart TV, game console, PC, mobile more.</p>
                <figure><span>Frenk Smith</span> Founder ceo</figure>
              </blockquote>
              <div className="blog-img-wrap">
                <div className="row">
                  <div className="col-sm-6">
                    <img src="img/blog/blog_details_img01.jpg" alt="" />
                  </div>
                  <div className="col-sm-6">
                    <img src="img/blog/blog_details_img02.jpg" alt="" />
                  </div>
                </div>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuies.</p>
              <p>Printing and typetting industry. Lorem Ipsum has been the industry's standrd dummy text ever since the, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuies, but
                also the leap into electronic typesetting, remaining essentially unched. It was populrised in the 1960s with the release
                of Letraset sheets containing .</p>
              <div className="blog-post-meta">
                <div className="blog-details-tags">
                  <ul>
                    <li><i className="fas fa-tags" /> <span>Tags :</span></li>
                    <li><a href="/#">Movies ,</a> <a href="/#">Creative ,</a> <a href="/#">News ,</a> <a href="/#">English</a></li>
                  </ul>
                </div>
                <div className="blog-post-share">
                  <a href="/#"><i className="fab fa-facebook-f" /></a>
                  <a href="/#"><i className="fab fa-twitter" /></a>
                  <a href="/#"><i className="fab fa-pinterest-p" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="avatar-post mt-40 mb-80">
            <div className="post-avatar-img">
              <img src="img/blog/post_avatar_img.png" alt="img" />
            </div>
            <div className="post-avatar-content">
              <h5>Thomas Herlihy</h5>
              <p>Printing and typetting industry. Lorem Ipsum has been the instry standrd the dummy
                text ever since the, when an unknown printer took a galley .</p>
              <ul>
                <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                <li><a href="/#"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <div className="blog-comment mb-80">
            <div className="widget-title mb-45">
              <h5 className="title">Comment's (02)</h5>
            </div>
            <ul>
              <li>
                <div className="single-comment">
                  <div className="comment-avatar-img">
                    <img src="img/blog/comment_avatar01.jpg" alt="img" />
                  </div>
                  <div className="comment-text">
                    <div className="comment-avatar-info">
                      <h5>Daisy Waterstone <span className="comment-date">November 13, 2022</span></h5>
                      <a href="/#" className="comment-reply-link">Reply <i className="fas fa-reply-all" /></a>
                    </div>
                    <p>Printing and typetting industry. Lorem Ipsum has been the instry standrd the dummy
                      text ever since the, when an unknown printer took a galley .</p>
                  </div>
                </div>
              </li>
              <li className="comment-reply">
                <div className="single-comment">
                  <div className="comment-avatar-img">
                    <img src="img/blog/comment_avatar02.jpg" alt="img" />
                  </div>
                  <div className="comment-text">
                    <div className="comment-avatar-info">
                      <h5>Jon Deo <span className="comment-date">November 13, 2022</span></h5>
                      <a href="/#" className="comment-reply-link">Reply <i className="fas fa-reply-all" /></a>
                    </div>
                    <p>Printing and typetting industry. Lorem Ipsum has been the instry standrd the dummy
                      text ever since the, when an unknown printer took a galley .</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact-form-wrap">
            <div className="widget-title mb-50">
              <h5 className="title">Post a Comment</h5>
            </div>
            <div className="contact-form">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="You Name *" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="You  Email *" />
                  </div>
                </div>
                <input type="text" placeholder="Subject *" />
                <textarea name="message" placeholder="Type Your Message..." defaultValue={""} />
                <button className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <aside className="blog-sidebar">
            <div className="widget blog-widget">
              <div className="widget-title mb-30">
                <h5 className="title">Search Objects</h5>
              </div>
              <form action="#" className="sidebar-search">
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
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
                    </div>
                  </li>
                  <li className="rc-post-item">
                    <div className="thumb">
                      <a href="/blog-details"><img src="img/blog/rc_post_thumb02.jpg" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">Where watch English movies free?</a></h5>
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
                    </div>
                  </li>
                  <li className="rc-post-item">
                    <div className="thumb">
                      <a href="/blog-details"><img src="img/blog/rc_post_thumb03.jpg" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">House movie streaming website</a></h5>
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
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

export default BlogDetailsArea