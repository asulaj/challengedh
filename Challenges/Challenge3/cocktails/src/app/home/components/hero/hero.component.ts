import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Output() goal = new EventEmitter();
  @Output() cocktailList = new EventEmitter();

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit(): void {
  }


  getDrinks(event: any) {
    let keySearch: string = event.value;



    this.cocktailsService.getCocktailsList(keySearch).subscribe(
      (response: any) => {
        // Before displaying items set and check if they are in the favourite list, so the heart svg will be colored
        let listStted = this.cocktailsService.setAndCheckObjIsinFavouriteList(response.drinks)
        this.cocktailList.emit(listStted)

      },
      (error: Error) => { console.log(error) }
    )
  }

}
