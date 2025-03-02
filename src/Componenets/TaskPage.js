import { Box, Button, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom';

const dummyData = [
    { id: 1, taskname: "Add Skeleton for table view", assign: "01/01/2025", end: "01/05/2025" },
    { id: 2, taskname: "Implement authentication flow", assign: "01/06/2025", end: "01/10/2025" },
    { id: 3, taskname: "Optimize API calls", assign: "01/11/2025", end: "01/15/2025" },
    { id: 4, taskname: "Create dashboard UI", assign: "01/16/2025", end: "01/20/2025" },
    { id: 5, taskname: "Write unit tests for components", assign: "01/21/2025", end: "01/25/2025" },
    { id: 6, taskname: "Fix layout issues on mobile", assign: "01/26/2025", end: "01/30/2025" },
    { id: 7, taskname: "Integrate third-party analytics", assign: "02/01/2025", end: "02/05/2025" },
    { id: 8, taskname: "Enhance dark mode support", assign: "02/06/2025", end: "02/10/2025" },
    { id: 9, taskname: "Refactor state management", assign: "02/11/2025", end: "02/15/2025" },
    { id: 10, taskname: "Improve accessibility features", assign: "02/16/2025", end: "02/20/2025" },
];


const TaskPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} pl={40} pr={8} gap={8}>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography gutterBottom fontSize={"40px"} textAlign={"left"} sx={{ letterSpacing: 1 }}>Task</Typography>
                    <Button variant='contained' sx={{ letterSpacing: 1, backgroundColor: "#72DDF7", borderRadius: 2, color: "black", alignItems: "center", justifyContent: "center" }} onClick={() => navigate('/add-task')}><AddIcon sx={{ fontSize: 20, mr: 1 }} /> Add Task</Button>
                </Box>
                <Divider sx={{ bgcolor: "#8093F1", }} />

                <Box display='flex' justifyContent='flex-end' gap={2}>
                    <Box>
                        <IconButton
                            tooltipText="Download"
                            sx={{
                                backgroundColor: "#8093F1",
                                transition: "all 0.3s ease", // Smooth transition effect
                                "&:hover": {
                                    backgroundColor: "#8093F1",
                                    "& svg": {
                                        color: "white", // Only change icon color on hover
                                    },
                                },
                            }}
                        >
                            <FileDownloadOutlinedIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton tooltipText="Download"
                            sx={{

                                backgroundColor: "#8093F1",

                                transition: "all 0.3s ease", // Smooth transition effect
                                "&:hover": {
                                    backgroundColor: "#8093F1",
                                    "& svg": {
                                        color: "white", // Only change icon color on hover
                                    },
                                },
                            }}>
                            <UploadIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton tooltipText="Download"
                            sx={{

                                backgroundColor: "#8093F1",

                                transition: "all 0.3s ease", // Smooth transition effect
                                "&:hover": {
                                    backgroundColor: "#8093F1",
                                    "& svg": {
                                        color: "white", // Only change icon color on hover
                                    },
                                },
                            }}>
                            <SimCardDownloadIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Box>
                </Box>

                <Box>
                    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
                        <Table>
                            <TableHead sx={{ backgroundColor: "#8093F1" }}>
                                <TableRow>
                                    <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize: "15px" }}>
                                        ID
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize: "15px" }}>
                                        User Name
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize: "15px" }}>
                                        Assign Date
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize: "15px" }}>
                                        End Date
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dummyData.map((user) => (
                                    <TableRow key={user.id} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" } }}>
                                        <TableCell align="center">{user.id}</TableCell>
                                        <TableCell align="center">{user.taskname}</TableCell>
                                        <TableCell align="center">{user.assign}</TableCell>
                                        <TableCell align="center">{user.end}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </div>
    )
}

export default TaskPage