import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-selector/selector-separator", function() {
  setupComponentTest("toolbox-selector/selector-separator", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-selector/selector-separator}}
    //     template content
    //   {{/toolbox-selector/selector-separator}}
    // `);

    this.render(hbs`{{toolbox-selector/selector-separator}}`);
    expect(this.$()).to.have.length(1);
  });
});
