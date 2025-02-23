import React from "react";
import "./MissionStatement.css"

import msp1 from "./img/MissionStatementPic1.jpg";
import msp2 from "./img/MissionStatementPic2.jpg";
import msp3 from "./img/MissionStatementPic3.jpg";
import msp4 from "./img/MissionStatementPic4.JPEG";
import msp5 from "./img/MissionStatementPic5.jpg";

const MissionStatement = () => {
  return (
    <div>
      <div className="mission-header">
        <p className="mission-pg-title">Mission Statement</p>
        <div className="mission-text">
          <p>
            Art brings joy into our world. We provide the studios and
            instruction to find that joy.
          </p>
          <p>
            Our studios are a safe and happy space for art to flourish. We
            thrive on molding the creativity of each student with applications
            and techniques that have been around for hundreds of years. The
            great masters of the Renaissance inspire us to find that inner
            artist in all of our students. From beginning to advanced students,
            let us help you create joy through art.
          </p>
        </div>
      </div>
      <div className='line-container'>
        <div className='line'></div>
      </div>

      <div className='picture-collage'>
        <div className='2-pic-section'>
            <div className="photo-container">
                <img src={msp1} className="pic-image"></img>
            </div>
            <div className="photo-container">
                <img src={msp2} className="pic-image"></img>
            </div>
        </div>
        <div className='1-pic-section'>
            <div className="photo-container">
                <img src={msp3} className="pic-image"></img>
            </div>
        </div>
        <div className='2-pic-section'>
            <div className="photo-container">
                <img src={msp4} className="pic-image"></img>
            </div>
            <div className="photo-container">
                <img src={msp5} className="pic-image"></img>
            </div>
        </div>
      </div>

    </div>
  );
}

export default MissionStatement;