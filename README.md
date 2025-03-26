# **BlogifyAPI**  
A simple RESTful Blog API with CRUD operations, built with **Node.js, Express & Mongoose**.  

---

## **🚀 Quick Start**  

### **Prerequisites**  
- Node.js (v18+)  
- MongoDB (local or cloud)  

### **Installation**  
1. Clone the repo:  
   ```sh
   git clone https://github.com/yourusername/BlogifyAPI.git
   cd BlogifyAPI
   ```
2. Install dependencies:  
   ```sh
   npm install
   ```
3. Set up `.env` file:  
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/blogify
   ```
4. Run the server:  
   ```sh
   npm start
   ```
5. Access API at:  
   ```
   http://localhost:3000/api/posts
   ```

---

## **📌 Features**  
- **Create** blog posts  
- **Read** all posts or single post  
- **Update** existing posts  
- **Delete** posts  

---

## **📚 API Endpoints**  

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| POST   | `/api/posts`      | Create a new post          |
| GET    | `/api/posts`      | Get all posts              |
| GET    | `/api/posts/:id`  | Get a single post by ID    |
| PUT    | `/api/posts/:id`  | Update a post by ID        |
| DELETE | `/api/posts/:id`  | Delete a post by ID        |

---

## **🛠️ Tech Stack**  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (Mongoose)  
- **Body Parsing**: `express.json()`  
- **Routing**: Express Router  

---

## **📦 Packages Used**  
```json
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^8.0.3"
}
```

---

## **🔧 Project Structure**  
```
BlogifyAPI/
├── models/
│   └── Post.js        # Mongoose schema
├── routes/
│   └── posts.js       # CRUD routes
├── app.js             # Express setup
├── .env               # Environment variables
└── package.json
```

---

## **📜 License**  
MIT  

---