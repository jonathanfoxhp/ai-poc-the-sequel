import { useState, useEffect } from "react";
import Header from "./components/Header";
import WatchMovie from "./WatchMovie";
import DisplayFlicker from "./DisplayFlicker";
//import SearchPromptList from "./SearchPromptList";
import AIPromptButton from "./components/AIPromptButton";
import SearchBar from "./components/SearchBar";
import aiLoadingIndicator from "/aiLoadingIndicator.svg";
import loader from "/loader.mp4";

import React from "react";

import AccordionRoot from "./components/AccordionRoot";

function Search() {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showWatchMovie, setShowWatchMovie] = useState(false); // Loading state
  const [showDisplayFlicker, setShowDisplayFlicker] = useState(false); // Loading state

  const [primarySearchText, setPrimarySearchText] = useState("");
  const [primaryPromptText, setPrimaryPromptText] = useState("");

  const [footerSearchText, setFooterSearchText] = useState("");
  const [footerPromptText, setFooterPromptText] = useState("");
  const [accordionValue, setAccordionValue] = useState("item-1");

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
    //setPrimarySearchText("");

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
    }, 5000);
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
  const [footerSearchContainerVisible, setFooterSearchContainerVisible] =
    useState(false);
  const [footerSearchBarVisible, setFooterSearchBarVisible] = useState(false);
  const [footerButton1Visible, setFooterButton1Visible] = useState(false);
  const [footerButton2Visible, setFooterButton2Visible] = useState(false);
  const [footerButton3Visible, setFooterButton3Visible] = useState(false);

  useEffect(() => {
    if (isLoading || showWatchMovie) {
      setTimeout(() => setPrimarySearchVisible(false), 300); // Matches animation duration
    } else {
      setPrimarySearchVisible(true);
    }
  }, [isLoading, showWatchMovie]);

  useEffect(() => {
    if (isLoading || showWatchMovie) {
      setTimeout(() => setFooterSearchContainerVisible(true), 5000);
      // setTimeout(() => setFooterButton1Visible(true), 5800);
      // setTimeout(() => setFooterButton2Visible(true), 6200);
      // setTimeout(() => setFooterButton3Visible(true), 6600);
      // setTimeout(() => setFooterSearchBarVisible(true), 7000);
    } else {
      setFooterSearchContainerVisible(false);
      // setFooterButton1Visible(false);
      // setFooterButton2Visible(false);
      // setFooterButton3Visible(false);
      // setFooterSearchBarVisible(false);
    }
  }, [isLoading, showWatchMovie]);
  return (
    <>
      <div className={`background-flourish-container ${isLoading ? "" : ""}`} />
      <Header page="search" />
      <div className="content-wrapper">
        <div className="content mt-[4.5rem]">
          <div className={!showWatchMovie ? "w-fullr" : "w-full hidden"}>
            <div className="transition-all duration-500 animate-fadeSlideIn">
              <div
                className={`date-subtitle mb-2 transition-all duration-500
                `}
              >
                Hello, Adam
              </div>

              <div className="videobg" />
              <div
              // className={`transition-all duration-500 ${
              //   showWatchMovie || isLoading
              //     ? "-translate-y-4"
              //     : "translate-y-0"
              // }`}
              >
                <h1 className="title  mt-0 !leading-tight greeting">
                  How can I help you today?
                </h1>
              </div>

              {!showWatchMovie && isLoading && (
                <div
                  className={`opacity-0 prompt-while-loading-text absolute top-[90px] w-full !leading animate-fadeSlideInDelay4 !duration-75`}
                >
                  {primaryPromptText}
                </div>
              )}
            </div>
          </div>

          {/* <div
            className={` absolute top-[212px] w-full mt-6 group ${
              !primarySearchVisible
                ? "animate-searchSlideOut"
                : "animate-fadeSlideIn"
            }`}
          >
            <span
              className={`${!primarySearchVisible ? "animate-fadeOut" : ""}`}
            > */}
          <SearchBar
            className={` absolute w-full mt-6 group ${
              !primarySearchVisible
                ? "animate-searchSlideOut"
                : "animate-fadeSlideIn"
            }`}
            id="pb4"
            placeholder="Ask me anything about optimizing device settings..."
            value={primarySearchText}
            onChange={(e) => setPrimarySearchText(e.target.value)}
            onKeyDown={handlePrimarySearchKeyDown}
            onPrimaryButtonClick={executePrimarySearchPrompt}
            primaryButtonDisabled={primarySearchText.length < 1}
          />
          {/* </span>
          </div> */}

          {/* //problematic */}
          <div
            className={`gap-3 flex items-start justify-center w-full mb-14  ${
              !primarySearchVisible
                ? "animate-fadeSlideOutDelay4"
                : "animate-fadeSlideIn"
            }`}
          >
            <AIPromptButton
              label="how do I upgrade my PC?"
              className={`${
                !primarySearchVisible
                  ? "animate-fadeSlideOutDelay2 opacity-100"
                  : "animate-fadeSlideInDelay1 opacity-0"
              }`}
            />
            <AIPromptButton
              label="how do I speed up my games?"
              className={`${
                !primarySearchVisible
                  ? "animate-fadeSlideOutDelay1 opacity-100"
                  : "animate-fadeSlideInDelay2 opacity-0"
              }`}
            />
            <AIPromptButton
              label="how do I replace my PC?"
              className={` ${
                !primarySearchVisible
                  ? "animate-fadeSlideOut opacity-100"
                  : "animate-fadeSlideInDelay3 opacity-0"
              }`}
            />
          </div>
          {/* {isLoading && ( */}
          <video
            className={`video-loader absolute top-[240px]  !delay-[1000ms] ${
              isLoading ? "animate-fadein opacity-100" : "opacity-0"
            }`}
            width="200px"
            autoPlay
            loop
            muted
            style={{
              maskImage:
                "radial-gradient(circle at center, black 35%, transparent 60%)",
            }}
          >
            <source src={loader} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <AccordionRoot
            className="w-full flex flex-col gap-6"
            value={accordionValue}
          >
            {showWatchMovie && (
              <WatchMovie
                onClick={() =>
                  setAccordionValue(accordionValue === "item-1" ? "" : "item-1")
                }
              />
            )}
            {showDisplayFlicker && (
              <DisplayFlicker
                onClick={() =>
                  setAccordionValue(accordionValue === "item-2" ? "" : "item-2")
                }
              />
            )}
          </AccordionRoot>
        </div>
      </div>
      <div
        className={`opacity-0 footer-search ${
          footerSearchContainerVisible ? "animate-fadeSlideIn" : ""
        }`}
      >
        <div className="w-[740px]">
          <div className="gap-3 flex items-start justify-center w-full mb-6">
            <AIPromptButton
              label="how do I upgrade my PC?"
              className={`opacity-0 ${
                footerSearchContainerVisible ? "animate-fadeSlideIn" : ""
              }`}
            />
            <AIPromptButton
              label="how do I speed up my games?"
              className={`opacity-0 ${
                footerSearchContainerVisible ? "animate-fadeSlideInDelay1" : ""
              }`}
            />
            <AIPromptButton
              label="how do I replace my PC?"
              className={`opacity-0 ${
                footerSearchContainerVisible ? "animate-fadeSlideInDelay2" : ""
              }`}
              x
            />
          </div>
          <div
            className={`w-full opacity-0 ${
              footerSearchContainerVisible ? "animate-fadeSlideInDelay3" : ""
            }`}
          >
            <SearchBar
              placeholder="Continue conversation or start a new request..."
              value={footerSearchText}
              onChange={(e) => setFooterSearchText(e.target.value)}
              onKeyDown={handleFooterSearchKeyDown}
              onPrimaryButtonClick={executeFooterSearchPrompt}
              primaryButtonDisabled={footerSearchText.length < 1}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
