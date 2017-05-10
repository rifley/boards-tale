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

  getTileByName (name){
    const queryOneTile = this.database.list('/tiles', {
      query: {
        orderByChild: 'title',
        equalTo: name
      }
    });

    return queryOneTile;
  }

  getTileByCoordinate(coordinate){
    const queryOneTile = this.database.list('/tiles', {
      query: {
        orderByChild: 'xyString',
        equalTo: coordinate
      }
    });
    return queryOneTile;
  }


}
