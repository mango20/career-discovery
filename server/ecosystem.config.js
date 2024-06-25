module.exports = {
  apps: [
    {
      name: "sds",
      script: "src/app.js",
      watch: true,
      ignore_watch: ["node_modules", "client"],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "client-build",
      script: "npm",
      args: "run client:build",
      cwd: "../client",
      autorestart: false,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
