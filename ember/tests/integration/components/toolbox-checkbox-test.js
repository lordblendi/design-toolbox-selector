import { expect } from "chai";
import { describe, it } from "mocha";
import { setupComponentTest } from "ember-mocha";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | toolbox-checkbox", function() {
  setupComponentTest("toolbox-checkbox", {
    integration: true
  });

  it("renders", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#toolbox-checkbox}}
    //     template content
    //   {{/toolbox-checkbox}}
    // `);

    this.render(hbs`{{toolbox-checkbox}}`);
    expect(this.$()).to.have.length(1);
  });
});
