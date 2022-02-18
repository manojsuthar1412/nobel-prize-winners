import React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";

const rows: GridRowsProp = [
  {
    category: "Sample Category",
    firstname: "Test Name",
    id: "1001",
    motivation:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    share: "2",
    surname: "Test Surname",
    year: "2021",
  },
];

const columns: GridColDef[] = [
  {
    field: "year",
    headerName: "Year",
    minWidth: 150,
    headerClassName: "header",
  },
  {
    field: "category",
    headerName: "Category",
    minWidth: 200,
    headerClassName: "header",
  },
  {
    field: "firstname",
    headerName: "First Name",
    minWidth: 200,
    headerClassName: "header",
  },
  {
    field: "surname",
    headerName: "Last Name",
    minWidth: 200,
    headerClassName: "header",
  },
  {
    field: "motivation",
    headerName: "Awarded For",
    minWidth: 400,
    flex: 1,
    headerClassName: "header",
    // cellClassName: "motivation_style",
  },
];

function ExportToolBar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const ShowList = ({ data }) => {

  return (
    <Box
      sx={{
        height: "80vh",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        backgroundColor: "white",

        "& .header": {
          backgroundColor: "#ffe0b2",
        },
        "& .motivation_style, Typography": {
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: 200,
          whiteSpace: "nowrap",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <DataGrid
        rows={data.length ? data : rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default ShowList;
