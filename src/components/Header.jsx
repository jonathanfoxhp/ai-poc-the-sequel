import HeaderButton from "./HeaderButton";
import { useState, useEffect } from "react";
import SparkleIconButton from "./SparkleIconButton";
import BasicIconButton from "./BasicIconButton";
import Avatar from "./Avatar";
import backArrowIcon from "/icons/backArrow.svg";
import aiIcon from "/icons/ai.svg";
import blackAIIcon from "/icons/blackAI.svg";

import bellIcon from "/icons/bell.svg";
import whiteDevicesIcon from "/icons/whiteDevices.svg";

import devicesIcon from "/icons/devices.svg";
import plusIcon from "/icons/plus.svg";
import shopIcon from "/icons/shop.svg";
import { useNavigate } from "react-router-dom";

function Header({ hasBack, page = "search" }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // State to control header visibility

  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // if (!isHeaderVisible) {
  //   return null;
  // }

  return (
    <header
      className={
        !isHeaderVisible && "opacity-0 z-0 transition-all duration-300"
      }
    >
      {hasBack ? (
        <div>
          <HeaderButton
            label="Dashboard"
            icon={<img src={backArrowIcon} />}
            onClick={() => handleNavigate("/")}
          />
        </div>
      ) : (
        <div className="w-[152px]" />
      )}
      <div>
        <div className="toggle-group">
          {page === "settings" ? (
            <SparkleIconButton icon={<img src={whiteDevicesIcon} />} />
          ) : (
            <BasicIconButton icon={<img src={devicesIcon} />} />
          )}
          {page === "search" ? (
            <SparkleIconButton
              onClick={() => handleNavigate("/")}
              icon={<img src={aiIcon} />}
            />
          ) : (
            <BasicIconButton
              onClick={() => handleNavigate("/")}
              icon={<img src={blackAIIcon} />}
            />
          )}
        </div>
      </div>
      <div className="header__right">
        <BasicIconButton icon={<img src={plusIcon} />} />
        <BasicIconButton icon={<img src={bellIcon} />} />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
