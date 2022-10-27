Feature: Edit Member
    Members can be edited via the add member form

  Background: I navigate to the Edit Member form
    Given I tap on the 'Members' navigation tab section
    And I tap the Add Member icon

  @members @editmembers
  Scenario Outline: I verify that members can be added through the add member form
    When I fill in the form with:
      | name   | surname | b_day   | b_month   | b_year   | address_one    | address_two    | city      | postcode | country   | start_hour   | start_minute   | member        |
      | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2 | Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
    And The Member List page is correctly displayed for <memberCount> members
    And I tap on the Member number <memberCount>
    And I tap on the Edit Member icon
    Then The Edit Member page is correctly displayed with:
      | name   | surname | b_day   | b_month   | b_year   | address_one    | address_two    | city      | postcode | country   | start_hour   | start_minute   | member        |
      | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2 | Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
    When I fill in the form with:
      | name     | surname | b_day     | b_month     | b_year     | address_one    | address_two    | city      | postcode | country     | start_hour     | start_minute     | member        |
      | <name_2> | Test    | <b_day_2> | <b_month_2> | <b_year_2> | Test Address 1 | Test Address 2 | Test City | test1n   | <country_2> | <start_hour_2> | <start_minute_2> | <memberCount> |
    Then The Show Member page is correctly displayed with:
      | name     | surname | b_day     | b_month     | b_year     | address_one    | address_two    | city      | postcode | country     | start_hour     | start_minute     | member        |
      | <name_2> | Test    | <b_day_2> | <b_month_2> | <b_year_2> | Test Address 1 | Test Address 2 | Test City | test1n   | <country_2> | <start_hour_2> | <start_minute_2> | <memberCount> |
    When I tap the back button
    And The Member List page is correctly displayed for <memberCount> members

    Examples: 
      | name  | b_day | b_month | b_year | country | start_hour | start_minute | name_2    | b_day_2 | b_month_2 | b_year_2 | country_2 | start_hour_2 | start_minute_2 | memberCount |
      | Jose  |    20 |      09 |   1981 | Canada  |         19 |           35 | JoseEdit  |      20 |        09 |     1981 | Nepal     |           19 |             35 |           1 |
      | Rahul |    20 |      09 |   1981 | Canada  |         19 |           35 | RahulEdit |      20 |        09 |     1981 | Nepal     |           19 |             35 |           2 |
