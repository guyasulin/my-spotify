import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Playlist } from '../models/playlist';
import { PlaylistService } from '../services/playlist.service';
import * as fromPlaylistReducer from '../store/playlist.reducer';
import * as fromPlaylistActions from "../store/playlist.actions";
import { getShowSongLiked } from './../store/playlist.selectors';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-playlist-tracks',
	templateUrl: './playlist-tracks.component.html',
	styleUrls: [ './playlist-tracks.component.scss' ]
})
export class PlaylistTracksComponent implements OnInit, OnDestroy {
	public tracks$: Observable<Playlist>;
	public tracks: Playlist;
  public displayCode: boolean;
  public isNoFavorit:boolean;
  public isFavorit:boolean;
  public takeUntil$: Subject<boolean> = new Subject<boolean>();
  
  public componentActive = true;
  public selectedSong: Playlist | null;

	constructor(
		public playlistService: PlaylistService,
		private route: ActivatedRoute,
    private store: Store<fromPlaylistReducer.PlaylistState>,
    private _snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		const playlistId = this.route.snapshot.paramMap.get('id');

    this.playlistService.getPlaylistByTracksId(playlistId).pipe(
      takeUntil(this.takeUntil$)
    )
    .subscribe((res) => {
      this.tracks = res.items;
    });
    


    // this.store.pipe(
    //   select(getCurrentSong), 
    //   takeWhile(() => this.componentActive)
    // ).subscribe(
    //   currentSong => {
    //     this.selectedSong = currentSong
    //     // console.log("selectedSong", this.selectedSong);
    //   }
    // );

    this.store.pipe(
      select(getShowSongLiked),
      takeWhile(() => this.componentActive)
    ).subscribe(
      showProductCode => {
        this.displayCode = showProductCode
      }
      
    );
	}
  
  openSnackBar() {
    this._snackBar.open('Added to your favorite song list', '', {
      duration: 5000,
    });
  }

	addToFavorits(song: Playlist): void {
    this.store.dispatch(fromPlaylistActions.addSongToLikesong({ song } ))
    this. openSnackBar()
  }
  
  addToPlaylit(playlist: Playlist){
    console.log(playlist);
  }

  removeFromFavorits(song: Playlist): void {
    // this.store.dispatch(fromPlaylistActions.removeSongFavorite({ song } ))
  }
  
  ngOnDestroy() {
    this.takeUntil$.next();
    this.takeUntil$.complete();
  }
}
