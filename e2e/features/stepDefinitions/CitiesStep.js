import { setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import CitiesPage from "../../pageObjects/CitiesPage";

setDefaultTimeout(120 * 100);

// When The Cities page is correctly displayed
When("The Cities page is correctly displayed", async () => {
  await CitiesPage.verifyCitiesPage();
});
// When I scroll "<continent>" at 100 pixels "<direction_2>" to image number <number_2>>
Then(
  "I scroll {string} at {int} pixels {string} to image number {int}",
  async (continent, pixels, direction, number) => {
    await CitiesPage.scrollCities(
      continent.toLowerCase(),
      pixels,
      direction.toLowerCase(),
      number - 1
    );
  }
);

// When I scroll 'formBackground' to the 'top'
When("I scroll {string} to the {string}", async (elementId, edge) => {
  await element(CitiesPage.continentBackground(elementId)).scrollTo(edge);
});
