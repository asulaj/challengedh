import { Component, Input, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public modalBoxIngre: boolean = false;;

  public ingrediensParent: any;

  public cocktail!: any;


  public cocktailList: any = []
  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit(): void {


  }


  allDrinks(event: any): void {
    this.cocktailList = [...event]
  }
  goToAlfa(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  openIngrediens(obj: any): void {

    let keys = Object.keys(obj);



    this.cocktail = obj;

    this.modalBoxIngre = true;

  }



  closeModal(value: boolean): void {

    this.modalBoxIngre = false;


  }


}
