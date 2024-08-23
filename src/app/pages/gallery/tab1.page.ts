import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle,IonChip, IonContent,IonSearchbar,IonRow,
  IonCard,IonGrid,IonCol,IonLabel,IonMenuButton, IonMenu,IonButtons} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent,IonRow,IonCard,IonGrid,IonRow,IonCol,IonLabel,IonSearchbar,IonChip,IonMenuButton, IonMenu,IonButtons],
})
export class Tab1Page {
  searchQuery: string = '';
  categories: string[] = ['Nature', 'Technology', 'People', 'Architecture','Architecture','Architecture','Architecture','Architecture'];
  photos: any[] = [
    {imgUrl: 'https://i.ibb.co/GF5xVZ1/20240228-122947-0000.png'},
    {imgUrl: 'https://i.ibb.co/X41WdhB/Copy-of-Copy-of-White-Text-On-Photo-Simple-Winter-Quote-Story-20240319-091542-0000.png'},
    {imgUrl: 'https://i.ibb.co/s9cyw1J/Copy-of-Copy-of-White-Text-On-Photo-Simple-Winter-Quote-Story-20240318-133913-0000.png'},
    {imgUrl: 'https://i.ibb.co/XCZZK6G/Copy-of-Copy-of-White-Text-On-Photo-Simple-Winter-Quote-Story-20240320-093146-0000.png'},
    {imgUrl:'https://i.ibb.co/Bqvx3jk/Copy-of-Copy-of-White-Text-On-Photo-Simple-Winter-Quote-Story-20240320-120554-0000.png'},
    {imgUrl: 'https://i.ibb.co/FzTsDHP/Copy-of-Copy-of-White-Text-On-Photo-Simple-Winter-Quote-Story-20240320-203647-0000.png'},
    ];
  // constructor(private photoService: PhotoService) { }

  ngOnInit() {
    // this.getPhotosByCategory(this.categories[0]);
  }

  // searchPhotos() {
  //   if (this.searchQuery.trim().length > 0) {
  //     this.photoService.searchPhotos(this.searchQuery).subscribe(response => {
  //       this.photos = response.results;
  //     });
  //   }
  // }

  // getPhotosByCategory(category: string) {
  //   this.photoService.getPhotosByCategory(category).subscribe(response => {
  //     this.photos = response.results;
  //   });
  // }

  downloadPhoto(url: string) {
    window.open(url, '_blank');
  }
}