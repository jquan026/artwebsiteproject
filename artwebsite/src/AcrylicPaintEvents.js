import React from 'react';
import "./AcrylicPaintEvents.css"
import paintEvent1 from "./img/paintEvent1.jpg";
import paintEvent2 from "./img/paintEvent2.jpg";
import paintEvent3 from "./img/paintEvent3.jpg";
import paintEvent4 from "./img/paintEvent4.jpg";

const AcrylicPaintEvents = () => {
  return (
    <div>
      <p className="paint-header">Acrylic Painting Events</p>
      <div>
        <img
          src={paintEvent1}
          className="paint-header-img"
          alt="Paint Event Header Image"
        />
      </div>
      <div className="paint-description">
        <p>We offer group acrylic painting events!</p>
        <p>
          Whether you are looking to get together with friends or even organize
          a company event, this event is a great way to spend 2 hours connecting
          with others over a fun project.
        </p>
        <p>
          We can host an event at any of our 3 locations. The event will just
          need to be scheduled at a time that does not conflict with our current
          schedule.
        </p>
      </div>
      <div className="paint-desc-imgs">
        <img
          src={paintEvent2}
          className="paint-center-img1"
          alt="Paint Event Center Image"
        />
        <img
          src={paintEvent3}
          className="paint-center-img2"
          alt="Paint Event Center Image"
        />
        <img
          src={paintEvent4}
          className="paint-center-img3"
          alt="Paint Event Center Image"
        />
      </div>
      <div className="paint-details">
        <p className="paint-subtitle">Event Details & Pricing</p>
        <ul>
          <li>Cost: $30 per person</li>
          <li>Minimum Attendance: 6 people</li>
          <li>Maximum Capacity: 15 people</li>
          <li>Food & Drinks: You're welcome to bring your own</li>
          <li>
            Project: Take home a completed project at the end of the class
          </li>
          <li>Age Requirement: 15 and up</li>
        </ul>
        <p>
          If you would like to inquire about more information or set up an
          event, please email us at
        </p>
        <p>artwithlarisse@gmail.com</p>
        <p>
          If you are looking to host an event at a private location other than
          at the studio. Please reach out to us and we can provide more
          information.
        </p>
      </div>
    </div>
  );
}

export default AcrylicPaintEvents;