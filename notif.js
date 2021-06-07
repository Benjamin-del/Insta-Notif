window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "YOUR_APP_ID_HERE",
      safari_web_id: "YOUR_SAFARI_ID_HERE",
      notifyButton: {
        enable: true,
      },
      subdomainName: "YOUR_SUB_DOMAIN",
    });
  });

OneSignal.push(function() {
  OneSignal.showSlidedownPrompt();
});
