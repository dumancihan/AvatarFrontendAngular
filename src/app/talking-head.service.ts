// talking-head.service.ts
import { Injectable } from '@angular/core';
import { TalkingHead } from '../assets/js/talkinghead.mjs';

@Injectable({
  providedIn: 'root'
})
export class TalkingHeadService {
  private head: any;
  
  constructor() {}
  
  initializeTalkingHead(element: HTMLElement): void {
    this.head = new TalkingHead(element, {
      ttsEndpoint: "none",
      cameraView: "mid"
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
