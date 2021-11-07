chrome.browserAction.onClicked.addListener(function(tab) { 
    let url = "http://www.prnt.sc/";
    let litere = "qwertyuiopasdfghjklzxcvbnm";
    let cifre = "0123456789";
    let a = litere[Math.floor(Math.random() * (litere.length-1))];
    url = url + a;
    a = litere[Math.floor(Math.random() * (litere.length))];
    url = url + a;
    //alert(url);
    url = url + Math.floor(Math.random() * 9999);
    window.open(url);
});