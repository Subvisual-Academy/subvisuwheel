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

### Active Admin customization

This app allows for some customization, hosted in https://subvisuwheel.herokuapp.com/admin. You can create an admin account by running the console with `heroku run bin/rails c -a subvisuwheel` and then `AdminUser.create(email: "email_of_choice, password: password_of_choice")`.

In exact terms, in this back-office you are able to: 

* Manage a list of companies that can use it (add, edit, remove)
* Select one company at a time to use it (the selection of another company will automatically deselect the previously selected)
* Customize socials and associate each one with a company (the company must already exists for this).
    * If you delete a company from the back-office, the socials associated with it will also be deleted.
* Manage user information received through the application (add, remove, edit)
* Customize the prizes that can be attributed in the wheel (add, remove, edit - with some conditions)
    * You can't remove a prize that was already attributed to someone. This is useful to manage what each person has won. So if you try to delete it, it will simply be updated so that it's percentage of chance of being awarded is zero.
* View and edit the terms and conditions link. You shouldn't be able to add a new one, only edit on the existent one. If there is no link, it must be added to the deployed version through the console using `TermsAndCondition.create(link: "your_link_of_choice")`
* Add email templates to send to users, depending on a certain type of prize they have won.
