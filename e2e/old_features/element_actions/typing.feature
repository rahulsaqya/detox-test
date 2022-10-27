Feature: Typing into input elements

    As a user I can type in suitable elements

    @actions @typing
    Scenario: I can type in an input field
        Given I tap on the 'Members' section
        When I tap the Add Member Icon
        Then I type 'Jose' as name and 'Test' as surname
        And I replace 'Test' as name and 'Jose' as surname
        Then I enter 'Jose' as name and 'Test' in surname
