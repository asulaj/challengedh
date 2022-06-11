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


  constructor(private api: ApiService, private activityservice: ActivityService, private prova: RequestActivityService) { }

  ngOnInit(): void {

  }


  getRandomActivity(): void {
    this.api.getRandomActivity().subscribe(
      (data: Activity) => { this.activityItemGenerated[0] = data; });
    (error: Error) => { alert('Fatal Error') }

  }


  addToFavourite(obj: any): void {
    this.activityservice.addToFavouriteActvity(obj);

  }
}
