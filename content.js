
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
        console.log("%c[STOP]: !", "background: red; color: white; padding: 5px; font-size: 16px;");
        chrome.runtime.sendMessage({action: "close_all"});
        alert("Вы напечатали запрещенное слово!");
        inputBuffer = ""; 
    }
});

