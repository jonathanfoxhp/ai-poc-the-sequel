import { useState, useEffect } from "react";
import Header from "./components/Header";
import WatchMovie from "./WatchMovie";
import DisplayFlicker from "./DisplayFlicker";
//import SearchPromptList from "./SearchPromptList";
import AIPromptButton from "./components/AIPromptButton";
import SearchBar from "./components/SearchBar";
import aiLoadingIndicator from "/aiLoadingIndicator.svg";
import AccordionRoot from "./components/AccordionRoot";

function Search() {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showWatchMovie, setShowWatchMovie] = useState(false); // Loading state
  const [showDisplayFlicker, setShowDisplayFlicker] = useState(false); // Loading state

  const [primarySearchText, setPrimarySearchText] = useState("");
  const [primaryPromptText, setPrimaryPromptText] = useState("");

  const [footerSearchText, setFooterSearchText] = useState("");
  const [footerPromptText, setFooterPromptText] = useState("");

  const scrollToTop = () => {
    console.log("scroll");
    window.scrollTo(0, 80);
  };

  const handlePrimarySearchKeyDown = (e) => {
    if (e.key === "Enter") {
      executePrimarySearchPrompt();
    }
  };

  const executePrimarySearchPrompt = () => {
    const newPromptText = primarySearchText;
    setPrimaryPromptText(newPromptText);
    setIsLoading(true);
    setTimeout(() => {
      setShowWatchMovie(true);
      setIsLoading(false);
    }, 5000);
  };

  const handleFooterSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      executeFooterSearchPrompt();
    }
  };

  const executeFooterSearchPrompt = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newPromptText = footerPromptText;
      setFooterPromptText(newPromptText);
      setShowDisplayFlicker(true);
      setIsLoading(false);
    }, 300);
  };

  //not used yet
  // const onPromptButtonClick = (promptButtonText) => {
  //   setPrimaryPromptText(promptButtonText);
  //   executePrimarySearchPrompt();
  // };

  // useEffect(() => {
  //   scrollToTop();
  // }, [partialSettingsId]);

  const [primarySearchVisible, setPrimarySearchVisible] = useState(true);

  useEffect(() => {
    if (isLoading || showWatchMovie) {
      setTimeout(() => setPrimarySearchVisible(false), 300); // Matches animation duration
    } else {
      setPrimarySearchVisible(true);
    }
  }, [isLoading, showWatchMovie]);

  return (
    <>
      <div
        className={`background-flourish-container ${
          isLoading ? "flourish-spin" : ""
        }`}
      />

      <Header page="search" />

      <div className="flex items-center justify-center content-wrapper">
        <div className="content mt-[4.5rem]">
          <div
            className={
              !showWatchMovie
                ? "w-full search-bar-enter"
                : "w-full search-bar-exit"
            }
          >
            <div className="date-subtitle mb-2">Hello, Adam</div>
            <div className="mb-12">
              <h1 className="title mb6 mt-0 !leading-none">
                How can I help you today?
              </h1>
              {!showWatchMovie && isLoading && (
                <div className="prompt-while-loading-text mt-6 !leading-none">
                  {primaryPromptText}
                </div>
              )}
            </div>
          </div>

          {primarySearchVisible && (
            <div
              className={
                !isLoading && !showWatchMovie
                  ? "w-full search-bar-enter"
                  : "w-full search-bar-exit"
              }
            >
              <SearchBar
                placeholder="Ask me anything about optimizing device settings..."
                value={primarySearchText}
                onChange={(e) => setPrimarySearchText(e.target.value)}
                onKeyDown={handlePrimarySearchKeyDown}
                onPrimaryButtonClick={executePrimarySearchPrompt}
                primaryButtonDisabled={primarySearchText.length < 1}
              />
            </div>
          )}

          {isLoading && (
            <img
              src={aiLoadingIndicator}
              className="animate-ping [animation-duration:2s]"
            />
          )}

          {!isLoading && !showWatchMovie && (
            <div className="gap-2 flex items-start w-full mb-14">
              <AIPromptButton label="how do I upgrade my PC?" />
              <AIPromptButton label="how do I speed up my games?" />
              <AIPromptButton label="how do I replace my PC?" />
            </div>
          )}
          <AccordionRoot
            className="w-full flex flex-col gap-6"
            defaultValue="item-1"
          >
            {showWatchMovie && <WatchMovie />}
            {showDisplayFlicker && <DisplayFlicker />}
          </AccordionRoot>
        </div>
      </div>

      <div
        className={`footer-search transition-opacity duration-300 ${
          showWatchMovie || isLoading
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[740px]">
          <div className="gap-2 flex items-start w-full mb-6">
            <AIPromptButton label="how do I upgrade my PC?" />
            <AIPromptButton label="how do I speed up my games?" />
            <AIPromptButton label="how do I replace my PC?" />
          </div>
          <SearchBar
            placeholder="Continue conversation or start a new request..."
            value={footerSearchText}
            onChange={(e) => setFooterSearchText(e.target.value)}
            onKeyDown={handleFooterSearchKeyDown}
            onPrimaryButtonClick={executeFooterSearchPrompt}
            primaryButtonDisabled={footerSearchText.length < 1}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
