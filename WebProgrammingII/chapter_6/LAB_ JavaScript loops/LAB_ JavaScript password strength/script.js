// Your solution goes here
function isStrongPassword(password) {
  if (
    password.length >=8 &&
    !password.includes("password") &&
    containsUppercase(password)
  ) {
    return true;
  } else if (password.length < 8) {
    // throw "Too short";
    console.log("Too short");
    return false;
  } else if (password.includes("password")) {
    // throw 'Contains "password';
    console.log('Contains "password"');
    return false;
  } else if (!containsUppercase(password)) {
    // throw "No uppercase characters";
    console.log("No uppercase characters");
    return false;
  }
}

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

var test = isStrongPassword("Abc12345");
console.log(test);
