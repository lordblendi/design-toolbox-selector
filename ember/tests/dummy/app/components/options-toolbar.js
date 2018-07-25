import Component from "@ember/component";
import layout from "../templates/components/options-toolbar";

export default Component.extend({
  layout,
  tagName: "div",
  classNames: [
    "pin-t",
    "pin-l",
    "w-full",
    "flex",
    "pt-4",
    "z-highest",
    "bg-grey-lightest",
    "shadow-lg",
    "text-center"
  ],

  actions: {
    pickOption(option, selection) {
      if (this[option["action"]]) {
        this[option["action"]](option, selection);
      }
    }
  }
});
