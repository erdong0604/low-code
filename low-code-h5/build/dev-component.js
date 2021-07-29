console.log(process.argv);
const execSync = require("child_process").execSync;
const devComName = process.argv[2] || "ALL";

execSync(`cross-env VUE_APP_DEV_COM=${devComName} npm run serve`, {
  stdio: "inherit",
});
