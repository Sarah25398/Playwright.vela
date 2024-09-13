Feature: Example Feature
  Background: Background name
   Given I test login page
  Scenario: Login with invalid data 
    When I enter invalid username and password
    And  I click onto submit button 
    Then I should see an error message
  Scenario: Login with valid data 
    When I enter valid username and password
    And  I click onto submit button 
    Then I should be redirected to the homepage 
  