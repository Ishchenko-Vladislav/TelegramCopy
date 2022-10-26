import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as BannerIcon } from "../../images/banner.svg";
import { ReactComponent as ArchiveIcon } from "../../images/archive.svg";
import { ReactComponent as ContactIcon } from "../../images/contact.svg";
import { ReactComponent as SettingIcon } from "../../images/setting.svg";
import { ReactComponent as NightModeIcon } from "../../images/nightMode.svg";
import { ReactComponent as InfoIcon } from "../../images/info.svg";
import { ReactComponent as PlusIcon } from "../../images/plus.svg";
import { ReactComponent as ReportIcon } from "../../images/report.svg";
import { ReactComponent as KIcon } from "../../images/k.svg";
import { ReactComponent as WIcon } from "../../images/w.svg";
// import { useThemeMode } from "../hooks/ThemeMode";

export const HeaderBurger = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  const ClickOnBlur = (e) => {
    console.log(e.className);
    if ([e.className].has("header-burger__set")) {
      setShowPopUp(false);
    }
    // e.stopPropagation()
  };
  useEffect(() => {
    document.addEventListener("click", ClickOnBlur);
    return () => {
      document.removeEventListener("click", ClickOnBlur);
    };
  }, []);

  return (
    <div onClick={(e) => ClickOnBlur(e.target)} className="header-burger">
      <div onClick={() => setShowPopUp(!showPopUp)} className={`header-burger__set ${themeMode && "dark"}`}>
        <div className={`leftBox__header-burger ${themeMode && "dark"}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={showPopUp ? `pop-up__burger active ${themeMode && "dark"}` : `pop-up__burger ${themeMode && "dark"}`}>
        <button className="pop-up__burger-item">
          {/* <img width={25} height={25} src={bannerIcon} alt="bannerIcon" /> */}
          <BannerIcon width={25} />
          <div>Saved Message</div>
        </button>
        <button className="pop-up__burger-item">
          {/* <img width={25} src={archiveIcon} alt="archiveIcon" /> <div>Archived Chats</div> */}
          <ArchiveIcon width={25} />
          <div>Archived Chats</div>
        </button>
        <button className="pop-up__burger-item">
          {/* <img width={25} src={contactIcon} alt="contactIcon" /> */}
          <ContactIcon width={25} />
          <div>Contacts</div>
        </button>
        <button className="pop-up__burger-item">
          {/* <img width={25} src={settingIcon} alt="settingIcon" /> */}
          <SettingIcon width={25} />
          <div>Settings</div>
        </button>
        <button onClick={(e) => setThemeMode(!themeMode)} className="pop-up__burger-item nightMode">
          <div style={{ pointerEvents: "none" }} className="nightMode-item">
            {/* <img width={25} src={nightModeIcon} alt="nightModeIcon" /> */}
            <NightModeIcon width={25} />
            <div>Night Mode</div>
          </div>
          <label style={{ pointerEvents: "none" }} onClick={(e) => {}} class="switch">
            <input checked={themeMode} type="checkbox" />
            <span class="slider round"></span>
          </label>
        </button>
        <button className="pop-up__burger-item">
          {/* <img width={25} src={infoIcon} alt="infoIcon" /> */}
          <InfoIcon width={25} />
          <div>Telegram Features</div>
        </button>
        <button className="pop-up__burger-item">
          {/* <img width={25} src={reportIcon} alt="reportIcon" /> */}
          <ReportIcon width={25} />
          <div>Report Bug</div>
        </button>
        <button className="pop-up__burger-item">
          {/* <img width={25} src={kIcon} alt="kIcon" /> */}
          <KIcon width={25} />
          <div>Switch to K Version</div>
        </button>
        <button className="pop-up__burger-item">
          {/* <img width={25} src={wIcon} alt="wIcon" /> */}
          <WIcon width={25} />
          <div>Switch to Old Version</div>
        </button>
        <button className="pop-up__burger-item">
          {/* <img width={25} src={plusIcon} alt="plusIcon" /> */}
          <PlusIcon width={25} />
          <div>Install App</div>
        </button>
      </div>
    </div>
  );
};

export default HeaderBurger;
