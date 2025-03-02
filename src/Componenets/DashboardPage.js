import { TableChartTwoTone } from '@mui/icons-material'
import { Box, Divider, IconButton, Paper, Table,Tooltip, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import * as XLSX from "xlsx";
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
    { id: 6, name: "Chris Hemsworth", status: "Pending" },
    { id: 7, name: "Robert Downey Jr.", status: "Completed" },
    { id: 8, name: "Tom Holland", status: "In Progress" },
    { id: 9, name: "Elizabeth Olsen", status: "Pending" },
    { id: 10, name: "Benedict Cumberbatch", status: "Incomplete" },
];


const DashboardPage = () => {

    const downloadTemplate = () => {
        const worksheet = XLSX.utils.json_to_sheet(dummyData.map(user => ({ Name: user.name, TaskStatus: user.status }))); // Only Name column
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Dashboard Template");

        // Create a downloadable Excel file
        XLSX.writeFile(workbook, "Dashboard_File.xlsx");
    };

    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} pl={40} pr={8} gap={8}>
                <Box>
                    <Typography gutterBottom fontSize={"40px"} textAlign={"left"} sx={{ letterSpacing: 1 }}>Dashboard</Typography>
                    <Divider sx={{ bgcolor: "#8093F1", }} />
                </Box>

                <Box display="flex" flexDirection={"row"} justifyContent='flex-end' gap={2}>
                    <Tooltip title="Download">
                        <IconButton sx={{ backgroundColor: "#8093F1", "&:hover svg": { color: "black" }, "&:hover": { border: 1 } }}>
                            <FileDownloadOutlinedIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Upload">
                        <IconButton sx={{ backgroundColor: "#8093F1", "&:hover svg": { color: "black" }, "&:hover": { border: 1 } }}>
                            <UploadIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Download Template">
                        <IconButton onClick={downloadTemplate} sx={{ backgroundColor: "#8093F1", "&:hover svg": { color: "black" }, "&:hover": { border: 1 } }}>
                            <SimCardDownloadIcon sx={{ fontSize: 22, color: "black" }} />
                        </IconButton>
                    </Tooltip>
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
                                        <TableCell align="center" sx={{
                                            color: user.status === "Completed" ? "green" :
                                                user.status === "In Progress" ? "orange" :
                                                    "red",
                                            fontWeight: "bold"
                                        }}>{user.status}</TableCell>
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