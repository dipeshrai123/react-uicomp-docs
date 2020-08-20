import React, { useState } from "react";
import { Modal } from "react-uicomp";

const ModalPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button className="button" onClick={() => setVisible(true)}>
        Open Modal
      </button>
      <Modal visible={visible} onOutsideClick={() => setVisible(false)}>
        Modal Content Goes Here...
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button className="button" onClick={() => setVisible(false)}>
            Close Modal
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPage;
