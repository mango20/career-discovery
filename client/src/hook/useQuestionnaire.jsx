import axios from "axios";
import { Config } from "../config/config";

export const useQuestionnaire = () => {
  const postQuestionnaireAnswers = async (payload) => {
    try {
      const response = await axios.post(`${Config.sds}/api/sds`, payload);
      console.log("Response:", response.data); // Log the response data
      return response; // Return the entire response object
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
      throw error; // Re-throw the error to propagate it up
    }
  };

  const getResponseQuestionnaire = async (code, key) => {
    console.log(code, key);
    try {
      const response = await axios.post(`${Config.sds}/api/sds/data`, {
        code: code,
        key: key,
      });

      const result = response.data.result;
      return result;
      //   const unstringed = Buffer.from(gzipString);
      //   const decoded = await ungzip(unstringed);
      //   const raw = Buffer.from(decoded);
      //   const result = await ungzip(gzipData);
      //   console.log(gzipString);
    } catch (error) {
      console.error("Error retrieving questionnaire response:", error);
    }
  };

  return {
    postQuestionnaireAnswers,
    getResponseQuestionnaire,
  };
};
