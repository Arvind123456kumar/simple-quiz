const prompt=require("prompt-sync")();
let score=0;
let score1=0;
    let rand1=Math.floor(Math.random(0,1,2)*3);      
let rand=["Snack","Water","Gun"][rand1]

const match=(rand, user)=>{
if(rand===user){
    return "Nobody ";
}
else if(rand==="Snack" && user==="Water"){
    return "Computer";
}
else if(rand==="Snack" && user==="Gun")
{
return "You";
}
else if(rand==="Gun" && user==="Water"){
    return "You";
}
else if(rand==="Gun" && user==="Snack"){
    return "Computer";
}
else if(rand==="Water" && user==="Gun"){
    return "Computer";
}
else if(rand==="Water"&&user==="Snack"){
    return "You";
}
}
for(let i=0;i<10;i++){
    user=prompt("enter Snack Water or Gun ");
    // user=prompt("enter Snack Water or Gun ",user); 

    let result=match(rand,user); 
if(user==="Snack"||user==="Gun"||user==="Water"){
console.log(`\nComputer Select:${rand} \nYou Select :${user}\nWinner :${result}\n`);
}
else{
   console.log("\nplease select only Snack Water or Gun "+"\n"+"Yet you select :"+ user+"\n")
}
if(result==="You"){
 score++;  
}
else if(result==="Computer"){  
    score1++;
}
}
console.log("\nYou Win : "+score+" Times");
console.log("\ncomputer Win : "+score1+" Times");  