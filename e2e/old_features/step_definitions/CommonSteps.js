import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import utiliies from "../../helper/Utilities";
setDefaultTimeout(120 * 1000);
//And I tap the back button
Then("I tap the back button", async () => {
  if (device.getPlatform() === "ios") {
    await element(by.id("header-back")).atIndex(0).tap();
  } else {
    await device.pressBack();
    // await utiliies.sleep(5000);
  }
});
