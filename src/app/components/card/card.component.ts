import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() cardData:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  clickCardData(cardData:any){
    this.router.navigate(['anime-detail'], {
      queryParams: { animeTitle: cardData.animeId }})
  }

}
