import Controller from "@ember/controller";
import EmberObject from "@ember/object";
import { computed } from "@ember/object";
import { A } from "@ember/array";
import { htmlSafe } from "@ember/template";
import { alias } from "@ember/object/computed";

export default Controller.extend({
  sections: alias("model"),

  style: computed("backgroundColor", function() {
    return htmlSafe(`background-color: ${this.get("backgroundColor")}`);
  }),
  isLightThemeSelected: true,
  loadingSelectors: false,

  loading: false,
  checked: false,
  actions: {
    setLoading(boolname, bool) {
      this.set(boolname, bool);
    },
    pickTheme(theme) {
      this.toggleProperty("isLightThemeSelected");
      this.set("backgroundColor", theme);
    },
    selectItem(item) {
      item.set("selected", true);
    },
    unselectItem(item) {
      item.set("selected", false);
    },
    checkItem(item) {
      item.set("checked", true);
    },
    uncheckItem(item) {
      item.set("unchecked", true);
    },
    removeCheckItem(item) {
      item.set("checked", false);
    },
    removeUncheckItem(item) {
      item.set("unchecked", false);
    }
  }
});
