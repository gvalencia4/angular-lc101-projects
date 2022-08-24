import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty car'];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Pet cat', 'Water Plants', 'Eat'];

   targetImage = "";

   constructor() { }

   ngOnInit() {
   }

}
