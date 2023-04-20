import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css'],
})
export class AnimeDetailsComponent implements OnInit {
  animeDetails: any = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private animeservice: AnimeService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((res: any) => {
      console.log(res);
      if (res.animeTitle) {
        this.animeservice
          .getSingleAnimeData(res.animeTitle)
          .subscribe((res: any) => {
            console.log(res);
            this.animeDetails = res;
          });
      }
    });
  }
  navigateToEp(epDetails:any) {
    console.log(epDetails);
    this.router.navigate(['play'],{queryParams:{episode:epDetails.episodeId}})
    

  }
}
