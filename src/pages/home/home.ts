import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
 declare const cordova: any;
 var activeRoom;
var previewTracks;

var identity = 'bhanushree';
var RoomName;
var Token;
var RemoteParticipantName;
// S

//    Join the Room with the token from the server and the
//    LocalParticipant's Tracks.
cordova.videoconversation.open(RoomName="Anu", Token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzdiYzNiODZlYTFiZjU3MDQ4MzUyZjNmYTY4NjlmMzQ5LTE1MzI1NTM4OTYiLCJpc3MiOiJTSzdiYzNiODZlYTFiZjU3MDQ4MzUyZjNmYTY4NjlmMzQ5Iiwic3ViIjoiQUM2MjlkMTIzM2VhZDY0YjUzNDFkMjcyOGY1ZWIxNjBkYyIsImV4cCI6MTUzMjU1NzQ5NiwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiYmhhbnUiLCJ2aWRlbyI6eyJyb29tIjoiQW51In19fQ.PI8Qw-8VTcs5xk1b1MjL7EIsedTXDo4maCPltqMnc8o", RemoteParticipantName="bhanu");
  // document.getElementById("logs").innerHTML += "roomJoined: " + JSON.stringify(room.localParticipant) + "<br />";
   /*

   log("Joined as '" + identity + "'"); */

// grating to Gradle
// 					Don't show this message again.

