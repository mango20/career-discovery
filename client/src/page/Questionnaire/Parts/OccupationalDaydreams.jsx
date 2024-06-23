import React from "react";
import {
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomSlider from "../../../component/ui/sliderwmsg/CustomSlider";
import seltEstimatesList from "../../../Data/selfEstimatesList.json";
import competencies from "../../../Data/competencies.json";
import CustomRadio from "../../../component/ui/radiowmsg/CustomRadio";
import { useFormContext } from "react-hook-form";

const OccupationalDaydreams = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    register,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const renderTextField = (index) => (
    <Grid item xs={12} key={index} marginY={2}>
      <Grid container direction="column" gap="10px">
        <TextField
          label={`Occupation ${index + 1}`}
          variant="standard"
          fullWidth
          {...register(`occD${index + 1}`)}
          error={errors[`occD${index + 1}`]?.message}
          helperText={errors[`occD${index + 1}`]?.message}
          onChange={() => {
            clearErrors(`occD${index + 1}`);
          }}
        />
        <TextField
          label="Code"
          variant="standard"
          fullWidth
          {...register(`occDC${index + 1}`)}
          error={errors[`occDC${index + 1}`]?.message}
          helperText={errors[`occDC${index + 1}`]?.message}
          onChange={() => {
            clearErrors(`occDC${index + 1}`);
          }}
        />
      </Grid>
    </Grid>
  );

  const textFields = Array.from({ length: 8 }, (_, index) =>
    renderTextField(index)
  );

  return (
    <div>
      <Typography variant="h1" gutterBottom align="left">
        Occupational Daydreams
      </Typography>

      <ol>
        <li>
          <Typography textAlign="justify" paragraph>
            Start by listing the occupations you’ve thought about, from the most
            recent to the earliest. These could be anything you've daydreamed
            about or discussed with others.
            <br />
            <br />
            Once you've listed them, find the three-letter code for each using
            The Occupations Finder. This step is like a mini treasure hunt and
            will help you learn about various occupations. Don’t worry if you
            can’t find the exact occupation—just pick the closest match.
          </Typography>
          <Grid container>{textFields}</Grid>
        </li>
      </ol>
    </div>
  );
};

export default OccupationalDaydreams;
