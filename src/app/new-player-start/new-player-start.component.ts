import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { routing } from '../app.routing';
import { Router } from '@angular/router';
import {Tile} from '../tile.model';
import {TilesService} from '../tiles.service';

@Component({
  selector: 'app-new-player-start',
  templateUrl: './new-player-start.component.html',
  styleUrls: ['./new-player-start.component.css']
})
export class NewPlayerStartComponent implements OnInit {

  title: string = "A Boards Tale"
  playerForm: FormGroup;
  tiles: Tile [];

  constructor(private tileService: TilesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.playerForm = this.fb.group({
      name:'',
    });
    this.tileService.deleteAllPlayers();
    var resetTiles = this.tileService.getAllTiles().subscribe((tiles) => {
         this.tiles=tiles;
         resetTiles.unsubscribe();
     });
}

  startGame(){
    this.tiles.map((tile)=>{
      this.tileService.resetTile(tile);
    });
    var newPlayer: Player = new Player (this.playerForm.value.name);
    this.tileService.addPlayer(newPlayer);
    this.playerForm.reset();
    this.router.navigate(['tiles', 'Home']);
  }

}
