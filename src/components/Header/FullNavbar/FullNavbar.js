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
  
  @media (max-width: 768px) {
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

@media (max-width: 768px) {
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  display: flex;
}
`
const LinkSpace = styled.div`
  width: 33px;
  display: inline-flex;

  @media (max-width: 768px) {
    display: none;
  }
`
const LinkItem = styled.span`
  
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${props => props.selected === props.planet.name ? "1" : ".75"}; 
  padding: 32px 0;
  
  @media (min-width: 768px) and (max-width: 1024px){
    font-size: 0.8rem;
    &:active, &:hover {
      color: ${props => props.planet.color};
    }
    color: ${props => props.selected === props.planet.name ? props.planet.color : "white"};
  }

  @media (min-width: 1024px){
    font-size: 0.8rem;
    &:active, &:hover {
      border-top: ${props => `4px solid ${props.planet.color}`};
    }
    border-top: ${props => props.selected === props.planet.name ? `4px solid ${props.planet.color}` : "none"};
  }

  @media (max-width: 768px){
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
  const [selected, setSelected] = useState(null)
  return (
    <Nav translate={translate}>
      {[
          {name: "Mercury", color: "#DEF4FC"}, 
          {name: "Venus", color: "#F7CC7F"}, 
          {name: "Earth", color: "#545BFE"},
          {name: "Mars", color: "#FF6A45"}, 
          {name: "Jupiter", color: "#ECAD7A"}, 
          {name: "Saturn", color: "#FCCB6B"}, 
          {name: "Uranus", color: "#65F0D5"}, 
          {name: "Neptune", color: "#497EFA"}
       ].map((planet) => (
        <Links
          key={planet.name}
          onClick={() => {
            setSelected(planet.name)
            if(mobile){
              setTranslate(true)
            }
          }}
          to={`/${planet.name.toLowerCase()}`}
        >
          <LinkSpace />
          <LinkItem selected={selected} planet={planet}>{planet.name}</LinkItem>
        </Links>
      ))}
    </Nav>
  );
};
export default FullNavbar;
