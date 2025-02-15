import React from "react";
import "./SummerCamp.css";
import SummerCampBooking from "./emails/CampRSVP"

const SummerCamp = () => {
  return (
    <div>
      <div className="summer-header">
        <p className="summer-title">Summer Camp 2025</p>
        <p className="summer-intro">Fine Art | Crafts</p>
        <p className="summer-intro">4 days | 10 AM - 1 PM | $220</p>
      </div>

      <div className="summer-schedule-container">
        <div className="summer-schedule-box">
          <p className="summer-subtitle">Camp Weeks</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-subtitle">Availability</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-subtitle">Camp Info</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-subtitle">Location</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">June 16th - June 19th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Wed, Thurs</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Bonita</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">June 23rd - June 27th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Santee</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">June 23rd - June 26th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Wed, Thurs</p>
          <p className="summer-schedule-subtext">Ages 5-8</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Bonita</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 7th - June 10th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Wed, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">La Mesa</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 7th - July 10th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-8</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Santee</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 14th - July 17th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Wed, Thurs</p>
          <p className="summer-schedule-subtext">Ages 9-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Bonita</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 14th - July 18th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-8</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">La Mesa</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 21st - July 25th</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Santee</p>
        </div>

        <div className="summer-schedule-box">
          <p className="summer-schedule-text">July 28th - August 1st</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">
            <SummerCampBooking />
          </p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">Mon, Tues, Thurs, Fri</p>
          <p className="summer-schedule-subtext">Ages 5-15</p>
        </div>
        <div className="summer-schedule-box">
          <p className="summer-schedule-text">La Mesa</p>
        </div>
      </div>

      <div className="summer-body">
        <div className="summer-body-intro">
          <p>
            Come join our 4 day summer camps to build upon your creativity,
            explore new techniques, and most of all, have fun!
          </p>
          <img src="https://picsum.photos/300/300" alt="Summer Camp Image" />
        </div>
        <div className="summer-body-text">
          <p>
            Last year, our summer camp spots filled up fast, so don’t wait to
            reserve your spot!
          </p>
          <p>
            To secure your spot, full payment is required. Please email us with
            the camp/studio you’re interested in to begin the reservation
            process.
          </p>
          <p>
            Our regular art classes run year-round—check the studio links above
            for schedules. Learn to draw fine art and create new crafts every
            day!
          </p>
          <div className="summer-body-subtext">
            <p className="summer-subtitle">Art Camp Schedule:</p>
            <p>
              Camps run for 4 days from 10 AM to 1 PM, with afternoon classes
              continuing during camp weeks. All supplies and snacks are included
              for $220 per session.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SummerCamp;