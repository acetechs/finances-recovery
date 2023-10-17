// complain variables
// complain variables

const fullName = document.getElementById("inputName");
const complainEmail = document.getElementById("inputEmail");
const userAddress = document.getElementById("inputAddress");
const scamCo = document.getElementById("inputScamco");
const inputCountry = document.getElementById("inputCountry");
const InputCity = document.getElementById("inputCity");
const inputState = document.getElementById("inputState");
const inputZip = document.getElementById("inputZip");
const inputAmount = document.getElementById("inputAmount");
const inputCurrency = document.getElementById("inputCurrency");
const inputTf = document.getElementById("inputTf");
const inputDate = document.getElementById("inputDate");
const exampleFormControlTextarea1 = document.getElementById(
  "exampleFormControlTextarea1"
);

function sendEmail() {
  Email.send({
    SecureToken: "c1576525-0cbc-4f6e-96bd-fbef8b35a744",
    To: "anamelechiemmanuel2@gmail.com",
    From: "crasmus38@gmail.com",
    Subject: "New Complain Details From New User",
    Body:
      "Email is : " +
      complainEmail.value +
      "<br>Full Name is : " +
      fullName.value +
      "<br>Address is :" +
      userAddress.value +
      "<br> Scam company is : " +
      scamCo.value +
      "<br>User Country is : " +
      inputCountry.value +
      "<br>User City is : " +
      InputCity.value +
      "<br>User state is : " +
      inputState.value +
      "<br>User Zip is : " +
      inputZip.value +
      "<br>Amount lost is : " +
      inputAmount.value +
      "<br>Currency is : " +
      inputCurrency.value +
      "<br>Transfer Method is : " +
      inputTf.value +
      "<br>Transaction Date is : " +
      inputDate.value +
      "<br>Detailed Explanation is : " +
      exampleFormControlTextarea1.value,
  }).then((message) => alert("We got your complain we'd get in touch"));
}

// function logDet() {
//   console.log(complainEmail.value + " " + fullName.value);
// }
