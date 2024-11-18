# Project Overview
This project is a web-based platform designed to display test results for each major release of genome sequencing instrumentation products. The website lets users view results for various test categories associated with different release versions. 

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

Next, install hatch and uv using pip. Once that has been done run the command: `hatch run uv sync`, this will create a virtual environment and synchronize your environment with the dependencies specified in the project configuration. <br>

To be able to run the code you need to be in src folder, so run `cd src`. 

Finally, run `hatch run dev` this will run the main.py file. You will be able to see an IP address in the terminal output if you copy and paste that IP address into the browser, output of our program will be visible. 

## Folder Structure

.
├── .github/workflows/     <br>
│   └── test.yml <br>
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
├── Demo 2 Notes.txt                               <br>
├── Demo-1-Steps.txt                                <br>
├── LICENSE.txt                                     <br>
├── README.md                                      
├── database.db  <br>
├── pyproject.toml  <br>
└── uv.lock  <br>


## License

`Results-Presentation` is distributed under the terms of the [MIT](https://spdx.org/licenses/MIT.html) license.
