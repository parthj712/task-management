import React from 'react'

// mui
import { Box, Button, Divider, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

// mui icons
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import AddIcon from "@mui/icons-material/Add";

//dummydata
const dummyData = [
    { id: 1, name: "Tony Stark", email: "tonystark@gmail.com", mobile: "1234567890", status: "Completed" },
    { id: 2, name: "Chris Evans", email: "chrisevans@gmail.com", mobile: "9876543210", status: "In Progress" },
    { id: 3, name: "Johnathan Majors", email: "johnmajors@gmail.com", mobile: "7894561230", status: "Incomplete" },
    { id: 4, name: "Scarlett Johansson", email: "scarlettj@gmail.com", mobile: "6549873210", status: "Completed" },
    { id: 5, name: "Mark Ruffalo", email: "markruffalo@gmail.com", mobile: "3216549870", status: "In Progress" },
    { id: 6, name: "Robert Downey Jr.", email: "rdj@gmail.com", mobile: "7418529630", status: "Completed" },
    { id: 7, name: "Chris Hemsworth", email: "chrishems@gmail.com", mobile: "9632587410", status: "In Progress" },
    { id: 8, name: "Tom Holland", email: "tomholland@gmail.com", mobile: "8527419630", status: "Incomplete" },
    { id: 9, name: "Brie Larson", email: "brielarson@gmail.com", mobile: "1478523690", status: "Completed" },
    { id: 10, name: "Paul Rudd", email: "paulrudd@gmail.com", mobile: "3698521470", status: "In Progress" },
];




const UsersPage = () => {
    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} pl={40} pr={8} gap={8}>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography gutterBottom fontSize={"40px"} textAlign={"left"} sx={{ letterSpacing: 1 }}>Users</Typography>
                    <Button variant='contained' sx={{letterSpacing: 1 , backgroundColor: "#72DDF7", borderRadius: 2, color: "black", alignItems:"center" , justifyContent:"center" }}><AddIcon sx={{ fontSize: 20, mr:1 }} /> Add User</Button>
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
                                        Gmail
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: "white", fontWeight: "bold", fontSize: "15px" }}>
                                        Mobile No.
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dummyData.map((user) => (
                                    <TableRow key={user.id} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" } }}>
                                        <TableCell align="center">{user.id}</TableCell>
                                        <TableCell align="center">{user.name}</TableCell>
                                        <TableCell align="center">{user.email}</TableCell>
                                        <TableCell align="center">{user.mobile}</TableCell>
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

export default UsersPage