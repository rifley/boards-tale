import { Injectable } from '@angular/core';
import {Tile} from './tile.model';
import{Player} from './player.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class TilesService {
  tiles: FirebaseListObservable<any []>;
  player: FirebaseListObservable<any>;


  constructor(private database: AngularFireDatabase) {
    this.tiles = database.list('/tiles');
    this.player = database.list('/player');
  }

  addPlayer(newPlayer:Player){
    this.player.push(newPlayer);
  }

  deleteAllPlayers() {
    this.player.remove();
  }

  getPlayer (){
    return this.player;
  }


  getPlayerByID (playerDBId){
    return this.database.object('player/'+playerDBId);
  }

  updatePlayer(updatedPlayer){
    var playerInFirebase = this.getPlayerByID(updatedPlayer.$key);
    playerInFirebase.update({hp: updatedPlayer.hp,});
  }

  eventHappened (tile) {
    var tileToChange = this.getTileByID(tile.$key);
    tileToChange.update({didItHappen: true,});
  }

  getAllTiles () {
    return this.tiles;
  }

  getTileByID (tileKey){
    return this.database.object('tiles/'+tileKey);
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
