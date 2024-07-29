# mncbutton



<!-- Auto Generated Below -->


## Overview

Buttons are designed for users to take action on a page or a screen.

## Properties

| Property         | Attribute         | Description                                                                                                                                                                             | Type                                                     | Default      |
| ---------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------ |
| `appearance`     | `appearance`      | The appearance style to apply to the button                                                                                                                                             | `"link" \| "primary" \| "secondary" \| "text"`           | `'primary'`  |
| `block`          | `block`           | If `true`, it will make the button fit to its parent width.                                                                                                                             | `boolean`                                                | `false`      |
| `border`         | `border`          | The corner radius of the button                                                                                                                                                         | `"full" \| "l" \| "m" \| "none" \| "s" \| "xs" \| "xs2"` | `'m'`        |
| `disabled`       | `disabled`        | If true, the button will be disabled (no interaction allowed)                                                                                                                           | `boolean`                                                | `false`      |
| `download`       | `download`        | Tells the browser to treat the linked URL as a download. Only used when `href` is set. Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download               | `string`                                                 | `undefined`  |
| `href`           | `href`            | When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`                                                                                   | `string`                                                 | `undefined`  |
| `justifyContent` | `justify-content` | It determinate how the content should be aligned                                                                                                                                        | `"center" \| "left" \| "right"`                          | `'center'`   |
| `loading`        | `loading`         | If `true` it will display the button in a loading state                                                                                                                                 | `boolean`                                                | `false`      |
| `size`           | `size`            | The size of the button                                                                                                                                                                  | `"large" \| "medium" \| "small"`                         | `'medium'`   |
| `target`         | `target`          | Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`) Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target | `"_blank" \| "_parent" \| "_self" \| "_top"`             | `undefined`  |
| `type`           | `type`            | The default behavior of the button                                                                                                                                                      | `"button" \| "reset" \| "submit"`                        | `'button'`   |
| `variant`        | `variant`         | The variant of button to apply on top of the appearance (applicable only to `appearance="primary"`)                                                                                     | `"danger" \| "ghost" \| "standard"`                      | `'standard'` |


## Events

| Event      | Description                                      | Type                                |
| ---------- | ------------------------------------------------ | ----------------------------------- |
| `mncBlur`  | Handler to be called when the button loses focus | `CustomEvent<HTMLMncButtonElement>` |
| `mncClick` | Handler to be called when button gets focus      | `CustomEvent<HTMLMncButtonElement>` |
| `mncFocus` | Handler to be called when the button is clicked  | `CustomEvent<HTMLMncButtonElement>` |


## Shadow Parts

| Part       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `"button"` | The `<a>` or `<button>` HTML element used under the hood.     |
| `"label"`  | The `<span>` tag element that renders the text of the button. |
| `"prefix"` | The `<span>` tag element that acts as prefix container.       |
| `"suffix"` | The `<span>` tag element that acts as suffix container.       |


## Dependencies

### Used by

 - [mnc-alert](../alert)
 - [mnc-date-picker](../date-picker)
 - [mnc-dialog](../dialog)
 - [mnc-drawer](../drawer)
 - [mnc-gantt](../gantt)
 - [mnc-input](../input)
 - [mnc-notification](../notification)
 - [mnc-select](../select)
 - [mnc-tag](../tag)

### Depends on

- [mnc-icon](../icon)

### Graph
```mermaid
graph TD;
  mnc-button --> mnc-icon
  mnc-alert --> mnc-button
  mnc-date-picker --> mnc-button
  mnc-dialog --> mnc-button
  mnc-drawer --> mnc-button
  mnc-gantt --> mnc-button
  mnc-input --> mnc-button
  mnc-notification --> mnc-button
  mnc-select --> mnc-button
  mnc-tag --> mnc-button
  style mnc-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
