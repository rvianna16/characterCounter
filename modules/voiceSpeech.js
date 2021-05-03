import { textarea, span } from "../script.js";

function voiceSpeech() {
  const recordButton = document.querySelector(".start_button");
  let audioTranscription = "";
  let recording = false;

  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    let speechApi = window.SpeechRecognition || window.webkitSpeechRecognition;
    let receiveAudio = new speechApi();

    receiveAudio.continuos = false;
    receiveAudio.interimResults = false;
    receiveAudio.lang = "pt-BR";

    receiveAudio.onstart = () => {
      recording = true;
      recordButton.classList.add("active");
    };

    receiveAudio.onend = () => {
      recording = false;
      recordButton.classList.remove("active");
    };

    receiveAudio.onresult = (e) => {
      audioTranscription = e.results[0][0].transcript;
      textarea.value += audioTranscription;
      span.innerText = audioTranscription.length;
    };

    recordButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (recording) {
        receiveAudio.stop();
        return;
      } else {
        receiveAudio.start();
      }
    });
  } else {
    alert("Your browser doesn't support web speech api :(");
  }
}

export { voiceSpeech };
