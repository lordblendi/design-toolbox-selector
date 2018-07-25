import Route from "@ember/routing/route";
import { htmlSafe } from "@ember/template";
import { A } from "@ember/array";
import EmberObject from "@ember/object";

const colors = {
  green: "#0BDA51",
  yellow: "#F4CA16",
  red: "#e61616",
  blue: "#00BFFF"
};

function generateUnit(color, prefix, label, field) {
  return new EmberObject({
    prefix: {
      color,
      content: prefix
    },
    label,
    field
  });
}

export default Route.extend({
  model: function() {
    const sections = A();

    {
      const subSections = A();
      {
        const examples = A();

        {
          const possible = A([
            generateUnit(colors["green"], null, null, "Not started"),
            generateUnit(colors["yellow"], null, null, "Ongoing"),
            generateUnit(colors["red"], null, null, "Finished")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "SINGLE SELECT: EXPANDED",
              expanded: true,
              singleSelect: true,
              required: false,
              readOnly: false,
              possible
            })
          );
        }
        {
          const possible = A([
            generateUnit(colors["green"], null, null, "Not started"),
            generateUnit(colors["yellow"], null, null, "Ongoing"),
            generateUnit(colors["red"], null, null, "Finished")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label:
                "SINGLE SELECT: EXPANDED AND REQUIRED (YOU CANNOT UNSELECT ALL OF THEM)",
              expanded: true,
              singleSelect: true,
              required: true,
              readOnly: false,
              possible
            })
          );
        }
        {
          const possible = A([
            generateUnit(colors["green"], null, null, "Not started"),
            generateUnit(colors["yellow"], null, null, "Ongoing"),
            generateUnit(colors["red"], null, null, "Finished")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "SINGLE SELECT: EXPANDED AND READONLY",
              expanded: true,
              singleSelect: true,
              required: false,
              readOnly: true,
              possible
            })
          );
        }

        {
          const possible = A([
            generateUnit(colors["yellow"], null, null, "Ongoing")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label:
                "SINGLE SELECT: NOT EXPANDED (SHOWS ONLY ONE ITEM) - NO POPUP ATTACHED",
              expanded: false,
              singleSelect: true,
              required: false,
              readOnly: false,
              possible
            })
          );
        }
        {
          const possible = A([
            generateUnit(colors["yellow"], null, null, "Ongoing")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label:
                "SINGLE SELECT: NOT EXPANDED (SHOWS ONLY ONE ITEM) AND READONLY",
              expanded: false,
              singleSelect: true,
              required: false,
              readOnly: true,
              possible
            })
          );
        }

        subSections.pushObject(
          new EmberObject({
            label: "Single select configuration examples without popup",
            examples
          })
        );
      }

      {
        const examples = A();

        {
          const possible = A([
            generateUnit(colors["green"], "", null, "dev-team"),
            generateUnit(colors["blue"], "", null, "backend-team"),
            generateUnit(colors["yellow"], "", null, "297")
          ]);
          possible.objectAt(0).set("selected", true);
          possible.objectAt(1).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "MULTI SELECT: EXPANDED",
              expanded: true,
              singleSelect: false,
              required: false,
              readOnly: false,
              possible
            })
          );
        }
        {
          const possible = A([
            generateUnit(colors["green"], "", null, "dev-team"),
            generateUnit(colors["blue"], "", null, "backend-team"),
            generateUnit(colors["yellow"], "", null, "297")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label:
                "MULTI SELECT: EXPANDED AND REQUIRED (AT LEAST ONE HAS TO BE SELECTED)",
              expanded: true,
              singleSelect: false,
              required: true,
              readOnly: false,
              possible
            })
          );
        }
        {
          const possible = A([
            generateUnit(colors["green"], "", null, "dev-team"),
            generateUnit(colors["blue"], "", null, "backend-team"),
            generateUnit(colors["yellow"], "", null, "297")
          ]);
          possible.objectAt(0).set("selected", true);
          possible.objectAt(1).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "MULTI SELECT: EXPANDED AND READONLY",
              expanded: true,
              singleSelect: false,
              required: false,
              readOnly: true,
              possible
            })
          );
        }
        {
          const possible = A([
            generateUnit(colors["green"], "", null, "dev-team"),
            generateUnit(colors["blue"], "", null, "backend-team"),
            generateUnit(colors["yellow"], "", null, "297")
          ]);
          possible.objectAt(0).set("selected", true);
          possible.objectAt(1).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "MULTI SELECT: NOT EXPANDED",
              expanded: false,
              singleSelect: false,
              required: false,
              readOnly: false,
              possible
            })
          );
        }
        {
          const possible = A([
            generateUnit(colors["green"], "", null, "dev-team"),
            generateUnit(colors["blue"], "", null, "backend-team"),
            generateUnit(colors["yellow"], "", null, "297")
          ]);
          possible.objectAt(0).set("selected", true);
          possible.objectAt(1).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "MULTI SELECT: NOT EXPANDED AND READONLY ==> WIP",
              expanded: false,
              singleSelect: false,
              required: false,
              readOnly: true,
              possible
            })
          );
        }

        subSections.pushObject(
          new EmberObject({
            label: "Multi select configuration examples without popup",
            examples
          })
        );
      }
      sections.pushObject(new EmberObject({ subSections: subSections }));
    }

    {
      const subSections = A();
      {
        const examples = A();

        {
          const possible = A([
            generateUnit(colors["green"], "Low", null, null),
            generateUnit(colors["yellow"], "Medium", null, null),
            generateUnit(colors["red"], "High", null, null)
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "DANGER LEVEL",
              expanded: true,
              singleSelect: true,
              required: true,
              readOnly: false,
              possible
            })
          );
        }
        {
          const possible = A([
            generateUnit(colors["green"], null, null, "Not started"),
            generateUnit(colors["yellow"], null, null, "Ongoing"),
            generateUnit(colors["red"], null, null, "Finished")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "STATUS",
              expanded: true,
              singleSelect: true,
              required: false,
              readOnly: false,
              possible
            })
          );
        }

        {
          const possible = A([
            generateUnit(colors["yellow"], "", null, "Not started"),
            generateUnit(colors["blue"], "", null, "Ongoing"),
            generateUnit(colors["green"], "", null, "Finished")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "STATUS",
              expanded: true,
              singleSelect: true,
              required: false,
              readOnly: false,
              possible
            })
          );
        }

        {
          const possible = A([
            generateUnit(colors["green"], "", null, "dev-team"),
            generateUnit(colors["blue"], "", null, "backend"),
            generateUnit(colors["yellow"], "", null, "297")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "TAGS",
              expanded: true,
              singleSelect: true,
              required: false,
              readOnly: false,
              possible
            })
          );
        }

        {
          const possible = A([
            generateUnit(colors["yellow"], "", null, "Heet"),
            generateUnit(colors["red"], "", null, "Brandbaar"),
            generateUnit(colors["red"], "", null, "Huidopname")
          ]);
          possible.objectAt(0).set("selected", true);
          examples.pushObject(
            new EmberObject({
              type: "selector",
              label: "PRODUCT CONTACT",
              expanded: true,
              singleSelect: true,
              required: false,
              readOnly: false,
              possible
            })
          );
        }

        subSections.pushObject(
          new EmberObject({
            label: "Examples without popup",
            examples
          })
        );
      }

      {
        const examples = A();

        subSections.pushObject(
          new EmberObject({
            label: "Examples with popup",
            examples
          })
        );
      }

      {
        const examples = A();

        {
          examples.pushObject(
            new EmberObject({
              type: "checkbox",
              label: "CHECKBOX",
              expanded: true,
              singleSelect: true,
              required: true,
              readOnly: false,
              checked: true,
              unchecked: null
            })
          );
        }
        {
          examples.pushObject(
            new EmberObject({
              type: "checkbox",
              label: "CHECKBOX - COLORED ",
              singleSelect: true,
              expanded: true,
              required: true,
              readOnly: false,
              checked: true,
              unchecked: null,
              truePrefixColor: colors["green"]
            })
          );
        }

        subSections.pushObject(
          new EmberObject({
            label: "Checkboxes",
            examples
          })
        );
      }

      sections.pushObject(new EmberObject({ subSections: subSections }));
    }

    return sections;
  }
});
