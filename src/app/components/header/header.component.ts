import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon,IonHeader, IonMenuButton, IonMenu,IonButtons,
  IonToolbar, IonTitle, IonContent,IonCard,IonGrid,IonRow,IonCol,IonLabel, IonRouterOutlet} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenuButton, IonMenu,IonButtons
    ,IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet,
        IonRow,IonCard,IonGrid,IonRow,IonCol,IonLabel,],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
