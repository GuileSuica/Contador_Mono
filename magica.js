chrome.runtime.onInstalled.addListener(function() {    
    setInterval(
        function(){
            chrome.tabs.getAllInWindow(null, callback);
            let tabs_n = null;
            function callback(data){
                // console.log(data.length);
                tabs_n = data.length;
    
                chrome.storage.sync.set({abas: tabs_n});
            }
        }
    , 1000);

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

});
