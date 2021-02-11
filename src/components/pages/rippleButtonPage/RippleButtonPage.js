import React, { useEffect } from "react";
import { RippleButton } from "react-uicomp";

import SecondaryTitle from "../../common/secondaryTitle/SecondaryTitle";
import Code from "../../common/code/Code.common";
import Title from "../../common/title/Title";
import Paragraph from "../../common/paragraph/Paragraph";

import { Label } from "../../common/label/Label.common";

const RippleButtonPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Label />

      <Title>RippleButton</Title>
      <section>
        <Paragraph>Button component with ripple effect</Paragraph>
      </section>

      <section>
        <SecondaryTitle>Demo</SecondaryTitle>

        <RippleButton title="Click Me" />
      </section>

      <section>
        <SecondaryTitle>Example</SecondaryTitle>

        <Paragraph>
          <Code>
            {`
<RippleButton title="Click Me" onClick={() => alert("OK")} />
          `}
          </Code>
        </Paragraph>
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
              <td>title</td>
              <td>string</td>
              <td>Defines the title for the button</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onClick (optional)</td>
              <td>function</td>
              <td>Triggers when user clicks the button</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style (optional)</td>
              <td>style</td>
              <td>Defines styles for ripple button container</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className (optional)</td>
              <td>string</td>
              <td>Defines class name for ripple button container</td>
              <td>-</td>
            </tr>
            <tr>
              <td>leftIcon (optional)</td>
              <td>ReactNode</td>
              <td>Defines left icon component</td>
              <td>-</td>
            </tr>
            <tr>
              <td>leftIconStyle (optional)</td>
              <td>style</td>
              <td>Defines styles object for left icon</td>
              <td>-</td>
            </tr>
            <tr>
              <td>leftIconClassName (optional)</td>
              <td>string</td>
              <td>Defines class name for left icon</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rightIcon (optional)</td>
              <td>ReactNode</td>
              <td>Defines right icon component</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rightIconStyle (optional)</td>
              <td>style</td>
              <td>Defines styles object for right icon</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rightIconClassName (optional)</td>
              <td>string</td>
              <td>Defines class name for right icon</td>
              <td>-</td>
            </tr>
            <tr>
              <td>textStyle (optional)</td>
              <td>style</td>
              <td>Defines style for text element inside ripple button</td>
              <td>-</td>
            </tr>
            <tr>
              <td>textClassName (optional)</td>
              <td>string</td>
              <td>Defines class name for text element inside ripple button</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RippleButtonPage;
