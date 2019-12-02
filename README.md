# example-todo-api

## Live Demos
Try API here: https://example-todo-api.herokuapp.com/

## Local Setup
1. Clone the repository

2. Install project dependencies with  `npm install`

3. Install Postgres

⋅⋅⋅Mac (recommended): Ensure that you have a working installation of  [postgres.app](https://postgresapp.com/).

 ⋅⋅⋅Windows/Linux: Follow instructions from the [official Postgres website](https://www.postgresql.org/download/)

4. From project directory, run `psql`

5. Run `CREATE DATABASE example_todo_api` to set up the database locally.

6. Connect to the instance with `\c example_todo_api`.

7. Run `\i db/migrations/migration.sql` to create and structure your tables.

8. Run `\i db/seeds/seed.sql` to populate your database with some sample data.

## Heroku Deployment Instructions
1. Create a new Heroku app (recommended: connect the app to your own GitHub repository)

2. Ensure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed, and you're signed in.

3. Connect Heroku Postgres as an add-on (Free plan is fine).

4. From your project directory, run `cat db/migrations/migration.sql | heroku pg:psql --app=YOUR_APP_NAME` to set up your database.

5. Run `cat db/seeds/seed.sql | heroku pg:psql --app=YOUR_APP_NAME` to populate it with sample data.