Feature: Swiping can be carried out 
    As a user I can swipe vertically and horizontally

    @actions @swiping @verticalswiping
    Scenario: I can swipe vertically
    Given I tap on the 'Members' section
    When I tap the Add Member Icon
    And I swipe 'formBackground' 'up'
    Then I swipe 'formBackground' 'down'
    And I swipe 'formBackground' 'up' 'slow'
    Then I swipe 'formBackground' 'down' 'slow'
    And I swipe 'formBackground' 'up' 'slow' for 0.5 of the screen
    Then I swipe 'formBackground' 'down' 'slow' for 0.5 of the screen
    
    @actions @swiping @horizontalswiping
    Scenario: I can swipe horizontally
    Given I tap on the 'Cities' section
    When I swipe 'imageBackground-europe' 'left'
    Then I swipe 'imageBackground-europe' 'right'
    And I swipe 'imageBackground-europe' 'left' 'slow'
    Then I swipe 'imageBackground-europe' 'right' 'slow'
    And I swipe 'imageBackground-europe' 'left' 'slow' for 0.5 of the screen
    Then I swipe 'imageBackground-europe' 'right' 'slow' for 0.5 of the screen
    