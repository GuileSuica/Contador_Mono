chrome.runtime.onInstalled.addListener(function() {    

    chrome.tabs.getAllInWindow(null, callback);
    let tabs_n;
    function callback(data){
        console.log(data.length);
        tabs_n = data.length;
    }
    
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("Green.");
    });
});

// let tag = document.querySelector('#h2');
// let newTag = `Você tem ${tabs_n} abertas!`;
// tag.innerHTML = newTag;