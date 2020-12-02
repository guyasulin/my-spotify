import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, throwError } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, catchError, startWith } from 'rxjs/operators';
import { Playlist } from '../models/playlist';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() searchResults: boolean;
  @Output() showResults = new EventEmitter<any>();
	public contentDataAlbums: Playlist[];
  public contentDataArtists: Playlist[];
	public contentPlaylists: Playlist[];
  public searchTrem = new Subject<string>();

  public searchForm = new FormGroup({
    search: new FormControl("")
  })
  
  constructor(public playlistService: PlaylistService) {}

	ngOnInit(): void {
    this.search()
}

  search(){
    this.searchTrem.pipe(
      map((e:any) => {
        if (e.target.value === '' || e.target.value === undefined) {
          this.contentDataArtists = [];
          this.contentDataAlbums = [];
          this.contentPlaylists = [];
          this.searchResults = false;
        } else {
          this.showResults.emit(e.target.value)
          this.searchResults = true;
          return e.target.value
        }
      }),
      debounceTime(600), 
      distinctUntilChanged(),
      startWith(''),
      switchMap(trem => {
        return this.playlistService.getSearchContent(trem);
      }),
      catchError((e) => {
        return throwError(e)
      })
    ).subscribe(v => {
      this.contentDataArtists = v.artists.items;
      this.contentPlaylists = v.playlists.items;
      this.contentDataAlbums = v.albums.items;
    })
  }

}
