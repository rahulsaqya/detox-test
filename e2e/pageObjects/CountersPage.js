import Utilities from "../helper/Utilities";

class CountersPage {
  get counterTextWater() {
    return element(by.id("counterText-water"));
  }
  get counterNumberWater() {
    return element(by.id("counterNumber-water"));
  }
  get counterTextElectricity() {
    return element(by.id("counterText-electricity"));
  }
  get counterNumberElectricity() {
    return element(by.id("counterNumber-electricity"));
  }
  get counterTextGas() {
    return element(by.id("counterText-gas"));
  }
  get counterNumberGas() {
    return element(by.id("counterNumber-gas"));
  }
  get counterTextBroadband() {
    return element(by.id("counterText-broadband"));
  }
  get counterNumberBroadband() {
    return element(by.id("counterNumber-broadband"));
  }

  async verifyCountersPage() {
    await this.testCounter(this.counterNumberWater, this.counterTextWater);
    await this.testCounter(
      this.counterNumberElectricity,
      this.counterTextElectricity
    );
    await this.testCounter(this.counterNumberGas, this.counterTextGas);
    await this.testCounter(
      this.counterNumberBroadband,
      this.counterTextBroadband
    );
  }

  //Support functions
  async testCounter(numberElement = this.counterNumberBroadband, textElement) {
    const attr = await Utilities.getElementText(numberElement);
    let data = attr.text;
    await expect(numberElement).toHaveText(data);
    let tapCount = parseInt(Math.floor(Math.random() * 10));
    let expectedData = attr.text;
    await textElement.multiTap(tapCount);
    expectedData = parseInt(expectedData) + tapCount;
    await expect(numberElement).toHaveText(expectedData.toString());
  }
}

export default new CountersPage();
