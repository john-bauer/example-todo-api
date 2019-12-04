# Example To-Do Api

## About
Example To-Do API is a simple rest API for managing items in a to-do list, built with Express.js and Postgres.

## Goals
Building an API from scratch can be tedious and time-consuming. Having a strong boilerplate project can cut down on the configuration and help you focus on getting things done. The goal of this API is to be very simple, flexible, reusable, and production-ready.

## Endpoints
You can view all to-do's, get an individual to-do, create a new to-do, and edit or delete an existing one. Check the `/resources` directory and you'll find two Postman collections (one for dev, and one for the example production environment).

## Live Demo
Before you get set up, you can try it out in production here: https://example-todo-api.herokuapp.com/

## Getting Started (Local)
1. Clone the repository

2. Install project dependencies with  `npm install`

3. Install Postgres

⋅⋅⋅Mac (recommended): Ensure that you have a working installation of  [postgres.app](https://postgresapp.com/).

 ⋅⋅⋅Windows/Linux: Follow instructions from the [official Postgres website](https://www.postgresql.org/download/)

4. From the project directory, run `psql`

5. Run `CREATE DATABASE example_todo_api` to set up the database locally.

6. Connect to the instance with `\c example_todo_api`.

7. Run `\i db/migrations/migration.sql` to create and structure your tables.

8. Run `\i db/seeds/seed.sql` to populate your database with some sample data.

## Heroku Deployment Guide
1. Create a new Heroku app (recommended: connect the app to your own GitHub repository)

2. Ensure that you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed, and that you're signed in.

3. Connect Heroku Postgres as an add-on (Free plan is fine).

4. From your project directory, run `cat db/migrations/migration.sql | heroku pg:psql --app=YOUR_APP_NAME` to set up your database.

5. Run `cat db/seeds/seed.sql | heroku pg:psql --app=YOUR_APP_NAME` to populate it with sample data.


## Contribution & Use
If you have any suggestions, spot a defect, or see improvements that can be made, I'm all ears. Open up a PR or create an issue and we'll work together on making this better.

Remember that the example production environment is available to everyone, and intended to serve as a resource for getting started I'll occasionally re-seed the database but please use it respectfully and avoid massive request volume.

License is MIT. Feel free to use this source code in your own projects.