
let inputBuffer = "";

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === "Backspace") {
        inputBuffer = inputBuffer.slice(0, -1);
    } else if (key.length === 1) {
        inputBuffer += key.toLowerCase();
    }

    if (inputBuffer.length > 30) {
        inputBuffer = inputBuffer.substring(inputBuffer.length - 30);
    }


    if (inputBuffer.includes("microsoft") || inputBuffer.includes("windows")) {
        chrome.runtime.sendMessage({action: "close_all"});
        alert("Вы решили поставить что то страное!");
        inputBuffer = ""; 
    }
});

