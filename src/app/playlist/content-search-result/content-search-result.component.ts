import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist';

@Component({
	selector: 'app-content-search-result',
	templateUrl: './content-search-result.component.html',
	styleUrls: [ './content-search-result.component.scss' ]
})
export class ContentSearchResultComponent implements OnInit {

	@Input() contentDataAlbums: Playlist;
	@Input() contentDataArtists: Playlist;
	@Input() contentPlaylists: Playlist;

	constructor() {}

	ngOnInit(): void {
  }
}
