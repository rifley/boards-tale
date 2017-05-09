import { Injectable } from '@angular/core';
import {Tile} from './tile.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class TilesService {
  tiles: FirebaseListObservable<any []>;


  constructor(private database: AngularFireDatabase) {
    this.tiles = database.list('tiles');
    console.log(this.tiles);
  }

}
