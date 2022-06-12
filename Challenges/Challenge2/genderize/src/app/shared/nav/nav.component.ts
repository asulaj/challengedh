import { Component, OnInit } from '@angular/core';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private genderService: GenderService) { }

  ngOnInit(): void {
  }


  // Clean up all Search list
  deleteAllSearchList(): void {

    this.genderService.removeSearch();
  }

}
