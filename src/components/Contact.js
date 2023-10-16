import React from "react";
// import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact">
      {/* <Footer/> */}
      <div
        className="leftSide"
        style={{ backgroundImage: `url("https://media.istockphoto.com/id/1307336101/photo/selective-focus-of-glasses-mobile-phone-pen-and-notebook-written-with-contact-us-on-wooden.jpg?s=612x612&w=0&k=20&c=RR8GlKtJDyFh0wBoKCTYEqrLavPv6OtNL13QxRbhA5A=")` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
