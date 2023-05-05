import React, { useState } from "react";
import avatar from "../assets/avatar-michelle.jpg";
import arrow from "../assets/icon-share.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";

const Profile = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="share-section">
      <div className="profile-section">
        <img src={avatar} alt="" className="avatar" />
        <div className="flex-row">
          <h1>Michelle Appleton</h1>
          <span>28 Jun 2020</span>
        </div>
        <button
          className="btn-profile"
          onClick={() => setIsClicked(!isClicked)}
        >
          <img src={arrow} alt="" className="arrow" />
        </button>
      </div>
      <div className={isClicked ? "links-section" : "links-section hidden"}>
        <span className="share">Share</span>
        <div className="flex-links">
          <img src={facebook} alt="" className="social-link" />
          <img src={twitter} alt="" className="social-link" />
          <img src={pinterest} alt="" className="social-link" />
        </div>
        <button className="btn-links" onClick={() => setIsClicked(!isClicked)}>
          <img src={arrow} alt="" className="arrow" />
        </button>
      </div>
      <div className={isClicked ? "arrow-down" : "hidden"}></div>
    </section>
  );
};

export default Profile;
