import React, { Component } from "react";
import { images } from "../../portfolio";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return <img width="80%" src={images.displayPicture} alt="displayPicture" />;
  }
}

export default FeelingProud;
