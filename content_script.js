chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
        if (msg == 'MSG_TOGGLE_SIDEBAR') {
            console.log('Toggle Sidebar');
        }
    });
});