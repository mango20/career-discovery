import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomSlider from "../../../component/ui/sliderwmsg/CustomSlider";
import activities from "../../../Data/activities.json";
import CustomRadio from "../../../component/ui/radiowmsg/CustomRadio";
import { Controller, useFormContext } from "react-hook-form";

const Activities = () => {
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
        Activities
      </Typography>

      <Typography variant="body1" textAlign="justify" paragraph marginTop={2}>
        Here comes the fun part! Go through the list of activities and mark 'L'
        for those you like and 'D' for those you dislike. Be honest with
        yourself. It's like creating a map of your interests.
      </Typography>

      <Grid container>
        <Grid item xs={12}>
          {activities.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <Typography variant="h1" gutterBottom align="left" marginTop={5}>
                {category.title}
              </Typography>
              <Grid container>
                {category.labels.map((label, labelIndex) => (
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    direction={isSmallScreen ? "column" : "row"}
                    justifyContent="space-between"
                    alignItems={isSmallScreen ? "flex-start" : "center"}
                    key={`${categoryIndex}-${labelIndex}`}
                  >
                    <CustomRadio
                      label={label}
                      choices="LD"
                      control={control}
                      propertyName={category.title}
                      ind={labelIndex}
                      errors={errors}
                      category={"act"}
                    />
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

export default Activities;
