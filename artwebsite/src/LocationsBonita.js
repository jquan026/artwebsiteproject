import React from "react";
import './LocationsStudio.css';
import { Link } from "react-router-dom";

import bonitaLocationInside from "./img/bonitalocationinside.avif";
import referAFriendPicture from "./img/bonitaArt1.avif";

const LocationsBonita = () => {
  return (
    <div className="locations-studio">
        <div className="title-text">
            <h2>Bonita Location</h2>
            <p>Established in 2015</p>
        </div>
        <div className="studio-photo">
            <img src={bonitaLocationInside} alt="Bonita Interior" className="studio-pic"></img>
        </div>
        <div className="top-content">
            <h4>We offer a free introductory lesson to students ages 5-17!</h4>
            <p>Call us today to schedule your first lesson!</p>
        </div>
        <div className='line-container'>
            <div className='line'></div>
        </div>
        <div className="details">
            <div className="detail-text">
                <h2>Details</h2>
            </div>
            <div className="detail-rect">
                <div className="detail-top-rect">
                    <div className="address-text">
                        <h4 className="detail-topic">Address:</h4>
                        <p className="detail-content">4510 Bonita Road,</p>
                        <p className="detail-content">Bonita, CA 91902</p>
                    </div>
                    <div className="contact-info-text">
                        <h4 className="detail-topic">Contact Information:</h4>
                        <p className="detail-content">(619) 508-1299</p>
                    </div>
                </div>
                <div className="detail-middle-rect">
                    <div className="schedule-text">
                        <h4 className="detail-topic">Schedule:</h4>
                    </div>
                    <div className="schedule-boxes">
                        <div className="schedule-box-index">
                            <p>Monday</p>
                            <h4>3:30 - 4:45 PM</h4>
                            <h4>5:00 - 6:15 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Tuesday</p>
                            {/* <h4>3:00 - 4:30 PM</h4> */}
                            <h4>4:30 - 5:45 PM</h4>
                            <h4>6:00 - 7:15 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Wednesday</p>
                            <h4>3:30 - 4:45 PM</h4>
                            <h4>5:00 - 6:15 PM</h4>
                            <h4>6:30 - 7:45 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Thursday</p>
                            <h4>3:30 - 4:45 PM</h4>
                            <h4>5:00 - 6:15 PM</h4>
                            <h4>6:30 - 7:45 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Friday</p>
                            <h4>4:00 - 5:15 PM</h4>
                            <h4>5:30 - 6:45 PM</h4>
                        </div>
                        <div className="schedule-box-index">
                            <p>Saturday</p>
                            <h4>9:00 - 10:15 AM</h4>
                            <h4>10:30 - 11:45 AM</h4>
                            <h4>12:00 - 1:15 PM</h4>
                        </div>
                    </div>
                </div>
                <div className="detail-bottom-rect">
                    <h4>Notes:</h4>
                    <ul>
                        <li>Class time slots are 1 hour and 15 minutes long.</li>
                        <li>The first hour is for art instruction. The last 15 minutes of class is for clean up. Please plan to be at the studio 1 hour after the start of class and students will exit when they are done cleaning up.</li>
                        <li>If you are looking for more information regarding adult classes, please click <Link to="/adult-classes" className="studio-link"> here</Link>.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="refer-a-friend-section">
                <div className="refer-a-friend-content">
                    <div className="refer-a-friend-title-text">
                        <h2>Refer a Friend Program:</h2>
                    </div>
                    <div className="refer-a-friend-content-texts">
                        <p>For each family/friend who signs up for at least one month (not including the free art lesson) using your referral, you get a free art lesson!</p>
                        <p style={{fontSize: '15px'}}>(There are no limits to the number of free art lessons you can earn!)</p>
                    </div>
                </div>
                <div className="refer-a-friend-photo">
                    <img src={referAFriendPicture} alt="Skunk in between flowers art piece" className="refer-a-friend-pic"></img>
                </div>
            </div>
    </div>
  )
}

export default LocationsBonita