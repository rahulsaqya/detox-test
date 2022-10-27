Feature: Element matchers

    Elements can be located using the various matchers supported by Detox

    Background: I navigate to the Counters section
        Given I tap on the Counters section by text

    @matchers @text
    Scenario: I can locate elements by text
        When I tap on the Water counter section by text
        And I tap on the Electricity counter section by text
        And I tap on the Gas counter section by text
        Then I tap on the Broadband counter section by text

    @matchers @label
    Scenario: I can locate elements by label
        When I tap the Home navigation section by label
        And I tap on the Counters section by text
        Then I tap on the Water counter by label

    @matchers @id
    Scenario: I can locate elements by id
        When I tap on the Water counter by id
        And I tap on the Electricity counter by id
        And I tap on the Gas counter by id
        Then I tap on the Broadband counter by id

    @matchers @multiple
    Scenario: I can locate elements by multiple matchers
        When I tap on the Water counter title by type and text
        And I tap on the Electricity counter by traits and text
        And I tap on the Gas counter by ancestor id and descendant text
        Then I tap on the Broadband counter by descendant text and ancestor type
        And I tap the back button