import React from "react";
import "./Profession.css";
export default function ProfessionComponent(props) {
  return (
    <div className="professionComponent_head">
      <h2 className="header_title">Profession</h2>
      <div className="profession_title">
        <p>Designer</p>
      </div>
      <div className="email_user">
        <i className="fas fa-envelope"></i>
        <a href="/">{props.profile?.email}</a>
      </div>
      <div className="email_user">
        <i className="fas fa-phone"></i>
        <a href="/">{props.profile?.telephone}</a>
      </div>
      <div className="avis_title">
        <i className="fas fa-thumbs-up"></i>
        <a href="/">Je recommande (270)</a>
      </div>
    </div>
  );
}
