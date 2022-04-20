const validateNotEmptyFields = function (data) {
  if (
    data.documentType == "" ||
    data.documentNumber == "" ||
    data.names == "" ||
    data.surnames == "" ||
    data.email == "" ||
    data.password == "" ||
    data.confirmPassword == ""
  ) {
    return false;
  } else {
    return true;
  }
};
module.exports = { validateNotEmptyFields };