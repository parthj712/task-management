import React from 'react';
import { Box, Typography, Divider, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from "@mui/icons-material/Add";
import CustomFormField from '../Common/CustomFormField';

const AddUser = () => {
  const navigate = useNavigate();

  console.log("AddUser component is mounted!");


  return (
    <Box display={"flex"} flexDirection={"column"} pl={40} pr={8} gap={10}>

      <Box>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography gutterBottom fontSize={"40px"} textAlign={"left"} sx={{ letterSpacing: 1 }}>Add User</Typography>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={5} py={2}>
        <CustomFormField id="Enter Name" label="Enter Name" />
        <CustomFormField id="Enter Mobile No." label="Enter Mobile No." />
        <CustomFormField id="Enter Gmail" label="Enter Gmail" />
        <CustomFormField id="Enter Role" label="Enter Role" />
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
          onClick={() => navigate('/users')}
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
  );
};

export default AddUser;
