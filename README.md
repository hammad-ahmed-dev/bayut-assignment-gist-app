<h1 align="center">App that fetches (public) user gists from Github <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" fill="#fff" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg></h1>

## Local Setup
1. Run either `npm i`, `npm install` or `yarn` to install dependancies.
2. Run `npm start` or `yarn start` to run the app.

## App that fetches (public) user gists from Github

It uses Github's [Octokit REST API](https://octokit.github.io/rest.js/v18/)

### Features
* Create a list of public gist available.
* Search Gists for the username.
* Use state management to save data and not make duplicate calls.
* Show all the relevant meta data available in the response.
* We do expect you to create and use proper component hierarchy keeping service and components exclusive.8(
* Please use git version control.

### Good to have
* Proper handling of error message and no results screens.
* Clean UI similar to [this](https://raw.githubusercontent.com/dubizzle-onboarding/gistapi/main/design_inspiration.png).
* Unit Tests.
* Optimised rendering.
* Code comments.
* Type checking of the params.

### Thank you
We thank you for your effort and time and good luck.
