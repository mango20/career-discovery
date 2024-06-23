import React from "react";
import {
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  FormHelperText,
} from "@mui/material";
import GRadio from "../../generic/radio/GRadio";

const CustomRadio = ({
  label,
  choices,
  errors,
  control,
  propertyName,
  ind,
  category,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const fieldName = `${category}${propertyName}${ind + 1}`;

  return (
    <Grid container alignItems="center">
      <Grid item xs={8}>
        <Typography textAlign="left">{label}</Typography>
      </Grid>
      <Grid
        item
        xs={isSmallScreen ? 12 : 4}
        textAlign={isSmallScreen ? "left" : "end"}
        width="100%"
        flexWrap="nowrap"
      >
        <GRadio
          choices={choices}
          control={control}
          name={`${category}${propertyName}${ind + 1}`}
          errors={errors}
        />
      </Grid>
      {errors[fieldName] && (
        <Grid item xs={12} textAlign="end">
          <FormHelperText error>{errors[fieldName].message}</FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

export default CustomRadio;
