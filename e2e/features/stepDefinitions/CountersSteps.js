import { Then, setDefaultTimeout, Given, When } from "@cucumber/cucumber";
import CommonPage from "../../pageObjects/CommonPage";
import CountersPage from "../../pageObjects/CountersPage";
setDefaultTimeout(120 * 1000);
//And The Counter page is correctly displayed
When("The Counter page is correctly displayed", async () => {
  await CountersPage.verifyCountersPage();
});
