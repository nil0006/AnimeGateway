import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';
import { EpisodePlayerComponent } from './components/episode-player/episode-player.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },{
  path: 'home',
  component:HomeComponent
},
{
  path:'anime-detail',
  component:AnimeDetailsComponent
},
{path:'play',
component:EpisodePlayerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
