Feature: Delete Member
    Members can be deleted via the member list screen

  Background: I navigate to the Edit Member form
    Given I tap on the 'Members' navigation tab section
    And I tap the Add Member icon

  @members @deletemembers
  Scenario Outline: I verify that members can be added through the add member form
    When I fill in the form with:
      | name   | surname | b_day   | b_month   | b_year   | address_one    | address_two    | city      | postcode | country   | start_hour   | start_minute   | member        |
      | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2 | Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
    And The Member List page is correctly displayed for <memberCount> members
    Then I delete Member number <memberCount>
    And The Member List page is correctly displayed for <memberCount_2> members

    Examples: 
      | name       | b_day | b_month | b_year | country | start_hour | start_minute | name_2   | b_day_2 | b_month_2 | b_year_2 | country_2 | start_hour_2 | start_minute_2 | memberCount | memberCount_2 |
      | TestName_1 |    20 |      09 |   1981 | Canada  |         19 |           35 | JoseEdit |      20 |        09 |     1981 | Nepal     |           19 |             35 |           1 |             0 |
