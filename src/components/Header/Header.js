// https://codesandbox.io/s/react-responsive-nav-3n3lu?file=/src/components/Navbar.js:0-1274
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FullNavbar from './FullNavbar/FullNavbar'
import MobileNavbar from './MobileNavbar/MobileNavbar'
import styled from 'styled-components'
import { useWindowWidth } from '../../customHooks/useWindowWidth'
// import "../styles/navbar.css";

const HeaderElement = styled.header`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 85px;
  width: 100vw;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, .2);

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 160px;
    justify-content: space-around;
    padding: 0 20px;
  }
  @media (max-width: 768px){
    height: 68px;
    flex-direction: row;
    justify-content: space-between;
  }
`
const Title = styled(Link)`
  font-family: 'Antonio', sans-serif;
  font-size: 28px;
  text-decoration: none;
  letter-spacing: -1px;
`
const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  
`;

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const width = useWindowWidth()
  return (
    <HeaderElement>
      <Title to={"/home"}>
          THE PLANETS
      </Title>
        { width > 768 ? 
            <FullNavbar />
            :
            <MobileNavbar />
        }
    </HeaderElement>
  );
}

export default Header