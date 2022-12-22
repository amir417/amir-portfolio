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
            <h3>FrontEnd Devlopment</h3>
            <div className="exp__content">
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="exp__backend">
        <h3>BackEnd Devlopment</h3>
            <div className="exp__content">
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill  className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsPatchCheckFill   className='exp_detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            </div>

        </div>

      </div>




    </section>
  )
}

export default Experience
