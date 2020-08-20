import React, { useEffect } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "react-uicomp";
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
      <Title>Dropdown Menu</Title>
      <section>
        <Paragraph>
          UI component for Dropdown Element with default styling provided by
          react-uicomp.
        </Paragraph>
      </section>

      <section>
        <SecondaryTitle>Demo</SecondaryTitle>

        <Dropdown
          animationType="expand"
          placement="bottommiddle"
          triggerElement={() => <button className="button">Toggle Menu</button>}
        >
          <DropdownMenu>
            <DropdownMenuItem onClick={() => false}>Item 1</DropdownMenuItem>
            <DropdownMenuItem onClick={() => false}>Item 2</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => false} danger={true}>
              Item 3
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
      </section>
    </div>
  );
};

export default DropdownMenuPage;
