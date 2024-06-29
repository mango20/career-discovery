import React, { useEffect, useState } from "react";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Visibility } from "@mui/icons-material";
import ModalView from "../../component/ui/modal/ModalView";
import { useParams } from "react-router-dom";
import { useQuestionnaire } from "../../hook/useQuestionnaire";
import useDocumentTitle from "../../utility/title";

const Index = () => {
  useDocumentTitle("Response List");
  const { name, age } = useParams();

  const { getResponseQuestionnaire } = useQuestionnaire();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const handleGetAllResponse = async () => {
      try {
        const response = await getResponseQuestionnaire(name, age);

        setRows(response);
      } catch (error) {
        console.error("Error loading:", error);
      }
    };

    handleGetAllResponse();
  }, [name, age]);

  const getEducationLabel = (id) => {
    switch (id) {
      case "highSchool":
        return "High School Diploma";
      case "associate":
        return "Associate's Degree";
      case "bachelor":
        return "Bachelor's Degree";
      case "master":
        return "Master's Degree";
      case "doctorate":
        return "Doctorate";
      default:
        return "None";
    }
  };

  const rowsWithEducation = rows
    ? rows.map((row, index) => ({
        id: index + 1,
        name: row.personalInfo.fullName,
        age: row.personalInfo.age,
        date: row.date,
        yearsOfEducation: getEducationLabel(row.personalInfo.yearsOfEducation),
        report: row.report,
      }))
    : [];

  const gridHeight = isSmallScreen ? 400 : 600;
  const gridMargin = isSmallScreen
    ? "auto 30px"
    : isMediumScreen
    ? "auto 10%"
    : "auto 20%";

  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState([]);
  const handleButtonClick = (rowData) => {
    setDetails(rowData);
    setOpenModal(true);
  };

  const handleCloseDetails = () => {
    setOpenModal(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        margin: gridMargin,
      }}
    >
      <Typography variant="h1" gutterBottom align="left">
        List of Responses
      </Typography>

      <Typography variant="body1" textAlign="justify" paragraph marginTop={2}>
        Responses from respondents who participated in our questionnaire
      </Typography>

      <div style={{ height: gridHeight, width: "100%" }}>
        <DataGrid
          rows={rowsWithEducation}
          columns={[
            { field: "name", headerName: "Name", width: 250 },
            { field: "age", headerName: "Age", width: 150 },
            { field: "date", headerName: "Date", width: 200 },
            {
              field: "yearsOfEducation",
              headerName: "Years of Education",
              width: 300,
            },
            {
              field: "actions",
              headerName: "Actions",
              width: 200,
              renderCell: (params) => (
                <Button
                  startIcon={<Visibility />}
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick(params.row)}
                >
                  View
                </Button>
              ),
            },
          ]}
          pageSize={5}
          pageSizeOptions={[5, 10]}
        />
      </div>
      {details && (
        <ModalView
          open={openModal}
          data={details}
          handleClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default Index;
