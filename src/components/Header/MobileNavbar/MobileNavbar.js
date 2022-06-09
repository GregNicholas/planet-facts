import React, { useState } from "react"
import { NavComponent } from "../FullNavbar/FullNavbar"
import styled from 'styled-components'

const MobileNavContainer = styled.div`
    overflow: hidden;
`
const Button = styled.button`
    border: none;
    background: none;
    color: magenta;
    font-size: 2rem;
    padding: 0;
    margin-top: 10px;
`

const SmallNavbar = () => {
  let [translate, setTranslate] = useState(true);
  return (
      <div>
        <Button
          onClick={() => setTranslate(!translate)}
        >
          {translate ? <span>&#9776;</span> : <span>&times;</span>}
        </Button>
        <MobileNavContainer>
          <NavComponent
            translate={translate}
            setTranslate={setTranslate} //set translate to true to hide the sidebar list
            mobile={true}
          />
        </MobileNavContainer>
      </div>
  );
};
export default SmallNavbar;
