import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";
import ToastComponent from "../demos/toast";

const ToastPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Toast</Title>
      <section>
        <Paragraph>
          UI component for Toast Notification allowing you to simply add snack
          for you notification.
        </Paragraph>
      </section>

      <section>
        <SecondaryTitle>Demo</SecondaryTitle>

        <ToastComponent />
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
              <td>timeout (optional)</td>
              <td>number</td>
              <td>Number of milliseconds for a notification to dismiss.</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>style (optional)</td>
              <td>style</td>
              <td>Style object for styling notification card.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>containerStyle (optional)</td>
              <td>style</td>
              <td>Style object for styling notification container.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>successColor (optional)</td>
              <td>string</td>
              <td>Background color for success toast.</td>
              <td>"#68A362"</td>
            </tr>
            <tr>
              <td>errorColor (optional)</td>
              <td>string</td>
              <td>Background color for error toast.</td>
              <td>"#FFB17A"</td>
            </tr>
            <tr>
              <td>closeIconColor (optional)</td>
              <td>string</td>
              <td>Color for close icon.</td>
              <td>"#FFFFFF"</td>
            </tr>
            <tr>
              <td>closeIconVisible (optional)</td>
              <td>boolean</td>
              <td>Should close icon be visible or not.</td>
              <td>true</td>
            </tr>
            <tr>
              <td>dismissOnClick (optional)</td>
              <td>boolean</td>
              <td>Dismiss the message on click on card itself.</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <SecondaryTitle>useToast()</SecondaryTitle>

        <Paragraph>
          React UI Comp provides <span className="highlight">useToast()</span>{" "}
          hook to handle toast notification.
          <span className="highlight">useToast()</span> hook returns object with
          following keys:
        </Paragraph>

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
              <td>handler</td>
              <td>object</td>
              <td>It should be spread to Component.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>toast</td>
              <td>function</td>
              <td>{`Function which accepts an object { message: string, type: "success" | "error" }`}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <SecondaryTitle>Example</SecondaryTitle>

        <Paragraph>
          <Code>
            {`
import React from "react";
import { Toast, useToast } from "react-uicomp";

export default function() {
  const { handler, toast } = useToast();

  return (
    <div>
      <button onClick={() => toast({ message: "Hey, Toast!", type: "success" })}>
        Open Toast
      </button>

      <Toast {...handler} /> {/* Spread handler here */}
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

export default ToastPage;
