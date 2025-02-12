import { useState, useEffect } from "react";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import WatchMovie from "./WatchMovie";
//import SearchPromptList from "./SearchPromptList";
import AIPromptButton from "./components/AIPromptButton";
import SearchBar from "./components/SearchBar";
import aiLoadingIndicator from "/aiLoadingIndicator.svg";

import "./Search.css";

function Search() {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showResults, setShowResults] = useState(false); // Loading state

  const [partialSettingsId, setPartialSettingsId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [promptText, setPromptText] = useState("");

  const navigate = useNavigate();

  const scrollToTop = () => {
    console.log("scroll");
    window.scrollTo(0, 80);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executePrompt();
    }
  };

  const executePrompt = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newPromptText = searchText;
      setPromptText(newPromptText);
      setShowResults(true);
      setIsLoading(false);
    }, 5000);
  };

  //not used yet
  const onPromptButtonClick = (promptButtonText) => {
    setPromptText(promptButtonText);
    executePrompt();
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
          {!showResults && (
            <>
              <div className="date-subtitle mb-2">Hello, Adam</div>
              <div className="mb-12">
                <h1 className="title mb6 mt-0 !leading-none">
                  How can I help you today?
                </h1>
                {isLoading && (
                  <div className="prompt-while-loading-text mt-6 !leading-none">
                    {searchText}
                  </div>
                )}
              </div>
            </>
          )}

          {!isLoading && !showResults && (
            <SearchBar
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
              onPrimaryButtonClick={executePrompt}
              primaryButtonDisabled={searchText.length < 1}
            />
          )}

          {isLoading && (
            <img
              src={aiLoadingIndicator}
              className="animate-ping [animation-duration:2s]"
            />
          )}

          {!isLoading && !showResults && (
            <div className="gap-2 flex items-start w-full mb-14">
              <AIPromptButton label="how do I upgrade my PC?" />
              <AIPromptButton label="how do I speed up my games?" />
              <AIPromptButton label="how do I replace my PC?" />
            </div>
          )}
          {showResults && <WatchMovie />}
        </div>
      </div>

      {showResults && (
        <div className="footer-search">
          <div className="w-[740px]">
            <div className="gap-2 flex items-start w-full mb-6">
              <AIPromptButton label="how do I upgrade my PC?" />
              <AIPromptButton label="how do I speed up my games?" />
              <AIPromptButton label="how do I replace my PC?" />
            </div>
            <SearchBar
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
              onPrimaryButtonClick={() => handleNavigate("/audio")}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
