import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import "../assets/styles/Dialog/dialog.css";
import { useState } from "react";

import { createClinet } from "../service/clients";
import { createProducts } from "../service/products";
import { createInvoice } from "../service/invoice";

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [apiId, setApiId] = useState(0);
  const [inputFormData, setInputFormData] = useState({});
  const apiObj = {
    1: createClinet,
    2: createProducts,
    3: createInvoice,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div
      className="dialog_container"
      style={{
        display: "flex",
        justifyContent:
          props.title == "Add product" || props.title == "Add Client"
            ? "flex-start"
            : "flex-end",
        gap: "20px",
      }}
    >
      <Button variant="outlined" onClick={handleClickOpen}>
        {props?.icon} {props.title}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
        <DialogContent>{props.component}</DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color={props.title == "Find And Select" ? "primary" : "success"}
          >
            Submit
          </Button>
          {props.title == "Find And Select" ? (
            ""
          ) : (
            <Button onClick={handleClose} variant="contained" color="warning">
              Close
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
