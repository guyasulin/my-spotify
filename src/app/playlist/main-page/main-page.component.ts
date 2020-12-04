import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist';
import * as fromPlaylistReducer from "../store/playlist.reducer";
import { select, Store } from '@ngrx/store';
import { getCategories } from '../store/playlist.selectors';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public categories$: Observable<Playlist[]>;
  public showData: boolean = true;
  textValue: string = '';


  constructor(
    private store: Store<fromPlaylistReducer.PlaylistState>,
    public playlistService:PlaylistService) { }

  ngOnInit(): void {
    this.getCategories(); 
  }

  showResults(textValue){
    if (textValue == 0) {
      this.showData = true
    } else {
      this.showData = false
    }
  }

  getCategories() {
      this.categories$ = this.store.pipe(select(getCategories));
    }
}
