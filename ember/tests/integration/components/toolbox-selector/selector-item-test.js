import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-selector/selector-item", function() {
  setupComponentTest("toolbox-selector/selector-item", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-selector/selector-item}}
    //     template content
    //   {{/toolbox-selector/selector-item}}
    // `);

    this.render(hbs`{{toolbox-selector/selector-item}}`);
    expect(this.$()).to.have.length(1);
  });
});
