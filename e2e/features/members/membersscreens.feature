Feature: All member screens are correctly displayed
    As a user with no member, I can navigate through the different members screens

  @members @memberlist @navigation
  Scenario: Verify that the Member List screen is correctly displayed
    Given I tap on the 'Members' section
    When The Member List page is correctly displayed for 0 members
    And I tap the back button
    Then The Home page is correctly displayed

  @members @addmember @navigation
  Scenario: Verify that the Add Member screen is correctly displayed
    Given I tap on the 'Members' navigation tab section
    When I tap the Add Member icon
    Then The Add Member page is correctly displayed
    When I tap the back button
    And The Member List page is correctly displayed for 0 members
    And I tap on the 'Home' navigation tab section
    Then The Home page is correctly displayed
