import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from "./Logo"
import Homepage from './Homepage';
import Homepage2 from './Homepage2';
// import Locations from './LocationCards';
// import Team from './Team';
// import Services from './Services';
// import Gallery from './Gallery';
// import FAQ from './FAQ';

import LocationsLaMesa from './LocationsLaMesa';
import LocationsBonita from './LocationsBonita';
import LocationsSantee from './LocationsSantee';

function App() {
  return (
    <>
      <Logo classname="logo"/>
      <Navbar classname="navbar"/>
      <Routes>
        <Route path="/" element={<Homepage2 />} />
        <Route path="/locationsLaMesa" element={<LocationsLaMesa />} />
        <Route path="/locationsBonita" element={<LocationsBonita />} />
        <Route path="/locationsSantee" element={<LocationsSantee />} />
        {/* <Route path="/locations" element={<Locations />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} /> */}
      </Routes>
    </>
  );
}

export default App;
