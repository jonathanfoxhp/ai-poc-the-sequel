import { useState } from "react";
import PropTypes from "prop-types";
import Accordion from "./components/Accordion";
import AIText from "./components/AIText";
import CopyPaste from "./components/CopyPaste";
import AnimatedLines from "./components/AnimatedLines";

function DecreaseVolume({ onClick }) {
  const [conversationStage, setConversationStage] = useState(0);

  const onActivateAllSettings = () => {
    setConversationStage(1);
  };

  const onDisableToastNotifications = () => {
    setConversationStage(2);
  };

  return (
    <Accordion
      label="Decrease volume to 60%"
      value="item-3"
      // className="-mt-[140px]"
      onClick={onClick}
    >
      <div className="flex flex-col gap-6">
        {conversationStage >= 0 && (
          <AnimatedLines>
            <div className="text-base opacity-0">
              <AIText label="lorem ipsum dolorem" />
            </div>
            <div className="text-base opacity-0">
              For HP Envy laptops, display flickering can often be attributed to
              several potential causes, including driver issues, hardware
              faults, or software conflicts. Unfortunately, without specific
              documentation referring to the HP Envy Laptop 14-fe0xxx, I
              can&apos;t provide a specific fix. However, here are a few general
              steps based on similar models and common issues that you can try
              to resolve the flickering issue:
            </div>
            <ol className="text-base flex flex-col gap-3">
              <li className="opacity-0">
                <div className="font-bold">1. Update Graphics Drivers:</div>
                <div>
                  Ensure your graphics drivers are up to date. For example, you
                  can download the latest AMD or Intel graphics drivers
                  depending on your configuration from the HP Drivers page.
                </div>
              </li>
              <li className="opacity-0">
                <div className="font-bold">2. BIOS Update:</div>
                <div>
                  Sometimes a BIOS update may resolve display issues. You can
                  check for BIOS updates from the HP Customer Support - Software
                  and Driver Downloads page.
                </div>
              </li>
              <li className="opacity-0">
                <div className="font-bold">3. Display Settings:</div>
                <div>
                  Adjust your display settings. Go to &ldquo;Settings&rdquo;
                  &gt; &ldquo;System&rdquo; &gt; &ldquo;Display&rdquo; and
                  adjust the refresh rate if possible.
                </div>
              </li>
              <li className="opacity-0">
                <div className="font-bold">4. Hardware Connection:</div>
                <div>
                  Ensure that all hardware connections inside the laptop are
                  secure. If comfortable, you can open the back panel and check
                  the display connector to the motherboard.
                </div>
              </li>
              <li className="opacity-0">
                <div className="font-bold">5. External Interference:</div>
                <div>
                  Ensure there are no sources of electromagnetic interference
                  near the laptop. Move it away from other electronic devices.
                </div>
              </li>
            </ol>
          </AnimatedLines>
        )}
        {conversationStage === 0 && (
          <div className="w-full flex justify-between">
            <CopyPaste />
          </div>
        )}
      </div>
    </Accordion>
  );
}

DecreaseVolume.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DecreaseVolume;
