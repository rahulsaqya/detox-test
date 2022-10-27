import Utilities from "../helper/Utilities";

class CitiesPage {
  get citiesHeader() {
    return element(by.id("citiesHeader"));
  }
  get citiesBackground() {
    return by.id("citiesBackground");
  }

  //Europe elements
  get europeLabel() {
    return element(by.id("continentLabel-europe"));
  }
  get europeBackground() {
    return element(by.id("imageBackground-europe"));
  }

  get europeTitle_1() {
    return element(by.id("imageTitle-europe-0"));
  }
  get europeImage_1() {
    return element(by.id("image-europe-0"));
  }

  get europeTitle_2() {
    return element(by.id("imageTitle-europe-1"));
  }
  get europeImage_2() {
    return element(by.id("image-europe-1"));
  }

  get europeTitle_3() {
    return element(by.id("imageTitle-europe-2"));
  }
  get europeImage_3() {
    return element(by.id("image-europe-2"));
  }

  get europeTitle_4() {
    return element(by.id("imageTitle-europe-3"));
  }
  get europeImage_4() {
    return element(by.id("image-europe-3"));
  }

  // USA/CANDA elements

  get usacandaLabel() {
    return element(by.id("continentLabel-usa/canda"));
  }
  get usacandaBackground() {
    return element(by.id("imageBackground-usa/canda"));
  }

  get usacandaTitle_1() {
    return element(by.id("imageTitle-usa/canda-0"));
  }
  get usacandaImage_1() {
    return element(by.id("image-usa/canda-0"));
  }

  get usacandaTitle_2() {
    return element(by.id("imageTitle-usa/canda-1"));
  }
  get usacandaImage_2() {
    return element(by.id("image-usa/canda-1"));
  }

  get usacandaTitle_3() {
    return element(by.id("imageTitle-usa/canda-2"));
  }
  get usacandaImage_3() {
    return element(by.id("image-usa/canda-2"));
  }

  get usacandaTitle_4() {
    return element(by.id("imageTitle-usa/canda-3"));
  }
  get usacandaImage_4() {
    return element(by.id("image-usa/canda-3"));
  }

  // Asia elements

  get asiaLabel() {
    return element(by.id("continentLabel-asia"));
  }
  get asiaBackground() {
    return element(by.id("imageBackground-asia"));
  }

  get asiaTitle_1() {
    return element(by.id("imageTitle-asia-0"));
  }
  get asiaImage_1() {
    return element(by.id("image-asia-0"));
  }

  get asiaTitle_2() {
    return element(by.id("imageTitle-asia-1"));
  }
  get asiaImage_2() {
    return element(by.id("image-asia-1"));
  }

  get asiaTitle_3() {
    return element(by.id("imageTitle-asia-2"));
  }
  get asiaImage_3() {
    return element(by.id("image-asia-2"));
  }

  get asiaTitle_4() {
    return element(by.id("imageTitle-asia-3"));
  }
  get asiaImage_4() {
    return element(by.id("image-asia-3"));
  }

  //Dynamic objects
  continentBackground(continent) {
    return by.id(`imageBackground-${continent}`);
  }
  continentLabel(continent) {
    return element(by.id(`continentLabel-${continent}`));
  }
  cityTitle(continent, index) {
    return element(by.id(`imageTitle-${continent}-${index}`));
  }
  cityImage(continent, index) {
    return element(by.id(`image-${continent}-${index}`));
  }
  //Functions used in encapsulation
  async verifyCitiesPage() {
    await expect(this.citiesHeader).toHaveText("Cities");

    await expect(this.europeLabel).toHaveText("Europe");
    await expect(this.europeTitle_1).toBeVisible();
    await expect(this.europeImage_1).toBeVisible();

    await expect(this.usacandaLabel).toHaveText("USA / Canada");
    await expect(this.usacandaTitle_1).toBeVisible();
    await expect(this.usacandaImage_1).toBeVisible();

    await element(this.citiesBackground).swipe("up");
    await expect(this.asiaLabel).toHaveText("Asia");
    await expect(this.asiaTitle_1).toBeVisible();
    await expect(this.asiaImage_1).toBeVisible();
    await element(this.citiesBackground).swipe("down");
  }

  async scrollCities(continent, pixels, direction, number) {
    if (direction == "right") {
      await Utilities.scrollToElement(
        this.cityImage(continent, 0),
        this.citiesBackground,
        100,
        "down"
      );
    }
    await Utilities.scrollToElement(
      this.cityImage(continent, number),
      this.continentBackground(continent),
      pixels,
      direction
    );
    await expect(this.cityTitle(continent, number)).toBeVisible();
    await expect(this.cityImage(continent, number)).toBeVisible();
  }
}

export default new CitiesPage();
