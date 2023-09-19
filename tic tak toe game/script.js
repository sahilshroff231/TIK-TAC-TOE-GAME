console.log("welcome to Tic Tac Toe")
let music = new Audio("audio/audio2.mp3.mpeg")
let audioturn = new Audio("audio/audio3.mp3.mpeg")
let  gameover = new Audio("audio/audio1.mp3.mpeg")
let turn = "X" 
let gameoverr = false;

 const changeTurn =()=>{
    return turn === "X"? "0": "X"
 }

 const checkWin = ()=>{
    let textbox = document.getElementsByClassName('textbox');
    let wins =[
        
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],

    ]
    wins.forEach(e =>{

        if ((textbox[e[0]].innerText === textbox[e[1]].innerText) &&(textbox[e[2 ]].innerText === textbox[e[1]].innerText) && (textbox[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = textbox[e[0]].innerText +" "+ "won"
            gameoverr = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "236px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}
 //game logic
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let textbox = element.querySelector('.textbox');
    element.addEventListener('click', ()=>{
        if(textbox.innerText === ''){
            textbox.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!gameoverr){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    }
    })
 })


 //add onclick on reset button

 reset.addEventListener('click', ()=>{
    let textboxs =document.querySelectorAll('.textbox');
    Array.from(textboxs).forEach(element => {
        element.innerText =""
    });
      turn = "X";
      gameoverr = false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        document.querySelector(".line").style.width = "0";
 })