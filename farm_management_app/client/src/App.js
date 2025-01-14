import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList'; 
import AddTaskForm from './components/AddTaskForm'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<TaskList />} /> 
        <Route path="/add-task" element={<AddTaskForm />} /> 
        {/* Add more routes for other components */}
      </Routes>
    </Router>
  );
}

export default App;
