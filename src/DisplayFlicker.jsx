import { useState } from "react";
import Accordion from "./components/Accordion";
import AIText from "./components/AIText";
import CopyPaste from "./components/CopyPaste";

function DisplayFlicker() {
  const [conversationStage, setConversationStage] = useState(0);

  const onActivateAllSettings = () => {
    setConversationStage(1);
  };

  const onDisableToastNotifications = () => {
    setConversationStage(2);
  };

  return (
    <Accordion label="Why is my display flickering?" value="item-2" defaultOpen>
      <div className="flex flex-col gap-6">
        {conversationStage >= 0 && (
          <>
            <AIText label="Display Flickering on HP Envy Laptop" />
            <div className="text-base">
              For HP Envy laptops, display flickering can often be attributed to
              several potential causes, including driver issues, hardware
              faults, or software conflicts. Unfortunately, without specific
              documentation referring to the HP Envy Laptop 14-fe0xxx, I can't
              provide a specific fix. However, here are a few general steps
              based on similar models and common issues that you can try to
              resolve the flickering issue:
            </div>
            <ol className="text-base flex flex-col gap-3">
              <li>
                <div className="font-bold">1. Update Graphics Drivers:</div>
                <div>
                  Ensure your graphics drivers are up to date. For example, you
                  can download the latest AMD or Intel graphics drivers
                  depending on your configuration from the HP Drivers page.
                </div>
              </li>
              <li>
                <div className="font-bold">2. BIOS Update:</div>
                <div>
                  Sometimes a BIOS update may resolve display issues. You can
                  check for BIOS updates from the HP Customer Support - Software
                  and Driver Downloads page.
                </div>
              </li>
              <li>
                <div className="font-bold">3. Display Settings:</div>
                <div>
                  Adjust your display settings. Go to "Settings" &gt; "System"
                  &gt; "Display" and adjust the refresh rate if possible.
                </div>
              </li>
              <li>
                <div className="font-bold">4. Hardware Connection:</div>
                <div>
                  Ensure that all hardware connections inside the laptop are
                  secure. If comfortable, you can open the back panel and check
                  the display connector to the motherboard.
                </div>
              </li>
              <li>
                <div className="font-bold">5. External Interference:</div>
                <div>
                  Ensure there are no sources of electromagnetic interference
                  near the laptop. Move it away from other electronic devices.
                </div>
              </li>
            </ol>
          </>
        )}
        {conversationStage === 0 && (
          <div className="w-full flex  justify-between">
            <CopyPaste />
          </div>
        )}
      </div>
    </Accordion>
  );
}

export default DisplayFlicker;
