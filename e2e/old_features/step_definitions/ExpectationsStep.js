//

import { setDefaultTimeout, Then, When } from "@cucumber/cucumber";

setDefaultTimeout;
// When I verify that first image of the row is visible
When("I verify that first image of the row is visible", async () => {
  await expect(element(by.id("image-europe-0"))).toBeVisible();
});

// Then I verify that the last image of the row is not visible
Then("I verify that the last image of the row is not visible", async () => {
  await expect(element(by.id("image-europe-2"))).not.toBeFocused();
});

// When I verify that the last image of the row exists
When("I verify that the last image of the row exists", async () => {
  await expect(element(by.id("image-europe-2"))).toExist();
});
// Then I verify that the water counter doesn't exist
Then("I verify that the water counter doesn't exist", async () => {
  await expect(element(by.text("WATER COUNTER"))).not.toExist();
});
// Then I verify that the asia image does exist
Then("I verify that the asia image does exist", async () => {
  await expect(element(by.id("image-asia-1"))).toExist();
});

// When I expect the Member List header text to be 'members'
When("I expect the Member List header text to be {string}", async (text) => {
  await expect(element(by.id("memberListHeader"))).toHaveText(text);
});
// And I expect the Add Member button to have 'addMemberLabel' as label
Then(
  "I expect the Add Member button to have {string} as label",
  async (label) => {
    await expect(element(by.id("addMemberIcon"))).toHaveLabel(label);
  }
);
// And I expect the Add Member button to have 'addMemberIcon' as id
Then("I expect the Add Member button to have {string} as id", async (id) => {
  await expect(element(by.label("addMemberLabel"))).toHaveId(id);
});
