import React, { Component } from "react";
import { Fade } from "react-reveal";

import { skills } from "../../portfolio";
import CloudInfraImg from "./CloudInfraImg";
import DataScienceImg from "./DataScienceImg";
import DesignImg from "./DesignImg";
import FullStackImg from "./FullStackImg";
import "./Skills.css";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

function GetSkillPng(props) {
  return (
    <img
      width="80%"
      height="80%"
      src={require(`../../assests/images/${props.fileName}.png`)}
      alt={`skill-${props.fileName}`}
    />
  );
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {skill.imgType === "png" ? (
                    <GetSkillPng fileName={skill.fileName} alt={skill.title} />
                  ) : (
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  )}
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence.title}
                          <br />
                          <ul>
                            <li>{skillSentence.description}</li>
                          </ul>
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
