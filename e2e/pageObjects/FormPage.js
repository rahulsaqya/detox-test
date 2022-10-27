import { assert } from "chai";
import moment from "moment";
import Utilities from "../helper/Utilities";
import BaseData from "../testData/BaseData";
import testData from "../testData/TestData";
class FormPage {
  // Form headers
  get addMemberHeader() {
    return element(by.id("addFormHeader"));
  }

  get editMemberHeader() {
    return element(by.id("editMemberHeader"));
  }

  get formBackground() {
    return by.id("formBackground");
  }

  get nameLabel() {
    return element(by.id("formLabel-name"));
  }
  get nameInput() {
    return element(by.id("formInput-name"));
  }

  get surnameLabel() {
    return element(by.id("formLabel-surname"));
  }
  get surnameInput() {
    return element(by.id("formInput-surname"));
  }

  get dateOfBirthLabel() {
    return element(by.id("formLabel-dateOfBirth"));
  }
  get dateOfBirthInput() {
    return element(by.id("formInput-dateOfBirth"));
  }
  get dateOfBirthPicker() {
    return element(by.id("formDatePicker"));
  }
  get confirmPickerButton() {
    return element(by.id("confirmPickerButton"));
  }
  get cancelPickerButton() {
    return element(by.id("cancelPickerButton"));
  }

  get startDayLabel() {
    return element(by.id("formLabel-startDay"));
  }
  get startDayInput() {
    return element(by.id("formInput-startDay"));
  }
  get startDayPicker() {
    return element(by.id("formPicker-startDay"));
  }

  get emailLabel() {
    return element(by.id("formLabel-email"));
  }
  get emailInput() {
    return element(by.id("formInput-email"));
  }

  get addressLineOneLabel() {
    return element(by.id("formLabel-addressLineOne"));
  }
  get addressLineOneInput() {
    return element(by.id("formInput-addressLineOne"));
  }

  get addressLineTwoLabel() {
    return element(by.id("formLabel-addressLineTwo"));
  }
  get addressLineTwoInput() {
    return element(by.id("formInput-addressLineTwo"));
  }

  get cityLabel() {
    return element(by.id("formLabel-city"));
  }
  get cityInput() {
    return element(by.id("formInput-city"));
  }

  get postcodeLabel() {
    return element(by.id("formLabel-postcode"));
  }
  get postcodeInput() {
    return element(by.id("formInput-postcode"));
  }

  get countryLabel() {
    return element(by.id("formLabel-country"));
  }
  get countryInput() {
    return element(by.id("formInput-country"));
  }
  get countryPicker() {
    return element(by.id("formPicker-country"));
  }

  get startDateLabel() {
    return element(by.id("formLabel-startDate"));
  }
  get startDateInput() {
    return element(by.id("formInput-startDate"));
  }

  get startTimeLabel() {
    return element(by.id("formLabel-startTime"));
  }
  get startTimeInput() {
    return element(by.id("formInput-startTime"));
  }
  get startTimePicker() {
    return element(by.id("formDatePicker-startTime"));
  }

  get saveMemberButton() {
    return element(by.id("saveMemberButton"));
  }

  //Functions used in encapsulation

  async verifyAddMemberPage() {
    await expect(this.addMemberHeader).toHaveText("Add Member");
    await this.verifyFormLabels();
  }

  async verifyEditMemberPage(formData) {
    await expect(this.editMemberHeader).toHaveText(
      `Edit Member $${BaseData.getId(formData.member)}`
    );
    await this.verifyFormLabels(formData);
  }

  // Support function
  async selectCalendarDate(weekday, day, month, year) {
    while (
      (await Utilities.softTextAssertion(
        element(by.id("HEADER_MONTH_NAME")),
        `${month} ${year}`
      )) === false
    ) {
      await element(by.id("native.calendar.CHANGE_MONTH_RIGHT_ARROW")).tap();
    }
    await element(by.label(` ${weekday} ${day} ${month} ${year} `))
      .atIndex(0)
      .tap();
  }

