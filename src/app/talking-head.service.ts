// talking-head.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalkingHeadService {
  private head: any;
  
  constructor() {}
  
  initializeTalkingHead(element: HTMLElement): void {
    const {TalkingHead} = require('../assets/js/talkinghead.mjs'); // Importiere die lokale JS-Datei
    this.head = new TalkingHead(element, {
      ttsEndpoint: "/gtts/",
      jwtGet: () => fetch('app/jwt/get').then(response => response.json()).then(data => data.jwt),
      lipsyncModules: ["en"]
    });
  }

  async showAvatar() {
    try {
      await this.head.showAvatar({
        url: "https://models.readyplayer.me/66e92d8f68ee213aa4443413.glb?morphTargets=ARKit,Oculus+Visemes,mouthOpen,mouthSmile,eyesClosed,eyesLookUp,eyesLookDown&textureSizeLimit=1024&textureFormat=png",
        body: 'F',
        avatarMood: 'neutral',
        ttsLang: "en-GB",
        ttsVoice: "en-GB-Standard-A",
        lipsyncLang: 'en'
      });
    } catch (error) {
      console.error(error);
    }
  }

  speakText(text: string): void {
    if (this.head) {
      this.head.speakText(text);
    }
  }
}
