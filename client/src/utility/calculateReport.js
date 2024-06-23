export const calculateReport = () => {
  const calculateSelfEstimates = (payload, data) => {
    const totals = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    for (let i = 1; i <= 2; i++) {
      ["R", "I", "A", "S", "E", "C"].forEach((letter) => {
        totals[letter] += parseInt(data[`se${i}${letter}`]) || 0;
      });
    }
    Object.assign(payload.report.selfEstimates, totals);
  };

  const calculateTotals = (payload) => {
    Object.keys(payload.report.total).forEach((dim) => {
      payload.report.total[dim] =
        payload.report.activities[dim] +
        payload.report.competencies[dim] +
        payload.report.selfEstimates[dim] +
        payload.report.occupations[dim];
    });
  };

  const calculateTop3Dimensions = (payload) => {
    const dimensions = ["R", "I", "A", "S", "E", "C"];
    const reportTotal = payload.report.total;
    const totalsArray = dimensions.map((dim) => ({
      dimension: dim,
      value: reportTotal[dim],
    }));
    totalsArray.sort((a, b) => b.value - a.value);
    payload.report.summaryCode = totalsArray
      .slice(0, 3)
      .map((item) => item.dimension);
  };

  const countItems = (data, type, itemToCount, maxIndex = 11) => {
    let count = 0;
    for (let i = 1; i <= maxIndex; i++) {
      if (data[`${type}${i}`] === itemToCount) {
        count++;
      }
    }
    return count;
  };

  const countLetters = (categoryTypes, propertyName, payload, data, letter) => {
    categoryTypes.forEach((type) => {
      let countL = 0;
      for (let i = 1; i <= 11; i++) {
        if (data[`${type}${i}`] === letter) {
          countL++;
        }
      }
      payload.report[propertyName][type.charAt(3)] = countL;
    });
  };

  return {
    calculateSelfEstimates,
    calculateTotals,
    calculateTop3Dimensions,
    countItems,
    countLetters,
  };
};
