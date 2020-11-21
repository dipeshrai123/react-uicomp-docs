import React, { useEffect } from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
// import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";
import Code from "../common/code/Code.common";

const UseMountedValue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>useMountedValue()</Title>
      <section>
        <Paragraph>
          <span className="highlight">useMountedValue()</span> hook provides us
          a way to unmount component from the DOM Tree after animation is
          complete. Rather than returning animated node directly like{" "}
          <span className="highlight">useAnimatedValue()</span>, it returns a
          function that accepts a functional component with two parameters.
          First animationNode (same retured by{" "}
          <span className="highlight">useAnimatedValue()</span> accessed with
          .value) and second isMounted (boolean). The second parameter isMounted
          is checked conditionally to mount or unmount a component from DOM
          Tree.
        </Paragraph>

        <Paragraph>
          Now lets create a mounting animation with{" "}
          <span className="highlight">useMountedValue()</span> hook.
        </Paragraph>

        <Code>
          {`
const [open, setOpen] = useState(false);
const mountedValue = useMountedValue(open, [0, 1, 0]);
`}
        </Code>

        <Paragraph>
          As you noticed mounted value accepts two arguments. First one is
          boolean that is used to define whether the element is mounted or not,
          but its actually animated. Second one is array with three phases.
          First one is <span className="highlight">initial phase</span>, second
          one is <span className="highlight">enter phase</span> and third one is{" "}
          <span className="highlight">exit phase</span>. By default initial
          phase is animated from its value to enter phase (in this case 0 to 1
          by default) and when first argument is changed in future it toggles
          between enter and exit phase. When open is true it animates from 0 to
          1. When open is false then it animates from 1 to 0 and isMounted
          becomes false.
        </Paragraph>

        <iframe
          src="https://codesandbox.io/embed/react-uicomp-usemountedvalue-hook-k03t7?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: 500,
            border: 0,
            borderRadius: 4,
            overflow: "hidden",
          }}
          title="react-uicomp useMountedValue() hook"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </section>
    </div>
  );
};

export default UseMountedValue;
