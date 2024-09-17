declare module '../../assets/js/talkinghead.mjs' {
  export class TalkingHead {
    constructor(
      element: HTMLElement,
      options?: {
        ttsEndpoint?: string;
        jwtGet?: () => Promise<string>;
        lipsyncModules?: string[];
      }
    );
    showAvatar(options: { url: string; body?: string; avatarMood?: string; ttsLang?: string; ttsVoice?: string; lipsyncLang?: string }): Promise<void>;
    speakText(text: string, options?: any): void;
    setMood(mood: string): void;
  }
}
