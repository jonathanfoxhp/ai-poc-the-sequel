import { useState, useEffect } from "react";
import aiIcon from "/icons/ai.svg";
import aiToggleIcon from "/icons/aiToggle.svg";
import micOnIcon from "/icons/micOn.svg";
import PrimaryIconButton from "./components/PrimaryIconButton";
import PrimaryButton from "./components/PrimaryButton";
import AIConversationPill from "./components/AIConversationPill";
import AIPromptButton from "./components/AIPromptButton";
import AIText from "./components/AIText";
import Header from "./components/Header";
import PrimaryAlert from "./components/PrimaryAlert";
import { useNavigate } from "react-router-dom";
import PartialAudioSettings from "./PartialAudioSettings";
import WatchMovie from "./WatchMovie";
import SearchPromptList from "./SearchPromptList";
import SearchBar from "./components/SearchBar";

import "./Search.css";

function Search() {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const [isMovieMode, setIsMovieMode] = useState(false);
  const [partialSettingsId, setPartialSettingsId] = useState(null);
  const [searchText, setSearchText] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState(null);
  const [alertDestination, setAlertDestination] = useState(null);

  // const [isHeaderVisible, setIsHeaderVisible] = useState(true); // State to control header visibility

  const navigate = useNavigate();

  const scrollToTop = () => {
    console.log("scroll");
    window.scrollTo(0, 80);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      setTimeout(() => {
        const prompt = searchText;
        const newAlertTitle =
          "Your equalizer has been adjusted to optimize dialogue";
        setIsLoading(false);
        setAlertTitle(newAlertTitle);
        setAlertDestination(
          `/audio?settingsChanged=equalizer&prompt=${prompt}&changeSummary=${newAlertTitle}`
        );
        setPartialSettingsId("optimizeDialogue");
        setShowAlert(true);
      }, 2000);
    }
  };

  const onMovieModeChange = (e) => {
    setIsMovieMode(e);

    if (e) {
      const implicitPrompt = "Enable Movie mode";
      const newAlertTitle = "Your settings have been adjusted for Movie mode";
      setPartialSettingsId(null);
      setAlertTitle(newAlertTitle);
      setAlertDestination(
        `/audio?settingsChanged=output&prompt=${implicitPrompt}&changeSummary=${newAlertTitle}`
      );
      setShowAlert(true);
    }
  };

  const onClose = (e) => {
    console.log(e);
    setSearchText("");
    setPartialSettingsId(null);
    setShowAlert(false);
  };

  useEffect(() => {
    scrollToTop();
  }, [partialSettingsId]);

  return (
    <>
      <div className="background-flourish-container" />
      <Header page="search" />
      <div className="flex items-center justify-center content-wrapper">
        <div className="content mt-[4.5rem]">
          <div className="date-subtitle mb-2">Hello, Adam</div>
          <h1 className="title mb-12 mt-0 leading-none">
            How can I help you today?
          </h1>
          <SearchBar
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            onPrimaryButtonClick={() => handleNavigate("/audio")}
          />
          <div className="mb-14 w-full">
            <SearchPromptList />
          </div>
          <WatchMovie />
        </div>
      </div>
      <div className="footer-search">
        <div className="w-[740px]">
          <div className="mb-6 w-full">
            <SearchPromptList />
          </div>
          <SearchBar
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            onPrimaryButtonClick={() => handleNavigate("/audio")}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
