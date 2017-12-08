chrome.runtime.onMessage.addListener((msg, sender, res) => {
    if (msg.ready) {
        chrome.desktopCapture.chooseDesktopMedia(['screen'], streamId => {
            chrome.tabs.sendMessage(sender.tab.id, { streamId });
        });
    }
});
