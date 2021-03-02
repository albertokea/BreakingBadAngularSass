import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.interface';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: Episode[];
  season: number;
  totalofSeasons

  constructor(private episodesService: EpisodesService) {
    this.episodes = [];
    this.season = 1;
  }

  ngOnInit() {
    this.filterBySeason(this.season)
  }

  getDate(dateString) {
    const arrDate = dateString.split('-');
    return `${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`
  }

  async filterBySeason(seasonNumber) {
    this.episodes = await this.episodesService.getAll();
    this.episodes = this.episodes.filter(episode => episode.season == seasonNumber);
  }

  changeSeason(numberPrevNext) {
    this.season += numberPrevNext;
    if (this.season > 0 && this.season < 6) {
      this.filterBySeason(this.season);
    } else if (this.season === 1 && numberPrevNext === 1) {
      this.filterBySeason(this.season);
    }
  }

}
