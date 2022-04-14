function validation() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var confirmpass = document.getElementById("conpass").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emails = document.getElementById("emails").value;

  var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // var rs = /^\d{10}$/;

  if (user == "") {
    document.getElementById("username").innerHTML =
      " ** Please fill the username field";
    return false;
  }
  if (user.length <= 2 || user.length > 20) {
    document.getElementById("username").innerHTML =
      " ** Username length must be between 2 and 20";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      " ** only characters are allowed";
    return false;
  }

  if (pass == "") {
    document.getElementById("passwords").innerHTML =
      " ** Please fill the password field";
    return false;
  }
  if (pass.length <= 5 || pass.length > 20) {
    document.getElementById("passwords").innerHTML =
      " ** Passwords length must be between  5 and 20";
    return false;
  }

  if (pass != confirmpass) {
    document.getElementById("confrmpass").innerHTML =
      " ** Password does not match the confirmed password";
    return false;
  }
  if (confirmpass == "") {
    document.getElementById("confrmpass").innerHTML =
      " ** Please fill the confirm password field";
    return false;
  }

  if (mobileNumber == "") {
    document.getElementById("mobileno").innerHTML =
      " ** Please fill the mobile NUmber field";
    return false;
  }

  if (!re.test(mobileNumber)) {
    document.getElementById("mobileno").innerHTML =
      "**format should be XXX-XXX-XXX or XXX XXX XXX or XXX.XXX.XXX or 10 digits";
    return false;
  }

  if (emails == "") {
    document.getElementById("emailids").innerHTML =
      " ** Please fill the email idx` field";
    return false;
  }
  if (emails.indexOf("@") <= 0) {
    document.getElementById("emailids").innerHTML = " ** @ Invalid Position";
    return false;
  }

  if (
    emails.charAt(emails.length - 4) != "." &&
    emails.charAt(emails.length - 3) != "."
  ) {
    document.getElementById("emailids").innerHTML = " ** . Invalid Position";
    return false;
  }
}

let timeout;
let password = document.getElementById("pass");
let strengthBadge = document.getElementById("strengthinfo");

let strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
let mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
);

function StrengthChecker(Password) {
  if (strongPassword.test(Password)) {
    strengthBadge.style.backgroundColor = "green";
    strengthBadge.textContent = "Strong";
  } else if (mediumPassword.test(Password)) {
    strengthBadge.style.backgroundColor = "orange";
    strengthBadge.textContent = "Medium";
  } else {
    strengthBadge.style.backgroundColor = "red";
    strengthBadge.textContent = "Weak";
  }
}

password.addEventListener("input", () => {
  strengthBadge.style.display = "block";
  clearTimeout(timeout);

  timeout = setTimeout(() => StrengthChecker(password.value), 100);

  if (password.value.length !== 0) {
    strengthBadge.style.display != "block";
  } else {
    strengthBadge.style.display = "none";
  }
});
