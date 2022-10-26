import React from "react";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

export const SearchBox = () => {
  const [stroke, setStroke] = useState(false);
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  return (
    <div className={`searchBox ${themeMode && "dark"}`}>
      <div className="searchImageBox">
        <SearchIcon className={stroke ? "searchImage active" : "searchImage"} width={20} />
      </div>

      <input
        onBlur={() => setStroke(false)}
        onFocus={() => setStroke(true)}
        type="text"
        placeholder="Search"
        className={`leftBox__header-search`}
      ></input>
    </div>
  );
};

export default SearchBox;
