"use client"
import { useContext, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { myTheme } from "@/app/store/Store";


const employees = [
  {
    id: 1001,
    name: "Amelia Rose",
    role: "Web Designer",
    department: "Computer Science",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Mumbai",
    status: "Active",
    avatar: "/images/img1.jpg",
    avatarBg: "#7c3aed",
  },
  {
    id: 1005,
    name: "Ethan Cole",
    role: "Web Designer",
    department: "Computer Science",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Kota",
    status: "Inactive",
    avatar: "/images/img2.jpg",
    avatarBg: "#d97706",
  },
  {
    id: 1006,
    name: "Sophia Jane",
    role: "Web Designer",
    department: "Computer Science",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Delhi",
    status: "Active",
    avatar: "/images/img3.jpg",
    avatarBg: "#f59e0b",
  },
  {
    id: 1010,
    name: "Scarlett Elise",
    role: "Web Designer",
    department: "Computer Science",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Female",
    location: "Delhi",
    status: "Active",
    avatar: "/images/img4.jpg",
    avatarBg: "#ec4899",
  },
  {
    id: 1011,
    name: "Samuel Owen",
    role: "Web Designer",
    department: "Computer Science",
    email: "abc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Delhi",
    status: "Inactive",
    avatar: "/images/img5.jpg",
    avatarBg: "#64748b",
  },
  {
    id: 1012,
    name: "Lucas Bennett",
    role: "Web Designer",
    department: "Computer Science",
    email: "cbc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Kota",
    status: "Active",
    avatar: "/images/img8.jpg",
    avatarBg: "#f97316",
  },
  {
    id: 1013,
    name: "Lucas Bennett",
    role: "Web Designer",
    department: "Computer Science",
    email: "cbc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Kota",
    status: "Active",
    avatar: "/images/img9.jpg",
    avatarBg: "#f97316",
  },
  {
    id: 1014,
    name: "Lucas Bennett",
    role: "Web Designer",
    department: "Computer Science",
    email: "cbc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Kota",
    status: "Active",
    avatar: "/images/img10.jpg",
    avatarBg: "#f97316",
  },
  {
    id: 1015,
    name: "Lucas Bennett",
    role: "Web Designer",
    department: "Computer Science",
    email: "cbc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Kota",
    status: "Active",
    avatar: "/images/img11.jpg",
    avatarBg: "#f97316",
  },
  {
    id: 1016,
    name: "Lucas Bennett",
    role: "Web Designer",
    department: "Computer Science",
    email: "cbc@gmail.com",
    contact: "+91 123 456 7890",
    gender: "Male",
    location: "Kota",
    status: "Active",
    avatar: "/images/img6.jpg",
    avatarBg: "#f97316",
  },
];


const columns = [
  { id: "id",         label: "ID",             sortable: true, hideOn: null   },
  { id: "name",       label: "Employee Name",  sortable: true, hideOn: null   },
  { id: "department", label: "Department",     sortable: true, hideOn: "sm"   },
  { id: "email",      label: "Email",          sortable: true, hideOn: "md"   },
  { id: "contact",    label: "Contact",        sortable: true, hideOn: "md"   },
  { id: "gender",     label: "Gender",         sortable: true, hideOn: "sm"   },
  { id: "location",   label: "Location",       sortable: true, hideOn: "sm"   },
  { id: "status",     label: "Status",         sortable: true, hideOn: null   },
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) =>  descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function MobileCard({ emp, c }) {
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            src={emp.avatar}
            alt={emp.name}
            sx={{
              width: 48,
              height: 48,
              border: `2px solid ${emp.avatarBg}55`,
              bgcolor: emp.avatarBg,
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            {emp.name[0]}
          </Avatar>
          <Box>
            <Typography sx={{ fontWeight: 700, color: c.nameText, fontSize:{xs:"0.6rem",md:"0.9rem"} }}>
              {emp.name}
            </Typography>
            <Typography sx={{ color: c.subText, fontSize:{xs:"0.65rem",md:"0.75rem"} }}>
              {emp.role}
            </Typography>
          </Box>
        </Box>
        <Chip
          label={emp.status}
          size="small"
          sx={{
            fontWeight: 600,
            fontSize: "0.72rem",
            borderRadius: "8px",
            border: "none",
            bgcolor: emp.status === "Active" ? c.chipActiveBg   : c.chipInactiveBg,
            color:   emp.status === "Active" ? c.chipActiveText  : c.chipInactiveText,
          }}
        />
      </Box>

    
      {[
        { label: "ID",         value: emp.id },
        { label: "Department", value: emp.department },
        { label: "Email",      value: emp.email,   isEmail: true },
        { label: "Contact",    value: emp.contact },
        { label: "Gender",     value: emp.gender },
        { label: "Location",   value: emp.location },
      ].map(({ label, value, isEmail }) => (
        <Box
          key={label}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${c.border}`,
            pt: 1,
          }}
        >
          <Typography sx={{ fontSize:{xs:"0.60rem",md:"0.75rem"}, color: c.subText, fontWeight: 600 }}>
            {label}
          </Typography>
          {isEmail ? (
            <Typography
              component="a"
              href={`mailto:${value}`}
              sx={{ fontSize: "0.8rem", color: c.emailColor, textDecoration: "none" }}
            >
              {value}
            </Typography>
          ) : (
            <Typography sx={{ fontSize: "0.8rem", color: c.cellText }}>
              {value}
            </Typography>
          )}
        </Box>
      ))}
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

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  const sortedEmployees = [...employees].sort(getComparator(order, orderBy));

 
  const c = {
    containerBg:      dark ? "#1e293b"                        : "#ffffff",
    border:           dark ? "#334155"                        : "#e8ecf4",
    headBg:           dark ? "#1e293b"                        : "#ffffff",
    headText:         dark ? "#94a3b8"                        : "#374151",
    rowEven:          dark ? "#1e293b"                        : "#ffffff",
    rowOdd:           dark ? "#243044"                        : "#fafbff",
    rowHover:         dark ? "#2d3f5e"                        : "#f0f4ff",
    idText:           dark ? "#64748b"                        : "#9ca3af",
    nameText:         dark ? "#f1f5f9"                        : "#1f2937",
    subText:          dark ? "#64748b"                        : "#9ca3af",
    cellText:         dark ? "#94a3b8"                        : "#6b7280",
    locationText:     dark ? "#64748b"                        : "#9ca3af",
    emailColor:       dark ? "#818cf8"                        : "#6366f1",
    sortActiveColor:  dark ? "#818cf8"                        : "#6366f1",
    shadow:           dark ? "0 4px 24px rgba(0,0,0,0.5)"    : "0 4px 24px rgba(0,0,0,0.06)",
    chipActiveBg:     dark ? "#14532d"                        : "#dcfce7",
    chipActiveText:   dark ? "#4ade80"                        : "#16a34a",
    chipInactiveBg:   dark ? "#450a0a"                        : "#fee2e2",
    chipInactiveText: dark ? "#f87171"                        : "#dc2626",
  };

 
  const visibleColumns = columns.filter((col) => {
    if (col.hideOn === "sm" && (isXs || isSm)) return false;
    if (col.hideOn === "md" && (isXs || isSm || isMd)) return false;
    return true;
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: c.pageBg,
        p: { xs: 1.5, sm: 2, md: 3, lg: 4 },
        transition: "background-color 0.3s",
      }}
    >
     
      {isXs ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {sortedEmployees.map((emp) => (
            <MobileCard key={emp.id} emp={emp} c={c} />
          ))}
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

            {/* Head */}
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
                      px: { sm: 1.5, md: 2, lg: 2.5 },
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
                          "& .MuiTableSortLabel-icon": {
                            opacity: 0.4,
                            color: `${c.headText} !important`,
                          },
                          "&.Mui-active": {
                            color: `${c.sortActiveColor} !important`,
                          },
                          "&.Mui-active .MuiTableSortLabel-icon": {
                            opacity: 1,
                            color: `${c.sortActiveColor} !important`,
                          },
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
                 
                  <TableCell
                    sx={{
                      color: c.idText,
                      fontWeight: 500,
                      fontSize: { sm: "0.78rem", md: "0.82rem", lg: "0.85rem" },
                      px: { sm: 1.5, md: 2, lg: 2.5 },
                      borderColor: c.border,
                    }}
                  >
                    {emp.id}
                  </TableCell>

                 
                  <TableCell
                    sx={{
                      px: { sm: 1.5, md: 2, lg: 2.5 },
                      py: { sm: 1, md: 1.5 },
                      borderColor: c.border,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: { sm: 1, md: 1.5 } }}>
                      <Avatar
                        src={emp.avatar}
                        alt={emp.name}
                        sx={{
                          
                          border: `2px solid ${emp.avatarBg}55`,
                          bgcolor: emp.avatarBg,
                          fontSize: { sm: "0.8rem", md: "0.9rem" },
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {emp.name[0]}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: c.nameText,
                            fontSize: { sm: "0.78rem", md: "0.84rem", lg: "0.88rem" },
                            whiteSpace: "nowrap",
                          }}
                        >
                          {emp.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: c.subText,
                            fontSize: { sm: "0.68rem", md: "0.72rem", lg: "0.75rem" },
                          }}
                        >
                          {emp.role}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                 
                  {!isSm && (
                    <TableCell
                      sx={{
                        color: c.cellText,
                        fontSize: { md: "0.8rem", lg: "0.85rem" },
                        px: { md: 2, lg: 2.5 },
                        borderColor: c.border,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {emp.department}
                    </TableCell>
                  )}

                  
                  {!isMd && (
                    <TableCell sx={{ px: 2.5, borderColor: c.border }}>
                      <Typography
                        component="a"
                        href={`mailto:${emp.email}`}
                        sx={{
                          color: c.emailColor,
                          fontSize: "0.85rem",
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                          whiteSpace: "nowrap",
                        }}
                      >
                        {emp.email}
                      </Typography>
                    </TableCell>
                  )}

                 
                  {!isMd && (
                    <TableCell
                      sx={{
                        color: c.cellText,
                        fontSize: "0.85rem",
                        px: 2.5,
                        borderColor: c.border,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {emp.contact}
                    </TableCell>
                  )}

                  
                  {!isSm && (
                    <TableCell
                      sx={{
                        color: c.cellText,
                        fontSize: { md: "0.8rem", lg: "0.85rem" },
                        px: { md: 2, lg: 2.5 },
                        borderColor: c.border,
                      }}
                    >
                      {emp.gender}
                    </TableCell>
                  )}

                 
                  {!isSm && (
                    <TableCell
                      sx={{
                        color: c.locationText,
                        fontSize: { md: "0.8rem", lg: "0.85rem" },
                        px: { md: 2, lg: 2.5 },
                        borderColor: c.border,
                      }}
                    >
                      {emp.location}
                    </TableCell>
                  )}

                 
                  <TableCell sx={{ px: { sm: 1.5, md: 2, lg: 2.5 }, borderColor: c.border }}>
                    <Chip
                      label={emp.status}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: { sm: "0.68rem", md: "0.72rem", lg: "0.75rem" },
                        borderRadius: "8px",
                        px: 0.5,
                        border: "none",
                        bgcolor: emp.status === "Active" ? c.chipActiveBg   : c.chipInactiveBg,
                        color:   emp.status === "Active" ? c.chipActiveText  : c.chipInactiveText,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default function EmployeeTable() {
  const { dark } = useContext(myTheme);

  const muiTheme = createTheme({
    typography: { fontFamily: "'Nunito', 'Segoe UI', sans-serif" },
    palette:    { mode: dark ? "dark" : "light" },
    breakpoints: {
      values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <InnerTable dark={dark} />
    </ThemeProvider>
  );
}
