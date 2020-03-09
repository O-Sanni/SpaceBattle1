

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

function getRandomValue(minVal, maxVal){
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
console.log(arrayOfAlienShips);
let response;
let battleShipHitTurn;
let alienShipHitTurn;

function accuracyNumber(){
    let accuracyNum=Math.random();
    return accuracyNum.toFixed(2);
}

function battleShipTurn(){
    battleShipHitTurn=accuracyNumber();  
    console.log("Battle Ship accurecy "+battleShip.accuracy +"Hit chance "+battleShipHitTurn);
    console.log(`Alienship's hull ${arrayOfAlienShips[0].hull}`)
        
        if(battleShipHitTurn<=battleShip.accuracy){
            arrayOfAlienShips[0].reduceHitpoints();
                if(arrayOfAlienShips[0].hull>0){
                   console.log("you hit alienship");
                    alienShipTurn(); 
                }
        else if(arrayOfAlienShips[0].hull<=0){
                console.log("alien ship was destroyed");
                cont();
                return;
                } 
        }
        else{
        console.log("you miss alien ship");
            alienShipTurn();
    }
    }


function alienShipTurn(){
        alienShipHitTurn=accuracyNumber();   
        console.log("Alien Hit accurancy :"+alienShipHitTurn + "Alien ship accurency " + arrayOfAlienShips[0].accuracy);
    if(alienShipHitTurn<=arrayOfAlienShips[0].accuracy)
    {
        battleShip.reduceHitpoints(arrayOfAlienShips[0].firepower);
            if (battleShip.hull<=0){
                console.log("Battle ship is destroyed");
                console.log("You loose!");
                return;
            } 
            else{
                console.log("you hit battle ship")
            battleShipTurn();  
            }         
    }
    else{
        console.log("you miss battleShip");
        battleShipTurn();
    }
}


function startGame()
{if(arrayOfAlienShips.length==0){
    console.log("You win!")
        return;
    }
    console.log(arrayOfAlienShips);
    console.log(battleShip.hull);
    console.log(arrayOfAlienShips[0].hull);

    battleShipTurn();
    alienShipTurn();
}



function cont(){
    
response=confirm("Press ok to continue, press cancel to exit a game");
    
    if(response==true){
    arrayOfAlienShips.shift();
    startGame(); 
    }
    else{
        console.log("you ended the game");
        response=false;    
    }

}

 





