import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const GSlider = ({ marks, value, onChange }) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      marks={marks}
      min={1}
      max={7}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default GSlider;
