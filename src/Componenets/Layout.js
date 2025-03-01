import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Avatar,
    Divider,
} from "@mui/material";
import { Home, Dashboard, People, Assignment, Settings } from "@mui/icons-material";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";

// Sample pages
// const HomePage = () => <Typography variant="h4">Welcome to Home Page</Typography>;
// const DashboardPage = () => <Typography variant="h4">Dashboard Content</Typography>;
const UsersPage = () => <Typography variant="h4">Users Content</Typography>;
const TaskPage = () => <Typography variant="h4">Tasks Content</Typography>;

const drawerWidth = 300;

const Layout = () => {
    return (
        <Router>
            <Box>
                <CssBaseline />

                {/* Sidebar */}
                <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, bgcolor: "#B388EB", color: "black" } }}>
                    <Box py={3}>
                        <Typography variant="h4" textAlign={"left"} pl={4} fontWeight={500}>Task Manager</Typography>
                        <List>
                            {[
                                { text: "Home", icon: <Home />, route: "/" },
                                { text: "Dashboard", icon: <Dashboard />, route: "/dashboard" },
                                { text: "Users", icon: <People />, route: "/users" },
                                { text: "Task", icon: <Assignment />, route: "/task" },
                            ].map((item) => (
                                <ListItem key={item.text} >
                                    <ListItemButton component={Link} to={item.route}>
                                        <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>

                        {/* <Divider sx={{ bgcolor: "white" }} /> */}

                        {/* <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: "black" }}>
                                        <Settings />
                                    </ListItemIcon>
                                    <ListItemText primary="Settings" />
                                </ListItemButton>
                            </ListItem>
                        </List> */}

                        {/* Profile Section */}
                        <Box sx={{ position: "absolute", bottom: 0, width: "100%", p: 2 }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: "black" }}>
                                        <Settings />
                                    </ListItemIcon>
                                    <ListItemText primary="Settings" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <Avatar sx={{ bgcolor: "#fff" }} />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="body2" fontWeight="bold">Parth Nandkumar Jathar</Typography>
                                    <Typography variant="caption" color="textSecondary">Admin</Typography>
                                </Box>
                            </ListItem>
                        </Box>
                    </Box>
                </Drawer>

                {/* Main Content */}
                <Box component="main" sx={{ flexGrow: 1, p: 1.5 }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="/task" element={<TaskPage />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
};

export default Layout;
