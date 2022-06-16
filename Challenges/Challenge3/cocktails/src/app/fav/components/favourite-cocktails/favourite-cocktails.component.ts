import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { ICocktail } from '../../../models/cocktails';
import { from, map } from 'rxjs';


@Component({
  selector: 'app-favourite-cocktails',
  templateUrl: './favourite-cocktails.component.html',
  styleUrls: ['./favourite-cocktails.component.css']
})
export class FavouriteCocktailsComponent implements OnInit {
  myFavoriteCocktails: ICocktail[] = [];
  arrayN: Array<number> = [];
  public modalBoxIngre: boolean = false;
  public myFavouriteCocktail: any;

  

  constructor(private cocktailService: CocktailsService) {
 
   }

  ngOnInit(): void {
   this.cocktailService.getFavouriteCocktails().pipe(
    map((response: any) => {
      for (let x of response){
        this.myFavoriteCocktails.push(x);                  
      }      
    })
   )
   .subscribe()
   

    this.cocktailService.getFavouriteCocktails().pipe(
      map((response: any)=> {
       for(let x of response){
        this.arrayN.push(x.totStars)
       }
      })
    ).subscribe()
     
  
  };

  onClick(c: ICocktail){
    this.myFavouriteCocktail = c
    this.modalBoxIngre = true;
    console.log(this.myFavouriteCocktail)
  }

  deleteItem(x: ICocktail){
    const index = this.myFavoriteCocktails.indexOf(x)
    this.myFavoriteCocktails.splice(index, 1) 
  }



  

  

  

  

}
