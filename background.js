chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "close_all") {
        // Получаем все окна браузера
        chrome.windows.getAll({}, (windows) => {
            windows.forEach((window) => {
                chrome.windows.remove(window.id);
            });
        });
    }
});