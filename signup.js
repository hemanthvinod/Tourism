function validation() {
  var user = document.getElementById("user").value.trim();
  var pass = document.getElementById("pass").value.trim();
  var confirmpass = document.getElementById("conpass").value.trim();
  var mobileNumber = document.getElementById("mobileNumber").value.trim();
  var emails = document.getElementById("emails").value.trim();

  var re = /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var rs =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~@$!%*?&#~^_])[A-Za-z\d@$!%*?&#~^_]{8,}$/;

  if (user == "") {
    document.getElementById("username").innerHTML =
      " ** Please fill the username field";
    return false;
  } else {
    document.getElementById("username").innerHTML = "";
  }

  if (user.length <= 5 || user.length > 20) {
    document.getElementById("username").innerHTML =
      " ** Username length must be between 5 and 20";
    return false;
  } else {
    document.getElementById("username").innerHTML = "";
  }

  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      " ** only characters are allowed";
    return false;
  } else {
    document.getElementById("username").innerHTML = "";
  }
  if (!rs.test(pass)) {
    document.getElementById("passwords").innerHTML =
      " ** Required: atleast length 8, 1 uppercase, 1 lowercase, 1 number and a special character ";
    return false;
  } else {
    document.getElementById("passwords").innerHTML = "";
  }

  if (pass != confirmpass) {
    document.getElementById("confrmpass").innerHTML =
      " ** Password does not match the confirmed password";
    return false;
  } else {
    document.getElementById("confrmpass").innerHTML = "";
  }

  if (confirmpass == "") {
    document.getElementById("confrmpass").innerHTML =
      " ** Please fill the confirm password field";
    return false;
  } else {
    document.getElementById("confrmpass").innerHTML = "";
  }

  if (mobileNumber == "") {
    document.getElementById("mobileno").innerHTML =
      " ** Please fill the mobile Number field";
    return false;
  } else {
    document.getElementById("mobileno").innerHTML = "";
  }

  if (!re.test(mobileNumber)) {
    document.getElementById("mobileno").innerHTML =
      "**format should be XXX-XXX-XXX or XXX XXX XXX or XXX.XXX.XXX or 10 digits";
    return false;
  } else {
    document.getElementById("mobileno").innerHTML = "";
  }

  if (emails == "") {
    document.getElementById("emailids").innerHTML =
      " ** Please fill the email id field";
    return false;
  } else {
    document.getElementById("emailids").innerHTML = "";
  }

  if (emails.indexOf("@") <= 0) {
    document.getElementById("emailids").innerHTML = " ** @ Invalid Position";
    return false;
  } else {
    document.getElementById("emailids").innerHTML = "";
  }

  if (
    emails.charAt(emails.length - 4) != "." &&
    emails.charAt(emails.length - 3) != "."
  ) {
    document.getElementById("emailids").innerHTML = " ** . Invalid Position";
    return false;
  } else {
    document.getElementById("emailids").innerHTML = "";
  }
}

let timeout;
let password = document.getElementById("pass");
let strengthBadge = document.getElementById("strengthinfo");

let strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{11,})"
);
let mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{11,}))"
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
