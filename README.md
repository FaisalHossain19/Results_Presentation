# Project Overview
This project is a web-based platform designed to display test results for each major release of genome sequencing instrumentation products. The website lets users view results for various test categories associated with different release versions.
We are currently working on the frontend design to integrate into the backend.
## Features
- Display test results for different release versions.
- Include results for various test categories such as:
  - Smoke Test
  - Regression Test
  - Stress Test
  - Performance Test
  - Integration Test
- Dynamic updates for each new release and associated test results.
- Backend connected to a database for querying and retrieving test results.
- User-friendly interface with buttons linking to individual test result pages.

## Table of Contents
Technologies Used <br>
Instructions for Setup and Running <br>
Folder Structure <br>
License<br>


## Technologies Used
The project uses the following dependencies, managed via `hatch` and `uv`:

- `fastapi[all]>=0.115.4` — FastAPI framework for building APIs.
- `passlib[bcrypt]>=1.7.4` — For secure password hashing.
- `pydantic-settings>=2.6.1` — Powerful databases parsing tool
- `pyjwt>=2.9.0` — JSON Web Token (JWT) creation and validation.
- `python-dotenv>=1.0.1` — Manage environment variables.
- `ruff>=0.7.3` — Fast Python linter and formatter.
- `sqlalchemy>=2.0.36` — ORM for database management.
- `sqlmodel>=0.0.22` — Combines SQLAlchemy and Pydantic for simpler database models.

## Instructions for Setup and Running
To set up the project locally, follow these steps: <br>
Clone the repository-
In the terminal copy and paste the following: `git clone https://github.com/FaisalHossain19/Results_Presentation.git` <br>

TO RUN (assuming database is setup):
Install hatch and uv
hatch run uv sync
Hatch run dev
IN ANOTHER TERMINAL
cd to next_js_frontend
Npm install
Npm run dev
access port localhost:3000

Finally, run `hatch run dev` this will run the main.py file. You will be able to see an IP address in the terminal output if you copy and paste that IP address into the browser, output of our program will be visible.

## Initialization using Docker + Postgres
Access the repository on your machine.
When on the root folder, run `docker-compose up --build` to add the containers to your Docker desktop
From here, open your Docker Desktop and open the frontend container port (localhost:3000)

## Folder Structure

.
├── .github/workflows/     <br>
│   └── test.yml <br>
├── next_js_frontend/ <br>
|   ├── Dockerfile <br>
|   ├── public/ <br>
|   |   ├── *.svg <br>
|   ├── src/ <br>
|   |   ├── app/ <br>
|   |   |   ├── pages/ <br>
|   |   |   ├── components/ <br>
|   |   |   ├── hooks/ <br>
├── src/           <br>
│   ├── app/        <br>
│   │   ├── core
│   │   ├── models                      #Contains data models like users, test_results etc   <br>
│   │   ├── routes                      #Contains API endpoints    <br>
│   │   ├── schemas                     #Contains mapping between data models and python objects  <br>
│   │   ├── services                         <br>
│   │   ├── __about__.py                     <br>
│   │   ├── __init__.py                       <br>
│   │   ├── crud.py           # Contains CRUD operations that are being performed on data models    <br>
│   │   ├── dependencies.py                         <br>
│   │   └── main.py                      # Application entry point          <br>
│   ├── __init__.py                            <br>
│   └── database.db                             <br>
├── tests                                     <br>
├── .env                                        <br>
├── .gitignore                                   <br>
├── .pre-commit-config.yaml                        <br>
├── LICENSE.txt                                     <br>
├── README.md <br>
├── Dockerfile <br>
├── docker-compose.yml <br>
├── pyproject.toml  <br>
└── uv.lock  <br>

## Progress
We are now working at integrating the backend into this project to display the work that our backend is doing.
## License

`Results-Presentation` is distributed under the terms of the [MIT](https://spdx.org/licenses/MIT.html) license.
