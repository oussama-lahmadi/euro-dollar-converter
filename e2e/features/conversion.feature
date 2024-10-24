Feature: Currency Conversion

  Background: The euro-dollar-converter App is running

  Scenario: Automatic Exchange Rate Update
    Given the exchange rate is initialized to 1.1
    When I wait 3 seconds
    Then the exchange rate should randomly increase or decrease by 0.05

  Scenario: EUR to USD Conversion
    Given the current exchange rate is 1.1
    When the user enters 100 EUR
    Then the displayed amount in USD should be 110 USD

  Scenario: Switch EUR/USD Conversion
    Given the exchange rate is 1.1
    When the user enters 110 USD
    And the switch is set to USD
    Then the displayed amount in EUR should be 100 EUR

  Scenario: Set Fixed Exchange Rate
    Given the current exchange rate is 1.1
    When the user sets the exchange rate to 1.2
    Then conversions should use the fixed rate of 1.2

  Scenario: Disable Fixed Exchange Rate when variation exceeds 2%
    Given the real exchange rate is 1.1 and the fixed rate is 1.5
    When the real rate exceeds 1.122 or drops below 1.078
    Then the fixed rate should be disabled and the real rate used for conversions

  Scenario: Display Conversion History
    Given The user made more than 5 conversions
    When the user views the history
    Then the last 5 conversions should be displayed

