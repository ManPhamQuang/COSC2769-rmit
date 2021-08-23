// Function to format input to ensure that it is in correct format
exports.escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}