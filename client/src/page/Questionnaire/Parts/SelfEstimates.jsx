import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomSlider from "../../../component/ui/sliderwmsg/CustomSlider";
import seltEstimatesList from "../../../Data/selfEstimatesList.json";
import { useFormContext } from "react-hook-form";

const SelfEstimates = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Typography variant="h1" gutterBottom align="left">
        Self-Estimates
      </Typography>

      <Typography variant="body1" textAlign="justify" paragraph marginTop={2}>
        Here, you’ll rate yourself on various traits compared to others your
        age. Be as accurate as you can. This helps paint a fuller picture of
        your strengths and interests.
      </Typography>
      <Grid container marginTop={4}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign="center">
            1
          </Typography>
        </Grid>
        {seltEstimatesList["SE1"].map((val, index) => {
          const key = Object.keys(val)[0];
          const value = val[key];
          return (
            <Grid xs={12} marginY={3} key={`${index}`}>
              <CustomSlider
                key={key}
                label={value}
                section={key}
                control={control}
                category={"se1"}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid container marginTop={5}>
        <Grid item xs={12}>
          <Typography variant="h1" textAlign="center">
            2
          </Typography>
        </Grid>
        {seltEstimatesList["SE2"].map((val, index) => {
          const key = Object.keys(val)[0];
          const value = val[key];
          return (
            <Grid xs={12} marginY={4} key={`${index}`}>
              <CustomSlider
                key={key}
                label={value}
                section={key}
                control={control}
                category={"se2"}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default SelfEstimates;
