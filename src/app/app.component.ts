import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromPlaylistReducer from "../app/playlist/store/playlist.reducer";
import * as fromPlaylistActions from "../app/playlist/store/playlist.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-spotify';

  constructor(private store: Store<fromPlaylistReducer.PlaylistState> ) { }
  
  ngOnInit(): void {
    this.store.dispatch(fromPlaylistActions.loadCategories())
  }
}