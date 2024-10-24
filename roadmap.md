# RoadMap

## 1. User Input Error Handling
- **Ticket**: Add user error handling ( if the user enters an invalid value, show an appropriate error message).
- **Example**: "Invalid value entered. Please enter a positive number."

## 2. External API Integration for Live Exchange Rates
- **Ticket**: Integrate an external API to fetch live exchange rates instead of simulating the rate changes.

## 3. Support for Other Currencies
- **Ticket**: Add the ability to convert currencies other than EUR and USD.
- **Detail**: Allow the user to select a source currency and a target currency from multiple options.

## 4. Support Multi Language
- **Ticket**: Add the ability to support multiple languages in the application.
- **Detail**: Allow the user to select their preferred language, using a translation library like i18n to manage text dynamically.

## 5. Exchange Rate History Chart
- **Ticket**: Add a real-time chart showing the exchange rate for selected currencies (ex: EUR/USD) variation over time.
- **Detail**: 
  - Use a data visualization library (e.g., Chart.js or D3.js).
  - Allow users to select a custom date range to display the exchange rate history.

  