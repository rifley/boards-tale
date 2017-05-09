import { Injectable } from '@angular/core';
import {Tile} from './tile.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class TilesService {
  tiles: FirebaseListObservable<any []>;


  constructor(private database: AngularFireDatabase) {
    this.tiles = database.list('/tiles');
  }

  getAllTiles () {
    return this.tiles;
  }

  getThisTile (coordinate){
    const queryOneTile = this.database.list('/tiles', {
      query: {
        orderByChild: 'coordinates',
        equalTo: coordinate
      }
    });
    return queryOneTile;
  }


}
