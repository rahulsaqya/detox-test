Feature: The different Pickers can be interactied with on both operating systesms

    Datepickers, Pickers and Time Pickers can be used in Detox

    Background: I navigate to the Add a Member screen
    Given I tap on the 'Members' section
    And I tap the Add Member Icon

    @pickers @Datepickers
    Scenario: I can interact with the DatePickers and Pickers
        When I enter '06' '02' '2006' as Date of Birth
        And I select 'Thursday' as Start Day
        And I select 'Nepal' as Country swiping 'up'
        And I enter '17' '35' as Start Time
        