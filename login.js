const form = document.getElementById("form1");
const email = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

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

  if (emailValue == "") {
    setError(email, "Email is required");
  } else if (!isEmailvalid(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be atleat 8 character");
  } else setSuccess(password);
}
