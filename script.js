const validateForm = () => {
  uname = document.forms["loginform"]["username"].value;
  passwd = document.forms["loginform"]["pwd"].value;
  if (uname === "tejas" && passwd === "123") {
    return true;
  }
  alert("Wrong username or password!");
  return false;
};
