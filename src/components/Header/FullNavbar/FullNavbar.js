import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from 'styled-components'

const slidein = keyframes`
  from {
    left: 200%;
  }
  to {
    left: 0px;
  }
`
const Nav = styled.div`
  display: flex;
  
  @media (max-width: 500px) {
    background: rgb(0, 0, 44);
    z-index: 10;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 68px;
    left: 0px;
    display: ${props => props.translate ? "none" : "flex"};
    padding: 24px;
    animation: ${slidein} .5s;
  }
`
const Links = styled(Link)`
text-decoration: none;

@media (max-width: 500px) {
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  display: flex;
}
`
const LinkSpace = styled.div`
  width: 33px;
  display: inline-flex;

  @media (max-width: 500px) {
    display: none;
  }
`
const LinkItem = styled.span`
  
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: 75%; 
  padding: 32px 0;
  
  @media (min-width: 501px){
    font-size: 0.75rem;
    &:active, &:hover {
      border-top: 4px solid #EDA249;
    }
  }

  @media (max-width: 500px){
    opacity: 100%;
    font-size: 1rem;
    padding: 20px 0;
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

export const NavComponent = ({ translate, setTranslate, mobile=false }) => {
  return (
    <Nav translate={translate}>
      {[
          "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
       ].map((title) => (
        <Links
          key={title}
          onClick={() => mobile ? setTranslate(true) : null}
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