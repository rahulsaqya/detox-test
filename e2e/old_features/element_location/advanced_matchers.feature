Feature: Advanced matchers

    Elements can be matched dynamically and navigation elements can be located

    @advancedmatchers @dynamic
    Scenario: Home section can be matched dynamically
        Given I tap on the "<section>" section 
        
        Examples:
            | section |
            | counters |
            | members |
            | cities |
            | animation  |
            | extras |

    @advancedmatchers @list
    Scenario: List element can be matched dynamically
        Given I tap on the 'Cities' section
        Then I tap on the "<continent>" title and image

        Examples:
            | continent |
            | europe |
            | USA/CANDA |
            | asia |

    @advancedmatchers @headers
    Scenario: I can match elements in the navigation headeres
        Given I tap on the 'Members' section
        Then I tap the Add Member Icon

    @advancedmatchers @navigationtab
    Scenario: I can locate elements in the navigation tabs
        Given I tap on the "<nav>" navigation tab
        
        Examples:
            | nav |
            | home |
            | cities |
            | members |

    @advancedmatchers @navigationtaping
    Scenario: I can tap home, cities, members
        Given I tap on the "<nav1>" navigation tab
        And I tap on the "<nav2>" navigation tab
        And I tap on the "<nav3>" navigation tab
        Then I tap on the "<nav4>" navigation tab

        Examples: 
        | nav1 | nav2 | nav3 | nav4 |
        | cities | members | cities | home |
        | members | home | cities | home |
        


    