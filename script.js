document.getElementById('rock').addEventListener('click',updatedisplay);
document.getElementById('paper').addEventListener('click',updatedisplay);
document.getElementById('scissors').addEventListener('click',updatedisplay);
let c,c_count=0;
let u,u_count=0;
function updatedisplay(){
       if (document.getElementById('rock').checked) {
        document.getElementById('UserCard').innerHTML = 'rock🪨';
        u='rock';
      } else if (document.getElementById('paper').checked) {
        document.getElementById('UserCard').innerHTML = 'paper📰';
        u='paper';
      } else if (document.getElementById('scissors').checked) {
        document.getElementById('UserCard').innerHTML = 'scissors✂️';
        u='scissors';
       }
     }
     
function compDisplay(){
    let n;
    n=Math.floor(Math.random()*2);
    if(n==0){
        document.getElementById('CompCard').innerHTML = 'rock🪨';
        c='rock';
    }
    else if(n==1){
        document.getElementById('CompCard').innerHTML = 'paper📰';
        c='paper';
    }
    else if(n==3){
        document.getElementById('CompCard').innerHTML = 'scissor✂️';
        c='scissors';
    }
    
    
}
function win(){
    if(u==c){
        document.getElementById('win').innerHTML = 'DRAW';
    }
    else if((u=='paper' && c=='rock')||(u=='rock' && c=='scissors')||(u=='scissors' && c=='paper')){
        document.getElementById('win').innerHTML = 'YOU WIN';
        u_count=u_count+1;
    }
    else{
    document.getElementById('win').innerHTML = 'COMP WINS';
    c_count=c_count+1;
    }
}




function tableDispaly(){
        document.getElementById('userScore').innerHTML = u_count;
        document.getElementById('compScore').innerHTML = c_count;
}

document.getElementById('rock').addEventListener('click', function() {
    updatedisplay();
    compDisplay();
    win();
    tableDispaly();
  });
  
  document.getElementById('paper').addEventListener('click', function() {
    updatedisplay();
    compDisplay();
    win();
    tableDispaly();
  });
  
  document.getElementById('scissors').addEventListener('click', function() {
    updatedisplay();
    compDisplay();
    win();
    tableDispaly();
  });
  //combine event listners to generate after every button click
 
  
  // Initial call to display the user's choice
 // updatedisplay();



















;


