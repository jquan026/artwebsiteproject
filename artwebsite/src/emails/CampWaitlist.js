import React from "react";
import "./EmailTemplate.css";

const CampWaitlist = () => {
  const email = "artwithlarisse@gmail.com";
  const subject = "Art Camp Waitlist";
  const body = `Dear Art With Larisse Team,

I want to join the waitlist for your summer art camp and would like to check availability. Below are the details of my request:

Student Information:
- Student Name(s): [Student Name(s)]
- Birth Date(s): [Birth Date(s)]
- Parents' Name(s): [Parent 1, Parent 2]
- Primary Phone Number: [Your Contact Number]
- Email: [Your Email]

Emergency Contact:
- Emergency Contact Name (Other than Parents): [Emergency Contact Name]
- Emergency Phone Number: [Emergency Contact Phone]

Camp Details:
- Preferred Camp Date: [Selected Camp Date]
- Studio Location: [Bonita, Santee, or La Mesa]

I understand that submitting this waitlist request does not guarantee a spot in the camp. Once availability is confirmed, I will receive a follow-up email with details on how to finalize my registration.

Thank you!
Best regards,  
[Your Name]
  `.trim();

  const emailHref = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={emailHref} className="email-link">
      Join Waitlist
    </a>
  );
};

export default CampWaitlist;
