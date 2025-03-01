import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// mui
import { ThemeProvider } from '@mui/material/styles';

// componenets
import theme from './Theme/theme';
import Layout from './Componenets/Layout';
import './App.css';
import HomePage from './Componenets/HomePage';
import DashboardPage from './Componenets/DashboardPage';
import UsersPage from './Componenets/UsersPage';
import TaskPage from './Componenets/TaskPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/task" element={<TaskPage />} />
                </Routes>
            </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
