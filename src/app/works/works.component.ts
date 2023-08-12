import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  providers :[CommunicationService]
})
export class WorksComponent {
  Title = 'Python'
 


}
