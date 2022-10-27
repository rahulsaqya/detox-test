import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(120 * 1000);
// Match by multiple matchers
// When I tap on the Water counter title by type and text
When("I tap on the Water counter title by type and text", async () => {
  const typeLocator =
    device.getPlatform() === "ios" ? "RCTTextView" : "android.widget.TextView";
  await element(by.type(typeLocator).and(by.text("WATER COUNTER"))).tap();
});
// Then I tap on the Electricity counter by traits and text
Then("I tap on the Electricity counter by traits and text", async () => {
  await element(
    by.traits(["staticText"]).and(by.text("ELECTRICITY COUNTER"))
  ).tap();
});

// And I tap on the Gas counter by ancestor id and descendant text
Then(
  "I tap on the Gas counter by ancestor id and descendant text",
  async () => {
    await element(
      by.id("counterButton").withDescendant(by.text("GAS COUNTER"))
    ).tap();
  }
);
// Then I tap on the Broadband counter by descendant text and ancestor type
Then(
  "I tap on the Broadband counter by descendant text and ancestor type",
  async () => {
    const typeLocator =
      device.getPlatform() === "ios" ? "RCTView" : "android.view.ViewGroup";
    await element(
      by.text("BROADBAND COUNTER").withAncestor(by.type(typeLocator))
    ).tap();
  }
);

// Match by label
When("I tap the Home navigation section by label", async () => {
  await element(by.label("Home")).atIndex(0).tap();
});
Then("I tap on the Water counter by label", async () => {
  //this is not working and is not recommended to use
  await element(by.label("waterCounterlabel")).tap();
});

// Match by text
Given("I tap on the Counters section by text", async () => {
  await element(by.text("Counters")).tap();
});

When("I tap on the Water counter section by text", async () => {
  await element(by.text("WATER COUNTER")).tap();
});

Then("I tap on the Electricity counter section by text", async () => {
  await element(by.text("ELECTRICITY COUNTER")).tap();
});

Then("I tap on the Gas counter section by text", async () => {
  await element(by.text("GAS COUNTER")).tap();
});

Then("I tap on the Broadband counter section by text", async () => {
  await element(by.text("BROADBAND COUNTER")).tap();
});

//Match by id
//When I tap on the Water counter by id
When("I tap on the Water counter by id", async () => {
  await element(by.id("waterCounterId")).longPress(5000);
});
//And I tap on the Electricity counter by id
Then("I tap on the Electricity counter by id", async () => {
  await element(by.id("electricityCounterId")).multiTap(3);
});
// And I tap on the Gas counter by id
Then("I tap on the Gas counter by id", async () => {
  await element(by.id("gasCounterId")).multiTap(6);
});
// Then I tap on the Broadband counter by id
Then("I tap on the Broadband counter by id", async () => {
  await element(by.id("broadbandCounterId")).tap({ x: 5, y: 250 });
});
