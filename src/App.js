import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from "./Logo"
import Homepage from './Homepage';
import Homepage2 from './Homepage2';
function App() {
  return (
    <>
      <Logo classname="logo"/>
      <Navbar classname="navbar"/>
      <Homepage2 classname="homepage"/>
      <Routes>
        <Route path="/" element={<Homepage2 />} />
      </Routes>
    </>
  );
}

export default App;
