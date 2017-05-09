import { Component, OnInit } from '@angular/core';
import { routing } from '../app.routing';
import { ActivatedRoute, Params } from '@angular/router';
import {Tile} from '../tile.model';
import {TilesService} from '../tiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {
  tileCoordinate: string;
  tile: Tile;
  directions: string [];
  headingToCoordinate: string;

  constructor(private tileService: TilesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters)=>{
      this.tileCoordinate =urlParameters ['id'];
      this.tileService.getThisTile(this.tileCoordinate).subscribe((tile)=>{
        this.tile=tile[0];
        this.directions = this.tile.directions;
          });
    });

  }

  exploreSurroundings(direction){
    if (direction ==="East"){
      this.headingToCoordinate = (parseInt(this.tileCoordinate)+10).toString();
      this.router.navigate(['tiles',this.headingToCoordinate]);
    }

  }

}
