import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlist-tracks',
  templateUrl: './playlist-tracks.component.html',
  styleUrls: ['./playlist-tracks.component.scss']
})
export class PlaylistTracksComponent implements OnInit {

  tracks$:Observable<Playlist>;
  tracks:Playlist

  constructor(public playlistService:PlaylistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const playlistId = this.route.snapshot.paramMap.get("id");
    console.log(playlistId);
    
    this.playlistService.getPlaylistByTracksId(playlistId).subscribe(res => {
       this.tracks = res.items;
       console.log( this.tracks );
       
    })
    
  }

}
