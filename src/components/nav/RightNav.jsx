import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    padding: 18px 10px;
    color: #f6fbff;
    font-size: large;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: #2ac29c;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {/* <li onClick={location.href=''}>Home</li> */}
      {/* <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li> */}
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </Ul>
  )
}

export default RightNav