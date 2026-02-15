"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { myTheme } from "@/app/store/Store";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Button from "@mui/material/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const columns = [
  { field: "id", headerName: "Customer", width: 90 },
  {
    field: "itemimage",
    headerName: "item",
    width: 100,
    sortable: false,
    renderCell: (params) => {
      const imagePath = params.row.firstName;
      if (imagePath && imagePath.startsWith("/images/")) {
        return (
          <Image
            src={imagePath}
            alt="hi"
            width={50}
            height={50}
            style={{ objectFit: "contain" }}
          />
        );
      }
    },
  },
  {
    field: "itembutton",
    headerName: "status",
    width: 120,
    sortable: false,
    renderCell: (params) => {
      const buttinPath = params.row.nacy;
      return (
        <>
          <Button
            variant="contained"
            color="success"
            sx={{ backdropFilter: "blur" }}
          >
            Success
          </Button>
        </>
      );
    },
  },
  { field: "lastName", headerName: "Name", width: 150 },
  { field: "age", headerName: "Date", type: "number", width: 110 },

  {
    field: "fullName",
    headerName: "Action",
    width: 200,
    sortable: false,
    renderCell: (params) => {
      const buttinPath = params.row.nacy;
      return (
        <Box sx={{display:"flex" , gap:"10px" , alignItems:"center",height:"100%"}}>
           <VisibilityIcon/>
           <DeleteForeverIcon sx={{color:"red"}}/>
          
           <MoreVertIcon/>
        </Box>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: "James Carter",
    firstName: "/images/imgi_9_avatar9.webp",
    age: "	24 May 2024",
  
  },
  {
    id: 2,
    lastName: "Michael Thompson",
    firstName: "/images/imgi_1_avatar1.webp",
    age: "	23 May 2024",
  },
  {
    id: 3,
    lastName: "Daniel Rivera",
    firstName: "/images/imgi_2_avatar2.webp",
    age: "	22 May 2024",
  },
  {
    id: 4,
    lastName: "Robert Bennett",
    firstName: "/images/imgi_3_avatar3.webp",
    age: "	21 May 2024",
  },
  {
    id: 5,
    lastName: "Anthony Wallace",
    firstName: "/images/imgi_4_avatar4.webp",
    age: "	20 May 2024",
  },
  {
    id: 6,
    lastName: "Noah Bennett",
    firstName: "/images/imgi_5_avatar5.webp",
    age: "	19 May 2024",
  },
  {
    id: 7,
    lastName: "Ethan Carter",
    firstName: "/images/imgi_6_avatar6.webp",
    age: "	18 May 2024",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "/images/imgi_7_avatar7.webp",
    age: "	17 May 2024",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "/images/imgi_8_avatar8.webp",
    age: "	16 May 2024",
  },
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
          height: "400px",
          borderRadius: "10px",
          backgroundColor: dark ? "#1e2126" : "white",
          border: "0.1px solid #35383c",
          overflow: "hidden",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height: "100%",
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
              backgroundColor: dark ? "#1e2126" : "white",
              color: dark ? "gray" : "black",
              border: 0,
              "& .MuiDataGrid-virtualScroller": {
                overflowX: "auto",
              },
              "& .MuiDataGrid-main": {
                overflow: "hidden",
              },

              "&:hover": {
                color: "#2364c4",
                fontWeight: "600",
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
