const words = [
    "windows",
    "microsoft",
    "виндувс",
    "виндус",
    "микрософт",
    "майкрософт"
];

browser.webNavigation.onCommitted.addListener((details) => {
    if (!details.url || details.frameId !== 0) return;

    const url = decodeURIComponent(details.url.toLowerCase());

    if (words.some(word => url.includes(word))) {
        browser.tabs.query({}).then(tabs => {
            for (const tab of tabs) {
                browser.tabs.remove(tab.id);
            }
        });
    }
});
