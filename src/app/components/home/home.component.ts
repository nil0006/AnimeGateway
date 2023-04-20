import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularAnime: any;
  constructor(private anime: AnimeService) {}

  ngOnInit(): void {
    this.getNewAnime();
    this.getPopulerAnime()
    // this.getSingleAnime()
  }
  private getNewAnime() {
    this.anime.getNewAnime().subscribe((res: any) => {
      console.log(res);
    });
  }
  private getPopulerAnime(){
    this.anime.getPopulerAnime().subscribe((res:any)=>{
       this.popularAnime = res
      
    })
  }
  // private getSingleAnime(){
  //   this.anime.getSingleAnimeData('https://www1.gogoanime.cm//deep-insanity-the-lost-child-episode-9').subscribe((res:any)=>{
  //     console.log(res);
      
  //   })
  // }
}
