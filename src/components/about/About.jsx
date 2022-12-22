import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
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
                <img src={ME} alt = "about image" />
              </div>
          </div>

            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about_icon'/>
                  <h5>Experience</h5>
                  <small>0 experience lol</small>
                </article>

                <article className='about__card'>
                  <FiUsers className='about_icon'/>
                  <h5>Clients</h5>
                  <small>multiple worldwide</small>
                </article>

                <article className='about__card'>
                  <VscFolderLibrary className='about_icon'/>
                  <h5>Projects</h5>
                  <small>3+ years working</small>
                </article>
              </div>
              <p>My Name is 
                and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scr
                printer took a galley of type and scr</p>
          </div>

        </div>



    </section>
  )
}

export default About
