import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-favourite-cocktails',
  templateUrl: './favourite-cocktails.component.html',
  styleUrls: ['./favourite-cocktails.component.css']
})
export class FavouriteCocktailsComponent implements OnInit {

  constructor(private cocktailService: CocktailsService) { }

  ngOnInit(): void {
    this.cocktailService.getFavouriteCocktails().subscribe(
      (data: any) => { console.log(data) }
    )
  }

}
