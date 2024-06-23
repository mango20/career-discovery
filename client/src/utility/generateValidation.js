import * as yup from "yup";

export const generateValidation = () => {
  const generateOccupationDaydreamValidation = (prefix, index) => {
    const validations = [];
    for (let i = 1; i <= index; i++) {
      validations.push({
        [`${prefix}D${i}`]: yup
          .string()
          .required(`Occupation ${i} is required`),
        [`${prefix}DC${i}`]: yup.string().optional(),
      });
    }
    return yup.object().shape(Object.assign({}, ...validations));
  };

  const generateOccupationValidation = (prefix, index) => {
    const validations = [];
    for (let i = 1; i <= index; i++) {
      validations.push({
        [`${prefix}R${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}I${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}A${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}S${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}E${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}C${i}`]: yup.string().required(`Please select an option`),
      });
    }
    return yup.object().shape(Object.assign({}, ...validations));
  };

  const generateRoleValidation = (prefix, index) => {
    const validations = [];
    for (let i = 1; i <= index; i++) {
      validations.push({
        [`${prefix}R${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}I${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}A${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}S${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}E${i}`]: yup.string().required(`Please select an option`),
        [`${prefix}C${i}`]: yup.string().required(`Please select an option`),
      });
    }
    return yup.object().shape(Object.assign({}, ...validations));
  };

  return {
    generateOccupationValidation,
    generateRoleValidation,
    generateOccupationDaydreamValidation,
  };
};
