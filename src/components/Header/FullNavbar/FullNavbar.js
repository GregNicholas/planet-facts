import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 2rem;
  }
`
const Links = styled(Link)`
text-decoration: none;
`
const LinkSpace = styled.div`
  width: 33px;
  display: inline-flex;
`
const LinkItem = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: 75%; 
  padding: 32px 0;
  
  &:active {
    border-top: 4px solid #EDA249;
  }
  &:hover {
    opacity: 100%; 
  }
`
const FullNavbar = () => {
  return (
    <NavComponent/>
  );
};

export const NavComponent = () => {

  return (
    <Nav>
      {[
          "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
       ].map((title) => (
        <Links
          key={title}
          to={`/${title.toLowerCase()}`}
        >
          <LinkSpace />
          <LinkItem>{title}</LinkItem>
        </Links>
      ))}
    </Nav>
  );
};
export default FullNavbar;
