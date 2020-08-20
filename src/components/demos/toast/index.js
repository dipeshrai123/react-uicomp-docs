import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import { Toast, useToast } from "react-uicomp";

const ToastComponent = () => {
  const [mod, setMod] = useState(false);
  const { handler, toast } = useToast();

  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setMod((prev) => !prev);
          toast({ message: loremIpsum(), type: mod ? "success" : "error" });
        }}
      >
        Open Toast
      </button>

      <Toast {...handler} style={{ width: 300 }} />
    </div>
  );
};

export default ToastComponent;
