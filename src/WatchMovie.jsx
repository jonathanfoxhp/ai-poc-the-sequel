import { useState } from "react";
import checkMark from "/icons/checkmark.svg";

import "./FullAudioSettings.css";
import AccordionRoot from "./components/AccordionRoot";
import Accordion from "./components/Accordion";
import AIConversationPill from "./components/AIConversationPill";
import AIText from "./components/AIText";
import PrimaryButton from "./components/PrimaryButton";
import CopyPaste from "./components/CopyPaste";

function WatchMovie() {
  return (
    <AccordionRoot className="w-full">
      <Accordion label="I want to watch a movie" value="item-1">
        <div className="flex flex-col gap-4">
          <AIText label="Sure! To optimize your movie experience you can:" />
          <ol className="text-base">
            <li>1. Enable audio movie preset</li>
            <li>2. Turn on surround sound</li>
            <li>3. Enable immersive audio</li>
            <li>4. Set display brightness to 80%</li>
            <li>5. Switch display preset to movie mode</li>
            <li>6. Turn on display HDR</li>
          </ol>
          <br />
          <div className="font-medium text-base">
            Do you want me to activate all six settings?
          </div>
          <div className="text-base">
            Or you can list the ones you want activated (eg. 2-4, 6)
          </div>
          <div className="w-full flex  justify-between">
            <CopyPaste />
            <PrimaryButton label="Activate all settings" />
          </div>
          <div className="w-full flex justify-between">
            <CopyPaste />
            <AIConversationPill
              checked
              icon={<img src={checkMark} />}
              label="Movie settings applied"
            />
          </div>
          <AIText label="All done! Movie mode is now activated. Here are some related recommendations" />
          <div className="w-full flex justify-end">
            <AIConversationPill
              icon={<img src={checkMark} />}
              label="Disable toast notifications"
            />
          </div>
          <div className="w-full flex justify-end">
            <AIConversationPill
              icon={<img src={checkMark} />}
              label="Recommend movies"
            />
          </div>
        </div>
      </Accordion>
    </AccordionRoot>
  );
}

export default WatchMovie;
