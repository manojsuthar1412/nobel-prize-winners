import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SpecialList({ data }) {
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
          {data.map((item) => (
            <TableRow
              key={item.year}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.firstname + " " + item.surname}
              </TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.motivation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
