import React from "react";

import BackgroundIcon from "../../images/backgroundImage.jpg";

import { useState } from "react";
import { RightBoxHeader } from "./RightBoxHeader";

export const RightBox = () => {
  return (
    <div className="rightBox">
      <div className="rightBox-item">
        <img alt="background" src={BackgroundIcon} />
        <RightBoxHeader />
      </div>
    </div>
  );
};

export default RightBox;
