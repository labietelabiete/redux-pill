`#javascript` `#reactjs` `#redux` `#master-in-software-engineering`

# First notes

## Pages

- Home: Contains general structure, search component
- Dashboard: Contains the filters and filters result

## Components

- Search bar
- Filters

## Search bar

- After press search button, it should redirect to the dashboard with the search string

## Filters form

1. Type of home
   - Flat/Apartment
   - House
   - Duplex
   - Penthouse
2. Bedrooms
   - 1, 2, 3, 4 or +
3. Bathrooms
   - 1, 2, 3 or +
4. Equipment
5. Conditions
   - New homes
   - Good condition
   - Needs renovation
6. Price Range (min, max)
7. Publication date
8. More Filters
   - Pets allowed
   - Lift
   - Garden
   - Air conditioning
   - Swimming pool
   - Terrace

# Extras

Save filters on local Storage

Save filters on website url

Debounce mechanism

# Redux Pill

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> In this project, you will learn how to set up the Redux library into a ReactJS project, save a global state into it and use its middlewares to perform async actions.
>
> To achieve this goal, you will implement a real state portal with the functionality of search and filtering properties.

## Index <!-- omit in toc -->

- [First notes](#first-notes)
  - [Pages](#pages)
  - [Components](#components)
  - [Search bar](#search-bar)
  - [Filters form](#filters-form)
- [Extras](#extras)
- [Redux Pill](#redux-pill)
  - [Requirements](#requirements)
  - [Repository](#repository)
  - [Technologies used](#technologies-used)
  - [Project delivery](#project-delivery)
  - [Resources](#resources)

## Requirements

- You must use React Router for the routing of the App
- On the home page, you must save the search field into Redux so you can retrieve it later when going to the filtering page.
- For asynchronous calls to the backend API, you should use the Redux Thunk library.
- All the code, including comments, needs to be written in English
- You must use semantic HTML5 elements for all the contents of the application, main, section, form, input types, etc

## Repository

First of all you must fork this project into your GitHub account.

To create a fork on GitHub is as easy as clicking the “fork” button on the repository page.

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

## Technologies used

\* HTML

\* CSS

\* JS

\* ReactJS

\* Redux

\* Redux Thunk

\* LocalStorage

## Project delivery

To deliver this project you must follow the steps indicated in the document:

- [Submitting a solution](https://www.notion.so/Submitting-a-solution-524dab1a71dd4b96903f26385e24cdb6)

## Resources

**This section include all the main resources that the students should check.**

**Here are some examples of resources:**

- [Getting Started with React](https://reactjs.org/docs/getting-started.html)
- [Getting Started with Redux](https://redux.js.org/introduction/getting-started)
- [Redux fundamentals](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)
- [Redux thunk](https://github.com/reduxjs/redux-thunk)
- [Debounce](https://www.freecodecamp.org/espanol/news/curso-debounce-javascript-como-hacer-que-tu-js-espere/)
