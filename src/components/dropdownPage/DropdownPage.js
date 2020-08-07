import React, { useEffect } from "react";
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
        <Paragraph>Comming soon</Paragraph>
      </section>

      <section>
        <table className="table">
          <thead>
            <tr>
              <th>Title 1</th>
              <th>Title 2</th>
              <th>Title 3</th>
              <th>Title 4</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Desc one</td>
              <td>Desc Two</td>
              <td>Desc Three</td>
              <td>Desc Four</td>
            </tr>
            <tr>
              <td>Desc one</td>
              <td>Desc Two</td>
              <td>Desc Three</td>
              <td>Desc Four</td>
            </tr>
            <tr>
              <td>Desc one</td>
              <td>Desc Two</td>
              <td>Desc Three</td>
              <td>Desc Four</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DropdownPage;
