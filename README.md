# RESTful Tasks Manager Node.js

Basic example of tasks manager application, which uses React and Hapi, Sequelize, MySQL backend running on top Node.js

Demo: [https://asana-v2.herokuapp.com/](https://asana-v2.herokuapp.com/)

![alt text](https://raw.githubusercontent.com/mamapi/tasks-manager/master/screens/list.png)

## Requirements
  * [Node.js](https://nodejs.org/) v8.11 or newer
  * [Yarn](https://yarnpkg.com/) package 


## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/mamapi/tasks-manager.git
cd tasks-manager
yarn install
```
## Development

### MySQL config

``` bash
# config locate in: server/config/database.js
module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'tasks_dev',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'tasks_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  }
}

# create development database
cd server/
./node_modules/.bin/sequelize db:create

# create test database
cd server/
NODE_ENV=test ./node_modules/.bin/sequelize db:create

# run migrations
cd server/
NODE_ENV=test ./node_modules/.bin/sequelize db:migrate
```

### Develop Commands

```bash
# for working on the server
(cd server && yarn start)

# for working on the client
(cd client && yarn start)

# for working on both server and client
yarn start

# run api tests
(cd server && yarn test)
```

## REST resource

### task resource

* **GET** - get 1 or more tasks

  * [.../tasks]() - list all available tasks 

  * [.../tasks/{id}]() - get task by given id
  
  * [.../tasks/{id}/history]() - get task history by given id

* **POST** - add new one

  * [.../tasks]() - data sent inside body request

* **PUT** - update an existent one

  * [.../tasks/{id}]() - data sent inside body request

* **DELETE** - remove task by given id

  * [.../tasks/{id}]() 

* **PUT** - change task status by given id

  * [.../tasks/{id}/status]() - new status sent inside body request

  ## To Do
  - [x] RESTful using Hapi
  - [x] CRUD on task list
  - [x] ORM Sequelize
  - [x] UI using React
  - [x] History table 
  - [x] Transaction handle
  - [x] Multi-language capability
  - [ ] Pagination
  - [ ] Filtering
  - [ ] Front-end validation
  - [ ] Front-end errors handling
  - [x] Heroku deploy
