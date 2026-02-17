"use client"
import { useContext, useState } from "react";
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { myTheme } from "@/app/store/Store";

// ===== داده‌های کارمندان =====
const employees = [
  { id: 1, name: "Lucas Bennett",   role: "Web Designer",   avatar: "https://i.pravatar.cc/40?img=11", color: "#f59e0b" },
  { id: 2, name: "Evelyn Hope",     role: "Web Designer",   avatar: "https://i.pravatar.cc/40?img=5",  color: "#8b5cf6" },
  { id: 3, name: "Henry Mason",     role: "Web Designer",   avatar: "https://i.pravatar.cc/40?img=15", color: "#ec4899" },
  { id: 4, name: "Sophia Jane",     role: "Web Designer",   avatar: "https://i.pravatar.cc/40?img=16", color: "#f59e0b" },
  { id: 5, name: "Ethan Cole",      role: "Web Designer",   avatar: "https://i.pravatar.cc/40?img=12", color: "#f59e0b" },
  { id: 6, name: "Isabella Claire", role: "Web Designer",   avatar: "https://i.pravatar.cc/40?img=9",  color: "#ec4899" },
  { id: 7, name: "Liam Risher",     role: "Web Designer",   avatar: "https://i.pravatar.cc/40?img=13", color: "#ec4899" },
  { id: 8, name: "Mia Torres",      role: "UI/UX Designer", avatar: "https://i.pravatar.cc/40?img=20", color: "#6c63ff" },
];

// ===== روزهای ماه =====
const days = [
  { day: 1,  weekday: "MO" }, { day: 2,  weekday: "Tu" }, { day: 3,  weekday: "We" },
  { day: 4,  weekday: "Th" }, { day: 5,  weekday: "Fr" }, { day: 6,  weekday: "Sa" },
  { day: 7,  weekday: "MO" }, { day: 8,  weekday: "Tu" }, { day: 9,  weekday: "We" },
  { day: 10, weekday: "Th" }, { day: 11, weekday: "Fr" }, { day: 12, weekday: "Sa" },
  { day: 13, weekday: "MO" }, { day: 14, weekday: "Tu" }, { day: 15, weekday: "We" },
  { day: 16, weekday: "Th" }, { day: 17, weekday: "Fr" }, { day: 18, weekday: "Sa" },
  { day: 19, weekday: "MO" }, { day: 20, weekday: "Tu" }, { day: 21, weekday: "We" },
  { day: 22, weekday: "Th" }, { day: 23, weekday: "Fr" }, { day: 24, weekday: "Sa" },
  { day: 25, weekday: "MO" }, { day: 26, weekday: "Tu" }, { day: 27, weekday: "We" },
  { day: 28, weekday: "Th" }, { day: 29, weekday: "Fr" }, { day: 30, weekday: "Sa" },
  { day: 31, weekday: "MO" },
];

// ===== داده‌های حضور و غیاب =====
const attendanceData = {
  1: [true,true,true,true,true,false,true,true,true,true,false,true,true,true,false,true,true,true,true,true,true,true,false,true,false,true,true,true,true,true,true],
  2: [true,true,true,true,true,false,true,true,false,true,false,true,true,true,false,false,true,true,true,true,true,true,false,true,false,true,false,true,true,true,true],
  3: [false,true,true,true,true,false,true,true,false,true,false,true,true,true,false,false,true,false,true,true,true,false,true,true,true,true,true,true,false,true,true],
  4: [false,true,true,true,true,false,true,true,false,true,false,true,true,true,false,false,true,false,true,true,true,false,true,true,true,false,true,true,false,false,true],
  5: [true,true,true,true,true,false,true,true,true,true,false,true,true,true,false,true,true,true,true,true,true,false,true,false,true,true,true,true,true,true,true],
  6: [true,true,true,true,true,false,true,true,false,true,false,true,true,true,false,false,true,true,true,true,true,false,true,false,true,false,true,true,true,true,true],
  7: [false,true,true,true,true,false,true,true,false,true,false,true,true,true,false,false,true,false,true,true,true,false,true,true,true,true,true,true,true,true,true],
  8: [true,true,true,true,true,false,true,true,true,true,false,true,true,true,false,true,true,false,true,true,true,true,false,true,true,true,true,true,false,true,true],
};

const getPresent = (empId) => (attendanceData[empId] || []).filter(Boolean).length;

