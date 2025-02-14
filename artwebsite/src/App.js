import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from "./Logo"
import Homepage from './Homepage';
import Homepage2 from './Homepage2';
import Footer from "./Footer"
import FAQ from './FAQ';
import Team from "./Team";
import StudioPolicies from './StudioPolicies';
import BirthdayParties from './BirthdayParties';
import LocationsLaMesa from './LocationsLaMesa';
import LocationsSantee from "./LocationsSantee";
import LocationsBonita from "./LocationsBonita";
import AdultArtClasses from './AdultArtClasses';
import AcrylicPaintEvents from './AcrylicPaintEvents';
import CharterSchool from "./CharterSchool";
import MissionStatement from './MissionStatement';


function App() {
  return (
    <>
      <Logo classname="logo" />
      <Navbar classname="navbar" />
      <Routes>
        <Route path="/" element={<Homepage2 />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/instructors" element={<Team />} />
        <Route path="/studio-policies" element={<StudioPolicies />} />
        <Route path="/birthday-parties" element={<BirthdayParties />} />
        <Route path="/locations/la-mesa" element={<LocationsLaMesa />} />
        <Route path="/locations/santee" element={<LocationsSantee />} />
        <Route path="/locations/bonita" element={<LocationsBonita />} />
        <Route path="/adult-classes" element={<AdultArtClasses />} />
        <Route path="/paint-parties" element={<AcrylicPaintEvents />} />
        <Route path="/charter-schools" element={<CharterSchool />} />
        <Route path="/mission" element={<MissionStatement />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
