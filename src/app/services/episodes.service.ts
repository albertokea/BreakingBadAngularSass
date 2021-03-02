import { Injectable } from '@angular/core';
import { Episode } from '../models/episode.interface'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://www.breakingbadapi.com/api/";
  }

  getAll(): Promise<Episode[]> {
    return this.httpClient.get<Episode[]>(`${this.baseUrl}episodes?series=Breaking+Bad`).toPromise();
  }

}
