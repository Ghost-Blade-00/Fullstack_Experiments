# EXP8 - Student Management REST API (Spring Boot)

This experiment includes a Spring Boot backend application developed to manage student data with complete CRUD functionality. The project uses Spring Data JPA for database interaction and MySQL as the backend database..

## Tech Stack

- Java 17
- Spring Boot 4
- Spring Web MVC
- Spring Data JPA
- MySQL
- Maven Wrapper (`mvnw` / `mvnw.cmd`)

##Main Functionalities
- Add a new student record
- View all student records
- Fetch a student by ID
- Modify existing student details
- Remove a student record

## API Base URL

`http://localhost:8080/api/students`

## Endpoints

- GET /api/students → Retrieve all students
- GET /api/students/{id} → Retrieve a specific student using ID
- POST /api/students → Insert a new student record
- PUT /api/students/{id} → Edit student information
- DELETE /api/students/{id} → Delete a student record

## Database Setup (MySQL)

1. Create database:

```sql
CREATE DATABASE spring_hibernate_db;
```

2. Open `try/src/main/resources/application.properties` and set your MySQL username/password if needed.

## Run the Project

From the `try` folder:

```bash
# Windows
mvnw.cmd spring-boot:run

# macOS/Linux
./mvnw spring-boot:run
```

The app runs on:

`http://localhost:8080`

## Screenshots
-- 
GET
<img width="1392" height="727" alt="image" src="https://github.com/user-attachments/assets/f938f487-3caf-4eed-bf0b-b1ef22b45462" />

--

POST
- <img width="1395" height="706" alt="image" src="https://github.com/user-attachments/assets/110d2177-5763-49c9-8baf-97b0e64c9c00" />

-- 

PUT
- <img width="1391" height="714" alt="image" src="https://github.com/user-attachments/assets/99edc6b5-fd5d-49bc-9630-1ff876545cc1" />









