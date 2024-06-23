import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormContext } from "react-hook-form";
const PersonalInfo = () => {
  const {
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            Your Information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            {...register("fullName")}
            error={errors.fullName?.message}
            helperText={errors.fullName?.message}
            onChange={() => {
              clearErrors(`fullName`);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            {...register("age")}
            error={errors.age?.message}
            helperText={errors.age?.message}
            onChange={() => {
              clearErrors(`age`);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Sex</InputLabel>
            <Select
              label="sex"
              {...register("sex")}
              error={errors.sex?.message}
              value={watch("sex")}
              onChange={(e) => {
                setValue("sex", e.target.value);
                clearErrors("sex");
              }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <FormHelperText error>{errors.sex?.message}</FormHelperText>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date" />
            </LocalizationProvider>
          </FormControl>
        </Grid> */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Years of Education Completed</InputLabel>
            <Select
              label="Years of Education Completed"
              {...register("yearsOfEducation")}
              error={Boolean(errors.yearsOfEducation)}
              value={watch("yearsOfEducation")}
              onChange={(e) => {
                setValue("yearsOfEducation", e.target.value);
                clearErrors("yearsOfEducation");
              }}
              // helperText={errors.yearsOfEducation?.message}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="highSchool">High School Diploma</MenuItem>
              <MenuItem value="associate">Associate's Degree</MenuItem>
              <MenuItem value="bachelor">Bachelor's Degree</MenuItem>
              <MenuItem value="master">Master's Degree</MenuItem>
              <MenuItem value="doctorate">Doctorate</MenuItem>
            </Select>
            <FormHelperText error>
              {errors.yearsOfEducation?.message}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalInfo;
