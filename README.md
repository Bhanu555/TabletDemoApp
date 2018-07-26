# TabletDemoApp
Updated one: Android mobile app for video visitation using Ionic3/Angular5 using a cordova plugin for android 
Android mobile app for video visitation using Ionic1/Angularjs

Steps to build an ionic1 angularjs app

Start a new ionic project by specifying its type
ionic start NewIonic3App blank 

Integrate cordova? - yes Cordova pro - no

cd NewIOnic1App

Next add the plugin,command to install Plugin for ionic3

Use this plugin: https://github.com/PriceFallin/cordova-plugin-twilio-video( Fork or clone into this plugin and extract files)

ionic cordova plugin add [path/to/plugin]

ex: ionic cordova plugin add C:/Desktop/cordova-plugin-twilio-video-master 

NOTE: change all the appearance of corodva-plugin-twilio-video to corodva.plugin.twilio.video inside the plugin files. 
 
* Use this in your .ts file: 
declare const cordova: any;
 
 and call the plugin using: 
 cordova.plugins.TwilioVideo.openRoom(RoomName="Anu", Token= "1234****8910" , RemoteParticipantName="bhanu");

Debugging through bugs:

* if recieved mergedebugresources64 : add below lines to build.gradle under C:\Users\bhanushree.rajanna\one\platforms\android\app\src\main\AndroidManifest.xml (right after buildscript{} method)
configurations.all { resolutionStrategy { force 'com.android.support:support-v4:27.1.0' } }

* make sure the manifest tag holds this xmnlns link:
xmlns:android="http://schemas.android.com/apk/res/android" in your AndroidMnaifest.xml file

* make sure the widget tag holds this xmlns link:
xmlns:android="http://schemas.android.com/apk/res/android" in your config.xml file

* get an access token to join the room using app.js script

* Do ionic serve to check your app on the browser

* Connect your phone using an USB cable, check if the Devleoper optiuons{} is ON on your android phone ( Go to --> Settings --> About Phone --> Build Number --> click on it 7 times) and now you are a developer.

* Check if Developer options{} exists on your phone, and turn this option ON

* Check for USB debugging is activated!

* Build your app using:

ionic cordova Build android --device

* Run your app using:

ionic cordova run android --device

* Debug/Inspect your app on the console going to: chrome://inspect/#devices
* Check clobbers tag inside plugin.xml to know the plugin name(also check Plugin ID & activity tag of android to make sure plugin is loaded during your build) and related conversation.js file to know what function is called along with the plugin usage.

ex: 'cordova.videoconversation' is the clobbers element and 'open' is the function called in conversation.js 

Happy Coding! :)
