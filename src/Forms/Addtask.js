import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider, Button, TextField } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import CustomFormField from '../Common/CustomFormField';

const Addtask = () => {

    const navigate = useNavigate();

    return (
        <Box display={"flex"} flexDirection={"column"} pl={40} pr={8} gap={10}>

            <Box>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography gutterBottom fontSize={"40px"} textAlign={"left"} sx={{ letterSpacing: 1 }}>Add Task</Typography>
                </Box>

                <Box display={"flex"} flexDirection={"column"} gap={5} py={2}>
                    <CustomFormField id="Enter Task" label="Enter Task" />
                    <CustomFormField id="Select User" label="Select User" />
                    <CustomFormField id="Task Details" label="Task Details" />
                    <CustomFormField id="Post an image(if any)" label="Post an image(if any)" />
                </Box>
            </Box>

            <Box display={"flex"} gap={2} justifyContent={"flex-end"} mt={6}>
                <Button
                    variant="outlined"
                    sx={{
                        letterSpacing: 1,
                        px: 3,
                        borderRadius: 1.5,
                        color: 'black',
                        float: "right"
                    }}
                    onClick={() => navigate('/task')}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        letterSpacing: 1,
                        px: 4,
                        backgroundColor: '#72DDF7',
                        borderRadius: 1.5,
                        color: 'black',
                        boxShadow: 0,
                        float: "right",
                        "&:hover": { backgroundColor: "#5ac8e5" }
                    }}
                >
                    Add
                </Button>
            </Box>


        </Box>
    )
}

export default Addtask