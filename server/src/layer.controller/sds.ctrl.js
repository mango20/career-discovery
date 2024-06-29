//<--DEPENDENCIES-->//
//Libraries
import { gzip } from "node-gzip";
import pako from "pako";

//Constants
import ResponseCodes from "../global/constants/responseCodes.const.js";
//Utilities
import logger from "../global/utilities/logger.js";
import APIError from "../global/utilities/error/apiError.js";
import HttpStatusCodes from "../global/constants/httpStatusCodes.const.js";
import errorHandler from "../global/utilities/error/errorHandler.js";
import validateHmac from "../global/utilities/hmac/validateHmac.js";
//Services
import { createSDSSRVC, getAllSDSSRVC } from "../layer.services/sds.srvc.js";
import sendEmailWithPDF from "../global/utilities/email/emailSender.js";
import {
  SE1,
  SE2,
  activitiesA,
  activitiesC,
  activitiesE,
  activitiesI,
  activitiesR,
  activitiesS,
  competenciesA,
  competenciesC,
  competenciesE,
  competenciesI,
  competenciesR,
  competenciesS,
  occupationsA,
  occupationsC,
  occupationsE,
  occupationsI,
  occupationsR,
  occupationsS,
} from "../global/constants/questions.const.js";
//<--DEPENDENCIES-->//

