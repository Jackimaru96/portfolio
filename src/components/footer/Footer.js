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
          Modified by{" "}
          <a href={"http://theyoungmaker.com/"} target="_blank">
            The Young Maker
          </a>{" "}
          for student's use <br />
          Original template{" "}
          <a href={credits.link} target={"_blank"}>
            here
          </a>
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
