# example-todo-api

## Local Setup
1. Clone the repository

2. Install project dependencies with  `npm install`

3. Install Postgres

⋅⋅⋅Mac (recommended): Ensure that you have a working installation of  [postgres.app](https://postgresapp.com/).

 ⋅⋅⋅Windows/Linux: Follow instructions from the [official Postgres website](https://www.postgresql.org/download/)

4. From project directory, run `psql`

5. Run `CREATE DATABASE example_api_service` to set up the database locally.

6. Connect to the instance with `\c example_api_service`.

7. Run `\i db/migrations/migration.sql` to create and structure your tables.

8. Run `\i db/seeds/seed.sql` to populate your database with some sample data.