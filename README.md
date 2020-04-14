# Karina

API of Place share app written in [Node.js](https://nodejs.org/)

> There are wonderful things in this world, worthy of our protection. ~ Karina

_Contributors:_

- [@aribambang](https://github.com/aribambang)

## Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed on your machine. If you don't have one, check [here](https://nodejs.org/en/download/)

## Getting started

- `$ git clone https://github.com/aribambang/karina.git karina_folder_name` to clone the repo
- `$ cd karina_folder_name` to go into the project folder

- Run the API in traditional way

  - `$ npm install` to install all dependencies
  - `$ npm run start` to build your source code and run the project

* visit [http://localhost:5000](http://localhost:5000) to check

## API Endpoints

> Places _`/api/places`_

| method   | resource        | description                                           |
| :------- | :-------------- | ----------------------------------------------------- |
| `GET`    | `.../user/:uid` | Retrieve list of all places for a given user id (uid) |
| `GET`    | `.../:pid`      | Get a specific place by place id (pid)                |
| `POST`   | `.../`          | Create a new place                                    |
| `PATCH`  | `.../:pid`      | Update a place by place id (pid)                      |
| `DELETE` | `.../:pid`      | Delete a place by place id (pid)                      |

> Users _`/api/users`_

| method | resource     | description                     |
| :----- | :----------- | ------------------------------- |
| `GET`  | `.../`       | Retrieve list of all users      |
| `POST` | `.../signup` | Create a new user + log user in |
| `POST` | `.../login`  | log user in                     |
