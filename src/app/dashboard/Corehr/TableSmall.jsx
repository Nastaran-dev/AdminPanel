"use client";
import { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { myTheme } from "@/app/store/Store";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { PieChart } from "@mui/x-charts/PieChart";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";



const PIE_DATA = [
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
  { label: "Group D", value: 200, color: "#FF8042" },
];

const PIE_SETTINGS = { margin: { right: 5 }, width: 200, height: 200, hideLegend: true };

const PROJECT_STATS = [
  { label: "Completed Projects", color: "#ff8042", count: 30 },
  { label: "Progress Projects",  color: "#0088fe", count: 40 },
  { label: "Cancelled Projects", color: "#00c49f", count: 10 },
  { label: "Yet to Start",       color: "#ffbb28", count: 20 },
];

const TIME_FILTER_OPTIONS = [
  { value: "USD", label: "week" },
  { value: "EUR", label: "Today" },
  { value: "BTC", label: "month" },
];

const SCHEDULE_ITEMS = [
  { day: 20, dayName: "mon", title: "Development Planning", org: "w3it Technologies", time: "12:05 PM" },
  { day: 20, dayName: "mon", title: "Development Planning", org: "w3it Technologies", time: "12:05 PM" },
];

const EMPLOYEES = [
  { id: 1001, name: "Amelia Rose",    role: "Web Designer", department: "Computer Science", email: "abc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Mumbai", status: "Active",   avatar: "/images/img1.jpg",  avatarBg: "#7c3aed" },
  { id: 1005, name: "Ethan Cole",     role: "Web Designer", department: "Computer Science", email: "abc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Kota",   status: "Inactive", avatar: "/images/img2.jpg",  avatarBg: "#d97706" },
  { id: 1006, name: "Sophia Jane",    role: "Web Designer", department: "Web Designer",     email: "abc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Delhi",  status: "Active",   avatar: "/images/img3.jpg",  avatarBg: "#f59e0b" },
  { id: 1010, name: "Scarlett Elise", role: "Web Designer", department: "Web Designer",     email: "abc@gmail.com", contact: "+91 123 456 7890", gender: "Female", location: "Delhi",  status: "Active",   avatar: "/images/img4.jpg",  avatarBg: "#ec4899" },
  { id: 1011, name: "Samuel Owen",    role: "Web Designer", department: "Computer Science", email: "abc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Delhi",  status: "Inactive", avatar: "/images/img5.jpg",  avatarBg: "#64748b" },
  { id: 1012, name: "Lucas Bennett",  role: "Web Designer", department: "Computer Science", email: "cbc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Kota",   status: "Active",   avatar: "/images/img8.jpg",  avatarBg: "#f97316" },
  { id: 1013, name: "Lucas Bennett",  role: "Web Designer", department: "Computer Science", email: "cbc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Kota",   status: "Active",   avatar: "/images/img9.jpg",  avatarBg: "#f97316" },
  { id: 1014, name: "Lucas Bennett",  role: "Web Designer", department: "Computer Science", email: "cbc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Kota",   status: "Active",   avatar: "/images/img10.jpg", avatarBg: "#f97316" },
  { id: 1015, name: "Lucas Bennett",  role: "Web Designer", department: "Web Designer",     email: "cbc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Kota",   status: "Active",   avatar: "/images/img11.jpg", avatarBg: "#f97316" },
  { id: 1016, name: "Lucas Bennett",  role: "Web Designer", department: "Web Designer",     email: "cbc@gmail.com", contact: "+91 123 456 7890", gender: "Male",   location: "Kota",   status: "Active",   avatar: "/images/img6.jpg",  avatarBg: "#f97316" },
];


const COLUMNS = [
  { id: "id",         label: "ID",            sortable: true, hideOn: null },
  { id: "name",       label: "Employee Name", sortable: true, hideOn: null },
  { id: "department", label: "Department",    sortable: true, hideOn: "sm" },
  { id: "email",      label: "Email",         sortable: true, hideOn: "md" },
  { id: "contact",    label: "Contact",       sortable: true, hideOn: "md" },
  { id: "gender",     label: "Gender",        sortable: true, hideOn: "sm" },
  { id: "location",   label: "Location",      sortable: true, hideOn: "sm" },
  { id: "status",     label: "Status",        sortable: true, hideOn: null },
];



function descendingComparator(a, b, key) {
  if (b[key] < a[key]) return -1;
  if (b[key] > a[key]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) =>  descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function buildColors(dark) {
  return {
    containerBg:      dark ? "#1e293b" : "#ffffff",
    border:           dark ? "#334155" : "#e8ecf4",
    headBg:           dark ? "#1e293b" : "#ffffff",
    headText:         dark ? "#94a3b8" : "#374151",
    rowEven:          dark ? "#1e293b" : "#ffffff",
    rowOdd:           dark ? "#243044" : "#fafbff",
    rowHover:         dark ? "#2d3f5e" : "#f0f4ff",
    idText:           dark ? "#64748b" : "#9ca3af",
    nameText:         dark ? "#f1f5f9" : "#1f2937",
    subText:          dark ? "#64748b" : "#9ca3af",
    cellText:         dark ? "#94a3b8" : "#6b7280",
    emailColor:       dark ? "#818cf8" : "#6366f1",
    sortActiveColor:  dark ? "#818cf8" : "#6366f1",
    shadow:           dark ? "0 4px 24px rgba(0,0,0,0.5)" : "0 4px 24px rgba(0,0,0,0.06)",
    chipActiveBg:     dark ? "#14532d" : "#dcfce7",
    chipActiveText:   dark ? "#4ade80" : "#16a34a",
    chipInactiveBg:   dark ? "#450a0a" : "#fee2e2",
    chipInactiveText: dark ? "#f87171" : "#dc2626",
    labelText:        dark ? "white"   : "black",
  };
}


function StatusChip({ status, c, sizeSx }) {
  const isActive = status === "Active";
  return (
    <Chip
      label={status}
      size="small"
      sx={{
        fontWeight: 600,
        borderRadius: "8px",
        border: "none",
        bgcolor: isActive ? c.chipActiveBg   : c.chipInactiveBg,
        color:   isActive ? c.chipActiveText : c.chipInactiveText,
        ...sizeSx,
      }}
    />
  );
}


function EmployeeIdentity({ emp, c, avatarSx, nameSx, roleSx, gap }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: gap ?? 1.5 }}>
      <Avatar
        src={emp.avatar}
        alt={emp.name}
        sx={{
          border: `2px solid ${emp.avatarBg}55`,
          bgcolor: emp.avatarBg,
          fontWeight: 700,
          flexShrink: 0,
          ...avatarSx,
        }}
      >
        {emp.name[0]}
      </Avatar>
      <Box>
        <Typography sx={{ fontWeight: 700, color: c.nameText, whiteSpace: "nowrap", ...nameSx }}>
          {emp.name}
        </Typography>
        <Typography sx={{ color: c.subText, ...roleSx }}>
          {emp.role}
        </Typography>
      </Box>
    </Box>
  );
}


