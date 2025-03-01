import React from "react";

// router
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// mui
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
    Typography,
    Avatar,
} from "@mui/material";

// mui icons
import { Home, Dashboard, People, Assignment, Settings } from "@mui/icons-material";

// components
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";
import UsersPage from "./UsersPage";
import TaskPage from "./TaskPage";




const Layout = () => {

    const location = useLocation();

    return (
        <Box>
            <CssBaseline />

            {/* Sidebar */}
            <Drawer variant="permanent" sx={{ width: 300, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 300, bgcolor: "#B388EB", color: "black" } }}>
                <Box py={3}>
                    <Typography variant="h4" textAlign={"left"} pl={3.2} fontWeight={500}>Task Manager</Typography>
                    <List sx={{ py: 4 }}>
                        {[
                            { text: "Home", icon: <Home />, route: "/" },
                            { text: "Dashboard", icon: <Dashboard />, route: "/dashboard" },
                            { text: "Users", icon: <People />, route: "/users" },
                            { text: "Task", icon: <Assignment />, route: "/task" },
                        ].map((item) => {
                            const isActive = location.pathname === item.route;
                            return (
                                <ListItem key={item.text} >
                                    <ListItemButton component={Link} to={item.route} sx={{
                                        // bgcolor: isActive ? "white" : "transparent",
                                        color: isActive ? "white" : "inherit",
                                        borderRadius: 1,
                                    }}>
                                        <ListItemIcon  sx={{ color: "black" ,  color: isActive ? "white" : "inherit",  }}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            )

                        })}
                    </List>

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
    );
};

export default Layout;
