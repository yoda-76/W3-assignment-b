# Task Management Application

This is a simple task management application that allows users to register, log in, and manage their tasks.

## Video
This is a screen recording of the todo app running locally
https://www.loom.com/share/420dbdcf739d489cb049a7fdfa1d97a6?sid=c826b8eb-2c2e-47d4-9f71-380f5a099c34


## Backend deployed link

You can test the api with these end points

1. Login:
```javascript
const response = await fetch("https://w3-assignment-b.onrender.com/api/sessions", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept":"/"
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password
                })
            });
```

2. Register:
```javascript
const response = await fetch("https://w3-assignment-b.onrender.com/api/users/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept":"/"
                },
                body: JSON.stringify({
                    name: form.username,
                    email: form.email,
                    password: form.password
                })
            });
```
3. Post Task:
```javascript
const response = await fetch("https://w3-assignment-b.onrender.com/api/task", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept":"/",
                    "access-token":sessionStorage.getItem("access-token")
                },
                body: JSON.stringify({
                    title: form.title
                })
            });
```

4. delete a task:
```javascript
const response = await fetch(`https://w3-assignment-b.onrender.com/api/task/${taskId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept":"/",
                    "access-token":sessionStorage.getItem("access-token")
                }
            });
```
5. update task:
```javascript

const response = await fetch(`https://w3-assignment-b.onrender.com/api/task/${e.target.getAttribute("taskid")}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept":"/",
                    "access-token":sessionStorage.getItem("access-token")
                },
                body: JSON.stringify({
                    change:{completed}
                })
            });
```

6. get all tasks:
```javascript
const response = await fetch("https://w3-assignment-b.onrender.com/api/task", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept":"/",
                    "access-token":sessionStorage.getItem("access-token")
                }
            });
    ```
## Installation

1. Clone this repository.
2. Docker
3. Start the server:

## Docker
Alternatively, you can use Docker to run the application. First, build the Docker image:

```bash
docker build . -t task-management-app 
```
Then, run the Docker container:

```bash
docker run -it -p 5000:5000 task-management-app
```

## Usage

### Health Check

To check if the server is running.


### User Registration

To register a new user.


### User Login

To log in as a registered user.


### Create a New Task

To create a new task.


### Update a Task

To update an existing task.


### Delete a Task

To delete an existing task.


## API Documentation

The application uses Swagger for API documentation. You can view the API documentation by running the server and visiting the following URL: http://localhost:5000/docs


