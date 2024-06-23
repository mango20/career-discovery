import { calculateReport } from "./calculateReport";

export const populate = () => {
  const { countItems } = calculateReport();
  const populateType = (categoryTypes, propertyName, payload, data, ind) => {
    categoryTypes.forEach((type) => {
      payload[propertyName][type] = {};
      for (let i = 1; i <= ind; i++) {
        payload[propertyName][type][`${i}`] = data[`${type}${i}`];
      }
    });
  };

  const populateOccupationalDaydreams = (payload, data) => {
    for (let i = 1; i <= 8; i++) {
      payload.occupationalDaydreams.occD[`${i}`] = data[`occD${i}`];
      payload.occupationalDaydreams.occDC[`${i}`] = data[`occDC${i}`];
    }
  };

  return {
    populateType,
    populateOccupationalDaydreams,
  };
};
