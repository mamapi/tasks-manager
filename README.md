# RESTful Tasks Manager Node.js

Basic example of tasks manager application, which uses React and Hapi, Sequelize backend ruuning on top Node.js

![alt text](https://raw.githubusercontent.com/mamapi/tasks-manager/master/screens/list.png)

## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/mamapi/tasks-manager.git
cd tasks-manager
npm install

cd client
npm install
```

## Develop Commands
```bash
# run server and client
npm run dev

# run api tests
npm run test
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
  - [ ] Deploy
