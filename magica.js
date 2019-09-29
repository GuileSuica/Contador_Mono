chrome.runtime.onInstalled.addListener(function() {    

    chrome.tabs.getAllInWindow(null, callback);
    let tabs_n = null;
    function callback(data){
        // console.log(data.length);
        tabs_n = data.length;

        chrome.storage.sync.set({abas: tabs_n});
    }
    

    function constructOptions() {
        let h2 = document.createElement('h2');
        let page = document.getElementById('page');
        chrome.storage.sync.get('abas', function(result){
            let abas_t = result.abas;
            // console.log(abas_t); 
            h2.innerHTML = abas_t;
        });

        // h2.addEventListener('click', function() {
        //   chrome.storage.sync.set({color: item}, function() {
        //     console.log('color is ' + item);
        //   })
        // });
        page.appendChild(h2);
    }
      
    constructOptions();

    

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

    // let tag = document.getElementById('btn');
    // console.log(tag);
    
    // let changeColor = document.getElementById('btn');
    
    // changeColor.onclick = function(element) {
    //     let color = element.target.value;
    //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //       chrome.tabs.executeScript(
    //           tabs[0].id,
    //           {code: 'document.body.style.backgroundColor = "' + color + '";'});
    //     });
    // };

    // chrome.storage.sync.get('color', function(data) {
    //     changeColor.style.backgroundColor = data.color;
    //     changeColor.setAttribute('value', data.color);
    // });

});
