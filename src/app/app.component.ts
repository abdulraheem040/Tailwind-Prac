import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
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
