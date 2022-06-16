import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-ingredients',
  templateUrl: './modal-ingredients.component.html',
  styleUrls: ['./modal-ingredients.component.css']
})
export class ModalIngredientsComponent implements OnInit {
  @Input() modalBoxIngre: boolean = true;
  @Input() myFavouriteCocktail!: any;

  constructor() { }

  ngOnInit(): void {
   
  }

  close(){
    this.modalBoxIngre = false
  }

}
