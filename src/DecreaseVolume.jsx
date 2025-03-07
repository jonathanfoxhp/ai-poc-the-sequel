import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Accordion from "./components/Accordion";
import AIText from "./components/AIText";
import CopyPaste from "./components/CopyPaste";
import AnimatedLines from "./components/AnimatedLines";
import PrimaryButton from "./components/PrimaryButton";

function DecreaseVolume({ onClick }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [conversationStage, setConversationStage] = useState(0);

  const enableNoiseCancellation = () => {
    console.log("enableNoiseCancellation");
    setConversationStage(1);
    //  scrollToBottom();
  };

  return (
    <Accordion
      label="Decrease volume to 60%"
      value="item-3"
      // className="-mt-[140px]"
      onClick={onClick}
    >
      <div className="flex flex-col gap-6 h-[200px]">
        {conversationStage >= 0 && (
          <>
            <AnimatedLines delay={1000}>
              <div className="text-base opacity-0">
                <AIText label="Decrease volume to 60%" />
              </div>
              <div className="text-base opacity-0">
                Your speaker volume has been adjusted from 100% to 60%. If
                you’re in a noisy environment, consider enabling noise
                cancellation to minimize distractions. Remember, these controls
                empower you to tailor your audio experience.
              </div>

              <div
                className={`w-full flex  justify-between  ${
                  conversationStage !== 0 ? "animate-fadeSlideOut" : ""
                }`}
              >
                <CopyPaste />
                <PrimaryButton
                  label="Enable noise cancellation"
                  onClick={enableNoiseCancellation}
                />
              </div>
            </AnimatedLines>

            {conversationStage === 1 && (
              <AnimatedLines>
                <div className="text-base opacity-0 !delay-500">
                  <AIText label="Noise cancellation has been enabled" />
                </div>
              </AnimatedLines>
            )}
          </>
        )}
      </div>
      <div ref={messagesEndRef} className="absolute bottom-0" />
    </Accordion>
  );
}

DecreaseVolume.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DecreaseVolume;
