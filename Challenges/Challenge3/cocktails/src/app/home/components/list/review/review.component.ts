import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public showModalReview: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  // OPEN MODAL BOX REVIEW
  openReview(): void {
    this.showModalReview = true;
  }

  // CLOSE MODAL BOX REVIEW
  closeReview(event: any): void {
    if (event.target === event.currentTarget) {
      this.showModalReview = false;
    }
  }

}
