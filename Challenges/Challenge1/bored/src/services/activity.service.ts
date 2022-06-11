import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activity } from 'src/app/models/Activity';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {



  /*FAVOUIRITE ARRAY*/
  public activityItemFavorites: Activity[] = [];
  public activityListFavorite = new BehaviorSubject<Activity[]>([]);


  /*SetLocalStorage Array */
  // public localStorageFavouriteListActivities: Activity[] = [];




  constructor() { }

  getFavouriteActivities(): any {
    return this.activityListFavorite.asObservable();
  }

  // Add to favourite activities
  addToFavouriteActvity(item: any): void {

    this.activityItemFavorites.push({ ...item })

    // Set localStorage
    localStorage.setItem('favouriteActivities', JSON.stringify(this.activityItemFavorites))

    //
    this.activityListFavorite.next(this.activityItemFavorites)
  }

  // Remove one favourite activity
  removeFavouriteActive(obj: any): void {
    let index = this.activityItemFavorites.findIndex(item => item.key === obj.key)
    this.activityItemFavorites.splice(index, 1)
  }



}
