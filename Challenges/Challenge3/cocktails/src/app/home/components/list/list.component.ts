import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  public cocktailList: any = []
  constructor() { }

  ngOnInit(): void {


  }


  allDrinks(event: any): void {
    this.cocktailList = [...event]
  }
  goToAlfa(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth'});
  }

}
