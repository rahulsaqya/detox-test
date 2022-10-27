import { getText } from "detox-getprops";
class Utilities {
  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async typeInElement(mobileElement, text) {
    await device.disableSynchronization();
    await mobileElement.replaceText(text);
    await mobileElement.tapReturnKey();
    await device.enableSynchronization();
  }
  async scrollToElement(targetElement, backgroundElement, pixels, direction) {
    // if (direction === "left" || direction === "right") {
    //   await this.scrollHorizontallyToElement(
    //     element(backgroundElement),
    //     direction,
    //     targetElement
    //   );
    // } else {
    await waitFor(targetElement)
      .toBeVisible()
      .whileElement(backgroundElement)
      .scroll(pixels, direction, direction == "left" ? 0.25 : NaN);
    // }
  }
  // async scrollHorizontallyToElement(background, direction, targetElement) {
  //   while ((await this.softElementAssertion(targetElement)) === false) {
  //     const scrollDirection = direction == "left" ? "right" : "left";
  //     await background.swipe(scrollDirection, "slow", 0.3);
  //   }
  // }
  async softElementAssertion(mobileElement) {
    try {
      await expect(mobileElement).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }
  async softTextAssertion(mobileElement, text) {
    try {
      await expect(mobileElement).toHaveText(text);
      return true;
    } catch {
      return false;
    }
  }
  async getElementText(mobileElement) {
    if (device.getPlatform() === "ios") {
      const attr = await mobileElement.getAttributes();
      return attr.text;
    } else {
      return await getText(mobileElement);
    }
  }
}

export default new Utilities();
