import React from "react"
import missionimg from "./img/missionimg.jpg"
import "./Mission.css"

const Mission = () => {
  return (
    <div className="mission">
      <div className="photo">
        <img src={missionimg} alt="Flower vase piece" className="mission-img"></img>
      </div>
      <div className="statement">
        <p className="mission-title">Our Mission Statement:</p>
        <div className="text">
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
    </div>
  );
}

export default Mission