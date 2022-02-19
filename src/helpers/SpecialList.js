import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SpecialList({ data }) {
  console.log("DATA IN SPECIAL: ", data);
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            backgroundColor: "lightblue",
          }}
        >
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Year</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Motivation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return item.map((row) => (
              <TableRow
                key={row.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstname + " " + row.surname}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.year}</TableCell>
                <TableCell>{row.motivation}</TableCell>
              </TableRow>
            ));
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
