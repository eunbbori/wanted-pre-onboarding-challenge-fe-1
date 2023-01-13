import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export interface AppAlertDialogProps {
  AlertText: React.ReactNode;
  AlertDescription?: React.ReactNode;
  DisagreeText: React.ReactNode;
  AgreeText: React.ReactNode;
  openState: boolean;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleAgree: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppAlertDialog: React.FC<AppAlertDialogProps> = ({
  AlertText,
  AlertDescription,
  DisagreeText,
  AgreeText,
  openState,
  handleClose,
  handleAgree,
}) => {
  return (
    <div>
      <Dialog
        open={openState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{AlertText}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {AlertDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{DisagreeText}</Button>
          <Button onClick={handleAgree} autoFocus>
            {AgreeText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AppAlertDialog;
