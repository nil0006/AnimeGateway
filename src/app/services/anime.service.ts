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
  public getSingleAnimeData(url:string){
    return this.http.get(url)
  }
}
