import React, { useState } from "react";

// mui
import {
    Box,
    Button,
    Divider,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
    TextField,
} from "@mui/material";
import * as XLSX from "xlsx";

// mui icons
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import UploadIcon from "@mui/icons-material/Upload";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

// Dummy Data
const dummyData = [
    { id: 1, name: "Tony Stark", email: "tonystark@gmail.com", mobile: "8698828048", status: "Completed" },
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
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    // Filtered Data Based on Search Input
    const filteredUsers = dummyData.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.mobile.includes(searchTerm)
    );

    const downloadTemplate = () => {
        const worksheet = XLSX.utils.json_to_sheet(dummyData.map(user => ({ Name: user.name , Email: user.email , Mobile: user.mobile , TaskStatus : user.status}))); // Only Name column
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Users Template");
    
        // Create a downloadable Excel file
        XLSX.writeFile(workbook, "Users_File.xlsx");
    };

    return (
        <Box display={"flex"} flexDirection={"column"} pl={40} pr={8} gap={6}>
            {/* Header Section */}
            <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography gutterBottom fontSize={"40px"} textAlign={"left"} sx={{ letterSpacing: 1 }}>
                        Users
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            letterSpacing: 1,
                            backgroundColor: "#72DDF7",
                            borderRadius: 2,
                            color: "black",
                            "&:hover": { backgroundColor: "#5ac8e5" },
                        }}
                        onClick={() => navigate("/add-user")}
                    >
                        <AddIcon sx={{ fontSize: 20, mr: 1 }} /> Add User
                    </Button>
                </Box>

                <Divider sx={{ bgcolor: "#8093F1" }} />
            </Box>

            {/* Search Bar & Icons */}
            <Box display="flex" justifyContent="space-between" alignItems="center" >

                {/* Search Bar */}
                <TextField
                    id="search"
                    label="Search by Name or Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                        pr: 8,
                        "& .MuiInputLabel-root": {
                            fontSize: "16px",
                            opacity: "40%"
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "8px", // Change border radius
                        },
                    }}
                    InputLabelProps={{
                        shrink: false, // Ensures the label shrinks properly
                    }}
                />

                {/* Action Buttons */}
                <Box display="flex" gap={2}>
                    <Tooltip title="Download">
                        <IconButton sx={{ backgroundColor: "#8093F1", "&:hover svg": { color: "black" } , "&:hover" : {border : 1} }}>
                            <FileDownloadOutlinedIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Upload">
                        <IconButton sx={{ backgroundColor: "#8093F1", "&:hover svg": { color: "black" } , "&:hover" : {border : 1} }}>
                            <UploadIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Download Template">
                        <IconButton  onClick={downloadTemplate}  sx={{ backgroundColor: "#8093F1", "&:hover svg": { color: "black" } , "&:hover" : {border : 1}}}>
                            <SimCardDownloadIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Tooltip>
                </Box>

            </Box>

            {/* Table */}
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
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <TableRow key={user.id} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" } }}>
                                        <TableCell align="center">{user.id}</TableCell>
                                        <TableCell align="center">{user.name}</TableCell>
                                        <TableCell align="center">{user.email}</TableCell>
                                        <TableCell align="center">{user.mobile}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        No Users Found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default UsersPage;