export const createSDSCTRL = async (req, res, next) => {
  const {
    date,
    personalInfo,
    activities,
    occupationalDaydreams,
    occupations,
    competencies,
    selfEstimate,
    report,
  } = req.body;
  try {
    const result = await createSDSSRVC(
      date,
      personalInfo,
      activities,
      occupationalDaydreams,
      occupations,
      competencies,
      selfEstimate,
      report
    );

    if (errorHandler.isTrustedError(result)) return next(result);
    const { fullName, sex, age, yearsOfEducation } = personalInfo;
    const subject = fullName;
    const rActivities = report.activities;
    const rCompetencies = report.competencies;
    const rSelfEstimates = report.selfEstimates;
    const rOccupations = report.occupations;
    const rTotal = report.total;
    const summaryCode = report.summaryCode;
    let rSummaryCode = summaryCode.join(" ");
    const printSummaryCodeEq = displaySummaryEquivalent(summaryCode);

    // Activities

    const printedActivityR = printQuestionsAndAnswers(
      activities.actR,
      activitiesR
    );
    const printedActivityI = printQuestionsAndAnswers(
      activities.actI,
      activitiesI
    );
    const printedActivityA = printQuestionsAndAnswers(
      activities.actA,
      activitiesA
    );
    const printedActivityS = printQuestionsAndAnswers(
      activities.actS,
      activitiesS
    );
    const printedActivityE = printQuestionsAndAnswers(
      activities.actE,
      activitiesE
    );
    const printedActivityC = printQuestionsAndAnswers(
      activities.actC,
      activitiesC
    );

    // Competencies
    const printedCompetenciesR = printQuestionsAndAnswers(
      competencies.comR,
      competenciesR
    );
    const printedCompetenciesI = printQuestionsAndAnswers(
      competencies.comI,
      competenciesI
    );
    const printedCompetenciesA = printQuestionsAndAnswers(
      competencies.comA,
      competenciesA
    );
    const printedCompetenciesS = printQuestionsAndAnswers(
      competencies.comS,
      competenciesS
    );
    const printedCompetenciesE = printQuestionsAndAnswers(
      competencies.comE,
      competenciesE
    );
    const printedCompetenciesC = printQuestionsAndAnswers(
      competencies.comC,
      competenciesC
    );

    // Occupations
    const printedoccupationsR = printQuestionsAndAnswers(
      occupations.occR,
      occupationsR
    );
    const printedoccupationsI = printQuestionsAndAnswers(
      occupations.occI,
      occupationsI
    );
    const printedoccupationsA = printQuestionsAndAnswers(
      occupations.occA,
      occupationsA
    );
    const printedoccupationsS = printQuestionsAndAnswers(
      occupations.occS,
      occupationsS
    );
    const printedoccupationsE = printQuestionsAndAnswers(
      occupations.occE,
      occupationsE
    );
    const printedoccupationsC = printQuestionsAndAnswers(
      occupations.occC,
      occupationsC
    );

    // SelfEstimates
    const printedSE1 = printSEQuestionsAndAnswers(selfEstimate.se1, SE1);
    const printedSE2 = printSEQuestionsAndAnswers(selfEstimate.se2, SE2);
    // Occupations
    const printedOccupationalDaydreams = mapOccupations(occupationalDaydreams);
    const htmlResponse = `
    <div style="margin:50px; font-family: Arial, Helvetica, sans-serif;">
    <table cellspacing="0" cellpadding="0">
        <tr>
            <td>
                <h1 style="margin:0px"> ${fullName} </h1>
                Sex: ${sex}  <br>
                Date: ${date} <br>
                Age: ${age} <br>
                Years of Education: ${getEducationLabel(yearsOfEducation)}<br><br>
             </td>
        </tr>
         <tr>
           <td colspan="2">
                <h2>Occupational Daydreams</h2> 
                ${printedOccupationalDaydreams} 
            </td>
        </tr>
        <tr>
        <td colspan="2"><br><h2>Activities</h2></td></tr>
        <tr><td><h3>R</h3></td><td>${printedActivityR}</td></tr>
        <tr><td><br><h3>I</h3></td><td>${printedActivityI}</td></tr> 
        <tr><td><br><h3>A</h3></td><td>${printedActivityA}</td></tr>
        <tr><td><br><h3>S</h3></td><td>${printedActivityS}</td></tr>
        <tr><td><br><h3>E</h3></td><td>${printedActivityE}</td></tr> 
        <tr><td><br><h3>C</h3></td><td>${printedActivityC}</td></tr>
        </tr>

        <tr>
        <td colspan="2"><br><h2>Competencies</h2></td></tr>
        <tr><td><h3>R</h3></td><td>${printedCompetenciesR}</td></tr>
        <tr><td><br><h3>I</h3></td><td>${printedCompetenciesI}</td></tr> 
        <tr><td><br><h3>A</h3></td><td>${printedCompetenciesA}</td></tr>
        <tr><td><br><h3>S</h3></td><td>${printedCompetenciesS}</td></tr>
        <tr><td><br><h3>E</h3></td><td>${printedCompetenciesE}</td></tr> 
        <tr><td><br><h3>C</h3></td><td>${printedCompetenciesC}</td></tr>
        </tr>

        <tr>
        <td colspan="2"><br><h2>Occupations</h2></td></tr>
        <tr><td><h3>R</h3></td><td>${printedoccupationsR}</td></tr>
        <tr><td><br><h3>I</h3></td><td>${printedoccupationsI}</td></tr> 
        <tr><td><br><h3>A</h3></td><td>${printedoccupationsA}</td></tr>
        <tr><td><br><h3>S</h3></td><td>${printedoccupationsS}</td></tr>
        <tr><td><br><h3>E</h3></td><td>${printedoccupationsE}</td></tr> 
        <tr><td><br><h3>C</h3></td><td>${printedoccupationsC}</td></tr>
        </tr>

        <tr>
        <td colspan="2"><br><h2>Self-Estimates (1 - Low, 4 - Average, 7-High)</h2></td></tr>
        <tr><td><h3>1</h3></td><td>${printedSE1}</td></tr>
        <tr><td><br><h3>2</h3></td><td>${printedSE2}</td></tr> 
        </tr>
    </table>
    </div>
`;

    const html = `<div style="margin: 50px; font-family: Arial, Helvetica, sans-serif;">
    <table cellspacing="0" cellpadding="0">
        <tr>
            <td>
                <strong>PERSONAL INFO</strong> <br><br>
                Full Name: ${fullName} <br>
                Sex: ${sex}  <br>
                Date: ${date} <br>
                Age: ${age} <br>
                Years of Education: ${getEducationLabel(yearsOfEducation)}<br><br>
            </td>
        </tr>
        <tr>
            <td colspan="6">
                <strong>REPORT</strong> <br><br>
                <table cellspacing="0" cellpadding="20" style="margin: auto;">
                    <tr>
                        <td style="text-align: left;">Activities:</td>
                        <td>R: ${rActivities.R}</td>
                        <td>I: ${rActivities.I}</td>
                        <td>A: ${rActivities.A}</td>
                        <td>S: ${rActivities.S}</td>
                        <td>E: ${rActivities.E}</td>
                        <td>C: ${rActivities.C}</td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">Competencies:</td>
                        <td>R: ${rCompetencies.R}</td>
                        <td>I: ${rCompetencies.I}</td>
                        <td>A: ${rCompetencies.A}</td>
                        <td>S: ${rCompetencies.S}</td>
                        <td>E: ${rCompetencies.E}</td>
                        <td>C: ${rCompetencies.C}</td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">Occupations:</td>
                        <td>R: ${rOccupations.R}</td>
                        <td>I: ${rOccupations.I}</td>
                        <td>A: ${rOccupations.A}</td>
                        <td>S: ${rOccupations.S}</td>
                        <td>E: ${rOccupations.E}</td>
                        <td>C: ${rOccupations.C}</td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">Self-Estimates:</td>
                        <td>R: ${rSelfEstimates.R}</td>
                        <td>I: ${rSelfEstimates.I}</td>
                        <td>A: ${rSelfEstimates.A}</td>
                        <td>S: ${rSelfEstimates.S}</td>
                        <td>E: ${rSelfEstimates.E}</td>
                        <td>C: ${rSelfEstimates.C}</td>
                    </tr>
                    <tr>
                        <td style="text-align: left;">Total:</td>
                        <td>R: ${rTotal.R}</td>
                        <td>I: ${rTotal.I}</td>
                        <td>A: ${rTotal.A}</td>
                        <td>S: ${rTotal.S}</td>
                        <td>E: ${rTotal.E}</td>
                        <td>C: ${rTotal.C}</td>
                    </tr>
                </table>
                <br><br>
                Summary Code: ${rSummaryCode} <br><br>
                ${printSummaryCodeEq}
            </td>
        </tr>
    </table>
</div>
`;

    const emailResult = await sendEmailWithPDF(
      subject,
      html,
      htmlResponse,
      fullName
    );
    logger.trace(
      {
        method: res.req.method,
        complete: res.req.complete,
        originalUrl: res.req.originalUrl,
        status: "Exit",
      },
      `$(${res.req.method})${res.req.originalUrl} [STATUS]: Exit`
    );
    return res.status(201).send({
      code: ResponseCodes.SUCCESS,
      message: "Successful Request",
      result,
    });
  } catch (error) {
    logger.trace("CTRL ERROR: Was not able to crate sds");
    next(error);
  }
};

