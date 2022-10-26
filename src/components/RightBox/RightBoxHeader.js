import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import { ReactComponent as SelectIcon } from "../../images/select.svg";
import { ReactComponent as CartIcon } from "../../images/cart.svg";

import { ReactComponent as TelegramIcon } from "../../images/telegram.svg";
import { ReactComponent as PhoneIcon } from "../../images/phone.svg";

const RightBoxHeader = () => {
  const [showPopUpSettings, setShowPopUpSettings] = useState(false);
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  const ClickOnBlur = () => {
    setShowPopUpSettings(false);
  };
  useEffect(() => {
    document.addEventListener("click", ClickOnBlur);
    return () => {
      document.removeEventListener("click", ClickOnBlur);
    };
  }, []);
  return (
    <div className={`rightBox__header ${themeMode && "dark"}`}>
      <div className="rightBox__start">
        <div>
          <TelegramIcon alt="TelegramIcon" fill="red" />
        </div>
        <div>
          <div>
            <strong>Telegram</strong>
          </div>
          <div>service notifications</div>
        </div>
      </div>
      <div className="rightBox__end">
        <div className="rightBox__end-item">
          <SearchIcon width={25} alt="SearchIcon" />
        </div>
        <div className="rightBox__end-item">
          <PhoneIcon width={25} alt="PhoneIcon" />
        </div>
        <div className={`burger-settingsBox ${themeMode && "dark"}`}>
          <div
            onClick={(e) => {
              setShowPopUpSettings(!showPopUpSettings);
              e.stopPropagation();
            }}
            className="burger-settings"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className={showPopUpSettings ? "pop-up__settings active" : "pop-up__settings"}
          >
            <button className="pop-up__settings-item">
              <SelectIcon width={25} />
              <div>Select messages</div>
            </button>
            <button className="pop-up__settings-item">
              <CartIcon width={25} />
              <div>Delete Chat</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RightBoxHeader };
