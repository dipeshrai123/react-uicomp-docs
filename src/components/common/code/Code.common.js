import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";

export default function Code({ children }) {
  useLayoutEffect(() => Prism.highlightAll(), []);
  return (
    <pre className="line-numbers">
      <code className="language-js">{children.trim()}</code>
    </pre>
  );
}

Code.propTypes = {
  children: PropTypes.string.isRequired,
};
