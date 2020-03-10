console.log("WELCOME TO SPACE BATTLE")
class Aliens{
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
 
class USSSchwarzeneggerShip{
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

function getRandomValue(minVal, maxVal){ //returns random value for alien ships
    if(minVal>1 && maxVal > 1){
        return Math.floor(Math.random()*(maxVal-minVal+1)+minVal);
 
}
    else{
       let num=Math.random()*(maxVal-minVal+0.01)+minVal;
       return num.toFixed(2);
    }
}

let firstAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let secondAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let thirdAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let fourthAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let fifthAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let sixthAlienShip=new Aliens(getRandomValue(3,6),getRandomValue(2,4),getRandomValue(0.6,0.8));
let battleShip=new USSSchwarzeneggerShip();

let arrayOfAlienShips=[firstAlienShip,secondAlienShip,thirdAlienShip,fourthAlienShip,fifthAlienShip,sixthAlienShip];
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
    if(arrayOfAlienShips.length==0 || response==false){
        return;
    }
  
    battleShipHitTurn=accuracyNumber();  
    console.log("Battle Ship accuracy "+battleShip.accuracy +", hit chance "+battleShipHitTurn + " and hull is "+battleShip.hull);
    console.log(`Current alienship's hull is ${arrayOfAlienShips[0].hull} and firepower is ${arrayOfAlienShips[0].firepower}`)
        
        if(battleShipHitTurn<=battleShip.accuracy){
            arrayOfAlienShips[0].reduceHitpoints();
                if(arrayOfAlienShips[0].hull>0){
                   console.log("%c You hit alienship","color:#11B3CD");
                    alienShipTurn(); 
                }
        else if(arrayOfAlienShips[0].hull<=0){
                console.log("%c Alien ship was destroyed","color:#FC512D");
                cont();
                return;
                } 
        }
        else{
        console.log("%c You miss alien ship","color:#17C111");
            alienShipTurn();
    }
    }


function alienShipTurn(){
    if(arrayOfAlienShips.length==0 || response==false){

        return;
    }
    
        alienShipHitTurn=accuracyNumber();   
        console.log("Alien hit accurancy :"+alienShipHitTurn + "Alien ship accuracy: " + arrayOfAlienShips[0].accuracy + " Alien ship hull: "+arrayOfAlienShips[0].hull);
    if(alienShipHitTurn<=arrayOfAlienShips[0].accuracy)
    {
        battleShip.reduceHitpoints(arrayOfAlienShips[0].firepower);
            if (battleShip.hull<=0){
                console.log("%c Battle ship is destroyed","color:#FC512D");
                alert("You loose!");
                return;
            } 
            else{
                console.log("%c You hit battle ship","color:#11B3CD")
            battleShipTurn();  
            }         
    }
    else{
        console.log("%c You miss battleship","color:#17C111");
        battleShipTurn();
    }
}

function startGame(){

    if(arrayOfAlienShips.length==0){
        alert("You win!");
        return;
    }

    battleShipTurn();
    alienShipTurn();
}

function refresh(){
    location.reload()
}

function cont(){
  
response=confirm("Press ok to continue, press cancel to exit a game");
  
    if(response==true){
    arrayOfAlienShips.shift();
    startGame(); 
    }

    else if (response===false){
        alert("You ended the game");
        return;
    }

}






