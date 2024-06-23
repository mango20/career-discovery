import React, { useEffect, useState } from "react";
import Main from "./Parts/Main";
import PersonalInfo from "./Parts/PersonalInfo";
import CustomModal from "../../component/ui/modal/CustomModal";
import ThankYou from "./Parts/ThankYou";
import SelfEstimates from "./Parts/SelfEstimates";
import Activities from "./Parts/Activities";
import Competencies from "./Parts/Competencies";
import Occupations from "./Parts/Occupations";
import OccupationalDaydreams from "./Parts/OccupationalDaydreams";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import { generateValidation } from "../../utility/generateValidation";
import { populate } from "../../utility/populate";
import { calculateReport } from "../../utility/calculateReport";
import axios from "axios";
import { useQuestionnaire } from "../../hook/useQuestionnaire";
import { Config } from "../../config/config";
import useDocumentTitle from "../../utility/title";
const Index = () => {
  useDocumentTitle("Questionnaire");
  const { postQuestionnaireAnswers } = useQuestionnaire();
  const {
    calculateSelfEstimates,
    calculateTotals,
    calculateTop3Dimensions,
    countLetters,
  } = calculateReport();

  const { populateType, populateOccupationalDaydreams } = populate();

  const {
    generateOccupationValidation,
    generateRoleValidation,
    generateOccupationDaydreamValidation,
  } = generateValidation();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "PersonalInfo",
    "OccupationalDaydreams",
    "Activities",
    "Competencies",
    "Occupations",
    "SelfEstimates",
    "ThankYou",
  ];

  const stepperIndex = [
    "PersonalInfo",
    "OccupationalDaydreams",
    "Activities",
    "Competencies",
    "Occupations",
    "SelfEstimates",
  ];
  const [open, setOpen] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };
  const defaultValues = {
    fullName: "",
    sex: "",
    age: "",
    yearsOfEducation: "",
  };

  const validationSchema = [
    yup.object({
      fullName: yup.string().required("Name is required"),
      age: yup
        .number()
        .typeError("Age must be a number")
        .required("Age is required"),
      sex: yup.string().required("Sex is required"),
      yearsOfEducation: yup.string().required("Years of education is required"),
    }),
    generateOccupationDaydreamValidation("occ", 8),
    generateRoleValidation("act", 11),
    generateRoleValidation("com", 11),
    generateOccupationValidation("occ", 14),
    yup.object({}),
  ];

  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
  });
  const {
    handleSubmit,
    register,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  console.log(watch());
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <OccupationalDaydreams />;
      case 2:
        return <Activities />;
      case 3:
        return <Competencies />;
      case 4:
        return <Occupations />;
      case 5:
        return <SelfEstimates />;
      case 6:
        return <ThankYou />;
      default:
        return "Unknown step";
    }
  }

  const handleNext = async () => {
    console.log(Config.code);
    const formData = watch();
    if (formData.fullName === Config.code && formData.age) {
      const url = `/response/${encodeURIComponent(
        formData.fullName
      )}/${encodeURIComponent(formData.age)}`;
      console.log(url);
      navigate(url);
    } else {
      const isStepValid = await trigger();
      if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleNavBack = () => {
    navigate("/");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    const payload = {
      date: DateTime.now().toLocaleString(),
      personalInfo: {
        fullName: data.fullName,
        sex: data.sex,
        age: data.age,
        yearsOfEducation: data.yearsOfEducation,
      },
      activities: {},
      occupationalDaydreams: {
        occD: {},
        occDC: {},
      },
      occupations: {},
      competencies: {},
      selfEstimate: {
        se1: {
          R: data.se1R,
          I: data.se1I,
          A: data.se1A,
          S: data.se1S,
          E: data.se1E,
          C: data.se1C,
        },
        se2: {
          R: data.se2R,
          I: data.se2I,
          A: data.se2A,
          S: data.se2S,
          E: data.se2E,
          C: data.se2C,
        },
      },
      report: {
        activities: {
          R: 0,
          I: 0,
          A: 0,
          S: 0,
          E: 0,
          C: 0,
        },
        competencies: {
          R: 0,
          I: 0,
          A: 0,
          S: 0,
          E: 0,
          C: 0,
        },
        selfEstimates: {
          R: 0,
          I: 0,
          A: 0,
          S: 0,
          E: 0,
          C: 0,
        },
        occupations: {
          R: 0,
          I: 0,
          A: 0,
          S: 0,
          E: 0,
          C: 0,
        },

        total: {
          R: 0, // activities R + competencies R + selfEstimates R + occupations  R
          I: 0,
          A: 0,
          S: 0,
          E: 0,
          C: 0,
        },
      },
    };

    const activityTypes = ["actR", "actI", "actA", "actS", "actE", "actC"];
    populateType(activityTypes, "activities", payload, data, 11);
    countLetters(activityTypes, "activities", payload, data, "L");
    const competenciesTypes = ["comR", "comI", "comA", "comS", "comE", "comC"];
    populateType(competenciesTypes, "competencies", payload, data, 11);
    countLetters(competenciesTypes, "competencies", payload, data, "Y");
    populateOccupationalDaydreams(payload, data);

    const occupationsTypes = ["occR", "occI", "occA", "occS", "occE", "occC"];
    populateType(occupationsTypes, "occupations", payload, data, 14);
    countLetters(occupationsTypes, "occupations", payload, data, "Y");

    calculateSelfEstimates(payload, data);
    calculateTotals(payload);

    calculateTop3Dimensions(payload);
    console.log("============+", payload);
    console.log(data);

    try {
      setIsLoading(true);
      const response = await postQuestionnaireAnswers(payload);
      console.log(response);
      // console.log("Response from server:", response.data);
      setIsLoading(false);
      reset();
      handleClose();
      handleNext();
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting questionnaire:", error);
      setOpenSnackBar(true);
    }
  };

  const isLastStep = activeStep === steps.length - 1;

  return (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        margin: isSmallScreen
          ? "30px 30px"
          : isMediumScreen
          ? "auto 10%"
          : "auto 20%",
      }}
    >
      <Grid
        container
        justifyContent="center"
        flexWrap="nowrap"
        flexDirection={isSmallScreen ? "row" : "column"}
        gap={3}
      >
        {activeStep !== 6 && (
          <Grid
            item
            style={
              isSmallScreen
                ? { position: "sticky", top: "20px", alignSelf: "flex-start" }
                : { margin: "50px 0" }
            }
          >
            <Stepper
              activeStep={activeStep}
              orientation={isSmallScreen ? "vertical" : "horizontal"}
            >
              {stepperIndex.map((step, index) => (
                <Step key={index}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        )}

        <Grid item xs={12}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {getStepContent(activeStep)}
              <Grid
                container
                spacing={2}
                justifyContent={isSmallScreen ? "center" : "flex-end"}
                marginTop={5}
              >
                {!isLastStep && (
                  <Grid item xs={12} md={2}>
                    <Button
                      variant="outlined"
                      onClick={activeStep === 0 ? handleNavBack : handleBack}
                      fullWidth
                    >
                      Back
                    </Button>
                  </Grid>
                )}
                <Grid item xs={12} md={2} marginBottom={5}>
                  {!isLastStep && activeStep !== 5 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      fullWidth
                    >
                      Next
                    </Button>
                  )}
                  {activeStep === 5 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleOpen}
                      fullWidth
                    >
                      Submit
                    </Button>
                  )}
                </Grid>
              </Grid>

              <CustomModal
                open={open}
                handleClose={handleClose}
                onClick={handleSubmit((data) => onSubmit(data))}
                loading={isLoading}
              />
            </form>
          </FormProvider>
        </Grid>
      </Grid>
      <Snackbar
        // anchorOrigin={{ vertical: "top", horizontal: "center" }}
        // anchorOrigin={"top, center"}
        autoHideDuration={6000}
        open={openSnackBar}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Error please try again
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Index;
