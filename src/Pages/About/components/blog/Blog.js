import React from 'react'
import "./blog.css"
import { Fade } from "react-awesome-reveal"
import blog1 from "../../../../assets/images/aboutPage/about-home1.jpg"
import blog2 from "../../../../assets/images/aboutPage/about-home2.jpg"
import blog3 from "../../../../assets/images/homePage/miami-beach.jpg"
import blog4 from "../../../../assets/images/aboutPage/about-home4.jpg"

function Blog() {

  const blogData = [
    {
      img: blog1,
      date: "March 9, 2016",
      category: "Business",
      title: "Skills That You Can Learn In The Real Estate Market",
    },
    {
      img: blog2,
      date: "March 9, 2016",
      category: "Construction",
      title: "Learn The Truth About Real Estate Industry",
    },
    {
      img: blog3,
      date: "March 9, 2016",
      category: "Real Estate",
      title: "10 Quick Tips About Business Development",
    },
    {
      img: blog4,
      date: "March 9, 2016",
      category: "Real Estate",
      title: "14 Common Misconceptions About Business Development",
    },
  ]


  return (
    <div className='blog-main-container'>
      <div className='wrapper'>
        <Fade duration={2500}>
          <div className="about-header">
            <h2>Read From Our Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </Fade>
        <div className="blog-cards-main-container">
          {blogData.map((blog) => (
            <div className="blog-card">
              <div className='blog-card-img'><img src={blog.img} alt="" /></div>
              <div className="blog-card-body">
                <i class="fa-solid fa-calendar-days"></i>
                <span className='blog-date'>{blog.date}</span>
                <i class="fa-solid fa-tag"></i>
                <span className='blog-category'>{blog.category}</span>
                <div className="blog-title">{blog.title}</div>
                <div className="blog-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...
                </div>
                <div className="blog-link">
                  Continue reading
                </div>
                <div className='blog-post-author'>
                  <i className='fa fa-user'></i>
                   <span className='blog-post-author-name'>by Mike Moore</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog