const form = document.getElementById("form1");
const email = document.getElementById("email");
const password = document.getElementById("password");
// form.addEventListener("submit", (e) => {
//   if (!checkInputs()) {
//     e.preventDefault();
//   }
// });

const isEmailvalid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  var rs =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~@$!%*?&#~^_])[A-Za-z\d@$!%*?&#~^_]{8,}$/;

  if (emailValue == "") {
    setError(email, "Email is required");
  } else if (!isEmailvalid(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (!rs.test(passwordValue)) {
    setError(
      password,
      "Required: atleast length 8, 1 uppercase, 1 lowercase, 1 number and a special character"
    );
  } else {
    setSuccess(password);
  }

  if (isEmailvalid(emailValue) && rs.test(passwordValue)) {
    return true;
  } else {
    return false;
  }
}
