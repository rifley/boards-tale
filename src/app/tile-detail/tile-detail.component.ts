import { Component, OnInit } from '@angular/core';
import { routing } from '../app.routing';
import { ActivatedRoute, Params } from '@angular/router';
import {Tile} from '../tile.model';
import {TilesService} from '../tiles.service';
import { Router } from '@angular/router';
import {Player} from '../player.model';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {
  searchString: string;
  tileCoordinate: string;
  tile: Tile;
  directions: string [];
  headingToCoordinate: string;
  currentPlayer: Player;
  currentEvent: any;

  constructor(private tileService: TilesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters)=>{
      this.searchString =urlParameters ['id'];
      this.tileService.getTileByName(this.searchString).subscribe((tile)=>{
        this.tile=tile[0];
        this.tileCoordinate = this.tile.xyString;
        this.directions = this.tile.directions;
        this.currentPlayer= JSON.parse(localStorage.getItem('newPlayer')).newPlayer;
        this.currentEvent = this.tile.events;
          });
    });
  }

  exploreHelper (value){
    this.headingToCoordinate = (parseInt(this.tileCoordinate)+value).toString();
    this.tileService.getTileByCoordinate(this.headingToCoordinate).subscribe((tile)=>{
    this.router.navigate(['tiles',tile[0].title]);
    })
  }

  exploreSurroundings(direction){
    if (direction ==="East"){
      this.exploreHelper(10);
    }
    if (direction ==="West"){
      this.exploreHelper(-10);
    }
    if (direction ==="North"){
      this.exploreHelper(-1);
    }
    if (direction ==="South"){
      this.exploreHelper(1);
    }
  }
}
