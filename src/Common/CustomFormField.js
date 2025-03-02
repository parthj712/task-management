import React from "react";
import { TextField } from "@mui/material";

const CustomFormField = ({ id, label, variant = "standard", sx = {}, ...props }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      sx={{
        input: { color: "black" }, // Text color
        label: { color: "black" }, // Label color
        "& .MuiInput-underline:before": { borderBottomColor: "black" }, // Normal state underline
        "& .MuiInput-underline:hover:before": { borderBottomColor: "black" }, // Hover state underline
        "& .MuiInput-underline:after": { borderBottomColor: "black" }, // Focus state underline
        ...sx, // Allow additional styles to be passed
      }}
      InputLabelProps={{ style: { color: "black" } }}
      {...props} // Spread any additional props like onChange, value, etc.
    />
  );
};

export default CustomFormField;
