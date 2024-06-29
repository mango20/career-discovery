import axios from "axios";
import { Config } from "../config/config";

export const useQuestionnaire = () => {
  const postQuestionnaireAnswers = async (payload) => {
    try {
      const response = await axios.post(`${Config.sds}/api/sds`, payload);

      return response; // Return the entire response object
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
      throw error; // Re-throw the error to propagate it up
    }
  };

  const getResponseQuestionnaire = async (code, key) => {
    try {
      const response = await axios.post(`${Config.sds}/api/sds/data`, {
        code: code,
        key: key,
      });

      const result = response.data.result;
      return result;
    } catch (error) {
      console.error("Error retrieving questionnaire response:", error);
    }
  };

  return {
    postQuestionnaireAnswers,
    getResponseQuestionnaire,
  };
};
