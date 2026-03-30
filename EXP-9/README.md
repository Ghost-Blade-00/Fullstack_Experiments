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
<img width="807" height="239" alt="image" src="https://github.com/user-attachments/assets/09c97743-e5eb-4095-b422-e13fe9ed2c4f" />


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


<img width="1395" height="304" alt="image" src="https://github.com/user-attachments/assets/99403043-5b83-43c4-aea4-4e35b0ead8a6" />


### ✅ Response


This token is used for authentication in further requests
<img width="1395" height="637" alt="image" src="https://github.com/user-attachments/assets/dde942e6-a827-45e6-9ea7-18969a4d5a02" />


---

## 🔓 Access Protected API

### 📍 Endpoint

```
GET http://localhost:8080/api/success
```

### 📌 Headers

```
Authorization: Bearer <JWT_TOKEN>
```
<img width="1386" height="672" alt="image" src="https://github.com/user-attachments/assets/f4efe359-20ce-4749-97ba-86543b488b1b" />


### ✅ Response

<img width="1395" height="637" alt="image" src="https://github.com/user-attachments/assets/579f7d83-1c9c-4ecb-acf2-b61766c12054" />


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

## 📌 Conclusion

This project successfully demonstrates a secure and scalable authentication mechanism using JWT in Spring Boot. It eliminates the need for session management and provides a modern approach to securing REST APIs.

---
