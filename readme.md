# Task Management Application

This is a simple task management application that allows users to register, log in, and manage their tasks.

## Installation

1. Clone this repository.
2. Docker
3. Start the server:

## Docker
Alternatively, you can use Docker to run the application. First, build the Docker image:

```bash
docker build -t task-management-app .

Then, run the Docker container:

```bash
docker run -p 5000:5000 task-management-app


## Usage

### Health Check

To check if the server is running, use the following endpoint:


### User Registration

To register a new user, use the following endpoint:


### User Login

To log in as a registered user, use the following endpoint:


### Create a New Task

To create a new task, use the following endpoint:


### Update a Task

To update an existing task, use the following endpoint:


### Delete a Task

To delete an existing task, use the following endpoint:


## API Documentation

The application uses Swagger for API documentation. You can view the API documentation by running the server and visiting the following URL:


## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request to merge your changes into the main repository.

## License

[MIT](LICENSE)
