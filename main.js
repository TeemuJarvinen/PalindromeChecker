"use strict";

function checkIfPalindrome() {
  let textInput = document.getElementById("textArea").value.toLowerCase();
  let answerField = document.getElementById("answerField");

  if (textInput.length == 0) {
    answerField.innerHTML = "No input given";
    answerField.style.color = "var(--text-missing)";
  } else if (checkReverseString(textInput)) {
    answerField.innerHTML = "It's a palindrome";
    answerField.style.color = "var(--text-correct)";
  } else {
    answerField.innerHTML = "That's not a palindrome";
    answerField.style.color = "var(--text-wrong)";
  }
}

function checkReverseString(str) {
  let splitString = str.split("");
  let reverseSplitString = splitString.reverse();
  let joinReversedSplitString = reverseSplitString.join("");

  if (str == joinReversedSplitString) {
    return true;
  } else {
    return false;
  }
}
