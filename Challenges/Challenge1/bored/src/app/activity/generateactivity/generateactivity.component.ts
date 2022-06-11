import { RequestActivityService } from './../../request-activity.service';
import { Component, OnInit } from '@angular/core';

import { Activity } from 'src/app/models/Activity';
import { ActivityService } from 'src/services/activity.service';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-generateactivity',
  templateUrl: './generateactivity.component.html',
  styleUrls: ['./generateactivity.component.css']
})
export class GenerateactivityComponent implements OnInit {



  public activityItemGenerated: Activity[] = [];

  public toggleGenerated: number = 0;



  constructor(private api: ApiService, private activityservice: ActivityService, private prova: RequestActivityService) { }

  ngOnInit(): void {

  }


  getRandomActivity(): void {
    this.api.getRandomActivity().subscribe((data: any) => {
      console.log(data)

      this.activityItemGenerated[0] = data;
      this.toggleGenerated++

    })
  }


  addToFavourite(obj: any): void {
    this.activityservice.addToFavouriteActvity(obj)

  }
}
