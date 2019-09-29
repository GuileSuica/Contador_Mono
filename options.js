let page = document.getElementById('page');

function gerar_html(){
  chrome.storage.sync.get('abas', function(result){
    console.log(result.abas);
    let h3 = document.createElement('h3');
    page.appendChild(h3);
    h3.innerHTML = result.abas;
  });
}

gerar_html();
