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
   MONGODB_URI=mongodb://localhost:27017/blogify-api
   ```  
4. Run the server:  
   ```sh
   npm start
   ```  
5. Access API at:  
   ```
   http://localhost:3000/api/blogs
   ```  

---  

## **📌 Features**  
- **Create** new blog posts  
- **Read** all blog posts or a single post  
- **Update** existing blog posts  
- **Delete** blog posts  
- **Comment** on blog posts  

---  

## **📚 API Endpoints**  

| Method | Endpoint         | Description                   |
|--------|-----------------|-------------------------------|
| POST   | `/api/blogs`     | Create a new blog post       |
| GET    | `/api/blogs`     | Get all blog posts           |
| GET    | `/api/blogs/:id` | Get a single blog post by ID |
| PUT    | `/api/blogs/:id` | Update a blog post by ID     |
| DELETE | `/api/blogs/:id` | Delete a blog post by ID     |

---  

## **🛠️ Tech Stack**  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (Mongoose)  
- **Middleware**: `express.json()`  
- **Routing**: Express Router  

---  

## **📦 Packages Used**  
```json
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^8.0.3",
  "dotenv": "^16.0.3"
}
```  

---  

## **🔧 Project Structure**  
```
BlogifyAPI/
├── models/
│   └── blog_model.js       # Mongoose schema
├── controllers/
│   └── blog_controllers.js # CRUD logic
├── routes/
│   └── blog_routes.js      # API routes
├── config.js               # Database configuration
├── app.js                  # Express server setup
├── .env                    # Environment variables
└── package.json
```  

---  