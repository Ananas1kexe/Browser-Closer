console.log("--- Улучшенный детектор запущен! ---");

let inputBuffer = "";

// Слушаем ввод на всей странице
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === "Backspace") {
        inputBuffer = inputBuffer.slice(0, -1); // Удаляем последний символ
    } else if (key.length === 1) {
        inputBuffer += key.toLowerCase();
    }

    // Ограничиваем буфер (последние 30 символов)
    if (inputBuffer.length > 30) {
        inputBuffer = inputBuffer.substring(inputBuffer.length - 30);
    }

    // Тестовый вывод, чтобы видеть, что реально попадает в память
    console.log("Текущий буфер:", inputBuffer);

    // Проверка слов
    if (inputBuffer.includes("microsoft") || inputBuffer.includes("windows")) {
        console.log("%c[STOP]: ОБНАРУЖЕНО СЛОВО!", "background: red; color: white; padding: 5px; font-size: 16px;");
        chrome.runtime.sendMessage({action: "close_all"});
        alert("Вы напечатали запрещенное слово!");
        inputBuffer = ""; // Очистка
    }
});

