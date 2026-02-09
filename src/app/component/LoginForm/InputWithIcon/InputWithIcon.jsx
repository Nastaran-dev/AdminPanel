"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Input from "@mui/material/Input";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loginservice } from "../../../../Services/auth";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
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

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: Loginservice,
    onSuccess: (data) => {
      console.log("Login successful");
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .min(6, "حداقل 6 کاراکتر")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ "& > :not(style)": { m: 1 } }}
    >
      {mutation.isError && (
        <Alert severity="error" sx={{ color: "red" }}>
          Login failed. Please try again.
        </Alert>
      )}
      <Box sx={StyleTextField.Text}>
        <AccountCircle sx={StyleTextField.Icon} />
        <Input
          {...formik.getFieldProps("username")}
          type="text"
          placeholder="Username"
          fullWidth
        />
        {formik.touched.username && formik.errors.username ? (
          <Box>{formik.errors.username}</Box>
        ) : null}
      </Box>
      <Box sx={StyleTextField.Text}>
        {showPassword ? (
          <VisibilityIcon sx={StyleTextField.Icon} onClick={togglePassword} />
        ) : (
          <VisibilityOffIcon
            sx={StyleTextField.Icon}
            onClick={togglePassword}
          />
        )}
        <Input
          type={showPassword ? "text" : "password"}
          {...formik.getFieldProps("password")}
          placeholder="Password"
          fullWidth
        />
        {formik.touched.password && formik.errors.password ? (
          <Box>{formik.errors.password}</Box>
        ) : null}
      </Box>

      <Box sx={StyleTextField.login}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            padding: "5px 40px",
            marginTop: "10%",
            backgroundColor: "black",
          }}
          disabled={mutation.isloading}
        >
          {mutation.isloading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </Box>
    </Box>
  );
}