  async cancelPicker() {
    if (device.getPlatform() == "ios") {
      await this.cancelPickerButton.tap();
    } else {
      await element(by.id("OK")).tap();
    }
  }
  async confirmPicker() {
    if (device.getPlatform() == "ios") {
      await this.confirmPickerButton.tap();
    } else {
      await element(by.id("OK")).tap();
    }
  }
  async selectDatePickerDate(day, month, year) {
    if (device.getPlatform() === "ios") {
      await this.dateOfBirthPicker.setDatePickerDate(
        `${day}-${month}-${year}`,
        "dd-MM-yyyy"
      );
    } else {
      // await element(by.text("2003")).tap();
      // while (
      //   (await Utilities.softElementAssertion(element(by.text(year)))) === false
      // ) {
      //   await element(by.type("android.widget.ListView")).swipe(
      //     "down",
      //     "slow",
      //     0.1
      //   );
      // }
      // await element(by.text(year)).tap();
      // await element(by.text(day)).tap();

      await element(by.type("android.widget.EditText"))
        .atIndex(2)
        .typeText(year);
      await element(by.type("android.widget.EditText"))
        .atIndex(1)
        .typeText(day);
      //Bug fixes of detox library
      await element(by.type("android.widget.EditText")).atIndex(0).clearText();
      await element(by.type("android.widget.EditText"))
        .atIndex(0)
        .typeText(baseData.getMonth(month));
    }
  }

  async selectPickerValue(picker, value, swipeDirection = "up") {
    if (device.getPlatform() === "ios") {
      await picker.setColumnToValue(0, value);
    } else {
      await element(by.type("android.widget.Spinner")).tap();
      const optionToSelect = element(
        by.type("android.widget.CheckedTextView").and(by.text(value))
      );
      while ((await this.softElementAssertion(optionToSelect)) == false) {
        await element(by.type("android.widget.ListView")).swipe(
          swipeDirection,
          "slow"
        );
      }
      await optionToSelect.tap();
    }
  }
  async setTime(hours, minutes) {
    if (device.getPlatform() === "ios") {
      //This another swipe up to reveal the picker in the frame
      await element(this.formBackground).swipe("up", "fast", 0.5);
      await this.startTimePicker.setDatePickerDate(
        `${hours}:${minutes}`,
        "HH:mm"
      );
      await this.confirmPicker();
    } else {
      await element(
        by.label("Switch to text input mode for the time input")
      ).tap();
      await Utilities.typeInElement(
        element(by.type("android.widget.EditText")).atIndex(0),
        hours
      );
      await Utilities.typeInElement(
        element(by.type("android.widget.EditText")).atIndex(1),
        minutes
      );
    }
  }

  async verifyFormLabels(formData = null) {
    await expect(this.nameLabel).toHaveText("Name:");
    await expect(this.surnameLabel).toHaveText("Surname:");
    await expect(this.dateOfBirthLabel).toHaveText("Date of Birth:");
    await expect(this.startDayLabel).toHaveText("Start Day:");
    await expect(this.emailLabel).toHaveText("Email:");

    await expect(this.nameInput).toHaveText(
      formData == null ? "" : formData.name
    );
    await expect(this.surnameInput).toHaveText(
      formData == null ? "" : formData.surname
    );
    await expect(this.dateOfBirthInput).toHaveText(
      formData == null
        ? ""
        : `${formData.b_day}-${formData.b_month}-${formData.b_year}`
    );
    const startDate = moment(BaseData.getStartDate(formData.member));
    await expect(this.startDayInput).toHaveText(
      formData == null ? "" : moment(startDate).format("dddd")
    );
    await expect(this.emailInput).toHaveText(
      formData == null ? "" : BaseData.getEmail(formData.member)
    );

    await Utilities.scrollToElement(
      this.postcodeInput,
      this.formBackground,
      150,
      "down"
    );
    await expect(this.addressLineOneLabel).toHaveText("Address Line One:");
    await expect(this.addressLineTwoLabel).toHaveText("Address Line Two:");
    await expect(this.cityLabel).toHaveText("City:");

    await expect(this.addressLineOneInput).toHaveText(
      formData == null ? "" : formData.address_one
    );
    await expect(this.addressLineTwoInput).toHaveText(
      formData == null ? "" : formData.address_two
    );
    await expect(this.cityInput).toHaveText(
      formData == null ? "" : formData.city
    );

    await element(this.formBackground).swipe("up");

    await expect(this.postcodeLabel).toHaveText("Postcode:");
    await expect(this.countryLabel).toHaveText("Country:");
    await expect(this.startDateLabel).toHaveText("Start Date:");
    await expect(this.startTimeLabel).toHaveText("Start Time:");

    await expect(this.postcodeInput).toHaveText(
      formData == null ? "" : formData.postcode
    );
    await expect(this.countryInput).toHaveText(
      formData == null ? "" : formData.country
    );
    await expect(this.startDateInput).toHaveText(
      formData == null
        ? ""
        : `${moment(startDate).format("DD")}-${moment(startDate).format(
            "MM"
          )}-${moment(startDate).format("YYYY")}`
    );
    await expect(this.startTimeInput).toHaveText(
      formData == null ? "" : `${formData.start_hour}:${formData.start_minute}`
    );

    await expect(this.saveMemberButton).toBeVisible();

    await element(this.formBackground).swipe("down");
  }

