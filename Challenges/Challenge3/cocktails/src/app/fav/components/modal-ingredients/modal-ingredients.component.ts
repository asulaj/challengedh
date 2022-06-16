import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-ingredients',
  templateUrl: './modal-ingredients.component.html',
  styleUrls: ['./modal-ingredients.component.css']
})
export class ModalIngredientsComponent implements OnInit {
  @Input() modalBoxIngre: boolean = true;
  @Input() myFavouriteCocktail!: any;
  @Output() modalEmitted = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
   
  }

  close(){
    this.modalBoxIngre = false;
    this.modalEmitted.emit(false)
  }

}
