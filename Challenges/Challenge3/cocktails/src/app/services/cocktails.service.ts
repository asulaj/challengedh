import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiCocktailsService } from './api-cocktails.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  /*Container of items coming from api to set and check */
  private cocktailList: any = []

  /*Container of items added to favourite list */
  private favouritecocktailList: any = [];

  public favouriteList$ = new BehaviorSubject([]);


  private modalBoxIngredients: boolean = false;
  public ingredients$ = new BehaviorSubject<boolean>(false);

  constructor(private api: ApiCocktailsService) { }
  // get appi from server passing a value desired from input by user
  getCocktailsList(value: string): Observable<any> {
    return this.api.getApi(value)
  }


  getFavouriteCocktails(): any {
    return this.favouriteList$.asObservable();
  }


  // Set property favourite in the cocktail list api, and then check if it is in favourite list
  // if yes set favourite property in true, therefore the heart svg will be colored otherwise not
  setAndCheckObjIsinFavouriteList(arr: any): void {
    this.cocktailList = arr;

    this.cocktailList.forEach((item: any) => {
      // item.favourite = false;
      if (this.favouritecocktailList.some((favEl: any) => item.idDrink === favEl.idDrink)) {
        item.favourite = true;

      }
    })
    return this.cocktailList;
  }

  // Add to favourite list
  addToFavouriteList(obj: any): void {
    this.favouritecocktailList.push({ ...obj })
    this.favouriteList$.next(this.favouritecocktailList)
  }


  //Remove Item from favourite list
  removeFavouriteItem(obj: any): void {

    let index = this.favouritecocktailList.findIndex((item: any) => item.count === obj.count);
    this.favouritecocktailList.splice(index, 1);

  }


  toggleModalBoxIngrediens(): any {

    this.modalBoxIngredients = !this.modalBoxIngredients;
    this.ingredients$.next(this.modalBoxIngredients)
    return this.ingredients$.asObservable();

  }

}
