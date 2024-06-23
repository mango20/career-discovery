export const Config = {
  sds:
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : process.env.REACT_APP_SDS,
  code: process.env.REACT_APP_CODE,
};
