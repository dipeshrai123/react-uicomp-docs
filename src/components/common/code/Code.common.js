import React from "react";
import PropTypes from "prop-types";

export default function Code({ children }) {
  return (
    <pre className="line-numbers">
      <code className="language-js">{children.trim()}</code>
    </pre>
  );
}

Code.propTypes = {
  children: PropTypes.string.isRequired,
};
