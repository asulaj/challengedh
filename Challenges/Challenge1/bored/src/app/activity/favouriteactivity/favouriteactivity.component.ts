import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
import { ActivityService } from 'src/services/activity.service';


@Component({
  selector: 'app-favouriteactivity',
  templateUrl: './favouriteactivity.component.html',
  styleUrls: ['./favouriteactivity.component.css']
})
export class FavouriteactivityComponent implements OnInit {


  public favouriteActvities: Activity[] = [];



  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getFavouriteActivities().subscribe((data: Activity[]) => {
      this.favouriteActvities = data;
    })

    this.favouriteActvities = JSON.parse(localStorage.getItem('favouriteActivities') || '{}')

  }

  //Delete favourite activity
  deleteActivity(obj: Activity): void {
    this.activityService.removeFavouriteActive(obj)

  }

}

