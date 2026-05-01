## **ToDo Web App - Project Description**

### **📋 Project Overview**
This is a **React-based To-Do List Application** that allows users to manage their daily tasks with a clean and intuitive interface. The app features task creation, completion tracking, deletion, and data persistence using browser local storage.

---

### **✨ Key Features**
1. **Add Tasks** - Users can add new tasks via text input
2. **Mark Complete** - Toggle tasks between completed and incomplete states
3. **Delete Tasks** - Remove individual tasks from the list
4. **Clear All** - Bulk delete all tasks at once
5. **Live Clock Display** - Real-time date and time shown at the top
6. **Data Persistence** - All tasks are automatically saved to browser's localStorage
7. **Keyboard Support** - Press Enter to add tasks quickly

---

### **🛠️ Technical Stack**

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | React | 19.1.1 |
| **DOM Rendering** | React DOM | 19.1.1 |
| **Build Tool** | Vite | 7.1.2 |
| **Module System** | ES Modules (ESM) |
| **Linter** | ESLint | 9.33.0 |
| **Fast Refresh** | @vitejs/plugin-react | 5.0.0 |

---

### **💾 Architecture & State Management**
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Storage**: Browser's `localStorage` API for data persistence
- **Component Structure**: Single main component (ToDoApp.jsx) with inline styling
- **Real-time Updates**: useEffect hooks for auto-saving tasks and live clock updates

---

### **🚀 Development Commands**
```bash
npm run dev      # Start development server with hot module reload
npm run build    # Build for production
npm run lint     # Run ESLint code quality checks
npm run preview  # Preview production build locally
```

---

### **📁 Project Structure**
```
src/
├── App.jsx                    # Main App component
├── components/
│   └── ToDoApp.jsx           # Todo list logic & UI
├── main.jsx                  # React app entry point
├── App.css & index.css       # Styling
└── assets/                   # Static assets
```

---

### **🔧 Key Technical Implementations**
1. **Functional Components** - Uses modern React functional components
2. **Hooks API** - Leverages `useState` for state management and `useEffect` for side effects
3. **Local Storage Integration** - Persists tasks across browser sessions
4. **Event Handling** - Supports click and keyboard events (Enter key)
5. **Conditional Rendering** - Dynamic styling based on task completion status
6. **List Rendering** - Efficient task mapping with keys
7. **ESLint Configuration** - Code quality standards with React-specific rules

This is a clean, lightweight, and fully functional to-do application perfect for learning React fundamentals and practicing state management!



<img width="586" height="863" alt="image" src="https://github.com/user-attachments/assets/7c4ebc45-9c18-43f8-a6c7-518dfb3aa35f" />
