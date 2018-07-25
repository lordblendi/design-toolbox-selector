ember-design-toolbox
==============================================================================

[Short description of the addon.]

Installation
------------------------------------------------------------------------------

```
ember install ember-design-toolbox
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-design-toolbox`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).


### TODOS:
* Document difference between toolbox-push and toolbox-push-linkto
* Write examples and/or a tool to configure your component
* Write description for each component

### NOTES:
* Right now, a checkbox is singleSelect (although you can force it to be multiSelect but then switching between true and false doesn't work smoothly)
* The non-expanded read-only selectors do not look like the mock-up right now as the mock-up still provides the "expanded" class when non-expanded.
* The tabs width selector is cheating a bit by sending a "resize" event when changing the width.
* The tabs animations could use some love regarding their duration

### Components (TODO):
* toolbox-selector: A component that allows you to pick a set of units. It has different styles and properties.
* toolbox-checkbox: A preconfigured toolbox-selector with only 2 choices.
* toolbox-button: A button with style and properties.
* toolbox-push: An anchor that looks like a toolbox-button.
* toolbox-push-linkto: A toolbox-push using an Ember link-to component for internal routing.
* toolbox-button-aligned-text: A component to show text between buttons. The text will be aligned with the one from the buttons.
* toolbox-tabs: A component to switch between panes with animation.
* toolbox-overlay-body: An overlay that can be toggled on and off with parametrable style.