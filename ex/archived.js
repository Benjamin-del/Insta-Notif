// THIS CODE IS FOR VERSIONS 2.1.4.5 AND UNDER


// COPY AN PASTE THIS IN TO /extras/notif.js !!!!!

window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      // ADD YOUR APP ID HERE
      appId: "YOUR_APP_ID_HERE",
      // ADD YOUR SAFARI ID HERE
      safari_web_id: "YOUR_SAFARI_ID_HERE",
      notifyButton: {
        enable: true,
      },
      // ADD YOUR SUBDOMAIN HERE
      subdomainName: "YOUR_SUB_DOMAIN",
    });
  });
// THIS TRIGGERS THE SLIDE NOTIFICATION PROMPT! 
OneSignal.push(function() {
  OneSignal.showSlidedownPrompt();
});
