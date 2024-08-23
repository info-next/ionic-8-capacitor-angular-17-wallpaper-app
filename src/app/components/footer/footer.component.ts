import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon,IonHeader, IonMenuButton, IonMenu,IonButtons,
  IonToolbar, IonTitle, IonContent,IonCard,IonGrid,IonRow,IonCol,IonLabel, IonRouterOutlet} from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons';
  import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenuButton, IonMenu,IonButtons
    ,IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet,
        IonRow,IonCard,IonGrid,IonRow,IonCol,IonLabel,RouterLink],
})
export class FooterComponent  implements OnInit {

  constructor() {
    addIcons({ triangle, ellipse, square });

   }

  ngOnInit() {}

}
