import { useState, useEffect } from "react";
import aiIcon from "/icons/ai.svg";
import aiToggleIcon from "/icons/aiToggle.svg";

import CardFlourish1 from "/cardFlourish1.png";
import CardFlourish2 from "/cardFlourish2.png";
import CardFlourish3 from "/cardFlourish3.png";
import AISwitch from "./components/AISwitch";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import PrimaryAlert from "./components/PrimaryAlert";
import { useNavigate } from "react-router-dom";
import PartialAudioSettings from "./PartialAudioSettings";

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

  const today = new Date();
  const formattedToday = Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(today);

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
      <div className="content">
        <div>
          <div
            className={`mt-[4.5rem] duration-1000 transition-all ease-in-out sticky z-[1000] top-0  ${
              showAlert ? "opacity-100" : "opacity-0 invisible"
            }`}
          >
            <PrimaryAlert
              title={alertTitle}
              buttonLabel="Go to Adjustments"
              onButtonClick={() => navigate(alertDestination)}
            />
          </div>
          <PartialAudioSettings
            id={partialSettingsId}
            prompt={searchText}
            onClose={onClose}
          />
          {!partialSettingsId && !showAlert && (
            <>
              <div className="date-subtitle mb-2">{formattedToday}</div>
              <h1 className="title mb-12 mt-0 leading-none">
                How can I help you today?
              </h1>
            </>
          )}

          <div className="relative">
            <input
              type="text"
              className="jumbo-input mb-4"
              placeholder="How can I help you today?"
              onKeyDown={handleKeyDown}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {isLoading && (
              <span className="absolute right-10 top-7 scale-[3] animate-pulse">
                <img src={aiToggleIcon} />
              </span>
            )}
          </div>
          <div className="gap-2 flex items-center mb-14">
            <button class="prompt-suggestion">how do I upgrade my PC?</button>
            <button class="prompt-suggestion">
              how do I speed up my games?
            </button>
            <button class="prompt-suggestion">
              how do I get longer battery life?
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <div className="grey-glass-card card">
                <h4>Movie mode</h4>
                <div className="card-controls">
                  <p>Optimize speakers for your next movie</p>
                  <AISwitch
                    disabled={isLoading}
                    checked={isMovieMode}
                    onCheckedChange={onMovieModeChange}
                  />
                </div>
              </div>

              <div className="white-glass-card card !pb-8">
                <h4>Optimize for Figma</h4>
                <div className="card-controls">
                  <p>AI in Figma automates design and boosts efficiency.</p>
                  <AISwitch />
                </div>
              </div>

              <div className="device-card device-card--blue">
                <img src={CardFlourish1} class="device-card-flourish" />
                <h4>My Printer</h4>
                <div className="device-card-controls">
                  <p>
                    AI in printers automates tasks, improves quality, and
                    enhances efficiency.
                  </p>
                  <button className="ghost-button">Print documents</button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="white-glass-card card h-full !w-full">
                <h4>Calendar</h4>
                <div className="mt-5">
                  <Calendar />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="device-card device-card--blue">
                  <img src={CardFlourish2} class="device-card-flourish" />

                  <h4>My Laptop</h4>
                  <div className="device-card-controls">
                    <p>
                      AI in laptop cameras enhances image quality, lighting, and
                      focus.
                    </p>
                    <button className="ghost-button">Camera settings</button>
                  </div>
                </div>
                <div className="device-card device-card--purple">
                  <img src={CardFlourish3} class="device-card-flourish" />
                  <h4>My Display</h4>
                  <div className="device-card-controls">
                    <p>
                      AI in color settings adjusts brightness, contrast, and
                      tone automatically.
                    </p>
                    <button className="ghost-button">Color settings</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-end mt-6">
            <button className="ghost-button">Update your BIOS</button>
            <button className="icon-button--sparkle">
              <img src={aiIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
