import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-episode-player',
  templateUrl: './episode-player.component.html',
  styleUrls: ['./episode-player.component.css']
})
export class EpisodePlayerComponent implements OnInit {
  episodePlayDetils: any;

  constructor( private activeRoute: ActivatedRoute,
    private animeservice: AnimeService,
    private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((res:any)=>{
      if(res){
        this.animeservice.playEp(res.episode).subscribe((res:any)=>{
          this.episodePlayDetils = res;
          console.log(this.episodePlayDetils);   
          // this.router.navigateByUrl(this.episodePlayDetils.sources[0].file)       
        })
      }
    })
  }

}
