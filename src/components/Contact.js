/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card01 from "../images/copy2.png";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={Card01} />
      <h3>Mr Wilk</h3>
      <div className="info-group">
        <img src={props.img} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
