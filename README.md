# 📋 Task Tracker - MERN Stack

A modern and responsive **Task Tracker** application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The application helps users efficiently manage daily tasks with features like task creation, editing, deletion, filtering, sorting, searching, due dates, and overdue task highlighting.

---

## 🚀 Live Demo

* **Frontend:** [https://your-vercel-url.vercel.app](https://task-tracker-psi-sable.vercel.app/)
* **Backend API:** [https://your-render-url.onrender.com](https://task-tracker-7ws5.onrender.com/)

---

## ✨ Features

* ✅ Create, Read, Update and Delete (CRUD) tasks
* 🔍 Search tasks by title
* 🎯 Filter tasks by Priority and Status
* 📊 Sort tasks by:

  * Newest
  * Oldest
  * Priority
* 📅 Assign due dates to tasks
* 🚨 Highlight overdue pending tasks
* 📈 Dashboard showing task statistics
* 🔔 Toast notifications for all CRUD operations
* 📱 Fully responsive design
* 🎨 Clean UI built with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Toastify
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```
Task-Tracker/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/task_tracker.git
cd task_tracker
```

---

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the **server** folder.

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run the backend

```bash
npm start
```

---

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside the **client** folder.

```env
VITE_API_URL=http://localhost:3000/api/tasks
```

Run the frontend

```bash
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/tasks`     | Get all tasks |
| POST   | `/api/tasks`     | Create a task |
| PUT    | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 🔮 Future Improvements

* User Authentication (Login & Signup)
* Task Categories
* Drag & Drop Task Management
* Email Notifications
* Task Reminders
* Dark Mode

---

## 👨‍💻 Author

**Arjun Rathore**

GitHub: https://github.com/Arjun-19A

---

## 📄 License

This project is developed for learning purposes and internship assignment submission.
