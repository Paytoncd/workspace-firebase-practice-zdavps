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
// object examples 
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);


// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  const inputdata=$('form').serializeArray();
  console.log(inputdata);
  
  /* save the data to database */

  var inputJson={};
  for(var i=0;i<inputdata.length; i++){
    var n = inputdata[i]["name"];
    var v = inputdata[i]["value"];
    console.log(n + ' ' + v);
    inputJson[n]= v;

   
  }
  firebase.firestore().collection("hotelreservation").add(inputJson); //save the data



  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hotelreservation")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);
    });
  });
