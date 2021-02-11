import React, { useState } from "react";
import { Modal, RippleButton } from "react-uicomp";

const ModalPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <RippleButton title="Open Modal" onClick={() => setVisible(true)} />
      <Modal visible={visible} onOutsideClick={() => setVisible(false)}>
        Modal Content Goes Here...
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <RippleButton title="Close Modal" onClick={() => setVisible(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default ModalPage;
