import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import { RippleButton, Toast, useToast } from "react-uicomp";

const ToastComponent = () => {
  const [mod, setMod] = useState(false);
  const { handler, toast } = useToast();

  return (
    <div>
      <RippleButton
        title="Open Toast"
        onClick={() => {
          setMod((prev) => !prev);
          toast({ message: loremIpsum(), type: mod ? "success" : "error" });
        }}
      />

      <Toast {...handler} style={{ width: 300 }} />
    </div>
  );
};

export default ToastComponent;
