import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center" 
    >
      <Box
        elevation={3}
        sx={{
          backgroundColor: "#B388EB",
          padding: 4,
          width: "670px",
          height: "631px"
        }}
      >
        <Box display="flex" flexDirection="column" gap={10} py={12}>
          <Box>
            <Typography variant="h4" fontWeight="bold" color='white'>Task Manager</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" gap={8}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
              <TextField id="username"
                label="User Name"
                variant="standard"
                sx={{
                  width: "500px",
                  input: { color: "white" }, // Text color
                  label: { color: "white" }, // Label color
                  "& .MuiInput-underline:before": { borderBottomColor: "white" }, // Normal state underline
                  "& .MuiInput-underline:hover:before": { borderBottomColor: "white" }, // Hover state underline
                  "& .MuiInput-underline:after": { borderBottomColor: "white" }, // Focus state underline
                }}
                InputLabelProps={{ style: { color: "white" } }} />
              <TextField id="password"
                label="Password"
                type="password"
                variant="standard"
                sx={{
                  width: "500px",
                  input: { color: "white" },
                  label: { color: "white" },
                  "& .MuiInput-underline:before": { borderBottomColor: "white" },
                  "& .MuiInput-underline:hover:before": { borderBottomColor: "white" },
                  "& .MuiInput-underline:after": { borderBottomColor: "white" },
                }}
                InputLabelProps={{ style: { color: "white" } }} />
            </Box>
            <Button variant="contained" sx={{ backgroundColor: "#8093F1", width: "500px" }}>LOG IN</Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Login;
