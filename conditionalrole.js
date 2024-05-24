var user = "jkh";
switch (user) {
  case "admin":
    console.log("you get full access");
    break;
  case "subadmin":
    console.log("gets access to create and delte course");
    break;
  case "testprep":
    console.log("gets access to create and delete test");
    break;
  case "user":
    console.log("gets access to consume");
    break;
  default:
    console.log("trial user");
    break;
}
