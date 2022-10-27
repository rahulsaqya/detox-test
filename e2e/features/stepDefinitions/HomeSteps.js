import { Given, Then } from "@cucumber/cucumber";
import HomePage from "../../pageObjects/HomePage";
Given("I tap on the {string} section", async (section) => {
  await HomePage.tapHomeSection(section);
});

// Then The Home page is correctly displayed
Then("The Home page is correctly displayed", async () => {
  await HomePage.verifyHomePage();
});
