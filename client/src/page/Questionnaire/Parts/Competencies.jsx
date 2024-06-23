import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomSlider from "../../../component/ui/sliderwmsg/CustomSlider";
import seltEstimatesList from "../../../Data/selfEstimatesList.json";
import competencies from "../../../Data/competencies.json";
import CustomRadio from "../../../component/ui/radiowmsg/CustomRadio";
import { useFormContext } from "react-hook-form";

const Competencies = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Typography variant="h1" gutterBottom align="left">
        Competencies
      </Typography>

      <Typography variant="body1" textAlign="justify" paragraph marginTop={2}>
        Next, think about what you’re good at. For each activity, mark Y (Yes)
        if you can do it well or N (No) if it's not your thing or you haven't
        tried it. This will help highlight your strengths and areas you might
        want to develop.
      </Typography>

      <Grid container>
        <Grid item xs={12}>
          {competencies.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <Typography variant="h1" gutterBottom align="left" marginTop={5}>
                {category.title}
              </Typography>
              <Grid container>
                {category.labels.map((label, labelIndex) => (
                  <Grid
                    item
                    xs={12}
                    // md={2}
                    display="flex"
                    direction={isSmallScreen ? "column" : "row"}
                    justifyContent="space-between"
                    alignItems={isSmallScreen ? "flex-start" : "center"}
                    key={`${categoryIndex}-${labelIndex}`}
                  >
                    <CustomRadio
                      label={label}
                      control={control}
                      propertyName={category.title}
                      ind={labelIndex}
                      errors={errors}
                      category={"com"}
                    />{" "}
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Competencies;
