import React from "react";
import "./MissionStatement.css"

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
    </div>
  );
}

export default MissionStatement;