// ===== پالت رنگ برای لایت و دارک =====
const palette = {
  light: {
    pageBg:      "#f8f9fb",
    paperBg:     "#ffffff",
    stickyBg:    "#f8f9fb",
    stickyHover: "#faf9ff",
    rowBg:       "#ffffff",
    rowHover:    "#faf9ff",
    border:      "#e2e8f0",
    borderLight: "#f1f5f9",
    textPrimary: "#1e293b",
    textSecond:  "#64748b",
    scrollTrack: "#f1f5f9",
    scrollThumb: "#cbd5e1",
    noteBg:      "#ede9fe",
    noteColor:   "#4c1d95",
  },
  dark: {
    pageBg:      "#0f172a",
    paperBg:     "#1e293b",
    stickyBg:    "#162032",
    stickyHover: "#1e2d45",
    rowBg:       "#1e293b",
    rowHover:    "#243447",
    border:      "#334155",
    borderLight: "#253347",
    textPrimary: "#f1f5f9",
    textSecond:  "#94a3b8",
    scrollTrack: "#253347",
    scrollThumb: "#475569",
    noteBg:      "#1e1b4b",
    noteColor:   "#c4b5fd",
  },
};

// ===== آیکن حضور =====
const AttendanceIcon = ({ present }) =>
  present ? (
    <CheckIcon sx={{ color: "#22c55e", fontSize: 16, filter: "drop-shadow(0 0 2px #bbf7d0)" }} />
  ) : (
    <CloseIcon sx={{ color: "#ef4444", fontSize: 16, filter: "drop-shadow(0 0 2px #fecaca)" }} />
  );

