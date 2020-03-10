console.log("WELCOME TO SPACE BATTLE")
class Aliens{ //class to create the alien ships
    constructor(hull, firepower,accuracy){
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy=accuracy;
    }
    reduceHitpoints()
    {
        this.hull-=5;
    }

}
 
class USSSchwarzeneggerShip{ //class to create battle ship, there could me more battle ships created
    constructor(){
        this.hull=20;
        this.firepower=5;
        this.accuracy=0.7;
    }
    reduceHitpoints(hitValue)
    {
        this.hull-=hitValue;
    }

}

function getRandomValue(minVal, maxVal){ //returns random value for alien ships' hull, firepower, and accuracy
    if(minVal>1 && maxVal > 1){
        return Math.floor(Math.random()*(maxVal-minVal+1)+minVal);
 
}
    else{
       let num=Math.random()*(maxVal-minVal+0.01)+minVal;
       return num.toFixed(2);
    }
}
//create alian ships with diffferent paramters
let firstAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let secondAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let thirdAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let fourthAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let fifthAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let sixthAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));

let battleShip=new USSSchwarzeneggerShip();//create battle ship

let arrayOfAlienShips=[firstAlienShip,secondAlienShip,thirdAlienShip,fourthAlienShip,fifthAlienShip,sixthAlienShip]; //create array which holds alien ships
console.log("There are 6 alien ships with the following properties:")
    for(let i=0; i<arrayOfAlienShips.length;  i++){
        console.log(`%cAlien ship ${i+1} has the following properties: hull: ${arrayOfAlienShips[i].hull}, firepower:${arrayOfAlienShips[i].firepower}, accuracy: ${arrayOfAlienShips[i].accuracy}`,"color:#5B11CD");
    }

let response;
let battleShipHitTurn;
let alienShipHitTurn;

function accuracyNumber(){ //return the random value for accuracy for alien ships and battle ship
    let accuracyNum=Math.random();
    return accuracyNum.toFixed(2);
}
 

function battleShipTurn(){
    if(arrayOfAlienShips.length==0 || response==false){ // if there no alien ships or use exit the game exit the function
        return;
    }
  
    battleShipHitTurn=accuracyNumber();  
    console.log("Battle Ship accuracy "+battleShip.accuracy +", hit chance "+battleShipHitTurn + " and hull is "+battleShip.hull);
    console.log(`Current alienship's hull is ${arrayOfAlienShips[0].hull} and firepower is ${arrayOfAlienShips[0].firepower}`)
        
        if(battleShipHitTurn<=battleShip.accuracy){ //if the hit acuraccy is less than battle ship accuracy , alien ship's 
            arrayOfAlienShips[0].reduceHitpoints();// hull will be return
                if(arrayOfAlienShips[0].hull>0){ //if the alien ship survives, its alien ship's turn
                   console.log("%c You hit alienship","color:#11B3CD");
                    alienShipTurn(); 
                }
        else if(arrayOfAlienShips[0].hull<=0){ //if alien ship's hull is 0 or less alien ship destroyed
                console.log("%c Alien ship was destroyed","color:#FC512D");
                cont(); //ask a user if continue
                return;
                } 
        }
        else{
        console.log("%c You miss alien ship","color:#17C111"); //if hit accuracy is more than battleship accuracy, battle ship miss,
            alienShipTurn();//and its alien ship's turn
    }
    }


function alienShipTurn(){
    if(arrayOfAlienShips.length==0 || response==false){ // if there no alien ships or use exit the game exit the function

        return;
    }
        alienShipHitTurn=accuracyNumber();    
        console.log("Alien hit accurancy :"+alienShipHitTurn + "Alien ship accuracy: " + arrayOfAlienShips[0].accuracy + " Alien ship hull: "+arrayOfAlienShips[0].hull);
    
    if(alienShipHitTurn<=arrayOfAlienShips[0].accuracy) //if the hit accuracy less then alien ship accuaracy  reduce firepower of battle ship
    {
        battleShip.reduceHitpoints(arrayOfAlienShips[0].firepower);
            if (battleShip.hull<=0){ //if battle ship hull less or equals to 0 user loose
                console.log("%c Battle ship is destroyed","color:#FC512D");
                alert("You loose!"); // window alert will appear
                return;
            } 
            else{
                console.log("%c You hit battle ship","color:#11B3CD") //if battle ship's hull is more than 0 its battle ship's turn
            battleShipTurn();  
            }         
    }
    else{
        console.log("%c You miss battleship","color:#17C111"); // if hit accuracy is more than alien ship's accuracy, alien ship 
        battleShipTurn();//miss and its battle ship's turn
    }
}

function startGame(){ //starting the game function connected to button "Start game"

    if(arrayOfAlienShips.length==0){ // if there no alien ships user win
        alert("You win!");
        return;
    }
    //run battleShipTurn and alienShipTurn  functions
    battleShipTurn();
    alienShipTurn();
}

function refresh(){ //connect to "Refresh" button to refresh the page
    location.reload()
}

function cont(){ // used to check if the user want to continue the game
  
response=confirm("Press ok to continue, press cancel to exit a game"); //pop out the window asking user if continue
  
    if(response==true){ // if continue 
    arrayOfAlienShips.shift(); //remove first alien ship in array
    startGame(); // run startGame function
    }

    else if (response===false){ // if user choose to exit game
        alert("You ended the game"); // window pop up 
        return; //exit function
    }

}






