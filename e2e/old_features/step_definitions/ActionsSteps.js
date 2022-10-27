const { setDefaultTimeout, Then, When } = require("@cucumber/cucumber");
import utilities from "../../helper/Utilities";
setDefaultTimeout(120 * 1000);

//Swiping Actions
// And I swipe 'formBackground' 'up'
// Then I swipe 'formBackground' 'down'
Then("I swipe {string} {string}", async (elementId, direction) => {
  await element(by.id(elementId)).swipe(direction);
});
// And I swipe 'formBackground' 'up' 'slow'
Then(
  "I swipe {string} {string} {string}",
  async (elementId, direction, speed) => {
    await element(by.id(elementId)).swipe(direction, speed);
  }
);
// Then I swipe 'formBackground' 'down' 'slow' for 0.5 of the screen
Then(
  "I swipe {string} {string} {string} for {float} of the screen",
  async (elementId, direction, speed, float) => {
    await element(by.id(elementId)).swipe(direction, speed, float);
  }
);

//Scrolling Actions
// When I scroll 'formBackground' 350 pixels 'down'
When(
  "I scroll {string} {float} pixels {string}",
  async (elementId, pixels, direction) => {
    await element(by.id(elementId)).scroll(pixels, direction);
  }
);
// And I scroll 'formBackground' 350 pixels 'up'

Then(
  "I type {string} as name and {string} as surname",
  async (name, surname) => {
    await element(by.id("formInput-name")).typeText(name);
    await element(by.id("formInput-surname")).typeText(surname);
    await element(by.id("formInput-surname")).tapBackspaceKey();
  }
);

// When I scroll 'formBackground' 350 pixels 'down' with X: 0.5 and Y: 0.1
// When I scroll 'formBackground' 350 pixels 'up' with X: 0.5 and Y: 0.9
When(
  "I scroll {string} {float} pixels {string} with X: {float} and Y: {float}",
  async (elementId, pixels, direction, x, y) => {
    await element(by.id(elementId)).scroll(pixels, direction, x, y);
  }
);

// When I scroll 'formBackground' to the 'bottom'
// When I scroll 'formBackground' to the 'top'
When("I scroll {string} to the {string}", async (elementId, edge) => {
  await element(by.id(elementId)).scrollTo(edge);
});

// When I scroll 'formBackground' to 'formlabel-startDate' at 50 pixels 'down'
// When I scroll 'formBackground' to 'formlabel-surname' at 50 pixels 'up'
When(
  "I scroll {string} to {string} at {float} pixels {string}",
  async (backgroundElementId, targetElementId, pixels, direction) => {
    await utilities.scrollToElement(
      element(by.id(targetElementId)),
      by.id(backgroundElementId),
      pixels,
      direction
    );
  }
);

// Then I select 'Friday' '17' of 'September' '2021' date in the calendar
Then(
  "I select {string} {string} of {string} {string} date in the calendar",
  async (weekday, day, month, year) => {
    await utilities.scrollToElement(
      element(by.id("formInput-startDate")),
      by.id("formBackground"),
      300,
      "down"
    );
    await element(by.id("formLabel-startDate")).tap();
    await element(by.id("formBackground")).swipe("up");
    await utilities.selectCalendarDate(weekday, day, month, year);
  }
);

// And I replace 'Test' as name and 'Jose' as surname
Then(
  "I replace {string} as name and {string} as surname",
  async (name, surname) => {
    await element(by.id("formInput-name")).replaceText(name);
    await element(by.id("formInput-surname")).replaceText(surname);
    await element(by.id("formInput-surname")).tapReturnKey();
  }
);
// Then I enter 'Jose' as name and 'Test' in surname
Then(
  "I enter {string} as name and {string} in surname",
  async (name, surname) => {
    await utilities.typeInElement(element(by.id("formInput-name")), name);
    await utilities.typeInElement(element(by.id("formInput-surname")), surname);
    await utilities.sleep(5000);
  }
);