function CardRow({ label, value, isEmail, c }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: `1px solid ${c.border}`,
        pt: 1,
      }}
    >
      <Typography sx={{ fontSize: { xs: "0.60rem", md: "0.75rem" }, color: c.subText, fontWeight: 600 }}>
        {label}
      </Typography>
      {isEmail ? (
        <Typography component="a" href={`mailto:${value}`} sx={{ fontSize: "0.8rem", color: c.emailColor, textDecoration: "none" }}>
          {value}
        </Typography>
      ) : (
        <Typography sx={{ fontSize: "0.8rem", color: c.cellText }}>{value}</Typography>
      )}
    </Box>
  );
}


function MobileCard({ emp, c }) {
  const cardFields = [
    { label: "ID",         value: emp.id },
    { label: "Department", value: emp.department },
    { label: "Email",      value: emp.email, isEmail: true },
    { label: "Contact",    value: emp.contact },
    { label: "Gender",     value: emp.gender },
    { label: "Location",   value: emp.location },
  ];

  return (
    <Box
      sx={{
        bgcolor: c.containerBg,
        border: `1px solid ${c.border}`,
        borderRadius: 3,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        boxShadow: c.shadow,
        transition: "background-color 0.3s",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <EmployeeIdentity
          emp={emp} c={c}
          avatarSx={{ width: 48, height: 48, fontSize: "1rem" }}
          nameSx={{ fontSize: { xs: "0.6rem", md: "0.9rem" } }}
          roleSx={{ fontSize: { xs: "0.65rem", md: "0.75rem" } }}
        />
        <StatusChip status={emp.status} c={c} sizeSx={{ fontSize: "0.72rem" }} />
      </Box>

      {cardFields.map(({ label, value, isEmail }) => (
        <CardRow key={label} label={label} value={value} isEmail={isEmail} c={c} />
      ))}
    </Box>
  );
}

function ProjectSidebar({ dark, c }) {
  const [timeFilter, setTimeFilter] = useState("EUR");

  return (
    <Box sx={{ width: { xs: "100%", lg: "30%" }, p: 2 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography sx={{ color: c.labelText }}>Project Status</Typography>
        <TextField
          select
          label="Select"
          size="small"
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
        >
          {TIME_FILTER_OPTIONS.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Pie Chart */}
      <PieChart
        series={[{ innerRadius: 50, outerRadius: 100, data: PIE_DATA, arcLabel: "value" }]}
        {...PIE_SETTINGS}
      />

      {/* Project stat rows */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", mt: "15px" }}>
        {PROJECT_STATS.map(({ label, color, count }) => (
          <Box key={label} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "15px", color: c.labelText, display: "flex", gap: "5px" }}>
              <DataSaverOffIcon sx={{ color }} />
              {label}
            </Typography>
            <Typography sx={{ color: c.labelText }}>{count}</Typography>
          </Box>
        ))}
      </Box>

      {/* Calendar */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar"]}>
          <DemoItem>
            <DateCalendar defaultValue={dayjs("2022-04-17")} readOnly />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>

     
      <Box sx={{ display: "flex", flexDirection: "column", height: "130px", overflowY: "auto", backgroundColor: "white", p: 1 ,borderRadius:"15px"}}>
        {SCHEDULE_ITEMS.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
              padding: "10px 5px",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <Box sx={{ backgroundColor: "#c8deff", padding: "5px 8px", borderRadius: "10px" }}>
              <Typography sx={{ color: "#6160f8", fontWeight: 600 }}>{item.day}</Typography>
              <Typography sx={{ fontWeight: 600 }}>{item.dayName}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "9px", fontWeight: 600 }}>{item.title}</Typography>
              <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>{item.org}</Typography>
            </Box>
            <Typography sx={{ fontWeight: 600 }}>{item.time}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}



function InnerTable({ dark }) {
  const muiTheme = useTheme();
  const isXs = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isSm = useMediaQuery(muiTheme.breakpoints.down("md"));
  const isMd = useMediaQuery(muiTheme.breakpoints.down("lg"));

  const [order,   setOrder]   = useState("asc");
  const [orderBy, setOrderBy] = useState("id");

  const c = buildColors(dark);

  const handleSort = (columnId) => {
    setOrder(orderBy === columnId && order === "asc" ? "desc" : "asc");
    setOrderBy(columnId);
  };

  const sortedEmployees = [...EMPLOYEES].sort(getComparator(order, orderBy));

  const visibleColumns = COLUMNS.filter((col) => {
    if (col.hideOn === "sm" && (isXs || isSm)) return false;
    if (col.hideOn === "md" && (isXs || isSm || isMd)) return false;
    return true;
  });

  
  const cellPx     = { sm: 1.5, md: 2, lg: 2.5 };
  const bodyFontSz = { sm: "0.78rem", md: "0.82rem", lg: "0.85rem" };

  return (
    <Box sx={{ width: "100%", display: { xs: "column", lg: "flex" } }}>
     
      <Box
        sx={{
          minHeight: "100vh",
          p: { xs: 1.5, sm: 2, md: 3, lg: 4 },
          transition: "background-color 0.3s",
         
          width: { xs: "100%", lg: "70%" },
        }}
      >
        {isXs ? (
          
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {sortedEmployees.map((emp) => <MobileCard key={emp.id} emp={emp} c={c} />)}
          </Box>
        ) : (
         
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: 3,
              overflowX: "auto",
              bgcolor: c.containerBg,
              border: `1px solid ${c.border}`,
              boxShadow: c.shadow,
              transition: "background-color 0.3s, border-color 0.3s",
            }}
          >
            <Table sx={{ minWidth: isSm ? 500 : isMd ? 700 : 900 }}>
             
              <TableHead>
                <TableRow sx={{ bgcolor: c.headBg }}>
                  {visibleColumns.map((col) => (
                    <TableCell
                      key={col.id}
                      sortDirection={orderBy === col.id ? order : false}
                      sx={{
                        fontWeight: 700,
                        fontSize: { sm: "0.72rem", md: "0.75rem", lg: "0.78rem" },
                        color: c.headText,
                        bgcolor: c.headBg,
                        borderBottom: `2px solid ${c.border}`,
                        whiteSpace: "nowrap",
                        py: { sm: 1.5, md: 2 },
                        px: cellPx,
                        transition: "color 0.3s, background-color 0.3s",
                      }}
                    >
                      {col.sortable ? (
                        <TableSortLabel
                          active={orderBy === col.id}
                          direction={orderBy === col.id ? order : "asc"}
                          onClick={() => handleSort(col.id)}
                          sx={{
                            color: `${c.headText} !important`,
                            "& .MuiTableSortLabel-icon": { opacity: 0.4, color: `${c.headText} !important` },
                            "&.Mui-active":                { color: `${c.sortActiveColor} !important` },
                            "&.Mui-active .MuiTableSortLabel-icon": { opacity: 1, color: `${c.sortActiveColor} !important` },
                          }}
                        >
                          {col.label}
                        </TableSortLabel>
                      ) : col.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

             
              <TableBody>
                {sortedEmployees.map((emp, idx) => (
                  <TableRow
                    key={emp.id}
                    hover
                    sx={{
                      bgcolor: idx % 2 === 0 ? c.rowEven : c.rowOdd,
                      "&:hover": { bgcolor: c.rowHover },
                      transition: "background-color 0.15s",
                      "&:last-child td": { borderBottom: 0 },
                    }}
                  >
                    
                    <TableCell sx={{ color: c.idText, fontWeight: 500, fontSize: bodyFontSz, px: cellPx, borderColor: c.border }}>
                      {emp.id}
                    </TableCell>

                   
                    <TableCell sx={{ px: cellPx, py: { sm: 1, md: 1.5 }, borderColor: c.border }}>
                      <EmployeeIdentity
                        emp={emp} c={c}
                        gap={{ sm: 1, md: 1.5 }}
                        avatarSx={{ fontSize: { sm: "0.8rem", md: "0.9rem" } }}
                        nameSx={{ fontSize: { sm: "0.78rem", md: "0.84rem", lg: "0.88rem" } }}
                        roleSx={{ fontSize: { sm: "0.68rem", md: "0.72rem", lg: "0.75rem" } }}
                      />
                    </TableCell>

                   
                    {!isSm && (
                      <TableCell sx={{ color: c.cellText, fontSize: { md: "0.8rem", lg: "0.85rem" }, px: { md: 2, lg: 2.5 }, borderColor: c.border, whiteSpace: "nowrap" }}>
                        {emp.department}
                      </TableCell>
                    )}

                    
                    {!isMd && (
                      <TableCell sx={{ px: 2.5, borderColor: c.border }}>
                        <Typography
                          component="a"
                          href={`mailto:${emp.email}`}
                          sx={{ color: c.emailColor, fontSize: "0.85rem", textDecoration: "none", "&:hover": { textDecoration: "underline" }, whiteSpace: "nowrap" }}
                        >
                          {emp.email}
                        </Typography>
                      </TableCell>
                    )}

                   
                    {!isMd && (
                      <TableCell sx={{ color: c.cellText, fontSize: "0.85rem", px: 2.5, borderColor: c.border, whiteSpace: "nowrap" }}>
                        {emp.contact}
                      </TableCell>
                    )}

                   
                    {!isSm && (
                      <TableCell sx={{ color: c.cellText, fontSize: { md: "0.8rem", lg: "0.85rem" }, px: { md: 2, lg: 2.5 }, borderColor: c.border }}>
                        {emp.gender}
                      </TableCell>
                    )}

                   
                    {!isSm && (
                      <TableCell sx={{ color: c.cellText, fontSize: { md: "0.8rem", lg: "0.85rem" }, px: { md: 2, lg: 2.5 }, borderColor: c.border }}>
                        {emp.location}
                      </TableCell>
                    )}

                  
                    <TableCell sx={{ px: cellPx, borderColor: c.border }}>
                      <StatusChip
                        status={emp.status} c={c}
                        sizeSx={{ fontSize: { sm: "0.68rem", md: "0.72rem", lg: "0.75rem" }, px: 0.5 }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <ProjectSidebar dark={dark} c={c} />
    </Box>
  );
}



export default function Tablesmall() {
  const { dark } = useContext(myTheme);

  const muiTheme = createTheme({
    palette: { mode: dark ? "dark" : "light" },
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <InnerTable dark={dark} />
    </ThemeProvider>
  );
}