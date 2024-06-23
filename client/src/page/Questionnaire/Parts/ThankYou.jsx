import React from "react";
import thankyou from "../../../asset/img/thank_you.svg";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../../utility/title";

const ThankYou = () => {
  useDocumentTitle("Done");
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBackMain = () => {
    navigate("/");
  };
  return (
    <div>
      <Grid item xs={12} textAlign="center">
        <img
          src={thankyou}
          alt="Thank You Vector"
          style={{
            width: isSmallScreen ? "100%" : "404px",
            maxWidth: "100%",
          }}
        />
      </Grid>
      <Grid item xs={12} textAlign="center" marginY={4}>
        <Typography variant="h1" gutterBottom>
          Great job on completing the Self-Directed Search!
        </Typography>
        <Typography variant="body1" textAlign="center" paragraph marginY={4}>
          You've taken an important step in understanding your career interests
          and strengths. This journey of self-discovery is both exciting and
          insightful, and I’m here to walk it with you. I'll provide you with a
          copy of your personalized results during our next session. Together,
          we'll explore what they mean and how they can guide you on your career
          path.
          <br />
          <br />
          See you soon!
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Button
          variant="contained"
          style={{ width: "200px" }}
          onClick={handleBackMain}
        >
          BACK
        </Button>
      </Grid>
    </div>
  );
};

export default ThankYou;
