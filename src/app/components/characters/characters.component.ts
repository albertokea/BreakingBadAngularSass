import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  constructor(
    private charactersService: CharactersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.characters = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      if (Object.entries(params).length > 0) {
        this.characters = await this.charactersService.searchByName(params.name)
      } else {
        this.characters = await this.charactersService.getAll();
      }
    })
  }

  getCharacter(id) {
    this.router.navigate(['characters', id]);
  }
}
