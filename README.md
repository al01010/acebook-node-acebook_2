# Acebook

## User Stories

### These are the user stories we wrote for our project:

MVP
```
As a user,
so that I can use Acebook,
I want to sign up with an account.
```

```
As a user,
so that I can return to my Acebook account,
I want to log in to my account.
```

```
As a user,
so that I can tell people about my day,
I want to create a new post.
```

```
As a user,
so that I can see what people are up to,
I want to be able to see all the posts on my timeline.
```

```
As a user,
so that I can make changes to what I have posted,
I would like to update my posts.
```

```
As a user,
so that I can remove a post if I've changed my mind,
I want to be able to delete a post.
```

Extras:

```
As a user,
so that I can see when people are posting,
I want to see the date at which the message was posted.
```

```
As a user,
so that I can see when people are updating their posts,
I want to see the date at which the message was updated.
```

```
As a user,
so I can keep up-to-date,
I want to see the posts in reverse chronological order
```

```
As a user,
so that people who are not signed up cannot see my posts,
I don’t want those without an account to access any pages except the homepage. 

```

```
As a user,
so that I can comment on other peoples post,
I want to add a comment to a post 

```

```
As a user,
so that I can delete my comment, 
I want to delete a comment to a post

```

```
As a user, 
so I can keep my profile up to date, 
I would like to edit my profile information.
```

```
As a user,
so that people can see who I am,
I would like to set a profile photo.
```

```
As a user, 
So that I can share my holiday pictures, 
I want to be able to post an image with my message
```

```
As a user, 
so that other people cannot edit and delete my posts,
I want to be the only person able to do this.
```

## Technologies

These are the technologies we used for our Acebook project:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.

## Card wall

https://trello.com/b/ibUZEbpH/acebook2

## Project setup

### Install Node.js

1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
1. Open a new terminal
1. Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `12.14.1`.
    ```
    nvm install 12.14.1
    ```

### Set up your project

1. Fork this repository
1. Rename your fork to `acebook-<team name>`
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.2
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.2
    ```

### Start

1. Start the server
    ```
    npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)

### Test

* Run all tests
    ```
    npm test
    ```
* Run a check
    ```bash
    npm run lint              # linter only
    npm run test:unit         # unit tests only
    npm run test:integration  # integration tests only
    ```

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.
```
npm run start:test
```
This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.