import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  ageBoxClose: boolean = true;
  minorUser: boolean = true;
  constructor() {}

  ngOnInit(): void {
    if(localStorage.getItem('name')){
      this.ageBoxClose = false;
    }
  }
  sendForm(f: NgForm): void {
   
    localStorage.setItem('name',f.value.name);
    const age = 2022-(+f.value.year);
    if(age<18){
      console.log('è vero')
      this.minorUser = false;
    }else{
      this.ageBoxClose = !this.ageBoxClose
    };
    location.reload();
    

  }
}
