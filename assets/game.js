


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

  

let game = {
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

database.ref().on("value", function(snapshot) {

//listener to the database /players/ node to listen for any changes
$('#join').on('click', function() {

database.ref('/player/').on("value", function(snapshot) {
    // Check for existence of player 1 in the database
   game.player1.isConnected = true


    if (game.player1.isConnected === true) {
       
        $('.waiting1').text("Ready")
        waitiing1 = $('.waiting1').val().trim()
		console.log("Player 1 exists");
        database.ref('/player1/').set({
               game: `${game.player1.isConnected}`,
                  waitiing1:waitiing1
        })
		// Record player1 data
		
		

		// Update player1 display
		
		
	} else {
		console.log("Player 1 does NOT exist");


		// Update player1 display
		
		
    }

    



    });

   

    



    });



    $('#join2').on('click', function() {

        database.ref('/player/').on("value", function(snapshot) {
            // Check for existence of player 1 in the database
           game.player2.isConnected = true
        
        
            if (game.player2.isConnected === true) {
               
                $('.waiting').text("Ready").set
        
                console.log("Player 2 exists");
                database.ref('/player2/').set({
                       game: `${game.player2.isConnected}`
                    
                })
                // Record player1 data
                
                
        
                // Update player1 display
                
                
            } else {
                console.log("Player 2 does NOT exist");
        
        
                // Update player1 display
                
                
            }
        
            
        
        
        
            });
        
           
        
            
        
        
        
            });



            $('.start').on('click', function() {

                database.ref('/player/').on("value", function(snapshot) {
                    // Check for existence of player 1 in the database
                  
                
                
                    if (game.player2.isConnected === true && game.player1.isConnected === true) {
                       
                       
            
                        console.log("Start");
                        
                        // Record player1 data
                        
                        
                
                        // Update player1 display
                        
                        
                    }   else if (game.player1.isConnected === true && game.player2.isConnected === false) {
                        console.log("player 2 wait")
                        alert("please wait for player 2")
                          
                
                        // Update player1 display
                        
                        
                    } else if (game.player1.isConnected === false && game.player2.isConnected === true){
                        alert("please wait for player 1")

                    }else{}
                
                    
                
                
                
                    });
                
                   
                
                    
                
                
                
                    });


        

});




//check for player 1


//check for player 2



//when both players are present start game




//game logic that recognizes when it is player 1 turn

//rps logic that compares player 1 choice and player 2 choice and if player wins increase score

