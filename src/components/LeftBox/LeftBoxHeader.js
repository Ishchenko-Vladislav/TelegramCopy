import React from "react";

import HeaderBurger from "./HeaderBurger";
import SearchBox from "./SearchBox";

export const LeftBoxHeader = () => {
  return (
    <div className="leftBox__header">
      <HeaderBurger />
      <SearchBox />
    </div>
  );
};

export default LeftBoxHeader;
