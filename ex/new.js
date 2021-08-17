// DO NOT COPY IN TO /extras

var script_tag = document.createElement('script');
script_tag.setAttribute('src','https://cdn.onesignal.com/sdks/OneSignalSDK.js');
document.head.appendChild(script_tag);

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var NT = JSON.parse(this.responseText);

    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.init({
        appId: NT.NOTIF_app_id,
        //safari_web_id: NT.safari_web_id,
        notifyButton: {
          enable: true
        },
        //subdomainName: NT.subdomainName
      });
    });
    // THIS TRIGGERS THE SLIDE NOTIFICATION PROMPT!
    OneSignal.push(function() {
      OneSignal.showSlidedownPrompt();
    });
  }
};
xmlhttp.open("GET", "/svr/svr.json", true);
xmlhttp.send();
