const cellA0 = document.getElementById("cellA0")
const cellA1 = document.getElementById("cellA1")
const cellA2 = document.getElementById("cellA2")
const cellB0 = document.getElementById("cellB0")
const cellB1 = document.getElementById("cellB1")
const cellB2 = document.getElementById("cellB2")
const cellC0 = document.getElementById("cellC0")
const cellC1 = document.getElementById("cellC1")
const cellC2 = document.getElementById("cellC2")

const A = []
const B = []
const C = []

let player1 = true
let player2 = false

function verify(value) {
    value = value.split('')
    let array = value[0]
    let position = parseInt(value[1])
    if (array === 'A') {
        if (position === 0) {
            let h2 = cellA0.children[0]
            verifyH2Element(h2,array,position)
        }
        if (position === 1) {
            let h2 = cellA1.children[0]
            verifyH2Element(h2,array,position)
        }
        if (position === 2) {
            let h2 = cellA2.children[0]
            verifyH2Element(h2,array,position)
        }
    }
    if (array === 'B') {
        if (position === 0) {
            let h2 = cellB0.children[0]
            verifyH2Element(h2,array,position)
        }
        if (position === 1) {
            let h2 = cellB1.children[0]
            verifyH2Element(h2,array,position)
        }
        if (position === 2) {
            let h2 = cellB2.children[0]
            verifyH2Element(h2,array,position)
        }
    }
    if (array === 'C') {
        if (position === 0) {
            let h2 = cellC0.children[0]
            verifyH2Element(h2,array,position)
        }
        if (position === 1) {
            let h2 = cellC1.children[0]
            verifyH2Element(h2,array,position)
        }
        if (position === 2) {
            let h2 = cellC2.children[0]
            verifyH2Element(h2,array,position)
        }
    }
}

function verifyH2Element(h2,array,position) {
    if(h2.innerHTML === '') {
        if (player1) {
            addX(h2,array,position)
        }else  {
           addO(h2,array,position)
        }
    }
}

function addX(h2,array,position) {
    h2.innerHTML="X"
   // h2.classList.add('red')
    h2.style.color = "red";
    if(array==='A') {
        A[position] = 'X'
    }
    if (array==='B') {
        B[position] = 'X'
    }
    if (array==='C') {
        C[position] = 'X'
    }
    //checkWinner()
    player1 = false
    player2 = true
    setTimeout(checkWinner, 1000);
}

function addO(h2,array,position) {
    h2.innerHTML="O"
    //h2.classList.add('blue')
    h2.style.color = "blue";
    if(array==='A') {
        A[position] = 'O'
    }
    if (array==='B') {
        B[position] = 'O'
    }
    if (array==='C') {
        C[position] = 'O'
    }
    
    player2 = false
    player1 = true
    setTimeout(checkWinner, 1000);
}

function checkWinner() {
    if ( 
        (( (A[0] == A[1]) & ( A[0]== A[2]) & ( (A[0]!= undefined) & (A[1] != undefined) & (A[2] != undefined)))) ||
        (( (B[0] == B[1]) & ( B[0]== B[2]) & ( (B[0]!= undefined) & (B[1] != undefined) & (B[2] != undefined)))) || 
        (( (C[0] == C[1]) & ( C[0]== C[2]) & ( (C[0]!= undefined) & (C[1] != undefined) & (C[2] != undefined)))) ||

        (( (A[0] == B[1]) & (A[0])== C[2]  & ( (A[0]!= undefined) & (B[1] != undefined) & (C[2] != undefined)))) || 

        (( (C[0] == B[1]) & (C[0])== A[2]  & ( (C[0]!= undefined) & (B[1] != undefined) & (A[2] != undefined)))) || 

        (( (A[1] == B[1]) & (A[1]== C[1])  & ( (A[1]!= undefined) & (B[1] != undefined) & (C[1] != undefined)))) ||
        (( (A[2] == B[2]) & (A[2]== C[2])  & ( (A[2]!= undefined) & (B[2] != undefined) & (C[2] != undefined)))) ||
        (( (A[0] == B[0]) & (A[0]== C[0])  & ( (A[0]!= undefined) & (B[0] != undefined) & (C[0] != undefined)))) 
    ){
       if (player1) {
           alert("The Player O Won")
           scores('O')
           cleanBoard()
       }else {
           alert("The Player X Won") 
           scores('X')
           cleanBoard()
       }
    }

    if ( 
        (A[0] != undefined) & (A[1] != undefined) & (A[2] != undefined) &
        (B[0] != undefined) & (B[1] != undefined) & (B[2] != undefined) &
        (C[0] != undefined) & (C[1] != undefined) & (C[2] != undefined)
        ) {
        alert("It's a Draw")
        scores('Draw')
        cleanBoard()
    }
}

function cleanBoard() {
    var value = document.getElementsByClassName('value');
    for (var i=0; value[i]; i++) {
        value [i].innerHTML =null;
        A[i] = null
        B[i] = null
        C[i] = null
    }
}

function scores(player) {
    let X = document.getElementById('pointsX')
    let O = document.getElementById('pointsO')
    let Draw = document.getElementById('pointsDraw')

    let pointsX = parseInt(X.innerHTML)
    let pointsO = parseInt(O.innerHTML)
    let pointsDraw = parseInt(Draw.innerHTML)

    if (player === 'X') {
        X.innerHTML = pointsX + 1
    }
    if (player == 'O') {
        O.innerHTML = pointsO + 1
    }
    if (player == 'Draw') {
        Draw.innerHTML = pointsDraw + 1
    }
 }

cellA0.onclick = () => verify(value = 'A0')
cellA1.onclick = () => verify(value = 'A1')
cellA2.onclick = () => verify(value = 'A2')
cellB0.onclick = () => verify(value = 'B0')
cellB1.onclick = () => verify(value = 'B1')
cellB2.onclick = () => verify(value = 'B2')
cellC0.onclick = () => verify(value = 'C0')
cellC1.onclick = () => verify(value = 'C1')
cellC2.onclick = () => verify(value = 'C2')