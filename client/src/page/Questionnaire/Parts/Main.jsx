import React from "react";
import mainvector from "../../../asset/img/main.svg";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../../utility/title";

const Main = () => {
  useDocumentTitle("SDS - Assessment Booklet");
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          textAlign: "center",
          padding: isMediumScreen ? "0 20px" : "0 10%",
        }}
      >
        <img
          src={mainvector}
          alt="Main Vector"
          style={{
            width: isSmallScreen ? "100%" : "404px",
            maxWidth: "100%",
          }}
        />
        <Typography
          variant="h1"
          gutterBottom
          marginY={4}
          fontSize={isSmallScreen ? "120%" : "auto"}
          style={{ wordWrap: "break-word" }}
        >
          Career Discovery with Jonathan Procter, Ph.D.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            textAlign: "justify",
          }}
        >
          Ready to dive into a bit of self-discovery and career planning? The
          Self-Directed Search (SDS) answer sheet is here to guide you on an
          exciting journey towards finding a career path that truly fits you.
          Whether you're clear about your goals or just starting to explore
          possibilities, this tool can offer some enlightening insights.
          <br />
          <br />
          Imagine this as a friendly conversation with yourself, where you
          reflect on your interests, skills, and aspirations. It's not just
          about filling out boxes but about understanding what makes you tick
          and how that translates into a fulfilling career. Think of it as a fun
          and thoughtful exercise – a bit like daydreaming with a purpose!
          <br />
          <br />
          Take your time with each section. There’s no rush! The more honestly
          and thoughtfully you respond, the more valuable your results will be.
          This isn’t a test – it’s a personal exploration.
          <br />
          <br />
          Picture this: by the end of it, you’ll have a clearer picture of
          occupations that might suit your personality and interests. It's like
          having a roadmap that points you towards jobs you might enjoy and
          excel in. And hey, if you’ve already got some career ideas, this can
          either reinforce your choices or open up new, exciting possibilities
          you hadn’t considered before.
          <br />
          <br />
          Remember, this is all about you. Your answers, your reflections, your
          future. Take this opportunity to explore, dream, and plan. Who knows?
          You might just discover your next big career move or reaffirm the path
          you're already on.
          <br />
          <br />
          Let's get started and see where your interests and skills can take
          you!
          <br />
          <br />
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/questionnaire")}
          style={{ width: "200px" }}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Main;
