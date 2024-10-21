function isValidPassword(password, username) {
  const isLengthInvalid = password.length < 8;
  const passwordHasSpaces = password.indexOf(" ") !== -1;
  const passwordHasUsername = password.indexOf(username) !== -1;

  if (isLengthInvalid || passwordHasSpaces || passwordHasUsername) {
    return false;
  } else {
    return true;
  }
}
