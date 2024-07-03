import React, { useState } from "react";
import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

// f069c476-493f-afb9-32f0738b9bc5
const Contact = () => {
  const [result, setresult]=useState("")
  const onSubmit = async (event) => {
    event.preventDefault();
    setresult("sending...")
    const formData = new FormData(event.target);

    formData.append("access_key", "f069c476-e449-493f-afb9-32f0738b9bc5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setresult(res.message)
      event.target.reset();

    }
  };

  return (
    <div className="contact">
      <div className="contact-col1">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out though contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" /> shenzantech@gmail.com</li>
          <li><img src={phone_icon} alt="" />+923495221591</li>
          <li><img src={location_icon} alt="" />Mankkera, Bhakkar punjab</li>
        </ul>
      </div>
      <div className="contact-col1">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name:" required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Your Phone Number:"/>
            <label>write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message:"></textarea>
            <button type="submit" className="btn dark-btn">submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
