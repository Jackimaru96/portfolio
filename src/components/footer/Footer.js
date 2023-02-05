import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting, credits } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {credits.name} <br />
          Original template <a href={credits.link}>here</a>
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Modified by <a href={"http://theyoungmaker.com/"}>The Young Maker</a>{" "}
          for student's use
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
