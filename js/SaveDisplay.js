// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  
  var inputdata = $('.sampleSurvey').serializeArray();
  inputdata.forEach((data)=>{
    console.log(data.name);
    console.log(data.value);
  });
  var inputJson={};
  for(var i=0;i<inputdata.length; i++){
    var n = inputdata[i]["name"];
    var v = inputdata[i]["value"];
    console.log(n + ' ' + v);
    inputJson[n]= v;

   
  }
  firebase.firestore().collection("surveyresult").add(inputJson);
  
  
 


});

// update the result in table
firebase
  .firestore()
  .collection("surveyresult")
  .onSnapshot(querySnapshot => {
    var n1=0;
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().choice);
     
      console.log(doc.data().comm);
    });
  });
