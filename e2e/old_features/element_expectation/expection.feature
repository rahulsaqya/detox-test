Feature: Element exceptions

    Expectations on elements can be conducted for different properties
    
    # Background: I navigate to the Cities section
    
    
    @expectations @visibility
    Scenario: I can expect elements to be visible or to not visible
    Given I tap on the 'cities' section
    When I verify that first image of the row is visible
    Then I verify that the last image of the row is not visible

    @expectations @existence
    Scenario: I can expect elements to exist or to not exist
    Given I tap on the 'cities' section
    When I verify that the last image of the row exists
    And I verify that the water counter doesn't exist
    Then I verify that the asia image does exist

    @expectations @content
    Scenario: I can expect elements to have a specific text, label or ID
    Given I tap on the 'members' section
    When I expect the Member List header text to be 'Members'
    And I expect the Add Member button to have 'addMemberLabel' as label
    And I expect the Add Member button to have 'addMemberIcon' as id