import { Then, setDefaultTimeout, Given } from "@cucumber/cucumber";
import CommonPage from "../../pageObjects/CommonPage";
setDefaultTimeout(120 * 1000);
Given("I tap on the {string} navigation tab section", async (section) => {
  await CommonPage.tapNavigationSection(section);
});

//And I tap the back button
Then("I tap the back button", async () => {
  if (device.getPlatform() === "ios") {
    await element(by.id("header-back")).atIndex(0).tap();
  } else {
    await device.pressBack();
    // await utiliies.sleep(5000);
  }
});
