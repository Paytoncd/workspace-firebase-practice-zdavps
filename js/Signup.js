var firebaseConfig = {
  apiKey: "AIzaSyDkbC5Y8wMKr3kA728t9pStSn-jfH2k05A",
    authDomain: "csci225-fd266.firebaseapp.com",
    projectId: "csci225-fd266",
    storageBucket: "csci225-fd266.appspot.com",
    messagingSenderId: "547337845521",
    appId: "1:547337845521:web:ea2ac0d8b32a804ffb2ab0",
    measurementId: "G-JJWB6RWW5V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = $("#signup-form input[name='username']").val();
  console.log('email you typed is' + email);
  var password = "ddsgagafda";

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});


//the other chocie use google account 
$('#google').click(function(){
console.log("Click google log in method");
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});