import { assert, expect as chaiExpect } from "chai";
import Utilities from "../helper/Utilities";
import BaseData from "../testData/BaseData";
import testData from "../testData/TestData";

class MemberListPage {
  get memberListHeader() {
    return element(by.id("memberListHeader"));
  }
  get addMemberIcon() {
    return element(by.id("addMemberIcon"));
  }
  get noResultText() {
    return element(by.id("noResultsText"));
  }

  get member_1() {
    return element(by.id("member-0"));
  }
  get memberFullName_1() {
    return element(by.id("memberFullName-0"));
  }
  get memberId_1() {
    return element(by.id("memberId-0"));
  }
  get member_1() {
    return element(by.id("member-0"));
  }
  get memberDelete_1() {
    return element(by.id("memberDelete-0"));
  }

  get member_2() {
    return element(by.id("member-1"));
  }
  get memberFullName_2() {
    return element(by.id("memberFullName-1"));
  }
  get memberId_2() {
    return element(by.id("memberId-1"));
  }
  get member_2() {
    return element(by.id("member-1"));
  }
  get memberDelete_2() {
    return element(by.id("memberDelete-1"));
  }
  get deleteModalText() {
    return element(by.id("deleteModalText"));
  }
  get deleteModalYesButton() {
    return element(by.id("deleteModalButton-Yes"));
  }
  get deleteModalNoButton() {
    return element(by.id("deleteModalButton-No"));
  }

  member(memberNumber) {
    return element(by.id(`member-${memberNumber - 1}`));
  }
  memberDelete(memberNumber) {
    return element(by.id(`memberDelete-${memberNumber}`));
  }

  //Function  used in encapsulation
  async verifyMemberListPage(membersCount) {
    await expect(this.memberListHeader).toHaveText("Members");
    await expect(this.addMemberIcon).toBeVisible();
    switch (membersCount) {
      case 2:
        await expect(this.memberFullName_2).toHaveText(
          `${testData.getName_2()} ${testData.getSurname_2()} -`
        );
        const idhere_2 = await Utilities.getElementText(this.memberId_2);
        testData.setId_2(idhere_2);
        chaiExpect(
          await Utilities.getElementText(this.memberFullName_2)
        ).to.include(testData.getSurname_2());
      case 1:
        await expect(this.noResultText).not.toBeVisible();
        await expect(this.memberFullName_1).toHaveText(
          `${testData.getName_1()} ${testData.getSurname_1()} -`
        );
        const idhere_1 = await Utilities.getElementText(this.memberId_1);
        testData.setId_1(idhere_1);
        chaiExpect(
          await Utilities.getElementText(this.memberFullName_1)
        ).to.include(testData.getSurname_1());
        break;
      case 0:
        await expect(this.noResultText).toHaveText(
          "No Members added in the list"
        );
        break;
      default:
        assert.fail(`The entered ${membersCount} is invalid count for member`);
    }
  }
  async deleteMember(member) {
    await this.memberDelete(member - 1).tap();
    await expect(this.deleteModalText).toHaveText(
      `Are you sure you want to delete ${BaseData.getName(
        member.toString()
      )} ${BaseData.getSurname(member.toString())}?`
    );
    await expect(this.deleteModalYesButton).toHaveText("YES");
    await expect(this.deleteModalNoButton).toHaveText("NO");
    await this.deleteModalYesButton.tap();
  }
}

export default new MemberListPage();
