# Tech. Assessment, Adb

This project was bootstrapped with Create React App in order to focus on the content instead of setting up the tool-chain (Webpack+Babel) etc.

## Assignment

The idea is that you spend 2 to 4 hours on building a small application with the next requirements:

We would like you to create an Address Book & Contacts application using the following technologies:

- Front-end written in HTML, CSS and JavaScript (you can use any JS based framework, like Angular, React, etc. But no library for CSS or components).
- Use any State Management library you like.
- Mock the api of https://randomuser.me/ and use the mocked api to get the data of the first contact in the application.
- At least 50% code coverage of your components code unit-tested
- Commit the assignment to github (or other git repo) for later review.

Functional wise it should be possible to:

- Visualize multiple contacts on an overview page with 2 different statuses ("Work" or "Private").
- Show at least the name, email, phone number and status of each contact.
- Add a new contact.
- Delete a contact.
- Edit a contact.
- The state of the contacts and the contact list should still be available after reloading the application. After reloading you no longer need to call the api if there are already contacts in the list.

The goal is to get a better understanding of your level of JavaScript knowledge and way of thinking.

## Requirements Checklist

- [x] No off-the-shelf ui-components / styling
- [x] Mock the api of https://randomuser.me/ to get the data of the first contact
- [~] test-coverage of >= 50% of components: Notes -> hit a bug with React 17 as commented in the only test file. This proved to be a big time sink so test coverage is limited as a result. Will happily discuss in person how I would have proceeded otherwise.
- [x] Visualize multiple contacts on an overview page with 2 different statuses ("Work" or "Private").
- [x] Show at least the name, email, phone number and status of each contact.
- [x] Add a new contact
- [x] Delete a contact.
- [x] Edit a contact.
- [x] Persistent storage (The state of the contacts and the contact list should still be available after reloading the application. After reloading you no longer need to call the api if there are already contacts in the list.)

## Available Scripts

In the project directory, you can run:

### `yarn install`

and then:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
