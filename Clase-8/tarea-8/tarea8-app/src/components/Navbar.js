import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          About
          Team
          Blog
        </NavMenu>
      </Nav>
    </>
  );
};


export const Nav = styled.nav`
  background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Navbar;