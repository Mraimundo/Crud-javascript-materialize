var firebaseConfig = {
    apiKey: "AIzaSyBM-ZiToAtrWNsPTouoipH1BFMEAZ4vmmo",
    authDomain: "primeiro-projeto-8be71.firebaseapp.com",
    databaseURL: "https://primeiro-projeto-8be71.firebaseio.com",
    projectId: "primeiro-projeto-8be71",
    storageBucket: "primeiro-projeto-8be71.appspot.com",
    messagingSenderId: "896435812471",
    appId: "1:896435812471:web:e602ae8f850e8344eb2e72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  
  var nome = document.getElementById("nome")
  var email = document.getElementById("email")
  var comida = document.getElementById("comida")
  var button = document.getElementById("botao")

  button.addEventListener("click", (e) => {
    e.preventDefault();

    console.log( nome.value, email.value, comida.value);

    db.collection('pessoa').add({
    nome: nome.value,
    email: email.value,
    comida: comida.value

    })
    });

  

