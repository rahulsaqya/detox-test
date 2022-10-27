import { assert } from "chai";
import ConfigData from "./ConfigData";
import testData from "./TestData";

class BaseData {
  getId(memberNumber) {
    console.log(memberNumber, "memberNumber");
    switch (memberNumber) {
      case "1":
        console.log(testData.getId_1());
        return testData.getId_1();
      case "2":
        console.log(testData.getId_2());
        return testData.getId_2();
      default:
        assert.fail(
          `The entered ${memberNumber} is an invalid number for member id`
        );
    }
  }

  getName(memberNumber) {
    console.log(memberNumber, "memberNumber");
    switch (memberNumber) {
      case "1":
        console.log(testData.getName_1());
        return testData.getName_1();
      case "2":
        console.log(testData.getName_2());
        return testData.getName_2();
      default:
        assert.fail(
          `The entered ${memberNumber} is an invalid number for member name`
        );
    }
  }

  getSurname(memberNumber) {
    console.log(memberNumber, "memberNumber");
    switch (memberNumber) {
      case "1":
        console.log(testData.getSurname_1());
        return testData.getSurname_1();
      case "2":
        console.log(testData.getSurname_2());
        return testData.getSurname_2();
      default:
        assert.fail(
          `The entered ${memberNumber} is an invalid number for member Surname`
        );
    }
  }

  getEmail(memberNumber) {
    console.log(memberNumber, "memberNumber");
    switch (memberNumber) {
      case "1":
        console.log(testData.getEmail_1());
        return testData.getEmail_1();
      case "2":
        console.log(testData.getEmail_2());
        return testData.getEmail_2();
      default:
        assert.fail(
          `The entered ${memberNumber} is an invalid number for member email`
        );
    }
  }
  getStartDate(memberNumber) {
    console.log(memberNumber, "memberNumber");
    switch (memberNumber) {
      case "1":
        console.log(testData.getStartDate_1());
        return testData.getStartDate_1();
      case "2":
        console.log(testData.getStartDate_2());
        return testData.getStartDate_2();
      default:
        assert.fail(
          `The entered ${memberNumber} is an invalid number for member Start date`
        );
    }
  }
  // Not needed due to use of moment and genrating date randomly
  getMonth(month) {
    switch (month) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "Mar";
      case "04":
        return "Apr";
      case "05":
        return "May";
      case "06":
        return "Jun";
      case "07":
        return "Jul";
      case "08":
        return "Aug";
      case "09":
        return "Sep";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      default:
        assert.fail(`The entered ${month} is an invalid month`);
    }
  }
  getMonthNumber(month) {
    switch (month) {
      case "January":
        return "01";
      case "Febuary":
        return "02";
      case "March":
        return "03";
      case "April":
        return "04";
      case "May":
        return "05";
      case "June":
        return "06";
      case "July":
        return "07";
      case "August":
        return "08";
      case "September":
        return "09";
      case "October":
        return "10";
      case "November":
        return "11";
      case "December":
        return "12";
      default:
        assert.fail(`The entered ${month} is an invalid month`);
    }
  }

  getMemberInputName(name) {
    switch (name) {
      case "TestName_1":
        return ConfigData.name_1;
      case "TestName_2":
        return ConfigData.name_2;
      default:
        return name;
    }
  }
}
export default new BaseData();