export const getAllSDSCTRL = async (req, res, next) => {
  const { key } = req.body;

  try {
    const valid = validateHmac(key);

    if (!valid) {
      return res.status(401).send({
        code: ResponseCodes.FAILED,
        message: "Unauthorized Access",
        result: "Wrong Credentials",
      });
    }
    const result = await getAllSDSSRVC();
    if (errorHandler.isTrustedError(result)) return next(result);
    logger.trace(
      {
        method: res.req.method,
        complete: res.req.complete,
        originalUrl: res.req.originalUrl,
        status: "Exit",
      },
      `$(${res.req.method})${res.req.originalUrl} [STATUS]: Exit`
    );
    // const buffered = Buffer.from(result);
    // const encoded = pako.deflate(buffered);
    // const stringed = encoded.toString("base64");
    return res.status(200).send({
      code: ResponseCodes.SUCCESS,
      message: "Successful Request",
      result,
    });
  } catch (error) {
    logger.trace("CTRL ERROR: Was not able to get all sds data");
    next(error);
  }
};

const printQuestionsAndAnswers = (answerList, questionList) => {
  let results = [];
  let i = 1;
  for (const a in answerList) {
    let q = questionList.get(i);
    let ans = answerList[i];
    i++;
    results.push(`<tr><td>${q}</td><td>${ans}</td></tr>`);
  }
  return results.join("");
};

export const printSEQuestionsAndAnswers = (answerList, questionList) => {
  let results = [];
  Object.keys(answerList).forEach((key) => {
    let question = questionList.get(key);
    let answer = answerList[key];
    // results.push({ question, answer });
    // results += `${question}<br>${answer}<br><br>`;
    results.push(`<tr><td>${question}</td><td>${answer}</td></tr>`);
  });
  return results.join("");
};

function mapOccupations(occupationalDaydreams) {
  let results = [];

  for (const key in occupationalDaydreams.occD) {
    const occupation = occupationalDaydreams.occD[key];
    const code = occupationalDaydreams.occDC[key];

    results.push(
      `<tr><td>${occupation}</td><td>${code ? code : "N/A"}</td></tr>`
    );
  }

  return results.join("");
}

export const getEducationLabel = (text) => {
  switch (text) {
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

const displaySummaryEquivalent = (summaryCodes) => {
  const meanings = {
    R: "Realistic",
    I: "Investigative",
    A: "Artistic",
    S: "Social",
    E: "Enterprising",
    C: "Conventional",
  };

  const summaryMeanings = summaryCodes.map((code) => meanings[code]);

  const displayString = summaryMeanings.join(" ");

  return displayString;
};
