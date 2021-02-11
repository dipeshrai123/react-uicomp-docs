import React, { useEffect } from "react";
import { Dropdown, Menu } from "react-uicomp";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const DropdownMenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Menu</Title>
      <section>
        <Paragraph>UI component for Dropdown Element</Paragraph>
      </section>

      <section>
        <SecondaryTitle>Demo</SecondaryTitle>

        <Dropdown
          animationType="expand"
          placement="bottommiddle"
          trigger={() => <button className="button">Toggle Menu</button>}
        >
          <Menu.Container>
            <Menu.Item onClick={() => false}>Item 1</Menu.Item>
            <Menu.Item onClick={() => false}>Item 2</Menu.Item>
            <Menu.Separator />
            <Menu.Item onClick={() => false} danger={true}>
              Item 3
            </Menu.Item>
          </Menu.Container>
        </Dropdown>
      </section>

      <section>
        <SecondaryTitle>Menu.Container</SecondaryTitle>

        <Paragraph>
          Wrapper for wrapping all the dropdown items for default styling
          provided by <span className="highlight">react-uicomp</span>
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
              <td>Should contain list of dropdown items</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>style</td>
              <td>Used to override default styling</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <SecondaryTitle>Menu.Item</SecondaryTitle>

        <Paragraph>
          It defines the menu items for{" "}
          <span className="highlight">DropdownMenu.Container</span>
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
              <td>Can contain any element node or text</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>style</td>
              <td>Used to override default styling</td>
              <td>-</td>
            </tr>
            <tr>
              <td>danger(optional)</td>
              <td>boolean</td>
              <td>Highlights the item with default color</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>function</td>
              <td>Handles onClick event for an item</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <SecondaryTitle>Menu.Separator</SecondaryTitle>

        <Paragraph>
          It provides some default margin and padding to top and bottom with
          default border styling.
        </Paragraph>
      </section>

      <section>
        <SecondaryTitle>Example</SecondaryTitle>

        <Paragraph>
          To achieve dropdown functionality use should wrap{" "}
          <span className="highlight">Menu.Container</span> component with{" "}
          <span className="highlight">Dropdown</span> component.
          <Code>
            {`
import React from "react";
import { Dropdown, DropdownMenu } from "react-uicomp";

export default function DropdownComponent() {
  return (
    <Dropdown triggerElement={() => <button>Toggle Menu</button>}>
      <Menu.Container>
        <Menu.Item onClick={() => false}>Item 1</Menu.Item>
        <Menu.Item onClick={() => false}>Item 2</Menu.Item>
        <Menu.Separator />
        <Menu.Item onClick={() => false} danger={true}>
          Item 3
        </Menu.Item>
      </Menu.Container>
    </Dropdown>
  );
}
          `}
          </Code>
        </Paragraph>
      </section>
    </div>
  );
};

export default DropdownMenuPage;
