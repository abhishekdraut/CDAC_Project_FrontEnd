import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../assets/styles/Table/table.css";
import Chip from '@mui/material/Chip';


function createData(
  invoice_id,
  status,
  recurring_cycle,
  client,
  issue_date,
  due_date,
  total,
  paid,
  due
) {
  return {
    invoice_id,
    status,
    recurring_cycle,
    client,
    issue_date,
    due_date,
    total,
    paid,
    due,
  };
}

const rows = [
  createData(
    1,
    "paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "partially paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "overdue",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "unpaid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "partially paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "overdue",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "partially paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
  createData(
    1,
    "paid",
    "monthly ",
    "abhishek raut",
    "12-08-22",
    "12-12-22",
    100000,
    50000,
    50000
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper} style={{ marginTop: "30px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Invoice number</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Recurring Cycle</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Issue date</TableCell>
            <TableCell align="right">Due date</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Paid</TableCell>
            <TableCell align="right">Due</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.invoice_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.invoice_id}
              </TableCell>
              <TableCell align="right">{row.status=="paid"?  <Chip label=" Paid " color="success" />  :row.status=="partially paid"?<Chip label=" Partially Paid " color="primary" />:row.status=="unpaid"?<Chip label=" Unpaid " color="default" />:<Chip label=" Overdue " color="warning" />}</TableCell>
              <TableCell align="right">{row.recurring_cycle}</TableCell>
              <TableCell align="right">{row.client}</TableCell>
              <TableCell align="right">{row.issue_date}</TableCell>
              <TableCell align="right">{row.due_date}</TableCell>
              <TableCell align="right" className="currancy_table"> {row.total}.Rs</TableCell>
              <TableCell align="right" className="currancy_table"> {row.paid}.Rs</TableCell>
              <TableCell align="right"className="currancy_table"> {row.due}.Rs</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
