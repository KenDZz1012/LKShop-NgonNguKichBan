import React,{ useState } from 'react'
import Menu from '../UpMovieItemMenu';
import { motion } from "framer-motion"


const UpcomingMovie = () => {
 
  const [items, setItems] = useState(Menu);
  const filterItem = (categItem)=>{
    const updateItems = Menu.filter((curElem)=>{

      return curElem.category === categItem;

    })
    setItems(updateItems);
  }
 
  return (
    <section className="ucm-area ucm-bg" style={{backgroundImage:'url("../../img/bg/ucm_bg.jpg")'}}>
    <div className="ucm-bg-shape" style={{backgroundImage:'url("../../img/bg/ucm_bg_shape.png")'}} />
    <div className="container">
      <div className="row align-items-end mb-55">
        <div className="col-lg-6">
          <div className="section-title text-center text-lg-left">
            <span className="sub-title">ONLINE STREAMING</span>
            <h2 className="title">Upcoming Movies</h2>
          </div>
        </div>
      
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="tr-movie-menu2-active text-center">
            <button className="active" data-filter="*" onClick={()=> setItems(Menu)}>TV Shows</button>
            <button  data-filter=".cat-two" onClick={()=> filterItem('documentary')}>documentary</button>
            <button  data-filter=".cat-one" onClick={()=> filterItem('Movies')}>Movies</button>
            <button  data-filter=".cat-three" onClick={()=> filterItem('sports')}>sports</button>
          </div>
        </div>
      </div>


      <div className="row tr-movie-active">
        {
               items.map((elem)=>{
                const {id,image,title,date,quality,duration,ratings} = elem;

          return(

            
             <motion.div layout className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two" key={id}>
            <div className="movie-item mb-60">
              <motion.div layout className="movie-poster">
                <a href="/movie-details"><img src={image} alt="" /></a>
              </motion.div>
              <div className="movie-content">
                <div className="top">
                  <h5 className="title"><a href="/movie-details">{title}</a></h5>
                  <span className="date">{date}</span>
                </div>
                <div className="bottom">
                  <ul>
                    <li><span className="quality">{quality}</span></li>
                    <li>
                      <span className="duration"><i className="far fa-clock" />{duration}</span>
                      <span className="rating"><i className="fas fa-thumbs-up" />{ratings}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
       
         
         
        
        
         
      
       
           
          )
        })

      }
      </div>
     
    </div>
  </section>
  )
}

export default UpcomingMovie