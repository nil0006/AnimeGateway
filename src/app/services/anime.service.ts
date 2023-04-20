import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private url='https://gogoanime.consumet.stream'
  constructor(private http:HttpClient) { }

  public getNewAnime(){
    let url= `${this.url}/recent-release?page=2`
    return this.http.get(url)
  }
  public getPopulerAnime(){
    let url='https://gogoanime.consumet.stream/popular?page=1'
    return this.http.get(url)
  }
  public getSingleAnimeData(animeId:string){
    let url =`https://gogoanime.consumet.stream/anime-details/${animeId}`
    return this.http.get(url)
  }
  public playEp(ep:string){
    let url=`https://gogoanime.consumet.stream/vidcdn/watch/${ep}`
    return this.http.get(url)
  }
}
