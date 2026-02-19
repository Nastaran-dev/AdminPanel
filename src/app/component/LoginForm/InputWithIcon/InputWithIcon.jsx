"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loginservice } from "../../../../Services/auth";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin123";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#a78bfa" },
    secondary: { main: "#2dd4bf" },
    background: { default: "#080810", paper: "#0f0f1a" },
    error: { main: "#f87171" },
  },
  typography: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },
  shape: { borderRadius: 14 },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "rgba(255,255,255,0.03)",
          transition: "all 0.25s ease",
          "& fieldset": {
            borderColor: "rgba(255,255,255,0.08)",
            transition: "border-color 0.25s ease",
          },
          "&:hover fieldset": {
            borderColor: "rgba(167,139,250,0.35)",
          },
          "&.Mui-focused": {
            backgroundColor: "rgba(167,139,250,0.05)",
            boxShadow: "0 0 0 3px rgba(167,139,250,0.1)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "rgba(167,139,250,0.6) !important",
            borderWidth: "1px !important",
          },
        },
        input: {
          padding: "14px 14px",
          fontSize: "14px",
          "&::placeholder": { color: "rgba(255,255,255,0.2)", opacity: 1 },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          color: "rgba(255,255,255,0.3)",
          "&.Mui-focused": { color: "#a78bfa" },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "14px",
          letterSpacing: "0.3px",
        },
      },
    },
  },
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [filled, setFilled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: Loginservice,
    onSuccess: () => router.push("/dashboard"),
    onError: (err) => console.error(err),
  });

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required."),
      password: Yup.string()
        .min(6, " At least 6 characters ")
        .required("Password is required."),
    }),
    onSubmit: (values) => mutation.mutate(values),
  });

  const fillDefault = () => {
    formik.setFieldValue("username", DEFAULT_USERNAME);
    formik.setFieldValue("password", DEFAULT_PASSWORD);
    setFilled(true);
    setTimeout(() => setFilled(false), 2200);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",

          justifyContent: "center",
          bgcolor: "background.default",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {[
          {
            size: 480,
            color: "rgba(107,63,200,0.22)",
            top: "-160px",
            left: "-160px",
            delay: "0s",
          },
          {
            size: 360,
            color: "rgba(20,180,160,0.16)",
            bottom: "-120px",
            right: "-120px",
            delay: "2s",
          },
          {
            size: 280,
            color: "rgba(200,100,50,0.1)",
            top: "40%",
            left: "55%",
            delay: "4s",
          },
        ].map((orb, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              filter: "blur(60px)",
              top: orb.top,
              bottom: orb.bottom,
              left: orb.left,
              right: orb.right,
              pointerEvents: "none",

              "@keyframes driftA": {
                "0%": { transform: "translate(0,0)" },
                "100%": { transform: "translate(30px, 20px)" },
              },
              "@keyframes driftB": {
                "0%": { transform: "translate(0,0)" },
                "100%": { transform: "translate(-30px, -25px)" },
              },
              animation: `${i % 2 === 0 ? "driftA" : "driftB"} ${10 + i * 2}s ease-in-out infinite alternate`,
            }}
          />
        ))}

        <Box
          sx={{
            position: "absolute",
            inset: 0,

            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            pointerEvents: "none",
          }}
        />
        <Fade in={mounted} timeout={700}>
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              width: { xs: "calc(100vw - 32px)", sm: 420 },
              bgcolor: "rgba(12,12,22,0.88)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 4,
              margin: "40px auto",
              p: { xs: "36px 28px", sm: "48px" },
              boxShadow:
                "0 40px 80px rgba(0,0,0,0.55), 0 0 120px rgba(99,60,180,0.07)",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "8%",
                right: "8%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(167,139,250,0.55), rgba(45,212,191,0.35), transparent)",
              },
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4.5 }}>
              <Box
                sx={{
                  width: 54,
                  height: 54,
                  background:
                    "linear-gradient(135deg, #6b3fc0 0%, #1a9e9e 100%)",
                  borderRadius: "15px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2.5,
                  boxShadow: "0 8px 32px rgba(107,63,192,0.45)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "15px",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.18), transparent)",
                  },
                }}
              >
                <ShieldOutlinedIcon
                  sx={{
                    color: "white",
                    fontSize: 26,
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#ede9ff",
                  fontSize: "22px",
                  letterSpacing: "-0.4px",
                  mb: 0.5,
                }}
              >
                Admin Portal
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255,255,255,0.28)",
                  letterSpacing: "0.6px",
                  fontSize: "11px",
                }}
              >
                SECURE ACCESS · RESTRICTED AREA
              </Typography>
            </Box>

            {mutation.isError && (
              <Alert
                severity="error"
                sx={{
                  mb: 2.5,
                  bgcolor: "rgba(248,113,113,0.08)",
                  border: "1px solid rgba(248,113,113,0.2)",
                  borderRadius: 2,
                  color: "#fca5a5",
                  fontSize: "12px",
                  "& .MuiAlert-icon": { color: "#f87171" },
                }}
              >
                نام کاربری یا رمز عبور اشتباه است. دوباره تلاش کنید.
              </Alert>
            )}

            <Tooltip
              title="کلیک کنید تا فرم به‌صورت خودکار پر شود"
              placement="top"
            >
              <Box
                onClick={fillDefault}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: "10px 14px",
                  mb: 3,
                  borderRadius: 2.5,
                  border: "1px dashed",
                  borderColor: filled
                    ? "rgba(45,212,191,0.4)"
                    : "rgba(167,139,250,0.25)",
                  bgcolor: filled
                    ? "rgba(45,212,191,0.06)"
                    : "rgba(167,139,250,0.07)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(167,139,250,0.5)",
                    bgcolor: "rgba(167,139,250,0.12)",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 20px rgba(167,139,250,0.15)",
                  },
                }}
              >
                {filled ? (
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 16, color: "#2dd4bf" }}
                  />
                ) : (
                  <AutoFixHighIcon
                    sx={{ fontSize: 16, color: "rgba(167,139,250,0.7)" }}
                  />
                )}

                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.9px",
                    flexShrink: 0,
                  }}
                >
                  پیش‌فرض
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
                  <Chip
                    label={DEFAULT_USERNAME}
                    size="small"
                    sx={{
                      height: 22,
                      fontSize: "11px",
                      bgcolor: "rgba(255,255,255,0.06)",
                      color: "rgba(200,185,255,0.85)",
                      fontFamily: "monospace",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                  <Chip
                    label={DEFAULT_PASSWORD}
                    size="small"
                    sx={{
                      height: 22,
                      fontSize: "11px",
                      bgcolor: "rgba(255,255,255,0.06)",
                      color: "rgba(200,185,255,0.85)",
                      fontFamily: "monospace",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: "10px",
                    color: filled ? "#2dd4bf" : "rgba(255,255,255,0.2)",
                    flexShrink: 0,
                    transition: "color 0.3s",
                  }}
                >
                  {filled ? "✓ پر شد" : "کلیک کن"}
                </Typography>
              </Box>
            </Tooltip>

            <Box component="form" onSubmit={formik.handleSubmit} noValidate>
              <TextField
                {...formik.getFieldProps("username")}
                label="Username"
                placeholder="username"
                fullWidth
                variant="outlined"
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                FormHelperTextProps={{
                  sx: {
                    fontSize: "11px",
                    color: "#f87171 !important",
                    mt: 0.5,
                  },
                }}
                sx={{ mb: 2.5 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon
                        sx={{ fontSize: 19, color: "rgba(255,255,255,0.2)" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                {...formik.getFieldProps("password")}
                label="Password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                FormHelperTextProps={{
                  sx: {
                    fontSize: "11px",
                    color: "#f87171 !important",
                    mt: 0.5,
                  },
                }}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon
                        sx={{ fontSize: 19, color: "rgba(255,255,255,0.2)" }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((p) => !p)}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? (
                          <VisibilityIcon
                            sx={{
                              fontSize: 18,
                              color: "rgba(255,255,255,0.25)",
                            }}
                          />
                        ) : (
                          <VisibilityOffIcon
                            sx={{
                              fontSize: 18,
                              color: "rgba(255,255,255,0.25)",
                            }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={mutation.isPending}
                sx={{
                  py: 1.6,
                  background:
                    "linear-gradient(135deg, #6b3fc0 0%, #1a9e9e 100%)",
                  boxShadow: "0 4px 24px rgba(107,63,192,0.4)",
                  fontSize: "14px",
                  fontWeight: 500,
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.12), transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  },
                  "&:hover:not(:disabled)": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 32px rgba(107,63,192,0.55)",
                    "&::before": { opacity: 1 },
                  },
                  "&:active:not(:disabled)": { transform: "translateY(0)" },
                  "&:disabled": {
                    opacity: 0.6,
                    background: "linear-gradient(135deg, #6b3fc0, #1a9e9e)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                {mutation.isPending ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : (
                  "  Login to the admin panel  →"
                )}
              </Button>

              <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.06)" }}>
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.18)",
                    letterSpacing: "0.5px",
                    px: 1,
                  }}
                >
                  Protected with 256-bit encryption
                </Typography>
              </Divider>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#2dd4bf",
                    boxShadow: "0 0 8px #2dd4bf",
                    "@keyframes pulse": {
                      "0%, 100%": { opacity: 1 },
                      "50%": { opacity: 0.4 },
                    },
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <Typography
                  sx={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}
                >
                  Online and secure system
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Fade>
      </Box>
    </ThemeProvider>
  );
}
