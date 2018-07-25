import { scheduleOnce } from "@ember/runloop";
import { observer } from "@ember/object";
import { on } from "@ember/object/evented";
import Component from "@ember/component";
import layout from "../templates/components/toolbox-selector";
import { A } from "@ember/array";
import { not, filterBy } from "@ember/object/computed";

export default Component.extend({
  layout,
  classNames: ["toolbox-selector"],
  classNameBindings: [
    "expanded:toolbox-selector--expanded",
    "readOnly:toolbox-selector--readonly",
    "singleSelect:toolbox-selector--singleselect",
    "multiSelect:toolbox-selector--multiselect",
    "required:toolbox-selector--required",
    "loading:animate-loading",
    "popupId"
  ],
  expanded: true,
  readOnly: false,
  singleSelect: false,
  multiSelect: not("singleSelect"),
  required: false,
  loading: false,

  // We will check if there is only one item selected. If so (and if the selector is "required"), the last selected item should not be unselectable.
  checkOneSelected() {
    if (this.get("selectedItems.length") === 1) {
      this.set("oneSelected", true);
    } else {
      this.set("oneSelected", false);
    }
  },
  // Observes and update the "oneSelected" property
  selectedLengthDidChange: on(
    "init",
    observer("required", "selectedItems.length", function() {
      if (this.get("required")) {
        // This needs to be in a scheduleOnce as the array length will change more than once in a single render, which would make ember unhappy
        scheduleOnce("afterRender", this, this.checkOneSelected);
      }
      return false;
    })
  ),

  init() {
    this._super(...arguments);
    this.set("items", A());
  },

  selectedItems: filterBy("items", "isSelected", true),

  actions: {
    selectItem(selected) {
      if (this.get("singleSelect")) {
        this.selectedItems.forEach(item => {
          item.handleUnselect();
        });
      }
      selected.handleSelect();
    },
    unselectItem(unselected) {
      if (this.get("required")) {
        if (
          this.get("selectedItems.length") === 1 &&
          this.get("selectedItems.firstObject") === unselected
        ) {
          return;
        }
      }
      unselected.handleUnselect();
    },

    registerItem(item) {
      if (!this.items.includes(item)) {
        this.items.pushObject(item);
      }
    },
    unregisterItem(item) {
      if (this.items.includes(item)) {
        this.items.removeObject(item);
      }
    }
  }
});
