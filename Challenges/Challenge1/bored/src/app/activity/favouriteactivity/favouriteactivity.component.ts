import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-favouriteactivity',
  templateUrl: './favouriteactivity.component.html',
  styleUrls: ['./favouriteactivity.component.css']
})
export class FavouriteactivityComponent implements OnInit {


  public favoriteActivityList: any = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8]
  constructor() { }

  ngOnInit(): void {
  }

}
