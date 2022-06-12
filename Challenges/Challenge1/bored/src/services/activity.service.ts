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
    // è santo
    this.activityListFavorite.next(JSON.parse(localStorage.getItem('favouriteActivities') || '{}'));
    this.activityListFavorite.subscribe((data)=> this.activityItemFavorites = data)
    return this.activityListFavorite.asObservable();
  }

  // Add to favourite activities
  addToFavouriteActvity(item: any): void {

    // Set localStorage
<<<<<<< HEAD
    if (JSON.parse(localStorage.getItem('favouriteActivities') || '{}')) {
      let tmpArray = JSON.parse(localStorage.getItem('favouriteActivities') || '{}');
      tmpArray.push(item)
      this.activityItemFavorites.push(...tmpArray)
      localStorage.setItem('favouriteActivities', JSON.stringify(tmpArray));
    } else {
      this.activityItemFavorites.push({ ...item })
      localStorage.setItem('favouriteActivities', JSON.stringify(this.activityItemFavorites))
    }
=======
   
    this.activityItemFavorites.push({ ...item })
    // Set localStorage
    localStorage.setItem('favouriteActivities', JSON.stringify(this.activityItemFavorites))
>>>>>>> ba1458a4fe7984fd32c94f103bb3413b15a48aec

    //
    // Updates the list favorite 
    this.activityListFavorite.next(this.activityItemFavorites)

  }

  // Remove one favourite activity
  removeFavouriteActive(obj: any): void {

    let index = this.activityItemFavorites.findIndex(item => item.key === obj.key);

    const manageLocal = JSON.parse(localStorage.getItem('favouriteActivities') || '{}');
    manageLocal.splice(index, 1); // Removes also from local storage so we are on same pace
    localStorage.setItem('favouriteActivities', JSON.stringify(manageLocal));

    this.activityListFavorite.next(manageLocal); // Sends new values updated again
    this.activityItemFavorites.splice(index, 1);


  }



}
