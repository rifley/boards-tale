import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { routing } from '../app.routing';
import { Router } from '@angular/router';
import {TilesService} from '../tiles.service';

@Component({
  selector: 'app-new-player-start',
  templateUrl: './new-player-start.component.html',
  styleUrls: ['./new-player-start.component.css']
})
export class NewPlayerStartComponent implements OnInit {

  title: string = "A Boards Tale"
  playerForm: FormGroup;

  constructor(private tileService: TilesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name:'',
    });
    this.tileService.deleteAllPlayers();
  }

  startGame(){
    var newPlayer: Player = new Player (this.playerForm.value.name);
    console.log(newPlayer);
    this.tileService.addPlayer(newPlayer);
    this.playerForm.reset();
    this.router.navigate(['tiles', 'Home']);
  }

  // startGame(){
  //   var newPlayer: Player = new Player (this.playerForm.value.name);
  //   localStorage.setItem('newPlayer', JSON.stringify({newPlayer}));
  //   this.playerForm.reset();
  //   this.router.navigate(['tiles', 'Home']);
  //
  // }

}
