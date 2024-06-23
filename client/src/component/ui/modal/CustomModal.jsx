import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const CustomModal = ({ open, handleClose, onClick, loading }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "80%" : 400,
    maxWidth: "90%",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    textAlign: "center",
    p: 4,
  };

  return (
    <>
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant="h2">
            Are you sure you want to submit the form?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Please review your entries before finalizing.
          </Typography>
          <Grid container gap={2} justifyContent="center" marginTop={5}>
            <Grid item xs={12} sm={5}>
              <LoadingButton
                loading={loading}
                variant="outlined"
                fullWidth
                onClick={handleClose}
              >
                CANCEL
              </LoadingButton>
            </Grid>
            <Grid item xs={12} sm={5}>
              {/* loading variant="contained" fullWidth */}
              <LoadingButton
                loading={loading}
                variant="contained"
                fullWidth
                type="submit"
                onClick={onClick}
              >
                SUBMIT
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
