document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    StatusBar.overlaysWebView(true);
    StatusBar.styleDefault();
    
    var options = {
        location: 'no',
        hidenavigationbuttons: 'yes',
        hideurlbar: 'yes',
        toolbar: 'no',
        zoom: 'no',
        hardwareback: 'yes',
        fullscreen: 'yes'
    };
    
    var ref = cordova.InAppBrowser.open('https://app.assemble.tv', '_self', options);
    
    ref.addEventListener('loadstop', function() {
        StatusBar.styleDefault();
    });
}