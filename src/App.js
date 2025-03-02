import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// mui
import { ThemeProvider } from '@mui/material/styles';

// components
import theme from './Theme/theme';
import Layout from './Componenets/Layout';
import './App.css';
import HomePage from './Componenets/HomePage';
import DashboardPage from './Componenets/DashboardPage';
import UsersPage from './Componenets/UsersPage';
import TaskPage from './Componenets/TaskPage';
import AddUser from "./Forms/Adduser";
import Addtask from "./Forms/Addtask";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/task" element={<TaskPage />} />
            </Routes>
          </Layout>
          <Routes>
            {/* <Route path="/" element={<UsersPage />} /> */}
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
          <Routes>
            {/* <Route path="/" element={<TaskPage />} /> */}
            <Route path="/add-task" element={<Addtask />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
