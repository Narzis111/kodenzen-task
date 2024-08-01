# CustomSelect Component

## Overview

The `CustomSelect` component is a flexible and customizable select dropdown designed for single and multiple value selections. It supports various features such as searchability, grouping, and clearable options. This component follows the BEM naming convention and is styled using custom CSS.

## Features

- Single and multiple value selection
- Clearable option
- Searchable dropdown
- Option grouping
- Disabled state support
- Customizable placeholder
- Event handlers for changes and menu actions

## Props

The `CustomSelect` component accepts the following props:

- `isClearable` (boolean): If true, allows clearing the selected value. In single select mode, it clears the selected value. In multi-select mode, it clears one selected value at a time.
- `isSearchable` (boolean): If true, enables a search input within the dropdown. In multi-select mode, the search indicator appears after selecting values. In single-select mode, it appears after clearing the selection.
- `isDisabled` (boolean): If true, disables the select component, making it non-interactive.
- `options` (array): An array of option objects to display in the dropdown. Each option should have `value`, `label`, and optionally `group`.
- `value` (string | array): The currently selected value(s). In single-select mode, it's a string. In multi-select mode, it's an array of strings.
- `placeholder` (string): Placeholder text to display when no value is selected.
- `isGrouped` (boolean): If true, groups options by the `group` property.
- `isMulti` (boolean): If true, allows selecting multiple values.
- `onChangeHandler` (function): Callback function that receives the selected value(s) when changed.
- `onMenuOpen` (function): Callback function called when the dropdown menu is opened.
- `onSearchHandler` (function): Callback function that receives the search text for handling search input or API calls.

## Installation

To use the `CustomSelect` component, include it in your project and ensure you have the necessary CSS. You can either copy the `CustomSelect.css` file into your project or include it directly in your project.

```bash
npm install <your-package-name>

## Live Link:
- [kodenzen-task](https://kodenzen-task.vercel.app/)

## Resources
- [ReactRouter](https://reactrouter.com/en/main/start/tutorial)
- [Prop-Types](https://www.npmjs.com/package/prop-types)
- [React-Helmet-async](https://www.npmjs.com/package/react-helmet-async)

## Feedback

If you have any feedback, please reach out to us at narzisnahar111@gmail

## Authors
- [@Narzis111](https://www.github.com/Narzis111)

