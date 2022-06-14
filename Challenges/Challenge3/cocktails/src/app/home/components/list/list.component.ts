import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public cocktailList: any = [];

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit(): void {


  }


  getDrinks() {


    let value = document.querySelector('#search') as HTMLInputElement;

    this.cocktailsService.getCocktailsList(value.value).subscribe(
      (response: any) => {

        // Before displaying items set and check if they are in the favourite list, so the heart svg will be colored
        this.cocktailList = this.cocktailsService.setAndCheckObjIsinFavouriteList(response.drinks)
        console.log(this.cocktailList.length)
      },
      (error: Error) => { console.log(error) }
    )
  }
}
