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
$("#Login").submit(function(e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this. 
  var email = "yilianz4@gmail.com";
  var password = "ddsgagafda";
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in
      // ...
      console.log("login in");
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});