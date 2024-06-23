import nodemailer from "nodemailer";
import logger from "../logger.js";
import HttpStatusCodes from "../../constants/httpStatusCodes.const.js";
import pdf from "html-pdf";

const transport = {
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};
let transporter = nodemailer.createTransport(transport);

async function sendEmailWithPDF(subject, htmlContent, htmlResponse, fullName) {
  const pdfOptions = {
    format: "Letter",
    border: {
      top: "1cm",
      right: "1cm",
      bottom: "1cm",
      left: "1cm",
    },
    header: {
      height: "20mm",
      contents:
        '<div style="font-family: Helvetica, sans-serif; font-size: 20px; text-align: center; margin-bottom: 20px; font-weight: bold;">Career Discovery with Dr. J. Procter <hr style="border: none; border-top: 1px solid black; margin-top: 2mm;" /></div>',
    },
  };

  const createPdfBuffer = async (html) => {
    return new Promise((resolve, reject) => {
      pdf.create(html, pdfOptions).toBuffer((err, buffer) => {
        if (err) reject(err);
        else resolve(buffer);
      });
    });
  };

  const [contentBuffer, responseBuffer] = await Promise.all([
    createPdfBuffer(htmlContent),
    createPdfBuffer(htmlResponse),
  ]);

  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject,
    text: "Please see the attached PDFs for SDS reports.",
    attachments: [
      {
        filename: `${fullName}_SDS_Report.pdf`,
        content: contentBuffer,
        encoding: "base64",
      },
      {
        filename: `${fullName}_SDS_Response.pdf`,
        content: responseBuffer,
        encoding: "base64",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      logger.error(error, "EMAIL ERROR: Problem with sending email");
      throw new APIError(
        "EMAIL SENDING",
        HttpStatusCodes.DATABASE_ACCESS,
        true,
        "Error in trying to send an email."
      );
    } else {
      logger.info(info.response, "EMAIL SENT");
      return info.response;
    }
  });
}

export default sendEmailWithPDF;
