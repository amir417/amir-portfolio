import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h2>Skills</h2>
      {/* <h2>Personal Experiences</h2> */}

      <div className="container exp_container">
        <div className="exp__frontend">
            <h3>Technical Skills</h3>
            <div className="exp__content">
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>C/C++</h4>
              <small className='text-light'>School Projects</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>React.js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>Node & Express</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML & CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>AWS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>MongoDB & SQL</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>


            </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="exp__backend">
        <h3>Professional Skills</h3>
            <div className="exp__content">
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>Leadership</h4>
              <small className='text-light'>Maybe experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>Problem-Solving</h4>
              <small className='text-light'>Literally the only thing engineers do</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>Business Analysis</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>Engineering Design</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill  className='exp_detail-icon'/>
              <div>
              <h4>Team-work</h4>
              <small className='text-light'>All my team members say so</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill   className='exp_detail-icon'/>
              <div>
              <h4>Communication</h4>
              <small className='text-light'>Subjective opinion: Experienced</small>
              </div>
            </article>


            </div>

        </div>

      </div>




    </section>
  )
}

export default Experience
