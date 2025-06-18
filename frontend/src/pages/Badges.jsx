import React from "react";
import "./Badges.css";
import Trust from "../assets/Trustpilot.png";
import Auth from "../assets/authcert.png";
import bbb from "../assets/BBB.png";
import dmca from "../assets/dmca.png";

const Badges = () => {
  return (
    <>
      <div id="badge">
        <div id="hdngs">
          <h1 id="b1">BUY WITH CONFIDENCE</h1>
          <h1 id="b2">Badges We Proudly Present</h1>
        </div>
        <div id="badges">
          <div id="badges1">
            <img id="bdg" src={Trust} alt="Trustpilot Verified" />
            <img id="bdg1" src={Auth} alt="Authorize.net verified" />
          </div>
          <div id="badges1">
            <img id="bdg" src={dmca} alt="dmca verified" />
            <img id="bdg" src={bbb} alt="bbb accredited" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Badges;
