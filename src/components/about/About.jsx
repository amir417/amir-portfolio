import React from 'react'
import './about.css'
import MEq from '../../assets/me.jpeg'
// import ME from '../../assets/amirunpro2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import styled from 'styled-components';



const About = () => {
  return (
    <section id='about'>
        <h2 className='intro'> Who Am I?</h2>
        <div className='container about__container'>
          
          <div className= 'hello'>
              <div className="about__me-image">
                <img src={MEq} alt = "about image" />
              </div>
          </div>

            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about_icon'/>
                  <h5>Experience</h5>
                  <small>Just Getting Started</small>
                </article>

                <article className='about__card'>
                  <FiUsers className='about_icon'/>
                  <h5>Clients</h5>
                  <small>Community Organzations</small>
                </article>

                <article className='about__card'>
                  <VscFolderLibrary className='about_icon'/>
                  <h5>Projects</h5>
                  <small>Listed at:</small>
                  <a href="#portfolio"> Portfolio</a>
                </article>
              </div>
              <p>Hello there. My name is Amirreza Aazam and I currently study Electrical and Computer Engineering at the University of Toronto. This website
                is intended to showcase my skills and side-projects. Please note that some of the writtings are not meant to be taken seriously (joking around is part of being an engineer, right?). 
                Anyways, I hope you enjoy scrolling through my website and please contact me if you
                have any questions. 
              </p>
          </div>

        </div>



    </section>
  )
}

export default About
