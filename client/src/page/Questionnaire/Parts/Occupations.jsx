import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomSlider from "../../../component/ui/sliderwmsg/CustomSlider";
import occupations from "../../../Data/occupations.json";
import CustomRadio from "../../../component/ui/radiowmsg/CustomRadio";
import { useFormContext } from "react-hook-form";

const Occupations = () => {
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
        Occupations
      </Typography>

      <Typography variant="body1" textAlign="justify" paragraph marginTop={2}>
        Time to explore! Go through the list of occupations and mark Y (Yes) for
        those that interest you and N (No) for those that don’t. Imagine
        yourself in each role—does it spark joy or a big “meh”?
      </Typography>

      <Grid container>
        <Grid item xs={12}>
          {occupations.categories.map((category, index) => (
            <div key={index}>
              <Typography variant="h1" gutterBottom align="left" marginTop={5}>
                {category.title}
              </Typography>
              <Grid container>
                {category.labels.map((label, index) => (
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    direction={isSmallScreen ? "column" : "row"}
                    justifyContent="space-between"
                    alignItems={isSmallScreen ? "flex-start" : "center"}
                    key={`${index}-${index}`}
                  >
                    <CustomRadio
                      label={label}
                      control={control}
                      propertyName={category.title}
                      ind={index}
                      errors={errors}
                      category={"occ"}
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

export default Occupations;
