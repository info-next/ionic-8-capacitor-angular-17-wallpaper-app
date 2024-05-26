import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar,IonButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-welcome',
  imports: [IonContent,IonButton],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true
})
export class WelcomeComponent {

 navCtrl = inject(NavController);

  goToHome() {
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

}
