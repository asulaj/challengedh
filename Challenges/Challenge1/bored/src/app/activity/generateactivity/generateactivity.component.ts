import { Component, OnInit } from '@angular/core';

import { Activity } from 'src/app/models/Activity';
import { ActivityService } from 'src/services/activity.service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-generateactivity',
  templateUrl: './generateactivity.component.html',
  styleUrls: ['./generateactivity.component.css']
})
export class GenerateactivityComponent implements OnInit {


  public activityItemGenerated: Activity[] = [];

  public toggleGenerated: number = 0;

  // public testObj: Activity = {
  //   "activity": "Take your cat on a walk",
  //   "type": "relaxation",
  //   "participants": 1,
  //   "price": 0.02,
  //   "link": "",
  //   "key": "5940465",
  //   "accessibility": 0.1
  // }

  constructor(private api: ApiService, private activityservice: ActivityService) { }

  ngOnInit(): void {

  }


  getRandomActivity(): void {
    this.api.getRandomActivity().subscribe((data: any) => {
      console.log(data)
      if (!this.toggleGenerated) {
        this.activityItemGenerated.push({ ...data });
        this.toggleGenerated++

      } else {
        this.activityItemGenerated.pop();

      }

    })

    // this.activityItemGenerated.push({ ...this.testObj });



  }

  addToFavourite(obj: any): void {
    this.activityservice.addToFavouriteActvity(obj)
    this.activityservice.getFavouriteActivities().subscribe(((data: any) => {
      console.log(data)
    }))
  }


}
