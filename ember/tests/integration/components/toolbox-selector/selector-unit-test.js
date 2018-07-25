import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-selector/selector-unit", function() {
  setupComponentTest("toolbox-selector/selector-unit", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-selector/selector-unit}}
    //     template content
    //   {{/toolbox-selector/selector-unit}}
    // `);

    this.render(hbs`{{toolbox-selector/selector-unit}}`);
    expect(this.$()).to.have.length(1);
  });
});
