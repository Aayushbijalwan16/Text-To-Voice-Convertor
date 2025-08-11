let speech = new SpeechSynthesisUtterance();

let voices = []; 

let voiceSelect = document.querySelector("select");

// select different voice option available in devices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})
// applying spechSynthesis for reading the text from textArea 
document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});