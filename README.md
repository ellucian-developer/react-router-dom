# react-router-dom

A safe react-router-dom wrapper for use in Ellucian Experience Extensions. Includes all components of react-router.

If you currently have @ellucian/react-router-dom as a dependency in your extension, you do not need to include @ellucian/react-router.

The following components have been modified to take experience history context into account

## Differences

### BrowserRouter

Behaves the same as a standard `Router` component. Asserts history based on Experience history context.

There is no need to provide basename. If provided, it will be ignored.

### Link

Adds the appropriate URL prefix based on history context. The prop `to` should remain unchanged from its standard usage.

## react-router changes

These are changes that are included as part of the @ellucian/react-router dependency

### Router

Changes have been made to the Router components to always assume history based on the Ellucian Experience Router. This history is stored in context and shared among the other child components

Additionally, a `debug` prop has been added which can help debug history changes and location during development. `debug` is a boolean which defaults to false.

### Switch

Grabs new history from context, and uses this as a base for all child `Route` components.

### Route

Adds the appropriate URL prefix based on history context. The prop `path` should remain unchanged from it's standard usage.

### Redirect

Adds the appropriate URL prefix redirect paths based on history context. The prop `to` should remain unchanged from it's standard usage.

## Contribute

If there's a bug please open an issue report through GitHub's interface.

Pull Requests are welcomed.
