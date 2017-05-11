import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routing } from '../app.routing';
import { ActivatedRoute, Params } from '@angular/router';
import {Tile} from '../tile.model';
import {TilesService} from '../tiles.service';
import { Router } from '@angular/router';
import {Player} from '../player.model';
import {EventPopUpComponent} from '../event-pop-up/event-pop-up.component'

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
  playerDBId: string;
  currentEvent: any;
  didItHappen: boolean;
  eventResolved: boolean = false;

  constructor(private tileService: TilesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters)=>{
      this.searchString =urlParameters ['id'];
      //setting all tile attributes
     this.tileService.getTileByName(this.searchString).subscribe((tile)=>{
        this.tile=tile[0];
        this.currentEvent = this.tile.events;
        this.tileCoordinate = this.tile.xyString;
        this.directions = this.tile.directions;
        this.didItHappen = this.tile.didItHappen;

// getting player informaiton
        var getPlayerSubscribe = this.tileService.getPlayer().subscribe((player)=>{
        this.currentPlayer = player[0];
        this.eventResolved = false;
      });
    });
    });
  }

checkEvent (){

  if(this.currentEvent.hpChange !== undefined){
  this.currentPlayer.hp = this.currentPlayer.hp + this.currentEvent.hpChange;
  this.tileService.updatePlayer(this.currentPlayer);
  this.tileService.eventHappened(this.tile);
  this.eventResolved = true;
  }

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
      this.exploreHelper(1);
    }
    if (direction ==="South"){
      this.exploreHelper(-1);
    }
  }
}
