import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import MemberListPage from "../../pageObjects/MemberListPage";
import FormPage from "../../pageObjects/FormPage";
import ShowMemberPage from "../../pageObjects/ShowMemberPage";
setDefaultTimeout(120 * 1000);
// When The Member List page is correctly displayed for 0 members
When(
  "The Member List page is correctly displayed for {int} members",
  async (membersCount) => {
    await MemberListPage.verifyMemberListPage(membersCount);
  }
);

Then("I tap the Add Member icon", async () => {
  await MemberListPage.addMemberIcon.atIndex(0).tap();
});

Then("The Add Member page is correctly displayed", async () => {
  await FormPage.verifyAddMemberPage();
});

// I fill in the form with:
When("I fill in the form with:", async (formData) => {
  await FormPage.fillInForm(formData.hashes()[0]);
  await FormPage.saveMemberButton.tap();
});

// And I tap on the Member number <memberCount>
Then("I tap on the Member number {int}", async (memberNumber) => {
  await MemberListPage.member(memberNumber).tap();
});

// Then The Show Member page is correctly displayed with:
Then("The Show Member page is correctly displayed with:", async (formData) => {
  await ShowMemberPage.verifyShowMemberPage(formData.hashes()[0]);
});
// Then The Show Member page is correctly displayed with:
Then("The Edit Member page is correctly displayed with:", async (formData) => {
  await FormPage.verifyEditMemberPage(formData.hashes()[0]);
});
// And I tap on the Edit Member icon
Then("I tap on the Edit Member icon", async () => {
  await ShowMemberPage.editMemberIcon.tap();
});
// Then I tap on delete icon of <memberCount> member
Then("I tap on delete icon of <memberCount> member", async (member) => {
  await ShowMemberPage.editMemberIcon.tap();
});

// Then I delete Member number <memberCount>
When("I delete Member number {int}", async (member) => {
  await MemberListPage.deleteMember(member);
});
