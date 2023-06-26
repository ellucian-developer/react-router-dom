# react-router-dom

A safe react-router-dom wrapper for use in Ellucian Experience Extensions. Includes all components of react-router.

If you currently have @ellucian/react-router-dom as a dependency in your extension, you do not need to include @ellucian/react-router.

## Differences

### BrowserRouter

Behaves the same to the standard `Router` component. Assets history based on Experience history context.

Providing your own basename will be safely ignored by the component.

### Link

Adds an appropriate prefix based on history context. The prop `to` should remain unchanged from it's standard usage.

## react-router changes

These are changes that are included as part of the @ellucian/react-router dependency

### Router

Changes have been made to the Router components to always assume history based on the Ellucian Experience Router. This history is stored in context and shared among the other child components

Additionally, a `debug` prop has been added which can help debug history changes and location during development. `debug` is a boolean which defaults to false.

### Switch

Grabs new history from context, and uses this as a base for all child `Route` components.

### Route

Adds an appropriate prefix based on history context. The prop `path` should remain unchanged from it's standard usage.

### Redirect

Prefixs redirect paths based on history context. The prop `to` should remain unchanged from it's standard usage.

## Contribute

If there's a bug please submit open an issue report through GitHub's interface.

Pull Requests are welcomed.
