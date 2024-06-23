import React from "react";
import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ModalView = ({ open, handleClose, data }) => {
  console.log(data);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "80%" : 600,
    maxWidth: "90%",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  if (data.length === 0) return null;

  const {
    name,
    age,
    yearsOfEducation,
    date,
    report: {
      activities,
      competencies,
      occupations,
      selfEstimates,
      total,
      summaryCode,
    },
  } = data;

  const sectionStyle = {
    marginBottom: "10px",
  };

  const renderSection = (title, items) => (
    <Box my={2} style={sectionStyle}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Box>
        <Typography component="div" paragraph>
          <strong>R:</strong>{" "}
          <span style={{ marginRight: "10px" }}>{items.R}</span>{" "}
          <strong>I:</strong>{" "}
          <span style={{ marginRight: "10px" }}>{items.I}</span>{" "}
          <strong>A:</strong>{" "}
          <span style={{ marginRight: "10px" }}>{items.A}</span>{" "}
          <strong>S:</strong>{" "}
          <span style={{ marginRight: "10px" }}>{items.S}</span>{" "}
          <strong>E:</strong>{" "}
          <span style={{ marginRight: "10px" }}>{items.E}</span>{" "}
          <strong>C:</strong>{" "}
          <span style={{ marginRight: "10px" }}>{items.C}</span>
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Modal open={open}>
      <Box sx={style}>
        <Typography variant="h1" gutterBottom>
          {name}
        </Typography>
        <Box my={2}>
          <Typography component="div" paragraph>
            Age: {age}
          </Typography>
          <Typography component="div" paragraph>
            Years of Education: {yearsOfEducation}
          </Typography>
          <Typography component="div" paragraph>
            Test Date: {date}
          </Typography>
        </Box>

        {renderSection("Activities", activities)}
        {renderSection("Competencies", competencies)}
        {renderSection("Occupations", occupations)}
        {renderSection("Self-Estimates", selfEstimates)}

        <Box my={2} style={sectionStyle}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Summary Codes:
          </Typography>
          <Typography component="div">{summaryCode.join(" ")}</Typography>
        </Box>

        <Box my={2} style={sectionStyle}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Total:
          </Typography>
          <Typography component="div">
            <strong>R:</strong>{" "}
            <span style={{ marginRight: "10px" }}>{total.R}</span>{" "}
            <strong>I:</strong>{" "}
            <span style={{ marginRight: "10px" }}>{total.I}</span>{" "}
            <strong>A:</strong>{" "}
            <span style={{ marginRight: "10px" }}>{total.A}</span>{" "}
            <strong>S:</strong>{" "}
            <span style={{ marginRight: "10px" }}>{total.S}</span>{" "}
            <strong>E:</strong>{" "}
            <span style={{ marginRight: "10px" }}>{total.E}</span>{" "}
            <strong>C:</strong>{" "}
            <span style={{ marginRight: "10px" }}>{total.C}</span>
          </Typography>
        </Box>

        <Grid container justifyContent="center" marginTop={5}>
          <Grid item xs={12} sm={5}>
            <Button variant="outlined" fullWidth onClick={handleClose}>
              Close
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalView;
