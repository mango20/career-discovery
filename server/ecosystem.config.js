module.exports = {
  apps: [
    {
      name: "server",
      script: "src/app.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "client",
      script: "npm",
      args: "start --prefix client",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
