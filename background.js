window.addEventListener('load', evemt => {
    chrome.tabs.executeScript(null, {file: 'content_script.js'}, ()=>{connect()});
});

function connect() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const port = chrome.tabs.connect(tabs[0].id);
        port.postMessage('MSG_TOGGLE_SIDEBAR');
    });
}