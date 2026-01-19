let inputBuffer = "";

const words = [
    "microsoft",
    "windows",
    "майкрософт",
    "виндус",
    "микрософт",
    "виндувс"
];

document.addEventListener("keydown", (event) => {
    if (event.key.length === 1) {
        inputBuffer += event.key.toLowerCase();
    } else if (event.key === "Backspace") {
        inputBuffer = inputBuffer.slice(0, -1);
    }

    inputBuffer = inputBuffer.slice(-30);

    for (const word of words) {
        if (inputBuffer.includes(word)) {
            browser.runtime.sendMessage({ action: "close_all" });
            alert("Вы решили поставить что-то странное!");
            inputBuffer = "";
        }
    }
});
