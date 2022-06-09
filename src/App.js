import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './pages/Home'
import Mercury from './pages/Mercury'
import Venus from './pages/Venus'
import Earth from './pages/Earth'
import Mars from './pages/Mars'
import Jupiter from './pages/Jupiter'
import Saturn from './pages/Saturn'
import Uranus from './pages/Uranus'
import Neptune from './pages/Mercury'
import planets from './data.json'

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mercury" element={<Mercury planet={planets[0]}/>} />
            <Route path="/venus" element={<Venus planet={planets[1]}/>} />
            <Route path="/earth" element={<Earth planet={planets[2]}/>} />
            <Route path="/mars" element={<Mars planet={planets[3]}/>} />
            <Route path="/jupiter" element={<Jupiter planet={planets[4]}/>} />
            <Route path="/saturn" element={<Saturn planet={planets[5]}/>} />
            <Route path="/uranus" element={<Uranus planet={planets[6]}/>} />
            <Route path="/neptune" element={<Neptune planet={planets[7]}/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
