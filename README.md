# To-Do List Application

This is a simple **To-Do List Application** built using **Node.js**, **Express**, **MongoDB**, and **Bootstrap** for managing personal tasks effectively.
The application allows users to create, read, update, and delete their tasks, providing a user-friendly interface and dynamic functionality.

## Features

1. **Add Todo**: Users can add new tasks to their to-do list.
2. **View Todos**: Displays all tasks with their status.
3. **Mark Complete**: Mark a task as completed, with visual feedback.
4. **Delete Todo**: Remove tasks from the list.
5. **Responsive UI**: Uses Bootstrap for a modern and responsive design.

## Technologies Used

### Frontend:
- **HTML**
- **CSS (Bootstrap)**
- **JavaScript**

### Backend:
- **Node.js**
- **Express.js**

### Database:
- **MongoDB** (via Mongoose ODM)


## Prerequisites

1. **Node.js** installed on your system.
2. **MongoDB** installed and running.
3. A terminal or command-line tool.

---

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/tharun123ds/your-goals
   cd your-goals
   

2. **Install Dependencies:**
   ```bash
   npm install
  

3. **Set Up MongoDB:**
   - Ensure MongoDB is installed and running on `localhost:27017`.
   - Use the default database name `todo_list_db` or update the database configuration in `server.js`.

4. **Run the Server:**
   ```bash
   node server.js
   ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

Your Goals/
├── models/
│   └── Todo.js         # MongoDB schema and model for the Todo collection
├── node_modules/       # Dependencies installed via npm
├── index.html          # Frontend for the todo list
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Dependency tree lock file
├── server.js           # Backend server script using Express and MongoDB




