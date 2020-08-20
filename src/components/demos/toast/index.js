import React from "react";
import { loremIpsum } from "lorem-ipsum";
import { Toast, useToast } from "react-uicomp";

const ToastComponent = () => {
  const { handler, toast } = useToast();

  return (
    <div>
      <button
        className="button"
        onClick={() => toast({ message: loremIpsum(), type: "success" })}
      >
        Open Toast
      </button>

      <Toast {...handler} style={{ width: 300 }} />
    </div>
  );
};

export default ToastComponent;
