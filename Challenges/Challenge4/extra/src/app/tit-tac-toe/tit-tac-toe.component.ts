import { Node } from '@angular/compiler';
import { Component, OnInit, ViewChild, ViewChildren, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-tit-tac-toe',
  templateUrl: './tit-tac-toe.component.html',
  styleUrls: ['./tit-tac-toe.component.css']
})
export class TitTacToeComponent implements OnInit {

  public commentList: any = [];
  public messagesDuringMatch: any =[];
  public messagesAfterLoss: any =[];
  public messagesAfterDraw: any =[];
  public bobMessage!: string; 
  randomComment(): string {
    return this.messagesDuringMatch.sort(() => Math.random() - 0.5)[0].comment;
  }

  // random comment after a loss
  randomCommentL(): string {
    return this.messagesAfterLoss.sort(() => Math.random() - 0.5)[0].comment;
  }
  // random comment after a draw
  randomCommentD(): string {
    return this.messagesAfterDraw.sort(() => Math.random() - 0.5)[0].comment;
  }

  constructor(private api: ApiService) {
  }
  public disableClick: boolean = false;  // disable or able the click event

  ngOnInit(): void {
  //  this.api.getMatchComments().subscribe(
  //    (data: any) => {
  //      data.sort(() => Math.random() - 0.5)
  //      this.commentList = data;
  //    }
 //   )
    
     this.api.apiDuringMatch().subscribe(
      (data:any) => {
        this.messagesDuringMatch = data;
        console.log(this.messagesDuringMatch);
      }
     ) 
     this.api.apiAfterDraw().subscribe(
      (data:any) => { 
        this.messagesAfterDraw = data;
        console.log(this.messagesAfterDraw);
      }
     )
     this.api.apiAfterLoss().subscribe(
      (data:any)=>{
        this.messagesAfterLoss = data;
        console.log(this.messagesAfterLoss);
      }
     )
      

    this.startGame()
  }


  public origBoard: any;   // array keeps track in each square the tic-tac-toe board, 
  //if it's and X or it's an O or nothing

  public huPlayer = 'O';   // Variable of Human Player O
  public aiPlayer = 'X';   // Variable of Artificial Player O

  public winCombos: any = [  // Array contains all winner combinations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

  public cells!: NodeListOf<any>;


  startGame(): void {// it starts ad the beginning when the component is loaded or when you user press button Replay
    this.disableClick = false;
    this.cells = document.querySelectorAll('.cell') as NodeListOf<any>;
    let el = document.querySelector('.endgame') as HTMLElement | null;
    el!.style.display = 'none';
    this.origBoard = Array.from(Array(9).keys()) // make an array of number from 0 to 8  [0, 1, 2, 3, 4, 5, 6, 7, 8]

    // Whenever whe restart the game we want to remove all O and X from all board
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].innerText = '';
      this.cells[i].style.removeProperty('background-color');
      // this.cells[i].addEventListner('click', this.turnClick, false)  // every time we click each cell we call tunnClick function
    }

  }

  turnClick(square: MouseEvent): void { // each cells has click event
    // console.log(+(square.target as HTMLElement).id)
    if (typeof this.origBoard[(square.target as HTMLElement).id] === 'number') {
      this.turn((square.target as HTMLElement).id, this.huPlayer) // this funcion can be called by human player or AI player
      //Before aiPlayer takes turn we need to check if it is tie
      if (!this.checkTie()) {// this means that every square is full and nobody has won yet

        setTimeout(() => {
          this.bobMessage= this.randomComment();
          this.turn(this.bestSpot(), this.aiPlayer)
        }, 300)
      }
    }
  }


  turn(squareId: string, player: string): void { // draw and turn the turn
    this.origBoard[squareId] = player; // memorize in the array the draw in the border cell
    (document.getElementById(squareId) as HTMLElement | null)!.innerText = player;
    let gameWon = this.checkWin(this.origBoard, player)  // function that checks the winner
    if (gameWon) {
      this.gameOver(gameWon)
    }
    console.log(this.origBoard)

  }


  checkWin(board: any, player: string): any {
    let plays = board.reduce((a: any, e: any, i: number) =>  // it creates a new array and accumulate the value drawn by user
      (e === player) ? a.concat(i) : a, [])

    let gameWon = null;

    //We need to check if the the game is won
    for (let [index, win] of this.winCombos.entries()) {
      if (win.every((elem: any) => plays.indexOf(elem) > -1)) {// has the player played in every spots that counts as a win for that win 
        // console.log(plays);
        gameWon = { index: index, player: player } // example {index: 1; player: 'O'}

        break;
      }
    }
    return gameWon;
  }

  gameOver(gameWon: any): void {
    for (let index of this.winCombos[gameWon.index]) {
      (document.getElementById(index) as HTMLElement | null)!.style.backgroundColor =
        gameWon.player == this.huPlayer ? 'blue' : 'red';
    }
    this.declareWinner(gameWon.player === this.huPlayer ? "You win!" : "You lose.");
    this.disableClick = true;

    setTimeout(() => {
      this.bobMessage= this.randomCommentL();
    }, 500)

  }



  declareWinner(who: string) {
    (document.querySelector(".endgame") as HTMLElement | null)!.style.display = "block";
    (document.querySelector(".endgame .text") as HTMLElement | null)!.innerText = who;
  }


  // return array of empty spot
  emptySquares() {
    return this.origBoard.filter((s: any) => typeof s == 'number');
  }

  bestSpot() {
    
    return this.minimax(this.origBoard, this.aiPlayer).index;
  }

  // check empty spot and therefore if it is tie
  checkTie() {
    if (this.emptySquares().length === 0) {
      for (var i = 0; i < this.cells.length; i++) {
        this.cells[i].style.backgroundColor = "green";
        // this.cells[i].removeEventListener('click', turnClick, false);
        this.disableClick = true;
      }

      this.declareWinner("Tie Game!")

      setTimeout(() => {
        this.bobMessage= this.randomCommentD();
      }, 300)
      return true;
    }

    return false;
  }


  // minimax algorithm
  minimax(newBoard: any, player: string): any {
    let availSpots = this.emptySquares();

    if (this.checkWin(newBoard, this.huPlayer)) {
      return { score: -10 };
    } else if (this.checkWin(newBoard, this.aiPlayer)) {
      return { score: 10 };
    } else if (availSpots.length === 0) {
      return { score: 0 };
    }
    let moves = [];
    for (let i = 0; i < availSpots.length; i++) {
      let move: any = {};

      move.index = newBoard[availSpots[i]];
      newBoard[availSpots[i]] = player;

      if (player === this.aiPlayer) {
        let result = this.minimax(newBoard, this.huPlayer);
        move.score = result.score;
      } else {
        var result = this.minimax(newBoard, this.aiPlayer);
        move.score = result.score;
      }

      newBoard[availSpots[i]] = move.index;

      moves.push(move);
    }

    let bestMove: any;
    if (player === this.aiPlayer) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  }

}
