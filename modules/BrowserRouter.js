import React from "react";
import { Router } from "@ellucian/react-router";
import PropTypes from "prop-types";
import warning from "tiny-warning";

/**
 * The public API for a <Router> that uses HTML5 history.
 */
function BrowserRouter(props) {
  if (props.basename) {
    console.warn('passing basename is not required for a BrowserRouter provided by Ellucian');
  }

  // Router builds it's own history
  return <Router children={props.children} debug={props.debug} />;
}

if (__DEV__) {
  BrowserRouter.propTypes = {
    basename: PropTypes.string,
    children: PropTypes.node,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number
  };

  BrowserRouter.prototype.componentDidMount = function() {
    warning(
      !this.props.history,
      "<BrowserRouter> ignores the history prop. To use a custom history, " +
        "use `import { Router }` instead of `import { BrowserRouter as Router }`."
    );
  };
}

export default BrowserRouter;
