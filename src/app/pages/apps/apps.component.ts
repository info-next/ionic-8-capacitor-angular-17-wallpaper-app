import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon,IonHeader, IonMenuButton, IonMenu,IonButtons,
  IonToolbar, IonTitle, IonContent,IonCard,IonGrid,IonRow,IonCol,IonLabel,
  IonCardHeader,IonCardTitle,IonCardContent, IonRouterOutlet} from '@ionic/angular/standalone';


@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonMenuButton, IonMenu,IonButtons
    ,IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet,IonCardHeader,IonCardTitle,
        IonRow,IonCard,IonGrid,IonRow,IonCol,IonLabel,IonCardContent],
})
export class AppsComponent {
  router = inject(Router);

  apps = signal([
    {
      title: 'Gallery',
      description: 'View and manage your photo gallery.',
      route: 'gallery'
    },
    {
      title: 'TTS',
      description: 'Convert text to speech easily.',
      route: 'text-to-speech'
    },
    {
      title: ' App3',
      description: 'Description for another app.',
      route: 'another-app'
    },
    {
      title: 'App4',
      description: 'Description for yet another app.',
      route: 'yet-another-app'
    }
  ]);



  navigateTo(page: string) {
    this.router.navigate([`app/${page}`]);
  }

}
