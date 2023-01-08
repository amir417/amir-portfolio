import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #157196;
  background-color: #157196;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
   top: 0px;
   visibility: unset;
   z-index: 2;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Amirreza Aazam
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar