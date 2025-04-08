const NonErrorEmittedError = require("../HookWebpackError");

function normalizeToError(input, fallbackName = "Error") {
  if (input instanceof Error) return input;
  return new NonErrorEmittedError(input, fallbackName);
}

module.exports = normalizeToError;
//asmi2911
