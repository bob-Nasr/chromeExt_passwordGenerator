document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const copyButton = document.getElementById("copyButton");

  generateButton.addEventListener("click", generatePassword);
  generateButton.addEventListener("click", validateLength);
  copyButton.addEventListener("click", copyPasswordToClipboard);
  
});

function validateLength() {
    var input = document.getElementById("length");
    var value = parseInt(input.value);

    if (isNaN(value)) {
        input.value = 6; // Default to minimum value if input is not a number
    } else if (value < 6) {
        input.value = 6; // Set to minimum value if input is less than minimum
    } else if (value > 128) {
        input.value = 128; // Set to maximum value if input is greater than maximum
    }
}

function generatePassword() {
  const passOutput = document.getElementById("passwordOutput");
  const Length = document.getElementById("length").value;
  const Uppercase = document.getElementById("uppercase").checked;
  const Numbers = document.getElementById("numbers").checked;
  const Symbols = document.getElementById("specialChar").checked;

  const charset =
    "abcdefghijklmnopqrstuvwxyz" +
    (Uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
    (Numbers ? "0123456789" : "") +
    (Symbols ? "!@#$%^&*()-_=+[{]}|;:,<.>/?" : "");

  let password = "";
  for (let i = 0; i < Length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  passOutput.textContent = password;
  passOutput.style.borderColor = "black";

  var contentHeight = passOutput.scrollHeight;
  var contentWidth = passOutput.scrollWidth;
  passOutput.style.width = contentWidth + "px";

  passOutput.style.height = contentHeight + "px";
  console.log(passOutput.style.height);
}

function copyPasswordToClipboard() {
  const password = document.getElementById("passwordOutput").textContent;
  navigator.clipboard
    .writeText(password)
    .then(() => {
      console.log("Password copied to clipboard");
      const passOutput = document.getElementById("passwordOutput");
      passOutput.style.borderColor = "#19C37D";
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
      passOutput.style.borderColor = "#F22C3D";
    });
}
