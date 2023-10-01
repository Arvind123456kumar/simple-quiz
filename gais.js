let cont=new promise
const prompt=require("prompt-sync")();
let a=Math.random()*100;
a=Number.parseInt(a);
let gus;
let score=0;
while(gus!=a){
    score=score+1;
    gus=prompt("enter your gaised number : ");
    if(gus==a){
        console.log(" you gaised right number "+gus +"\nyou gai numbber in "+score+" chance")
    }
    else if(gus>a){
        console.log("gaised number is greatter random number")
        
    }
    else if(gus<a){
        console.log("gaised is less than random number")
    }
    else{
        console.log("Please enter number 1 to 100 ")
    }
}