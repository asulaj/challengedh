import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {



  @Input() objaddTofavouriteList: any = {} // container will take obj setted by property boolean and number




  public showModalReview: boolean = false; // variable to track state of modal box review


  public stars: any = [
    { star: false },
    { star: false },
    { star: false },
    { star: false },
    { star: false },
  ]
  constructor(private cocktailService: CocktailsService) { }

  ngOnInit(): void {

  }

  // OPEN MODAL BOX REVIEW
  openReview(): void {

    if (this.checkItemInsideFavouriteList(this.objaddTofavouriteList)) {
      this.cocktailService.removeFavouriteItem(this.objaddTofavouriteList)
    } else {
      this.showModalReview = true;
    }

  }

  // CLOSE MODAL BOX REVIEW
  closeReview(event: any | false): void {
    if (event.target === event.currentTarget) {
      this.showModalReview = false;
    }
  }

  // Hover stars, it just hovers stars for UX =)))
  hoverStars(event: any = null): void {
    let data = +event.currentTarget.dataset.star;
    for (let i = 0; i < this.stars.length; i++) {
      if (i < data) {
        this.stars[i].star = true
      } else {
        this.stars[i].star = false
      }

    }
  }


  // select star/stars and set properties added to favourite and number of stars

  selectStars(numStars: number): void {
    this.objaddTofavouriteList.favourite = true; // create and  set property favourite
    this.objaddTofavouriteList.totStars = numStars; // create and set property totStars
    this.cocktailService.addToFavouriteList(this.objaddTofavouriteList) //add to favourite list
    this.closeReview(false); // close modal box review
  }


  checkItemInsideFavouriteList(obj: any): any {
    this.cocktailService.getFavouriteCocktails().subscribe(
      (data: any) => {

        let result = data.some((drink: any) => drink.idDrink === obj.idDrink);

        return result;
      }
    );
  }

}
