import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist';
import * as fromPlaylistReducer from '../store/playlist.reducer';
import * as fromPlaylistActions from "../store/playlist.actions";
import { getSongLike } from '../store/playlist.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { distinct, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

 public favorite$: Observable<Playlist[]>;

  constructor(
    private store: Store<fromPlaylistReducer.PlaylistState>,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.favorite$ = this.store.pipe(
      distinctUntilChanged(),
      select(getSongLike),
      )
        console.log( this.favorite$);
  }

  openSnackBar() {
    this._snackBar.open('Removed from the list of songs you liked', '', {
      duration: 5000,
    });
  }

  removeSong(song: Playlist) {
    this.store.dispatch(fromPlaylistActions.removeSongFavorite({ id:song.id }));
    this.openSnackBar();
  }
}
