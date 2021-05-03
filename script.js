import { voiceSpeech } from "./modules/voiceSpeech.js";

const textarea = document.querySelector("#textarea");
const span = document.querySelector(".counter");
const copyButton = document.querySelector(".btn.copy");
const cleanButton = document.querySelector(".btn.clean");

textarea.addEventListener("input", () => {
  span.innerText = textarea.value.length;
});

copyButton.addEventListener("click", () => {
  if (textarea.value.length === 0) {
    alert("There is no text to copy");
  } else {
    textarea.select();
    document.execCommand("copy");
    alert("The text has been copied");
  }
});

cleanButton.addEventListener("click", () => {
  textarea.value = "";
  span.innerText = textarea.value.length;
});

voiceSpeech();

export { textarea, span };
