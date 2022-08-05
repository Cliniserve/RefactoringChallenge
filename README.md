# Refactoring challenge

Here you can find example of overcomlicated React UI component implementation. The goal of the challenge is to come up with a plan for refactoring.

### Input

This project implements a simplified version of Cliniserve Flow app onboarding location screen. Part of Cliniserve Flow app is communication between nurses and patients. The screen in this example is where nurses can restrict a location area from which they would like to receive patient requests. By checking a bed nurses confirm they will care about patients located at that bed.

Hospital location structure is the following:
* Areas
  * Rooms
    * Beds

### High-level problems

1. Checkboxes are not working reliably
2. Component is not easily extendable: hard to add a level between areas and rooms, hard to add a checkbox "Check/Uncheck all"
3. Making changes to existing codebase is tedious and time-consuming
4. No trust in the code because it's not covered with autotests

### Deliverables

1. List of bad design approaches
2. List of proposals how to improve the design of the code

# Further notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
