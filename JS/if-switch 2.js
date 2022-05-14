let browser = "123";

switch (browser) {
  case "Explorer":
    msg = "ActiveX installation requried";
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    msg = "Supported browsers!";
    break;
  default:
    msg = "Unsupoorted browsers!";
    break;
}

console.log(msg);
