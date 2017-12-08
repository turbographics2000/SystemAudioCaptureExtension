chrome.runtime.sendMessage({ ready: true });
chrome.runtime.onMessage.addListener(msg => {
    if(msg.streamId) {
        gUM(msg.streamId);
    }
});

function gUM(streamId) {
    navigator.mediaDevices.getUserMedia({
        audio:{
            mandatory: {
                chromeMediaSource: 'system',
                chromeMediaSourceId: streamId
            }
        }
    }).then(stream => {
        document.querySelector('video').srcObject = stream;
    });
}