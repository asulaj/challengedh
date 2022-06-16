import { Component, Input, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { ICocktail } from '../../../models/cocktails';
<<<<<<< HEAD
import { DomSanitizer } from '@angular/platform-browser'
import { map } from 'rxjs'
=======
import { map } from 'rxjs';

>>>>>>> e4a62716828f7de38fac4f181f514374ec015e61

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
  body = document.querySelector('body');
  num!: number[]
 

  

<<<<<<< HEAD
  public totalStarts: number[] = [1, 2, 3, 4, 5]

  public foo: any = this.sanitized.bypassSecurityTrustHtml(`<div class='item first '></div>`)

  public counter: number = 0;


  constructor(private cocktailService: CocktailsService, private sanitized: DomSanitizer) {

=======
  constructor(private cocktailService: CocktailsService) {
    this.num = this. cocktailService.numbers;
    
>>>>>>> e4a62716828f7de38fac4f181f514374ec015e61
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
   
    // this.cocktailService.getFavouriteCocktails().pipe(
    //   map((response: any) => {
    //     for (let x of response) {
    //       this.myFavoriteCocktails.push({ ...x });
    //     }
    //   })
    // )
    //   .subscribe()
    // console.log(this.myFavoriteCocktails);


    this.cocktailService.getFavouriteCocktails().pipe(
      map((response: any) => {
        for (let x of response) {
          this.arrayN.push(x.totStars);
          console.log(this.arrayN)
        }
      })
    ).subscribe()
     
    
  };

  onClick(c: ICocktail){
    this.myFavouriteCocktail = c
    this.modalBoxIngre = true;
    
  }


  deleteItem(x: ICocktail) {

<<<<<<< HEAD
  reviews(e: any): any {
    if (this.counter < e) {
      this.counter++;
      console.log(this.counter)
      return 'backGroundReview';
    } else {
      this.counter = 0;
    }
=======
    const index = this.myFavoriteCocktails.indexOf(x)
    this.myFavoriteCocktails.splice(index, 1);
    this.cocktailService.removeFavouriteItem(x)
  }

  closeModal(event: boolean){
    this.modalBoxIngre = event
  }
  
  
  

  

  
>>>>>>> e4a62716828f7de38fac4f181f514374ec015e61

  }

}
