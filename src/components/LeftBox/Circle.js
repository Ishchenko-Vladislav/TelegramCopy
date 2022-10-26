import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import pen from "../../images/penIcon.svg";

const Circle = () => {
  const [show, setShow] = useState(true);
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const clickNoHere = (e) => {
    // console.log(e.target);
    e.stopPropagation();
  };
  const showHandler = () => {
    setShow(false);
  };
  useEffect(() => {
    document.addEventListener("click", showHandler);
    return () => {
      document.removeEventListener("click", showHandler);
    };
  }, []);

  return (
    <div
      onClick={clickNoHere}
      onAnimationStart={() => setTimeout(() => setShow(false), 200)}
      className={`circleBox ${themeMode && "dark"}`}
    >
      <div onClick={() => setShow(!show)} className={show ? "circle active" : "circle"}>
        {/* {!show ? (
          <img src={pen} />
        ) : (
          <div className="ShowClose">
            <span></span>
            <span></span>
          </div>
        )} */}
        <img src={pen} />
        <div className="ShowClose">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={show ? "circleGroup active" : "circleGroup"}>
        <div>New Channel</div>
        <div>New Group</div>
        <div>New Message</div>
      </div>
    </div>
  );
};

export { Circle };
