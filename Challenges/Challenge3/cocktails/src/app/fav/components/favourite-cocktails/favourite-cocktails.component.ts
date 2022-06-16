import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { ICocktail } from '../../../models/cocktails';
import { DomSanitizer } from '@angular/platform-browser'
import { map } from 'rxjs'

@Component({
  selector: 'app-favourite-cocktails',
  templateUrl: './favourite-cocktails.component.html',
  styleUrls: ['./favourite-cocktails.component.css']
})
export class FavouriteCocktailsComponent implements OnInit {
  myFavoriteCocktails: ICocktail[] = [];
  arrayN: Array<number> = [];

  public totalStarts: number[] = [1, 2, 3, 4, 5]

  public foo: any = this.sanitized.bypassSecurityTrustHtml(`<div class='item first '></div>`)

  public counter: number = 0;


  constructor(private cocktailService: CocktailsService, private sanitized: DomSanitizer) {

  }

  ngOnInit(): void {
    this.cocktailService.getFavouriteCocktails().pipe(
      map((response: any) => {
        for (let x of response) {
          this.myFavoriteCocktails.push({ ...x });
        }
      })
    )
      .subscribe()
    console.log(this.myFavoriteCocktails);

    this.cocktailService.getFavouriteCocktails().pipe(
      map((response: any) => {
        for (let x of response) {
          this.arrayN.push(x.totStars)
        }
      })
    ).subscribe()
    console.log(this.arrayN)

  };

  deleteItem(x: ICocktail) {
    const index = this.myFavoriteCocktails.indexOf(x)
    this.myFavoriteCocktails.splice(index, 1)
  }



  reviews(e: any): any {
    if (this.counter < e) {
      this.counter++;
      console.log(this.counter)
      return 'backGroundReview';
    } else {
      this.counter = 0;
    }

  }

}
