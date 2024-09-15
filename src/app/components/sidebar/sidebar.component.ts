import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faHome, faBox, faCalendar, faEnvelope, faCog, faInfoCircle, faMessage, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faGlobe = faGlobe;
  faHome = faHome;
  faBox = faBox;
  faCalendar = faCalendar;
  faEnvelope = faEnvelope;
  faCog = faCog;
  faInfoCircle = faInfoCircle;
  faMessage = faMessage;
  faPeopleGroup = faPeopleGroup;
}
