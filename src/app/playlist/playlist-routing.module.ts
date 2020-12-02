import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';
import { CategoryPlaylistComponent } from './category-playlist/category-playlist.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path:'main',
        component: MainPageComponent
    },
    {
      path:'genre/:id',
      component: CategoryPlaylistComponent
  },
  {
    path:'track/:id',
    component: PlaylistTracksComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
