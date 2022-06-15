import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @Input() modalBoxIngre: boolean = true;

  @Input() objIngrediens!: any;

  public keys: any = [];



  @Output() modalEmitted = new EventEmitter();

  constructor(private cocktailService: CocktailsService) { }

  ngOnInit(): void {


  }


  closeIngrediens(value: false): void {
    this.modalBoxIngre = value;
    this.modalEmitted.emit(value)

  }


}
