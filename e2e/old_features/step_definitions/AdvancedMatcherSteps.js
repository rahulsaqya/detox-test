import { Given, setDefaultTimeout, When } from "@cucumber/cucumber";

setDefaultTimeout(120 * 1000);
Given("I tap on the {string} title and image", async (continent) => {
  await element(by.id(`continentLabel-${continent.toLowerCase()}`)).tap();
  await element(by.id(`imageTitle-${continent.toLowerCase()}-0`)).tap();
  await element(by.id(`image-${continent.toLowerCase()}-0`)).tap();
});

Given("I tap on the {string} section", async (section) => {
  await element(by.id(`homeSectionText-${section.toLowerCase()}`)).tap();
});
