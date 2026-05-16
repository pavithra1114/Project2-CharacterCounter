const messageBox = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxChars = 200;

messageBox.addEventListener("input", function () {
  let typedLength = messageBox.value.length;

  // If user exceeds limit, cut extra characters
  if (typedLength > maxChars) {
    messageBox.value = messageBox.value.substring(0, maxChars);
    typedLength = maxChars;
    warning.textContent = "Character limit reached! (200 max)";
  } else {
    warning.textContent = "";
  }

  // Update counter
  counter.textContent = `${typedLength}/${maxChars} characters`;
});