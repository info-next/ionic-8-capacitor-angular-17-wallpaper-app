import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { IonButton, IonContent, IonItem, IonLabel ,IonTextarea} from '@ionic/angular/standalone';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss'],
  standalone: true,
  imports: [FormsModule,IonContent,IonButton,IonLabel,IonItem,IonTextarea ],
})
export class TextToSpeechComponent {
  textToSpeak: string = '';
  constructor() { }
  async speak() {
    if (this.textToSpeak.trim().length === 0) {
      const utterance = new SpeechSynthesisUtterance('Please enter some text to speak');
      speechSynthesis.speak(utterance);
      return;
    }
    try {
      await TextToSpeech.speak({
        text: this.textToSpeak,
        lang: 'en-US',
        rate: 1.0,
        pitch: 1.0,
        volume: 1.0,
        category: 'ambient',
      });
    } catch (e) {
      console.error(e);
    }
  }

   speakText() {
    if (this.textToSpeak.trim().length === 0) {
      const utterance = new SpeechSynthesisUtterance('Please enter some text to speak');
      speechSynthesis.speak(utterance);
      return;
    }

    // Use the SpeechSynthesis API
    const utterance = new SpeechSynthesisUtterance(this.textToSpeak);
    speechSynthesis.speak(utterance);
  }

}
