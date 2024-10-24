# ToDo

This file outlines the improvements and shortcuts that were taken due to time constraints.

## 1. End-to-End Testing
End-to-end (E2E) tests were partially implemented. 

I intended to develop these tests using the Behavior-Driven Development (BDD) approach. 
These tests should be added to ensure that the entire workflow functions correctly.

Some gherkin scenarios were created (and only one was implemented) .
## 2. Unit Testing
Unit tests were partially implemented. 

## 3. Translation & externalize wording
Add support for translations using i18n (for multilingual functionality) or, at least, externalize wording into config file to avoid hardcoding static text in the code 

## 4. Accessibility
Basic accessibility (A11Y) was not fully considered due to time constraints.
The following accessibility improvements are required:
- Ensure keyboard navigation is fully supported.
- Implement ARIA labels and roles for all interactive elements.

## 5. Refactoring the Convertor Component
The Convertor component could be refactored to improve its maintainability and modularity. 
The logic for exchange rate calculations and form handling can be extracted into separate reusable components (Inputs..).

## 6. Form Control Enhancements
Input validation is currently basic. Form controls need to be enhanced to handle errors (negative values....)
## 7. History Table Improvements
Improve the update of the history table by adding a new entry **only when the user completes their input** (using debounce or onBlur).

The historical conversions table could be further improved in both design and functionality.
