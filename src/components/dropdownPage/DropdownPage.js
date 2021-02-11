import React, { useEffect } from "react";
import { Dropdown } from "react-uicomp";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";

const DropdownPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Dropdown</Title>
      <section>
        <Paragraph>
          When it comes to creating a dropdown component we should also think of
          small things such as dismiss the dropdown when clicked outside, some
          small animations and position of a dropdown. It requires some work to
          handle all those small details.{" "}
        </Paragraph>
        <Paragraph>
          React UI Comp comes with a{" "}
          <span className="highlight">&lt;Dropdown&gt;</span> component which
          handles all those things for you. It converts any component into a
          dropdown component very easily.
        </Paragraph>
      </section>

      <section>
        <SecondaryTitle>Demo</SecondaryTitle>
        <Dropdown
          trigger={() => <button className="button">Toggle Menu</button>}
        >
          <div
            style={{
              background: "#FFF",
              padding: 10,
              border: "1px solid #F1F1F1",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            I am Dropdown Content
          </div>
        </Dropdown>
      </section>

      <section>
        <SecondaryTitle>Example</SecondaryTitle>

        <Paragraph>
          You can create any component a trigger element i.e. element which
          toggles the dropdown. <span className="highlight">trigger</span> prop
          accepts a function which handles triggering of the dropdown and
          children inside <span className="highlight">&lt;Dropdown&gt;</span>{" "}
          component is the content which gets toggled.
          <Code>
            {`
<Dropdown trigger={() => <button>Toggle Menu</button>}>
  <div
    style={{
      background: "#FFF",
      padding: 10,
      border: "1px solid #F1F1F1",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
    }}
  >
    I am Dropdown Content
  </div>
</Dropdown>
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
              <td>children</td>
              <td>ReactNode</td>
              <td>React Node which will be the dropdown content</td>
              <td>-</td>
            </tr>
            <tr>
              <td>trigger</td>
              <td>{"function({ active }) => ReactNode"}</td>
              <td>
                Function which should return the element which will trigger the
                dropdown
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>active (optional)</td>
              <td>boolean</td>
              <td>
                Sets default state of dropdown, either it is active or not by
                default
              </td>
              <td>false</td>
            </tr>
            <tr>
              <td>isAnimated (optional)</td>
              <td>boolean</td>
              <td>Should animate or not while toggling between dropdown</td>
              <td>true</td>
            </tr>
            <tr>
              <td>animationType (optional)</td>
              <td>"fade" | "expand" | "elastic"</td>
              <td>Type of animation for dropdown</td>
              <td>"expand"</td>
            </tr>
            <tr>
              <td>style (optional)</td>
              <td>style</td>
              <td>Style object to style the dropdown</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placement (optional)</td>
              <td>
                "bottomleft" | "bottommiddle" | "bottomright" | "topleft" |
                "topmiddle" | "topright"
              </td>
              <td>Defines the placement of dropdown</td>
              <td>"bottomright"</td>
            </tr>
            <tr>
              <td>outDismiss (optional)</td>
              <td>boolean</td>
              <td>Should dismiss dropdown if we click outside dropdown</td>
              <td>true</td>
            </tr>
            <tr>
              <td>inDismiss (optional)</td>
              <td>boolean</td>
              <td>
                Should dismiss dropdown if we click on content inside dropdown
              </td>
              <td>false</td>
            </tr>
            <tr>
              <td>triggerToggle (optional)</td>
              <td>boolean</td>
              <td>Should toggle the dropdown if we click trigger element</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DropdownPage;
