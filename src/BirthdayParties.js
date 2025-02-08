import React from 'react'
import './BirthdayParties.css'
import BirthdayBooking from './emails/BirthdayBooking'

const BirthdayParties = () => {
  return (
    <div>
      <p className="birthday-title">Celebrate Your Birthday With Us</p>
      <div className="birthday-header">
        <div className="birthday-intro">
          <div className="birthday-intro-desc">
            <p className="birthday-intro-desc-text">
              Celebrate your birthday with us! Enjoy your time with friends and
              family with a private art lesson and birthday activities.
            </p>
            <p className='birthday-contact'>
              <p className="birthday-intro-desc-contact">Email us to book now!</p>
              <BirthdayBooking />
            </p>
          </div>
        </div>
        <div className="birthday-image">
          <img src="https://picsum.photos/300/300" alt="Birthday Pic" />
        </div>
      </div>

      <div className="birthday-body">
        <div className="birthday-section-block">
          <p className="birthday-subtite">What We Offer</p>
          <p className="birthday-info">
            Our birthday parties provide 2 hours of fun and creativity,
            including a 1-hour 15-minute pastel art lesson, time for food,
            setup, and even games if requested.
            <ul>
              <li>Tailored for ages 5 and up.</li>
              <li>All art supplies provided.</li>
              <li>Focus on drawing, coloring, and shading techniques.</li>
              <li>Create a personalized pastel art piece.</li>
            </ul>
          </p>
        </div>
        <div className="birthday-section-block">
          <p className="birthday-subtite">Pricing</p>
          <div className="birthday-pricing">
            <div className="package-info">
              <p className="birthday-subtite">Base Price</p>
              <p>$250 for a minimum of 8 children</p>
            </div>
            <div className="package-info">
              <p className="birthday-subtite">Additional Guests</p>
              <p>$25 per additional child</p>
              <p>(up to 20 students)</p>
            </div>
          </div>
          <div className="birthday-addon">
            <p className="birthday-subtite">Optional Add-On</p>
            <p className="birthday-info">
              $10 per mat: Party favor mats for the kids' finished artwork
            </p>
            <p className="birthday-info">
              These mats allow the children to take home a ready-to-hang
              masterpiece! If not purchased, the artwork will be rolled up, as
              we do in regular art classes.
            </p>
          </div>
        </div>
        <div className="birthday-section-block">
          <p className="birthday-subtite">What's Included?</p>
          <p className="birthday-info">
            <ul>
              <li>All supplies for a pastel art project.</li>
              <li>A 1-hour 15-minute guided art lesson.</li>
              <li>
                A party table for food, gifts, or decorations (you may bring
                your own tablecloth and decor).
              </li>
              <li>
                30 minutes after the lesson for food, cake, and celebrations.
              </li>
            </ul>
          </p>
        </div>
        <div className="birthday-section-block">
          <p className="birthday-subtite">Booking and Policies</p>
          <p className="birthday-info">
            <ul>
              <li>Payment: Required 7 days before the event</li>
              <li>
                Final Participation Number: We ask that you provide the number
                of participants you will have 7 days before your event do we can
                send an invoice. If participants cancel or no show to event, no
                refunds will be given for those participants missing the event.
              </li>
              <li>
                Cancellation of event: A full refund is available if you provide
                a notice of cancellation email 24 hours before the event starts.
              </li>
              <li>
                Dining Area: We recommend food that doesn't require seating, as
                formal dining areas are not available at the studio.
              </li>
              <li>
                Parent Guidelines: Parents drop off kids for the lesson; only
                the birthday child's parents may stay to minimize distractions.
                All parents are welcome for the final 30 minutes for food and
                cake.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="birthday-booking">
        <p>Ready to Book? Email <BirthdayBooking/> </p>
      </div>
    </div>
  );
}

export default BirthdayParties