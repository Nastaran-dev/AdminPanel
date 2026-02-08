"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Input from "@mui/material/Input";
import { useState } from "react";

const StyleTextField = {
  Text: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "20px",
  },
  Icon: {
    color: "action.active",
    mr: 1,
    my: 0.5,
    cursor: "pointer",
  },
  login: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 20px",
  },
};

export default function InputWithIcon() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {/* Username */}
      <Box sx={StyleTextField.Text}>
        <AccountCircle sx={StyleTextField.Icon} />
        <Input type="text" placeholder="Username" fullWidth />
      </Box>

      {/* Password */}
      <Box sx={StyleTextField.Text}>
        {showPassword ? (
          <VisibilityIcon sx={StyleTextField.Icon} onClick={togglePassword} />
        ) : (
          <VisibilityOffIcon sx={StyleTextField.Icon} onClick={togglePassword} />
        )}
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          fullWidth
        />
      </Box>

      <Box sx={StyleTextField.login}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            padding: "5px 40px",
            marginTop: "10%",
            backgroundColor: "black",
          }}
          disableElevation
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
