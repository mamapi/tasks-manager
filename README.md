# RESTful Tasks Manager Node.js

Basic example of tasks manager application, which uses React and Hapi, Sequelize backend ruuning on top Node.js

## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/mamapi/task-manager.git
cd task-manager
npm install
```

## Commands

## REST resource

### task resource

* **GET** - get 1 or more tasks

  * [.../tasks]() - list all available tasks with pagination support `?page=${num}&size=${length}`

  * [.../tasks/{id}]() - get task by given id

* **POST** - add new one

  * [.../tasks]() - data sent inside body request

* **PUT** - update an existent one

  * [.../tasks/{id}]() - data sent inside body request

* **DELETE** - remove task by given id

  * [.../tasks/{id}]() 

* **PUT** - change task status by given id

  * [.../tasks/{id}/status]() - new status sent inside body request
  