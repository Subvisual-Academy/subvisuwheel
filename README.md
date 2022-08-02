# Subvisuwheel

App that runs a game where the user is allowed to spin a wheel for prizes.

The backend is built with Ruby on Rails while the frontend is built with React.

## Requirements

- Ruby - 2.7.4
- Rails - 7.0.3
- ProgreSQL - 14.3
- React - 18.2.0
- CORS
- asdf - 0.9.0
- MailCatcher

## How to run

### Backend

The backend is hosted in https://subvisuwheel.herokuapp.com/. However it can be run locally by:

`asdf install`
`bundle install`
`bin/rails server`

### Local frontend

Currently the frontend is hosted in https://subvisuwheel.netlify.app/. To run locally:

`cd frontend/`
`npm install`
`npm start`

### MailCatcher

`gem install mailcatcher` 
`mailcatcher`

### Eslint, Prettier and Rubocop 

`./bin/lint`
