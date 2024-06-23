import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "../../generic/slider/GSlider"; // Adjust import path
import marks from "../../../Data/slider.json";
import { Controller, useFormContext } from "react-hook-form";

const CustomSlider = ({ label, section, control, category }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Typography variant="h1" textAlign="left" marginY={3}>
        {section}
      </Typography>
      <Typography variant="body1" textAlign="left" paragraph>
        {label}
      </Typography>
      <Controller
        name={`${category}${section}`}
        control={control}
        defaultValue={1}
        render={({ field: { value, onChange } }) => (
          <Slider value={value} onChange={onChange} marks={marks} />
        )}
      />
      <Box display="flex" justifyContent="space-between">
        {marks.map((mark) => (
          <Typography key={mark.equivalent} variant="body2" align="center">
            {mark.equivalent}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default CustomSlider;
