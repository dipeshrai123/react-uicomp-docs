import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

import Modal from "../demos/modal";

const ModalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Modal</Title>
      <section>
        <Paragraph>
          UI component for Modal which provides easy use for creating extremely
          fluid animated modal.
        </Paragraph>
      </section>

      <section>
        <SecondaryTitle>Demo</SecondaryTitle>

        <Modal />
      </section>

      <section>
        <SecondaryTitle>Props</SecondaryTitle>

        <table className="table">
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>children</td>
              <td>ReactNode</td>
              <td>
                Can contain any element which is placed inside modal component
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>visible</td>
              <td>boolean</td>
              <td>Determines whether the modal is visible or not.</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onOutsideClick (optional)</td>
              <td>function</td>
              <td>
                Function that is called when clicked outside of modal if passed.
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>style (optional)</td>
              <td>style</td>
              <td>Used to override default styling</td>
              <td>-</td>
            </tr>
            <tr>
              <td>isAnimated (optional)</td>
              <td>boolean</td>
              <td>Should animate or not while modal open or close</td>
              <td>true</td>
            </tr>
            <tr>
              <td>animationType (optional)</td>
              <td>"fade" | "expand" | "elastic"</td>
              <td>Type of animation for modal</td>
              <td>"expand"</td>
            </tr>
            <tr>
              <td>disableScroll (optional)</td>
              <td>boolean</td>
              <td>Should the scroll be disabled or not when modal is open</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <SecondaryTitle>Example</SecondaryTitle>

        <Paragraph>
          <Code>
            {`
import React, { useState } from "react";
import { Modal } from "react-uicomp";

export default function() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>
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
          <button onClick={() => setVisible(false)}>
            Close Modal
          </button>
        </div>
      </Modal>
    </div>
  );
};
          `}
          </Code>
        </Paragraph>
      </section>
    </div>
  );
};

export default ModalPage;
