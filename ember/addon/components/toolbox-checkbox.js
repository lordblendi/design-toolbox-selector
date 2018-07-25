import Component from "@ember/component";
import layout from "../templates/components/toolbox-checkbox";
import { not } from "@ember/object/computed";

export default Component.extend({
  layout,
  tagName: "",

  expanded: true,
  readOnly: false,
  singleSelect: true,
  multiSelect: not("singleSelect"),
  loading: false,
  required: true,

  isChecked: true,
  isUnchecked: not("isChecked"),

  checkColor: null,
  checkPrefix: "",
  checkLabel: null,
  checkField: null,

  uncheckColor: null,
  uncheckPrefix: "",
  uncheckLabel: null,
  uncheckField: null,

  actions: {
    handleCheck() {
      if (this.check) {
        this.check();
      }
    },
    handleUncheck() {
      if (this.uncheck) {
        this.uncheck();
      }
    },
    handleRemoveCheck() {
      if (this.removeCheck) {
        this.removeCheck();
      }
    },
    handleRemoveUncheck() {
      if (this.removeUncheck) {
        this.removeUncheck();
      }
    }
  }
});
