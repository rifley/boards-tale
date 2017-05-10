import { Injectable } from '@angular/core';
import {Tile} from './tile.model';
import{Player} from './player.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class TilesService {
  tiles: FirebaseListObservable<any []>;
  player: FirebaseListObservable<any []>;


  constructor(private database: AngularFireDatabase) {
    this.tiles = database.list('/tiles');
    this.player = database.list('/player');
  }

  addPlayer(newPlayer:Player){
    this.player.push(newPlayer);
  }

  getAllTiles () {
    return this.tiles;
  }

  deleteAllPlayers() {
    this.player.remove();
  }

  getPlayer (){
    return this.database.object('player/');
  }


  getPlayerByID (playerDBId){
    return this.database.object('player/'+playerDBId);
  }

  updatePlayer(updatedPlayer, playerDBId){
    var playerInFirebase = this.getPlayerByID(playerDBId);

    console.log(playerInFirebase);
    playerInFirebase.update({name: updatedPlayer.name,
                              hp: updatedPlayer.hp,
                              score: updatedPlayer.score});
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
