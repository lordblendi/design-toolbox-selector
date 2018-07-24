# Design Toolbox Selector

Selector component of the TenForce design toolbox.

## CSS

This component is using a [main](https://github.com/tenforce/design-toolbox-selector/blob/master/docs/sass/toolbox-selector.scss) and a [draggable plugin](https://github.com/tenforce/design-toolbox-selector/blob/master/docs/sass/toolbox-selector-draggable.scss) CSS file. The main contains the basic design, and the plugin contains some extra design in case of drag-n-drop functionality (currently we are using jQuery UI for that).

## HTML structure

The Design documentation was built in Jekyll using SASS and Liquid.

- Structure for the unit with comments in Jekyll can be found [here](https://github.com/tenforce/design-toolbox-selector/blob/master/docs/_includes/components/toolbox-unit.html).
- Structure for the selector with comments in Jekyll can be found [here](https://github.com/tenforce/design-toolbox-selector/blob/master/docs/_includes/components/toolbox-selector.html).


## Usage
### Links to CSS files
- main CSS
  - [built](https://tenforce.github.io/design-toolbox-selector/sass/toolbox-selector.css)
  - [raw](https://github.com/tenforce/design-toolbox-selector/blob/master/docs/sass/toolbox-selector.scss)
- draggable plugin CSS
  - [built](https://tenforce.github.io/design-toolbox-selector/sass/toolbox-selector-draggable.css)
  - [raw](https://github.com/tenforce/design-toolbox-selector/blob/master/docs/sass/toolbox-selector-draggable.scss)

### Jekyll
Add [the content of this file](https://github.com/tenforce/design-toolbox-selector/tree/master/docs/import/include-selector.html) to the another Jekyll project to include files from this project.

## Dependencies
- [Tailwind v0.6.4](https://tailwindcss.com)
- [TenForce default CSS](https://github.com/tenforce/design-toolbox-default-css)
- [jQuery (for javascript)](https://jquery.com)
