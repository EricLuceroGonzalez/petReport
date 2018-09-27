import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  isThefth = false;
  isRobery = false;
  title = 'body.component';
  constructor(private router: Router) { }
  // constructor() { }

  // ngOnInit() {
  // }
  setNewHurto() {
    console.log('Inside setNewHurto()');
    this.isThefth = true;
    this.isRobery = false;
    console.log('isThefth: ' + this.isThefth);
    console.log('isRobery: ' + this.isRobery);
    this.router.navigate(['/posts']);
  }

  setNewRobo() {
    console.log('Inside setNewRobo()');
    this.isThefth = false;
    this.isRobery = true;
    console.log('isThefth: ' + this.isThefth);
    console.log('isRobery: ' + this.isRobery);
  }

}