  async fillInForm(formData) {
    const name = BaseData.getMemberInputName(formData.name);

    // Filling Name
    await Utilities.typeInElement(this.nameInput, name);
    // Filling Surname
    await Utilities.typeInElement(this.surnameInput, formData.surname);

    // Filling DOB
    await this.dateOfBirthLabel.tap();
    await this.selectDatePickerDate(
      formData.b_day,
      formData.b_month,
      formData.b_year
    );
    await this.confirmPicker();

    // Filling Start Day
    await this.startDayLabel.tap();
    const startDate = this.generateRandomDate();
    await this.selectPickerValue(
      this.startDayPicker,
      moment(startDate).format("dddd").toString()
    );

    // Filling Email
    const email = this.generateRandomEmail();
    await Utilities.typeInElement(this.emailInput, email);

    // Scrolling to see more forms
    await Utilities.scrollToElement(
      this.postcodeInput,
      this.formBackground,
      150,
      "down"
    );

    // Filling Address Line 1
    await Utilities.typeInElement(
      this.addressLineOneInput,
      formData.address_one
    );
    // Filling Address Line 2
    await Utilities.typeInElement(
      this.addressLineTwoInput,
      formData.address_two
    );
    // Filling City
    await Utilities.typeInElement(this.cityInput, formData.city);

    // Scrolling to see more forms
    await element(this.formBackground).swipe("up");

    // Filling Postcode
    await Utilities.typeInElement(this.postcodeInput, formData.postcode);

    // Filling Country
    await this.countryLabel.tap();
    await element(this.formBackground).swipe("up", "fast", 0.25);
    await this.selectPickerValue(this.countryPicker, formData.country, "up");

    // Filling Start Date
    await this.startDateLabel.tap();
    await element(this.formBackground).swipe("up", "fast", 0.25);
    await this.selectCalendarDate(
      moment(startDate).format("dddd").toString(),
      moment(startDate).format("D").toString(),
      moment(startDate).format("MMMM").toString(),
      moment(startDate).format("YYYY").toString()
    );

    // Filling Start Time
    await this.startTimeLabel.tap();
    await this.setTime(formData.start_hour, formData.start_minute);

    this.saveMemberData(
      formData.member.toString(),
      name,
      formData.surname,
      email,
      startDate
    );
  }
  generateRandomEmail() {
    const values = "123456789";
    let email = "test_";
    for (let i = 0; i <= 5; i++) {
      email += values.charAt(Math.round(values.length * Math.random()));
    }
    email += "@rahulshakya.info.np";
    return email;
  }
  generateRandomDate() {
    const randomDay = Math.floor(Math.random() * 90);
    let date = moment().add(randomDay, "days");
    if (moment(date).format("MMMM") === "March") {
      date = moment(date).add(1, "month");
    }
    return date;
  }
  async saveMemberData(memberNumber, name, surname, email, startDate) {
    switch (memberNumber) {
      case "1":
        testData.setName_1(name);
        testData.setSurname_1(surname);
        testData.setEmail_1(email);
        testData.setStartDate_1(startDate);
        break;
      case "2":
        testData.setName_2(name);
        testData.setSurname_2(surname);
        testData.setEmail_2(email);
        testData.setStartDate_2(startDate);
        break;
      default:
        assert.fail(`The entered ${memberNumber} is a invalid number`);
    }
  }
}

export default new FormPage();
