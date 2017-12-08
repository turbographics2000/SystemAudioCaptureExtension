chrome.runtime.onMessage.addListener((msg, sender, res) => {
    if (msg.ready) {
        chrome.desktopCapture.chooseDesktopMedia(['screen', 'window'], sender.tab, streamId => {
            chrome.tabs.sendMessage(sender.tab.id, { streamId });
        });
    }
});
