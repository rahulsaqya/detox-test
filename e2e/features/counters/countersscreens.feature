Feature: All counters screens are correctly displayed

    As a user, I can press the different counters buttons

    @counters 
    Scenario: Verify that the Member List screen is correctly displayed
        Given I tap on the 'Counters' section
        When The Counter page is correctly displayed
        Then I tap the back button