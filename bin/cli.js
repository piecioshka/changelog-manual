#!/usr/bin/env node

const process = require("process");
const exec = require("child_process").exec;

function getOption(argv, name) {
  const index = argv.indexOf(`--${name}`);
  if (index === -1) {
    return null;
  }
  return argv[index + 1];
}

(async () => {
  const repo = getOption(process.argv, "repo");
})();
