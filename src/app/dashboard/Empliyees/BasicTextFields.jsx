"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
import { myTheme } from "@/app/store/Store";
import EmployeeTable from "./Table";
const currencies1 = [
  { value: "", label: "All" },
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "InActive" },
  { value: "pending", label: "Pending" },
];
const currencies2 = [
  { value: "", label: "All" },
  { value: "Computer Science", label: "Computer Science" },
  { value: "Web Designer", label: "Web Designer" },
];
const currencies3 = [
  { value: "", label: "All" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
const currencies4 = [
  { value: "", label: "All" },
  { value: "Delhi", label: "Delhi" },
  { value: "Bengaluru", label: "Bengaluru" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Ahmedabad", label: "Ahmedabad" },
  { value: "Kolkata", label: "Kolkata" },
  { value: "Chennai", label: "Chennai" },
];

const fieldSx = (dark) => ({
  width: "25ch",
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: dark ? "#16162a" : "#f7f7fb",
    color: dark ? "#ddd6ff" : "#222",
    transition: "background 0.3s, box-shadow 0.3s",
    "& fieldset": {
      borderColor: dark ? "#633dfe44" : "#d0d0e0",
      borderWidth: "1.5px",
    },
    "&:hover fieldset": {
      borderColor: dark ? "#8b6bff" : "#aaa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#633dfe",
      boxShadow: "0 0 0 3px rgba(99,61,254,0.18)",
    },
  },
  "& .MuiInputLabel-root": {
    color: dark ? "#7b7baa" : "#888",
    fontSize: "0.88rem",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8b6bff",
  },
  "& .MuiSelect-icon": {
    color: dark ? "#8b6bff" : "#633dfe",
  },
  "& .MuiInputBase-input": {
    color: dark ? "#ddd6ff" : "#111",
    fontSize: "0.88rem",
  },
});

const menuProps = (dark) => ({
  PaperProps: {
    sx: {
      backgroundColor: dark ? "#13132b" : "#fff",
      border: dark ? "1px solid #633dfe33" : "1px solid #e8e8f0",
      borderRadius: "14px",
      mt: "6px",
      boxShadow: dark
        ? "0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px #633dfe22"
        : "0 6px 20px rgba(0,0,0,0.10)",
      "& .MuiMenuItem-root": {
        color: dark ? "#c5beff" : "#333",
        fontSize: "0.86rem",
        borderRadius: "8px",
        mx: "6px",
        my: "2px",
        transition: "all 0.15s",
        "&:hover": {
          backgroundColor: dark
            ? "rgba(99,61,254,0.16)"
            : "rgba(99,61,254,0.07)",
          color: dark ? "#b8a9ff" : "#633dfe",
          paddingLeft: "18px",
        },
        "&.Mui-selected": {
          backgroundColor: dark
            ? "rgba(99,61,254,0.25)"
            : "rgba(99,61,254,0.12)",
          color: dark ? "#c4b5ff" : "#633dfe",
          fontWeight: 700,
        },
        "&.Mui-selected:hover": {
          backgroundColor: dark
            ? "rgba(99,61,254,0.32)"
            : "rgba(99,61,254,0.18)",
        },
      },
    },
  },
});

export default function BasicTextFields() {
  const { dark } = useContext(myTheme);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [location, setlocation] = useState("");

  const[apply , setApply]=useState(
    {search:"",
      status:"",
      gender:"",
      department:"",
      location:""
    })
  return (
    <Box
      sx={{
        marginTop: "20px",
        backgroundColor: dark ? "#0c0c1d" : "#ffffff",
        borderRadius: "22px",
        border: dark ? "1px solid #633dfe2a" : "1px solid #ebebf5",
        boxShadow: dark
          ? "0 0 0 1px #633dfe11, 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)"
          : "0 4px 24px rgba(99,61,254,0.08)",
        padding: "24px 28px 22px",
        transition: "background 0.35s, box-shadow 0.35s",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.5 }}>
        <Box
          sx={{
            width: 4,
            height: 18,
            borderRadius: "4px",
            background: "linear-gradient(180deg, #633dfe, #a78bff)",
            boxShadow: dark ? "0 0 8px #633dfe88" : "none",
          }}
        />
        <Box
          sx={{
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: dark ? "#7b7baa" : "#aaa",
          }}
        >
          Search & Filter
        </Box>
      </Box>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          size="small"
          onChange={(e)=>setSearch(e.target.value)}
          sx={fieldSx(dark)}
        />

        <TextField
          select
          label="Status"
          defaultValue="EUR"
          size="small"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          sx={fieldSx(dark)}
          SelectProps={{ MenuProps: menuProps(dark) }}
        >
          {currencies1.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Department"
          defaultValue="EUR"
          size="small"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          sx={fieldSx(dark)}
          SelectProps={{ MenuProps: menuProps(dark) }}
        >
          {currencies2.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Gender"
          defaultValue="EUR"
          size="small"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          sx={fieldSx(dark)}
          SelectProps={{ MenuProps: menuProps(dark) }}
        >
          {currencies3.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Location"
          defaultValue="EUR"
          size="small"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          sx={fieldSx(dark)}
          SelectProps={{ MenuProps: menuProps(dark) }}
        >
          {currencies4.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>

        <Stack direction="row" spacing={1.5}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "transparent",
              color: dark ? "#a78bff" : "#633dfe",
              borderColor: dark ? "#633dfe66" : "#633dfe99",
              borderRadius: "15px",
              padding: "8px 20px",
              fontWeight: 600,
              fontSize: "0.84rem",
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: dark
                  ? "rgba(99,61,254,0.10)"
                  : "rgba(99,61,254,0.06)",
                borderColor: "#633dfe",
                color: dark ? "#c4b5ff" : "#633dfe",
                boxShadow: dark
                  ? "0 0 14px rgba(99,61,254,0.28)"
                  : "0 2px 10px rgba(99,61,254,0.18)",
              },
            }}
         onClick={() => {
  setSearch("")
  setStatus("")
  setDepartment("")
  setGender("")
  setlocation("")
  setApply({ search: "", status: "", department: "", gender: "", location: "" })
}}
          >
            Reset
          </Button>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #633dfe 0%, #8b6bff 100%)",
              color: "#fff",
              borderRadius: "15px",
              padding: "8px 22px",
              fontWeight: 700,
              fontSize: "0.84rem",
              textTransform: "none",
              boxShadow: dark
                ? "0 4px 20px rgba(99,61,254,0.50)"
                : "0 4px 14px rgba(99,61,254,0.30)",
              transition: "all 0.25s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #7b52ff 0%, #a084ff 100%)",
                boxShadow: "0 6px 26px rgba(99,61,254,0.60)",
                transform: "translateY(-1px)",
              },
              "&:active": {
                transform: "translateY(0px)",
                boxShadow: "0 2px 10px rgba(99,61,254,0.35)",
              },
            }}
            onClick={()=>{setApply({search , status , gender , department , location})}}
          >
            Apply
          </Button>
        </Stack>
      </Box>
      <EmployeeTable search={apply.search} status={apply.status} department={apply.department} gender={apply.gender} location={apply.location} />
    </Box>
  );
}
