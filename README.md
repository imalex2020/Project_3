# Project_3 Cypress Framework

## Overview
This Cypress framework focuses on testing the booking function of Project 3's frontend. It contains test cases that validate various scenarios within the booking form.

### Test Cases
1. **Test Case 01:** Validates the default state of the booking form.
2. **Test Case 02:** Validates the form when a round trip is selected.
3. **Test Case 03:** Validates the booking for 1 passenger and one way.
4. **Test Case 04:** Validates the booking for 1 passenger and round trip.
5. **Test Case 05:** Validates the booking for 2 passengers and one way.

## Project Setup

### Prerequisites
- Node.js installed ([Download Node.js](https://nodejs.org/))

### Installation

1. **Clone the Repository:**
    ```bash
    git clone git@github.com:imalex2020/Project_3.git
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

### Running Tests

1. **Open Cypress Test Runner:**
    ```bash
    npx cypress open
    ```

2. **Select Test to Run:**
    - Once Cypress Test Runner opens, select the desired test file (`project_spec.js`) from the list displayed.

3. **View Test Execution:**
    - Cypress Test Runner will execute the selected test, and you can view the test execution in the Cypress window.

## Project Structure

- **Fixtures:** Contains the `example.json` file representing different test data.
- **Pages:** Includes the `project.js` file defining the elements and actions on the booking page.
- **Commands:** Defines custom Cypress commands used in the test cases.
- **Configurations:** Specifies Cypress configurations for viewport size, environment variables, and test retries.

### Custom Commands

Custom Cypress commands:
- `nextDay`: Advances the date by a specified number of days.
- `nextMonth`: Advances the date by a specified number of months.
