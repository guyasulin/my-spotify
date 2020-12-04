import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { CategoryPlaylistComponent } from './category-playlist/category-playlist.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { ContentSearchResultComponent } from './content-search-result/content-search-result.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CategoryPlaylistComponent,
    FavoriteComponent,
    PlaylistTracksComponent,
    SearchBarComponent,
    ContentSearchResultComponent,
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    MainPageComponent,
    CategoryPlaylistComponent,
    FavoriteComponent,
    PlaylistTracksComponent,
    SearchBarComponent,
    ContentSearchResultComponent
  ]
})
export class PlaylistModule { }
