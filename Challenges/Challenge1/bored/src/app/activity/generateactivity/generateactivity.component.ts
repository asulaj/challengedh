import { RequestActivityService } from './../../request-activity.service';
import { Component, OnInit } from '@angular/core';

import { Activity } from 'src/app/models/Activity';
import { ActivityService } from 'src/app/services/activity.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-generateactivity',
  templateUrl: './generateactivity.component.html',
  styleUrls: ['./generateactivity.component.css']
})
export class GenerateactivityComponent implements OnInit {

  constructor(private api: RequestActivityService) { }

  ngOnInit(): void {
    this.api.getActivity().subscribe((data) => {
      console.log(data)
    })
  }

}
