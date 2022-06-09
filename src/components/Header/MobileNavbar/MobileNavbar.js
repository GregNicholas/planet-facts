import React, { useState } from "react"
import { NavComponent } from "../FullNavbar/FullNavbar"
import styled from 'styled-components'

const SmallNavComp = styled(NavComponent)`
    border: 2px solid magenta;
`

const SmallNavbar = () => {
  let [translate, setTranslate] = useState(true);
  return (
      <div>
        <button
          onClick={() => setTranslate(!translate)}
        >
          {translate ? <span>&#9776;</span> : <span>&times;</span>}
        </button>
        <div
          id="sidebar-list"
          className={`${translate ? "addTransiton" : "removeTransition"}`}
        >
          <SmallNavComp
            onClick={() => setTranslate(true)} //set translate to true to hide the sidebar list
          />
        </div>
      </div>
  );
};
export default SmallNavbar;
