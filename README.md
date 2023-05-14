# CloudAssignment2
This project is a simple CRUD (Create, Read, Update, Delete) application built with NodeJS. It allows users to create, view, update, and delete records for a list of persons. The project uses Docker Compose to run the backend and frontend applications in separate containers.
Requirements

To run this project, you will need to have the following software installed on your machine:

    Docker
    Docker Compose

You can download Docker and Docker Compose from the Docker website.
Installation

To install and run the project, follow these steps:

    Clone the repository to your local machine using the command git clone https://github.com/AMaherJK/CloudAssignment2
    Navigate to the project directory using the command cd CloudAssignment2.
    Build the Docker images for the backend and frontend applications using the command docker-compose build.
    Start the Docker containers using the command docker-compose up.
    Open a web browser and navigate to http://localhost:8000 to view the frontend application.

Usage

The frontend application allows you to create, view, update, and delete records for a list of persons. To add a new person, click the "Add Person" button and fill in the form. To edit an existing person, click the "Edit" button next to their name and make the desired changes. To delete a person, click the "Delete" button next to their name.
Customization

You can customize the application by modifying the source code in the backend and frontend directories. The backend is built with NodeJS Restful CURD API to store the person records. The frontend is built with HTML as it is a simple proof of concept project.
