
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDXmLwWZTCucZpQv7rd7kKHIGpP05dRaLk",
      authDomain: "kwitter-fc5ad.firebaseapp.com",
      projectId: "kwitter-fc5ad",
      storageBucket: "kwitter-fc5ad.appspot.com",
      messagingSenderId: "773408081315",
      appId: "1:773408081315:web:d0335645702b2378eb8616"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addroom()
    {
          room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
          }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" oncick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location="kwitter_page.html";
}

function logout()
{
      window.location="index.html";
}


