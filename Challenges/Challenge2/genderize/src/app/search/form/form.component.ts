import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Result } from '../../models/Results';
import { GenderService } from 'src/app/services/gender.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  constructor(private genderService: GenderService) { }

  ngOnInit(): void { }


  submit(f: NgForm): void {
    let nameSearched = f.value.name;

    f.reset() // Clean up input field

    // Get Api whith searched value
    this.genderService.getApiGender(nameSearched).subscribe(
      (response: Result) => {
        response.dateSearched = new Date; // adding new property when the research has been made

        console.log(response)
      }),
      (error: Error) => { console.log(error) }
  }
}
