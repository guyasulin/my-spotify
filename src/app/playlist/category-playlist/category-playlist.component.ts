import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist';
import { PlaylistService } from '../services/playlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-playlist',
  templateUrl: './category-playlist.component.html',
  styleUrls: ['./category-playlist.component.scss']
})
export class CategoryPlaylistComponent implements OnInit {

  public playlists$:Observable<Playlist>;

  constructor(public playlistService:PlaylistService, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get("id");
    this.playlists$ = this.playlistService.getPlaylistByCategoryId(categoryId);
  }

}


