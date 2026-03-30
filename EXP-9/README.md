# 🔐 JWT Authentication REST API using Spring Boot

This project demonstrates how to implement **JWT (JSON Web Token) based authentication and authorization** using Spring Boot. It secures REST APIs by allowing only authenticated users to access protected endpoints.

---

## 📌 Technologies Used

* Java
* Spring Boot
* Spring Security
* JWT (JSON Web Token)
* Spring Data JPA (Hibernate)
* MySQL
* Postman (API Testing)
* Apache Tomcat (Embedded Server)
* Eclipse IDE

---

## 🎯 Aim

To design and implement a secure REST API system where:

* Users authenticate using credentials
* A JWT token is generated upon successful login
* The token is used to access protected APIs

---

## ⚙️ Project Workflow

1. Start the Spring Boot application
2. Embedded Tomcat server initializes on port 8080
3. Application connects to MySQL database
4. User credentials are stored and retrieved
5. User sends login request
6. Server validates credentials
7. JWT token is generated
8. Token is used to access secured endpoints

---

## 🚀 Application Startup

The application runs successfully on:

```
http://localhost:8080
```

✔ Embedded Tomcat server starts automatically
✔ Backend is ready to handle API requests

---

## 🗄️ Database Configuration

* Database Name: `spring_hibernate_db`
* Table: `users`

### Users Table Structure:

| Column   | Type        |
| -------- | ----------- |
| id       | BIGINT (PK) |
| username | VARCHAR     |
| password | VARCHAR     |

---

## 🔑 Insert User Credentials

```sql
INSERT INTO users (username, password)
VALUES ('Aditya', 'Aditya@2006');
```

✔ This data is used for authentication

---

## 🔐 Generate JWT Token (Login API)

### 📍 Endpoint

```
POST http://localhost:8080/api/login
```

### 📦 Request Body (x-www-form-urlencoded)

```
username=Aditya
password=Aditya@2006
```

### ✅ Response


👉 This token is used for authentication in further requests

---

## 🔓 Access Protected API

### 📍 Endpoint

```
GET http://localhost:8080/api/hello
```

### 📌 Headers

```
Authorization: Bearer <JWT_TOKEN>
```

### ✅ Response

```
Hello! JWT Authentication Successful
```

---

## 🔗 API Endpoints Summary

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| POST   | /api/login | Generate JWT token |
| GET    | /api/hello | Access secured API |

---

## 🧠 Key Concepts Used

* **Authentication** → Verifying user identity
* **Authorization** → Granting access to resources
* **JWT Token** → Secure communication without session
* **Stateless API** → No server-side session storage

---

## ⚠️ Important Notes

* Database credentials and application login credentials are different
* JWT tokens have expiration time
* Token must be sent in every secured request
* API is stateless (no session is stored)

---

## 🎤 Viva Explanation (Short)

> This project implements JWT-based authentication where a user logs in using credentials, receives a token, and uses that token to access secured APIs. The system is stateless and ensures secure communication between client and server.

---

## 🚀 Future Improvements

* Add password encryption using BCrypt
* Implement JWT validation filter
* Add role-based authorization
* Add frontend (React / Angular)
* Use refresh tokens

---

## 📌 Conclusion

This project successfully demonstrates a secure and scalable authentication mechanism using JWT in Spring Boot. It eliminates the need for session management and provides a modern approach to securing REST APIs.

---
