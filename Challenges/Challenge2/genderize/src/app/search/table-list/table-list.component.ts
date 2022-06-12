import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/Results';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public searchList: Result[] = []
  constructor(private genderService: GenderService) { }

  ngOnInit(): void {
    this.genderService.getSearchList().subscribe(
      (data: Result[]) => { this.searchList = data }
    )
  }

  //Delete search item
  deleteSearchItem(obj: Result): void {
    this.genderService.removeSearch({ ...obj }) // method from genderService to remove item desired

  }

}
