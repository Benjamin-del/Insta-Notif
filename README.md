# Insta Notif is a simple way to integrate onesignal in to your Instalink Bio Generator!

Insta Notif is a very easy way to add push notifications in to your Instalink. This offeres no frontend notification creator. 
You must create notifications in onesignal! 


# Getting started

Onesignal settings: 
1. Select "All browsers exept Safari" **You Will be able to add safiri in later if you choose** 
2. Select Custom app
3. Slect "My site is not fully http"
4. You should get some codes on the next page. Insert your app id here:
`appId: "1234XXXXXXXXXXXXXXXXXXXXXXX",` 
5. Insert your subdomain name here:
`subdomainName: "SUBDOMAN",`
Your subdomain is the label that you chose under "My site is not fully Https" (Ommit `OS.TC`)
6. Insert Your Safari web id here:
`safari_web_id: "web.onesignal.auto.1234XXXXXXXXXXXXXXXXXXX",`
You are finished! Go to your Instalink site to test it out!


# Sending Nofifications:

To send a notification go to onesignal > Select your app > Dashboard. Click on the Blue "New push" Button!
![image](https://user-images.githubusercontent.com/67153251/121029453-98e2c980-c776-11eb-8d9d-423ae0d5912f.png)

