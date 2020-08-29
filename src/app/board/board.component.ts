import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  square = [];
  isX = true;
  winner=null;

  // this will call the newGame fuctions to Intiazlie
  // the game board.
  ngOnInit(): void {
    this.newGame();
  }

  // This will set all the intial values of setup.
  newGame(){
    for(let i=0; i<9; ++i) this.square[i] = null
    this.isX = true;
    this.winner = null;
    console.log("new game trigged");
  }

  // Will return the current player playing
  whichPlayer(){
    return this.isX?'X':'O';
  }

  // This will keep track of the event clicks
  eventReg(pos){
    if(!this.square[pos]){
      this.square[pos]=this.whichPlayer();
      this.checkWinner(this.whichPlayer());
      this.isX = !this.isX;
    }
  }

  checkWinner(value){
    
  }

}
