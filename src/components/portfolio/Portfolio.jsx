import React from 'react'
import './portfolio.css'
import ME from '../../assets/kobe.jpg'
import data from './project'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map((project) =>{
          const {id, image, title, github, button1, demo, button2} = project;
          return (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className="btn" target='_blank'> {button1}</a>
            <a href={demo} className="btn btn-primary" target='_blank'> {button2}</a>
            </div>
          </article>
          );
        })}
        
      </div>



    </section>
  )
}

export default Portfolio



/*
<article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ME} alt="" />
          </div>
          <h3>This is a title for a portfolio</h3>
          <a href="https://github.com" className="btn" target='_blank'> Github</a>
          <a href="https://github.com" className="btn btn-primary" target='_blank'> Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ME} alt="" />
          </div>
          <h3>This is a title for a portfolio</h3>
          <a href="https://github.com" className="btn" target='_blank'> Github</a>
          <a href="https://github.com" className="btn btn-primary" target='_blank'> Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ME} alt="" />
          </div>
          <h3>This is a title for a portfolio</h3>
          <a href="https://github.com" className="btn" target='_blank'> Github</a>
          <a href="https://github.com" className="btn btn-primary" target='_blank'> Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ME} alt="" />
          </div>
          <h3>This is a title for a portfolio</h3>
          <a href="https://github.com" className="btn" target='_blank'> Github</a>
          <a href="https://github.com" className="btn btn-primary" target='_blank'> Live Demo</a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ME} alt="" />
          </div>
          <h3>This is a title for a portfolio</h3>
          <a href="https://github.com" className="btn" target='_blank'> Github</a>
          <a href="https://github.com" className="btn btn-primary" target='_blank'> Live Demo</a>
        </article>
        */