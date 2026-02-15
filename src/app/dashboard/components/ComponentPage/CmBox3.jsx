"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { myTheme } from "@/app/store/Store";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 110 },
  {
    field: "fullName",
    headerName: "Full name",
    width: 200,
    sortable: false,
    valueGetter: (value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function CmBox3() {
  const { dark } = useContext(myTheme);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", md: "row" },
        marginTop: "20px",
        overflowX: "hidden", 
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "70%",
          },
          height:"400px",
          borderRadius: "10px",
          backgroundColor: dark ? "#1e2126" : "white",
          border: "0.1px solid #35383c",
          overflow: "hidden",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height:"100%",
            overflow: "hidden",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              border: 0,
              "& .MuiDataGrid-virtualScroller": {
                overflowX: "auto",
              },
              "& .MuiDataGrid-main": {
                overflow: "hidden", 
              },
            }}
          />
        </Paper>
      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            md: "30%",
          },
          height: "400px",
          borderRadius: "10px",
          backgroundColor: dark ? "#1e2126" : "white",
          border: "0.1px solid #35383c",
        }}
      ></Box>
    </Box>
  );
}