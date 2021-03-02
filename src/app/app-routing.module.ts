import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HeroComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'search/:name', component: CharactersComponent },
  { path: 'characters/:character_id', component: CharacterViewComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
