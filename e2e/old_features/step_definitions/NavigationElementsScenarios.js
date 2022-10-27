import { Given, setDefaultTimeout, Then } from "@cucumber/cucumber";

setDefaultTimeout(120 * 1000);

// Given I tap on the Cities navigation tab
Given("I tap on the {string} navigation tab", async (nav) => {
  await element(by.id(`${nav.toLowerCase()}NavigationSection`))
    .atIndex(0)
    .tap();
  await element(by.id(`${nav.toLowerCase()}NavigationImage`))
    .atIndex(0)
    .tap();
});
// Then I tap the Add Member Icon
Then("I tap the Add Member Icon", async () => {
  await element(by.id("memberListHeader")).atIndex(0).tap();
  await element(by.id("addMemberIcon")).atIndex(0).tap();
});