// ===== کارت موبایل =====
const MobileCard = ({ employee, c }) => {
  const data = attendanceData[employee.id] || [];
  const present = getPresent(employee.id);
  const absent = 31 - present;

  return (
    <Card
      elevation={0}
      sx={{
        mb: 2,
        border: `1px solid ${c.borderLight}`,
        borderRadius: 3,
        bgcolor: c.paperBg,
        overflow: "hidden",
        transition: "box-shadow 0.2s, background-color 0.3s",
        "&:hover": { boxShadow: "0 4px 20px rgba(108,99,255,0.15)" },
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
          <Avatar
            src={employee.avatar}
            sx={{ width: 44, height: 44, border: `2px solid ${employee.color}` }}
          />
          <Box flex={1}>
            <Typography fontWeight={700} fontSize="0.9rem" color={c.textPrimary}>
              {employee.name}
            </Typography>
            <Typography fontSize="0.75rem" color={c.textSecond}>
              {employee.role}
            </Typography>
          </Box>
          <Stack direction="row" spacing={0.5}>
            <Chip
              size="small"
              icon={<CheckIcon sx={{ fontSize: "14px !important" }} />}
              label={present}
              sx={{
                bgcolor: "rgba(34,197,94,0.15)", color: "#22c55e",
                fontWeight: 700, fontSize: "0.75rem",
                "& .MuiChip-icon": { color: "#22c55e" },
              }}
            />
            <Chip
              size="small"
              icon={<CloseIcon sx={{ fontSize: "14px !important" }} />}
              label={absent}
              sx={{
                bgcolor: "rgba(239,68,68,0.15)", color: "#ef4444",
                fontWeight: 700, fontSize: "0.75rem",
                "& .MuiChip-icon": { color: "#ef4444" },
              }}
            />
          </Stack>
        </Stack>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0.5 }}>
          {days.map((d, idx) => (
            <Tooltip
              key={d.day}
              title={`Day ${d.day} (${d.weekday}): ${data[idx] ? "Present" : "Absent"}`}
              arrow
            >
              <Box
                sx={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", p: 0.5, borderRadius: 1.5, cursor: "default",
                  bgcolor: data[idx] ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                  border: `1px solid ${data[idx] ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                }}
              >
                <Typography fontSize="0.55rem" color={c.textSecond} lineHeight={1.2}>
                  {d.day}
                </Typography>
                {data[idx]
                  ? <CheckIcon sx={{ color: "#22c55e", fontSize: 11 }} />
                  : <CloseIcon sx={{ color: "#ef4444", fontSize: 11 }} />
                }
              </Box>
            </Tooltip>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

// ===== کامپوننت اصلی =====
export default function AttendanceTable() {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between("sm", "md"));
  const [hoveredRow, setHoveredRow] = useState(null);

  // ===== دریافت وضعیت dark از Context =====
  const { dark } = useContext(myTheme);

  // ===== انتخاب رنگ‌ها بر اساس dark =====
  const c = dark ? palette.dark : palette.light;

  // ===== ساخت MUI theme داینامیک =====
  const dynamicTheme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: { main: "#6c63ff" },
      success: { main: "#22c55e" },
      error:   { main: "#ef4444" },
      text: { primary: c.textPrimary, secondary: c.textSecond },
      background: { default: c.pageBg, paper: c.paperBg },
    },
    typography: { fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif" },
    shape: { borderRadius: 12 },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root:  { borderBottom: `1px solid ${c.borderLight}`, padding: "8px 6px" },
          head:  { color: c.textSecond, fontWeight: 600, fontSize: "0.75rem", padding: "10px 6px" },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: dark ? "#334155" : "#1e293b",
            fontSize: "0.72rem",
          },
          arrow: { color: dark ? "#334155" : "#1e293b" },
        },
      },
    },
  });

  const visibleDays =
    isMobile ? days.slice(0, 7)  :
    isTablet  ? days.slice(0, 15) :
    days;

  return (
    <ThemeProvider theme={dynamicTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: c.pageBg,
          p: { xs: 2, sm: 3, md: 4 },
          transition: "background-color 0.3s",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            border: `1px solid ${c.border}`,
            bgcolor: c.paperBg,
            overflow: "hidden",
            maxWidth: 1400,
            mx: "auto",
            transition: "background-color 0.3s, border-color 0.3s",
          }}
        >

          {/* ===== هدر ===== */}
          <Box
            sx={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              px: { xs: 2, sm: 3 }, py: { xs: 1.5, sm: 2 },
              borderBottom: `1px solid ${c.borderLight}`,
              flexWrap: "wrap", gap: 1,
            }}
          >
            <Typography
              variant="h6" fontWeight={700} color={c.textPrimary}
              fontSize={{ xs: "1rem", sm: "1.25rem" }}
            >
              Attendance
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: "#6c63ff", borderRadius: 2.5,
                textTransform: "none", fontWeight: 600,
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                px: { xs: 1.5, sm: 2.5 }, py: { xs: 0.8, sm: 1 },
                boxShadow: "0 4px 15px rgba(108,99,255,0.4)",
                "&:hover": { bgcolor: "#5a52d5", boxShadow: "0 6px 20px rgba(108,99,255,0.5)" },
              }}
            >
              {isMobile ? "Mark" : "Mark Attendance"}
            </Button>
          </Box>

          {/* ===== موبایل: کارت ===== */}
          {isMobile ? (
            <Box p={2}>
              <Box
                sx={{
                  mb: 2, p: 1.5, bgcolor: c.noteBg,
                  borderRadius: 2, display: "flex", alignItems: "center", gap: 1,
                }}
              >
                <PersonIcon sx={{ color: "#6c63ff", fontSize: 18 }} />
                <Typography fontSize="0.78rem" color={c.noteColor} fontWeight={600}>
                  Showing first 7 days. Switch to desktop for full view.
                </Typography>
              </Box>
              {employees.map((emp) => (
                <MobileCard key={emp.id} employee={emp} c={c} />
              ))}
            </Box>

          ) : (
            /* ===== دسکتاپ/تبلت: جدول ===== */
            <TableContainer
              sx={{
                overflowX: "auto",
                "&::-webkit-scrollbar": { height: 6 },
                "&::-webkit-scrollbar-track": { background: c.scrollTrack },
                "&::-webkit-scrollbar-thumb": { background: c.scrollThumb, borderRadius: 3 },
              }}
            >
              <Table size="small" sx={{ minWidth: isTablet ? 700 : 900 }}>

                {/* هدر جدول */}
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        minWidth: { sm: 160, md: 200 },
                        position: "sticky", left: 0, zIndex: 2,
                        bgcolor: `${c.stickyBg} !important`,
                        fontWeight: 700, fontSize: "0.78rem", color: c.textSecond,
                        borderRight: `2px solid ${c.border}`,
                      }}
                    >
                      Employee Name
                    </TableCell>

                    {visibleDays.map((d) => (
                      <TableCell key={d.day} align="center" sx={{ minWidth: 32, px: 0.5 }}>
                        <Box>
                          <Typography
                            fontSize="0.72rem" fontWeight={700} lineHeight={1.2}
                            color={d.weekday === "Sa" ? "#ef4444" : c.textPrimary}
                          >
                            {d.day}
                          </Typography>
                          <Typography
                            fontSize="0.62rem" fontWeight={600}
                            color={d.weekday === "Sa" ? "#f87171" : c.textSecond}
                          >
                            {d.weekday}
                          </Typography>
                        </Box>
                      </TableCell>
                    ))}

                    <TableCell
                      align="center"
                      sx={{
                        position: "sticky", right: 0, zIndex: 2,
                        bgcolor: `${c.stickyBg} !important`,
                        borderLeft: `2px solid ${c.border}`,
                        fontWeight: 700, fontSize: "0.78rem",
                        color: c.textSecond, minWidth: 55,
                      }}
                    >
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>

                {/* بدنه جدول */}
                <TableBody>
                  {employees.map((emp) => {
                    const data = attendanceData[emp.id] || [];
                    const present = getPresent(emp.id);
                    const isHovered = hoveredRow === emp.id;

                    return (
                      <TableRow
                        key={emp.id}
                        onMouseEnter={() => setHoveredRow(emp.id)}
                        onMouseLeave={() => setHoveredRow(null)}
                        sx={{
                          bgcolor: isHovered ? c.rowHover : c.rowBg,
                          transition: "background-color 0.15s",
                          "&:last-child td": { border: 0 },
                        }}
                      >
                        {/* نام کارمند */}
                        <TableCell
                          sx={{
                            position: "sticky", left: 0, zIndex: 1,
                            bgcolor: `${isHovered ? c.stickyHover : c.stickyBg} !important`,
                            transition: "background-color 0.15s",
                            borderRight: `2px solid ${c.borderLight}`,
                            py: 1.5,
                          }}
                        >
                          <Stack direction="row" alignItems="center" spacing={1.5}>
                            <Avatar
                              src={emp.avatar}
                              sx={{
                                width: { sm: 32, md: 40 }, height: { sm: 32, md: 40 },
                                border: `2px solid ${emp.color}`,
                                boxShadow: isHovered ? `0 0 0 3px ${emp.color}33` : "none",
                                transition: "box-shadow 0.2s",
                              }}
                            />
                            <Box>
                              <Typography
                                fontWeight={600}
                                fontSize={{ sm: "0.78rem", md: "0.875rem" }}
                                color={c.textPrimary} noWrap
                              >
                                {emp.name}
                              </Typography>
                              <Typography fontSize="0.7rem" color={c.textSecond} noWrap>
                                {emp.role}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>

                        {/* سلول‌های روز */}
                        {visibleDays.map((d, idx) => (
                          <TableCell key={d.day} align="center" sx={{ px: 0.5, py: 1 }}>
                            <Tooltip
                              title={`${d.day} ${d.weekday}: ${data[idx] ? "Present ✓" : "Absent ✗"}`}
                              arrow placement="top"
                            >
                              <Box
                                sx={{
                                  display: "flex", justifyContent: "center",
                                  alignItems: "center", cursor: "default",
                                  borderRadius: "50%", width: 24, height: 24, mx: "auto",
                                  transition: "all 0.15s",
                                  "&:hover": {
                                    bgcolor: data[idx]
                                      ? "rgba(34,197,94,0.15)"
                                      : "rgba(239,68,68,0.15)",
                                    transform: "scale(1.2)",
                                  },
                                }}
                              >
                                <AttendanceIcon present={data[idx]} />
                              </Box>
                            </Tooltip>
                          </TableCell>
                        ))}

                        {/* مجموع */}
                        <TableCell
                          align="center"
                          sx={{
                            position: "sticky", right: 0,
                            bgcolor: `${isHovered ? c.stickyHover : c.stickyBg} !important`,
                            transition: "background-color 0.15s",
                            borderLeft: `2px solid ${c.borderLight}`,
                          }}
                        >
                          <Chip
                            label={`${present}/31`}
                            size="small"
                            sx={{
                              fontWeight: 700, fontSize: "0.72rem", height: 22,
                              bgcolor:
                                present >= 28 ? "rgba(34,197,94,0.15)"  :
                                present >= 24 ? "rgba(234,179,8,0.15)"  :
                                               "rgba(239,68,68,0.15)",
                              color:
                                present >= 28 ? "#22c55e" :
                                present >= 24 ? (dark ? "#fbbf24" : "#ca8a04") :
                                               "#ef4444",
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {/* ===== فوتر ===== */}
          <Box
            sx={{
              px: { xs: 2, sm: 3 }, py: 1.5,
              borderTop: `1px solid ${c.borderLight}`,
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap", gap: 1,
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CheckIcon sx={{ color: "#22c55e", fontSize: 16 }} />
                <Typography fontSize="0.75rem" color={c.textSecond}>Present</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CloseIcon sx={{ color: "#ef4444", fontSize: 16 }} />
                <Typography fontSize="0.75rem" color={c.textSecond}>Absent</Typography>
              </Stack>
            </Stack>
            <Typography fontSize="0.72rem" color={c.textSecond}>
              {employees.length} employees · January 2025
            </Typography>
          </Box>

        </Paper>
      </Box>
    </ThemeProvider>
  );
}
