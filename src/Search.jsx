import { useState, useEffect, useRef } from "react";

import Header from "./components/Header";
import WatchMovie from "./WatchMovie";
import DisplayFlicker from "./DisplayFlicker";
import DecreaseVolume from "./DecreaseVolume";

//import SearchPromptList from "./SearchPromptList";
import AIPromptButton from "./components/AIPromptButton";
import SearchBar from "./components/SearchBar";
import aiLoadingIndicator from "/aiLoadingIndicator.svg";
import loader from "/icons/loader.mp4";

import React from "react";

import AccordionRoot from "./components/AccordionRoot";

function Search() {
  const messagesEndRef = useRef(null);
  // const displayFlickerStartRef = useRef(null);
  const decreaseVolumeStartRef = useRef(null);

  const footerPromptScrollContainerRef = useRef(null); // Reference for scrolling

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showWatchMovie, setShowWatchMovie] = useState(false); // Loading state
  const [showDisplayFlicker, setShowDisplayFlicker] = useState(false); // Loading state
  const [showDecreaseVolume, setShowDecreaseVolume] = useState(false); // Loading state

  const [primarySearchText, setPrimarySearchText] = useState("");
  const [primaryPromptText, setPrimaryPromptText] = useState("");

  const [footerSearchText, setFooterSearchText] = useState("");
  const [footerPromptText, setFooterPromptText] = useState("");
  const [accordionValue, setAccordionValue] = useState("item-1");

  const scrollToTop = () => {
    console.log("scroll");
    window.scrollTo(0, 80);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrimarySearchKeyDown = (e) => {
    if (e.key === "Enter") {
      executePrimarySearchPrompt();
    }
  };

  const primarySearchTimeoutRef = useRef(null);
  const footerSearchTimeoutRef = useRef(null);

  const executePrimarySearchPrompt = () => {
    const newPromptText = primarySearchText;
    setPrimaryPromptText(newPromptText);
    setFooterSearchText(newPromptText);
    setIsLoading(true);

    // Store the timeout ID
    primarySearchTimeoutRef.current = setTimeout(() => {
      setShowWatchMovie(true);
      setIsLoading(false);
    }, 3500);
  };

  const cancelPrimarySearchPrompt = () => {
    // Clear the timeout if it exists
    if (primarySearchTimeoutRef.current) {
      clearTimeout(primarySearchTimeoutRef.current);
      primarySearchTimeoutRef.current = null;
    }

    const newPromptText = "";
    setPrimaryPromptText(newPromptText);
    setPrimarySearchText("");

    setIsLoading(false);
    setShowWatchMovie(false);
  };

  const handleFooterSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      executeFooterSearchPrompt();
    }
  };

  const executeFooterSearchPrompt = () => {
    setIsLoading(true);
    // setTimeout(() => {
    //   const newPromptText = footerPromptText;
    //   setFooterPromptText(newPromptText);
    //   setShowDisplayFlicker(true);
    //   setIsLoading(false);
    //   setAccordionValue("item-2");
    //   // scrollToDisplayFlicker();
    //   window.scrollBy({ top: -600, behavior: "smooth" });
    // }, 2000);

    footerSearchTimeoutRef.current = setTimeout(() => {
      const newPromptText = footerPromptText;
      setFooterPromptText(newPromptText);
      setShowDisplayFlicker(true);
      setIsLoading(false);
      setAccordionValue("item-2");
      // scrollToDisplayFlicker();
      window.scrollBy({ top: -600, behavior: "smooth" });
    }, 2000);
  };

  const cancelFooterSearchPrompt = () => {
    // Clear the timeout if it exists
    if (footerSearchTimeoutRef.current) {
      clearTimeout(footerSearchTimeoutRef.current);
      footerSearchTimeoutRef.current = null;
    }

    const newPromptText = "";
    setFooterPromptText(newPromptText);
    setFooterSearchText("");

    setIsLoading(false);
    setShowDisplayFlicker(false);
  };

  //stage 3
  const executeDecreaseVolume = () => {
    setFooterDecreaseVolumeVisible(false);
    setIsLoading(true);
    // Scroll footer prompt container to the left

    if (footerPromptScrollContainerRef.current) {
      footerPromptScrollContainerRef.current.scrollTo({
        left: 225, // Adjust this value as needed
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      const newPromptText = "Decrease volume to 60%";
      setFooterPromptText(newPromptText);
      setPrimaryPromptText(newPromptText);
      setShowDecreaseVolume(true);
      setIsLoading(false);
      setAccordionValue("item-3");
      window.scrollBy({ top: -600, behavior: "smooth" });
    }, 2000);
    setTimeout(() => {
      // scrollToDecreaseVolume();
    }, 2500);
  };

  const handleFooterSearchPrimaryButtonClick = () => {
    // Clear the timeout if it exists
    if (!isLoading) {
      executeFooterSearchPrompt();
    } else if (!showWatchMovie) {
      cancelPrimarySearchPrompt();
    } else if (showWatchMovie) {
      cancelFooterSearchPrompt();
    }
  };

  const [primarySearchVisible, setPrimarySearchVisible] = useState(true);
  const [footerSearchContainerVisible, setFooterSearchContainerVisible] =
    useState(false);

  const [footerDecreaseVolumeVisible, setFooterDecreaseVolumeVisible] =
    useState(true);

  useEffect(() => {
    if (isLoading || showWatchMovie) {
      setTimeout(() => setPrimarySearchVisible(false), 300); // Matches animation duration
    } else {
      setPrimarySearchVisible(true);
    }
  }, [isLoading, showWatchMovie]);

  useEffect(() => {
    //here

    // if (isLoading) {
    //   // setFooterSearchText(primaryPromptText);
    // } else {
    //   setFooterSearchText("");
    // }

    //clear footer input logic?
    if (showWatchMovie && !isLoading) {
      setFooterSearchText("");
    }

    if (isLoading || showWatchMovie) {
      setTimeout(() => setFooterSearchContainerVisible(true), 100);
    } else {
      setFooterSearchContainerVisible(false);
    }
  }, [isLoading, showWatchMovie]);

  // console.log("-------------------");
  console.log("showDecreaseVolume: " + showDecreaseVolume);
  console.log("showDisplayFlicker: " + showDisplayFlicker);
  console.log("showWatchMovie: " + showWatchMovie);
  console.log("-------------------");

  return (
    <>
      <div className={`background-flourish-container ${isLoading ? "" : ""}`} />
      <Header page="search" />

      <div className="content-wrapper">
        <div className="content">
          <div
            className={
              !showWatchMovie
                ? "w-full  absolute top-[120px]"
                : "w-full  absolute top-[120px] animate-fadeSlideUpAndOut !delay-[400ms]"
            }
          >
            <div className="transition-all duration-500 animate-fadeSlideIn ">
              <div
                className={`date-subtitle mb-2 transition-all duration-500
                `}
              >
                {(() => {
                  const userName = "Yvette";
                  const hour = new Date().getHours();
                  if (hour < 4) return `Late night, ${userName}?`;
                  if (hour < 12) return `Good morning, ${userName}!`;
                  if (hour < 18) return `Good afternoon, ${userName}!`;
                  return `Good evening, ${userName}!`;
                })()}
              </div>

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
                  className={`opacity-0 prompt-while-loading-text absolute top-[90px] w-full !leading animate-fadeSlideInDelay2 !duration-75`}
                >
                  {primaryPromptText}
                </div>
              )}
            </div>
          </div>

          <SearchBar
            className={`!absolute top-[240px] w-full group ${
              !primarySearchVisible
                ? "animate-contractFadeOut"
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

          <div className="absolute w-full mb-14 top-[342px]">
            <div
              className={`prompt-scroll-container ${
                !primarySearchVisible
                  ? "animate-fadeSlideOutDelay4"
                  : "animate-fadeSlideIn"
              }`}
            >
              <AIPromptButton
                label="Decrease volume to 60%"
                className={` ${
                  !primarySearchVisible
                    ? "animate-fadeSlideOutDelay2"
                    : "animate-fadeSlideInDelay1 opacity-0"
                }`}
              />
              <AIPromptButton
                label="Blur camera background"
                className={`${
                  !primarySearchVisible
                    ? "animate-fadeSlideOutDelay1"
                    : "animate-fadeSlideInDelay2 opacity-0"
                }`}
              />
              <AIPromptButton
                label="Increase brightness to 95%"
                className={`  ${
                  !primarySearchVisible
                    ? "animate-fadeSlideOut"
                    : "animate-fadeSlideInDelay3 opacity-0"
                }`}
              />
              <AIPromptButton
                label="How do I upgrade my PC?"
                className={`  ${
                  !primarySearchVisible
                    ? "animate-fadeSlideOut"
                    : "animate-fadeSlideInDelay3 opacity-0"
                }`}
              />
              <AIPromptButton
                label="How do I speed up my games?"
                className={`  ${
                  !primarySearchVisible
                    ? "animate-fadeSlideOut"
                    : "animate-fadeSlideInDelay3 opacity-0"
                }`}
              />
            </div>
          </div>

          <video
            className={`video-loader absolute top-[260px]  !delay-[400ms] ${
              isLoading && !showWatchMovie
                ? "animate-fadein !duration-500"
                : "opacity-0"
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
            className="w-full flex flex-col gap-2"
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
              <>
                <DisplayFlicker
                  onClick={() =>
                    setAccordionValue(
                      accordionValue === "item-2" ? "" : "item-2"
                    )
                  }
                />
              </>
            )}

            {showDecreaseVolume && (
              <DecreaseVolume
                onClick={() =>
                  setAccordionValue(accordionValue === "item-3" ? "" : "item-3")
                }
              />
            )}
          </AccordionRoot>

          <video
            className={`video-loader mt-[20px] ${
              isLoading && showWatchMovie ? "opacity-100" : "opacity-0"
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
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div
        className={`opacity-0 footer-search ${
          footerSearchContainerVisible ? "animate-fadeSlideIn" : ""
        }`}
      >
        <div className="w-[740px]">
          <div
            ref={footerPromptScrollContainerRef}
            className="prompt-scroll-container  mb-6"
          >
            <AIPromptButton
              label="Decrease volume to 60%"
              className={`opacity-0 transition-all duration-300  ${
                footerSearchContainerVisible && footerDecreaseVolumeVisible
                  ? "animate-fadeSlideIn"
                  : ""
              } `}
              onClick={executeDecreaseVolume}
            />
            <AIPromptButton
              label="Blur camera background"
              className={`opacity-0 ${
                footerSearchContainerVisible ? "animate-fadeSlideInDelay1" : ""
              }`}
            />
            <AIPromptButton
              label="Increase brightness to 95%"
              className={`opacity-0 ${
                footerSearchContainerVisible ? "animate-fadeSlideInDelay2" : ""
              }`}
            />
            <AIPromptButton
              label="How do I upgrade my PC?"
              className={`opacity-0 ${
                footerSearchContainerVisible ? "animate-fadeSlideInDelay2" : ""
              }`}
            />

            <AIPromptButton
              label="How do I speed up my games?"
              className={`opacity-0 ${
                footerSearchContainerVisible ? "animate-fadeSlideInDelay2" : ""
              }`}
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
              onPrimaryButtonClick={handleFooterSearchPrimaryButtonClick}
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
