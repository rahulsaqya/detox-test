import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import Utilities from "../../helper/Utilities";
setDefaultTimeout(120 * 1000);

// When I enter '06' '02' '2006' as Date of Birth

When(
  "I enter {string} {string} {string} as Date of Birth",
  async (day, month, year) => {
    await element(by.id("formLabel-dateOfBirth")).tap();
    await Utilities.selectDatePickerDate(day, month, year);
    await Utilities.confirmPickerButton();
  }
);

// And I enter '17' '35' as Start Time
Then("I enter {string} {string} as Start Time", async (hours, minutes) => {
  await element(by.id("formBackground")).swipe("up");
  await element(by.id("formLabel-startTime")).tap();
  Utilities.setTime(hours, minutes);
});
// And I select 'Thursday' as Start Day
Then("I select {string} as Start Day", async (day) => {
  await element(by.id("formLabel-startDay")).tap();
  await Utilities.selectPickerValue(element(by.id("formPicker-startDay")), day);
});

// And I select 'Nepal' as Country swiping 'up'
Then(
  "I select {string} as Country swiping {string}",
  async (country, swipeDirection) => {
    await element(by.id("formBackground")).swipe("up");
    await element(by.id("formLabel-country")).tap();
    await Utilities.selectPickerValue(
      element(by.id("formPicker-country")),
      country,
      swipeDirection
    );
  }
);
