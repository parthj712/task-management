import { TableChartTwoTone } from '@mui/icons-material'
import { Box, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const dummyData = [
    { id: 1, name: "Tony Stark", status: "Completed" },
    { id: 2, name: "Chris Evans", status: "In Progress" },
    { id: 3, name: "Johnathan Majors", status: "Incomplete" },
    { id: 4, name: "Scarlett Johansson", status: "Completed" },
    { id: 5, name: "Mark Ruffalo", status: "In Progress" },
];

const DashboardPage = () => {
    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} pl={40} pr={8} gap={8}>
                <Box>
                    <Typography gutterBottom fontSize={"40px"} textAlign={"left"} sx={{ letterSpacing: 1 }}>Dashboard</Typography>
                    <Divider sx={{ bgcolor: "#8093F1", }} />
                </Box>

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
                        <IconButton  tooltipText="Download"
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
                            <UploadIcon sx={{ fontSize: 22 }} />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton  tooltipText="Download"
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
                            <SimCardDownloadIcon sx={{ fontSize: 22 }} />
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
                                        Task Status
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dummyData.map((user) => (
                                    <TableRow key={user.id} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" } }}>
                                        <TableCell align="center">{user.id}</TableCell>
                                        <TableCell align="center">{user.name}</TableCell>
                                        <TableCell align="center">{user.status}</TableCell>
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

export default DashboardPage