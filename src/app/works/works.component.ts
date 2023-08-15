import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  Title = 'Python'

   constructor(private router: Router)
   {

   }
  greet()
  {
    alert("Go to Gym Bro!");
  }

  enroll()
  {
    alert('Enrolled successfully!');
  }
  
  Trip()
  {
    alert('O ja ja tor ja!');

  }
  


}
