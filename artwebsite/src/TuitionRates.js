import React from "react";
import "./TuitionRates.css"
import { Link } from "react-router-dom";

const TuitionRates = () => {
  return (
    <div>
      <div className="tuition-title">Tution Rates</div>
      <div className="tuition-rates">
        <div className="tuition-cards">
          <div className="tuition-card">
            <p>Monthly Tuition</p>
            <span className="tuition-price">$25/Class</span>
            <p>Once a week for the whole month</p>
          </div>
          <div className="tuition-card">
            <p>
              Discounted Tuition <span class="force-break">(12 weeks)</span>
            </p>
            <span className="tuition-price">$23/Class</span>
            <p>Reserve a class for 12 counsecutive weeks</p>
          </div>
          <div className="tuition-card">
            <p>Adult students</p>
            <span className="tuition-price">$50/Class</span>
            <p>2x/month on Tuesdays from 6:00-8:30PM</p>
          </div>
        </div>
        <ul>
          <li className="bolded">Regular monthly tuition:</li>
          <ul>
            <li className="bottom-spacing">
              $25 per class. To reserve a spot in class, students must pay for
              at least one class per week for a full month.
            </li>
            <li>
              When we close for the holidays, you will only pay for the number
              of classes that we are open.
            </li>
          </ul>
        </ul>
      </div>

      <div className="tuition-info">
        <p className="tuition-subtitle">
          Charter school students billing information:
        </p>
        <p className="reg-font-size">
          Please follow this <Link to="/charter-schools" className="charter-link">link</Link> to learn
          more.
        </p>
        <p className="tuition-subtitle">
          Discounted 3 month (12 weeks) tuition:
        </p>
        <ul>
          <li>Rate of $23 per class</li>
          <li>
            Must use in consecutive weeks - you are reserving a spot in a weekly
            class for 12 consecutive weeks.
          </li>
          <li>Cannot use towards doing double (back to back) classes.</li>
          <li>
            No refunds will be issued for unused classes if you were to stop or
            take a break.
          </li>
          <li>
            If your 12 classes end in the middle of a month, you can choose to
            pay regular price for classes to finish the month, or go online and
            purchase another 12 classes.
          </li>
          <li>
            You won't be deducted any class credits when we are closed for
            holidays.
          </li>
        </ul>
      </div>

      <div className="tuition-info">
        <p className="tuition-subtitle">Sibling Tuition Discount</p>
        <ul>
          <li>
            Sibling discount is only applicable to siblings/parents who live in
            the same household.
          </li>
          <li>
            You cannot use the sibling tuition discount and the 3 month tuition
            discount together. You can only use one or the other.
          </li>
          <li>
            You can only use sibling discount when siblings attend a full month
            together.
          </li>
          <li>
            If there are 2 siblings - 1st sibling pays full price, and 2nd
            sibling receives 10% off monthly rate.
          </li>
          <li>
            If there are 3 siblings - 1st and 2nd siblings pay full price, while
            the 3rd sibling receives 50% off monthly rate.
          </li>
          <li>
            If there are 4 siblings - 1st, 2nd, and 3rd siblings pay full price,
            and 4th sibling is free.
          </li>
        </ul>
      </div>

      <div className="tuition-sibling-chart">
        <div className="tuition-sibling-box">
          <p>Family Size</p>
        </div>
        <div className="tuition-sibling-box">
          <p>1st Sibling</p>
        </div>
        <div className="tuition-sibling-box">
          <p>2nd Sibling</p>
        </div>
        <div className="tuition-sibling-box">
          <p>2rd Sibling</p>
        </div>
        <div className="tuition-sibling-box">
          <p>4th Sibling</p>
        </div>
        <div className="tuition-sibling-box">
          <p>2 Siblings</p>
        </div>
        <div className="tuition-sibling-box">
          <p>Full Price</p>
        </div>
        <div className="tuition-sibling-box">
          <p>10% Off</p>
        </div>
        <div className="tuition-sibling-box">
          <p>N/A</p>
        </div>
        <div className="tuition-sibling-box">
          <p>N/A</p>
        </div>
        <div className="tuition-sibling-box">
          <p>3 Siblings</p>
        </div>
        <div className="tuition-sibling-box">
          <p>Full Price</p>
        </div>
        <div className="tuition-sibling-box">
          <p>Full Price</p>
        </div>
        <div className="tuition-sibling-box">
          <p>50% Off</p>
        </div>
        <div className="tuition-sibling-box">
          <p>N/A</p>
        </div>
        <div className="tuition-sibling-box">
          <p>4 Siblings</p>
        </div>
        <div className="tuition-sibling-box">
          <p>Full Price</p>
        </div>
        <div className="tuition-sibling-box">
          <p>Full Price</p>
        </div>
        <div className="tuition-sibling-box">
          <p>Full Price</p>
        </div>
        <div className="tuition-sibling-box">
          <p>100% Off</p>
        </div>
      </div>

      <div className="tuition-info">
        <p className="tuition-subtitle">
          Twice a week monthly tuition discount:
        </p>
        <ul>
          <li>
            The discount is 10% off of the lowest tuition amount.
            <ul>
              <li>
                For example if you are scheduled to attend for 4 Monday classes
                and 5 Friday classes, the discount would apply to the 4 Monday
                classes and you would save 10% on that set of classes. You will
                pay full price on the 5 Friday classes.
              </li>
              <li>
                When paying tuition online you would add the class day with the
                most number of days to your cart, and then add the discounted
                2nd day to your cart (this will be a separate item in the
                store).
              </li>
            </ul>
          </li>
          <li>
            Only applicable for students who attend one month at a time - cannot
            use together with 3 month tuition.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TuitionRates