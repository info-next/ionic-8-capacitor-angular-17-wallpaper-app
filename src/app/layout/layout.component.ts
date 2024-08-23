import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { IonContent,IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [HeaderComponent,FooterComponent,IonContent,IonRouterOutlet],
})
export class LayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
