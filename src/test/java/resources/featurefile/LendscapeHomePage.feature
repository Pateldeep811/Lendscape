Feature: HomePageMenuTest
  As a user i should navigate to menu page by click.

  Scenario: verify i should able to click Request a demo Button
    Given I am on home page.
    When I click on Request a demo button.
    Then I am navigated on Request a demo Form.

  Scenario Outline: verify i should navigate inside the module page.
    Given I am on home page.
    When I MouseHover on top menu "<About>"
    And I am navigated on About Dropdown Menu.
    Examples:
      | About        |
      |Company Overview    |
      |Leadership   |
      |Our Clients |
      |Contact     |
      |Trust and Compliance  |
