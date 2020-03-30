const calculateCurrentCases = (cases, deaths, recovereds) => {
  return cases - (deaths + recovereds);
};

export default calculateCurrentCases;
