import React from 'react'
import A_Aazam_Resume from '../../assets/Amirreza_Aazam_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href= {A_Aazam_Resume} download className='btn'>Download CV</a>
    <a href='#contact' className='btn btn-primary'>Let's talk!</a>
    </div>
  )
}

export default CTA
