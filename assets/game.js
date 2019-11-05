


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAzMrUCTU0KcBoVbOtQOUrSLPjNirpTfSw",
    authDomain: "rps-database-22d63.firebaseapp.com",
    databaseURL: "https://rps-database-22d63.firebaseio.com",
    projectId: "rps-database-22d63",
    storageBucket: "rps-database-22d63.appspot.com",
    messagingSenderId: "886512432860",
    appId: "1:886512432860:web:67939c0f1e3cbec678a619",
    measurementId: "G-SMX6907YNE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let database = firebase.database()
  firebase.analytics();


const game = {
    player1:{
        isConnected: false

    },

    player2:{
        isConnected: false

    }


}


let p1Score = 0;
let p2score = 0;
const player1 =""
const player2 = ""


const playerRef = database.ref('/players')
const chatRef = database.ref('/chat')
  

console.log(database)

//variable needed for two players


//Store scores when the a player wins



//variable for the choice the player made

//variable for the turn



//listener to the database /players/ node to listen for any changes
$('#join').on('click', function() {

database.ref('/player').on("value", function(snapshot) {
    // Check for existence of player 1 in the database
   game.player1.isConnected = true


    if (game.player1.isConnected === true) {
		console.log("Player 1 exists");

		// Record player1 data
		
		

		// Update player1 display
		
		
	} else {
		console.log("Player 1 does NOT exist");


		// Update player1 display
		
		
    }

    



    });

});
    




//check for player 1


//check for player 2



//when both players are present start game




//game logic that recognizes when it is player 1 turn

//rps logic that compares player 1 choice and player 2 choice and if player wins increase score

