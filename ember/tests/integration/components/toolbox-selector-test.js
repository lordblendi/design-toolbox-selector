import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-selector", function() {
  setupComponentTest("toolbox-selector", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-selector}}
    //     template content
    //   {{/toolbox-selector}}
    // `);

    this.render(hbs`{{toolbox-selector}}`);
    expect(this.$()).to.have.length(1);
  });
});
