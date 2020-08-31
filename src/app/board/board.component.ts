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
  clickCount = 0

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
    this.clickCount=0;
  }

  // Will return the current player playing
  whichPlayer(){
    return this.isX?'X':'O';
  }

  // This will keep track of the event clicks
  eventReg(pos){
    if(!this.square[pos] && !this.winner){
      ++this.clickCount;
      this.square[pos]=this.whichPlayer();
      if(this.clickCount>4)
        this.checkWinner(this.whichPlayer());
      this.isX = !this.isX;
    }
  }

  // this will check the winner of game. ( program Logic )
  checkWinner(value){
    let sucess = 
    [ 
      [0,1,2],[3,4,5],[6,7,8],[0,4,8],
      [0,3,6],[1,4,7],[2,5,8],[6,4,2]
    ]
    for(let i=0;i<sucess.length;++i){
      let [a,b,c] = sucess[i];
      if(this.square[a]== value && this.square[b]==value && this.square[c]==value)
        this.winner = value;
    }
  }

}
