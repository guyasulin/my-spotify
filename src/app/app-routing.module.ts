import { MainPageComponent } from './playlist/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path:'playlist',
    loadChildren: ()=> import('../app/playlist/playlist.module').then(m => m.PlaylistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
