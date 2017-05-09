import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { routing } from '../app.routing';


@Component({
  selector: 'app-new-player-start',
  templateUrl: './new-player-start.component.html',
  styleUrls: ['./new-player-start.component.css']
})
export class NewPlayerStartComponent implements OnInit {

  title: string = "A Boards Tale"
  playerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name:'',
    })
  }

  startGame(){
    var newPlayer: Player = new Player (this.playerForm.value.name);
    localStorage.setItem('newPlayer', JSON.stringify({name: newPlayer.name}));
    var reloadPlayer = JSON.parse(localStorage.getItem('newPlayer'));
    this.playerForm.reset();
  }

}
