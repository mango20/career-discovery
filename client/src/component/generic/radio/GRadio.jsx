import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const GRadio = ({ choices, name, control, register, errors }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <FormControl component="fieldset">
        <Controller
          control={control}
          render={({ field, fieldState, formState }) => (
            <>
              <RadioGroup
                style={{ flexWrap: "nowrap", gap: "50px" }}
                row
                {...field}
                value={field.value ? field.value : ""}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  console.log(e.target.value);
                  if (errors[name]) {
                    control.setError(name);
                  }
                }}
              >
                <FormControlLabel
                  value={choices === "LD" ? "L" : "Y"}
                  control={<Radio />}
                  label={choices === "LD" ? "L" : "Y"}
                  labelPlacement="start"
                  // style={{ marginRight: "100px" }}
                />
                <FormControlLabel
                  value={choices === "LD" ? "D" : "N"}
                  control={<Radio />}
                  label={choices === "LD" ? "D" : "N"}
                  labelPlacement="start"
                />
              </RadioGroup>{" "}
              {/* {fieldState.error && (
                <FormHelperText
                  error
                  style={{ marginBottom: "20px", textAlign: "end" }}
                >
                  {fieldState.error.message}
                </FormHelperText>
              )} */}
            </>
          )}
          name={name}
        />
      </FormControl>
    </>
  );
};

export default GRadio;
