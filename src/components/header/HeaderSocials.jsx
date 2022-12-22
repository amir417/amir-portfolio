import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";



function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/amirrezaaazam/" target="_blank"><AiFillLinkedin/></a>
      <a href="https://github.com/amir417" target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials
