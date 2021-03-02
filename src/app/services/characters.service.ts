import { Injectable } from '@angular/core';
import { Character } from '../models/character.interface'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string;
  characters: Character[];

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://www.breakingbadapi.com/api/"
  }

  getAll(): Promise<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}characters`).toPromise();
  }

  getCharacterById(id): Promise<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}characters/${id}`).toPromise();
  }

  searchByName(name): Promise<Character[]> {
    return this.httpClient.get<Character[]>(`${this.baseUrl}characters?name=${name}`).toPromise();
  }
}
