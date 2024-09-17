import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TalkingHeadService } from '../talking-head.service';

@Component({
  selector: 'app-component-chat',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './component-chat.component.html',
  styleUrls: ['./component-chat.component.scss']
})
export class ComponentChatComponent implements AfterViewInit {
  @ViewChild('avatarContainer', { static: false }) avatarContainer!: ElementRef; // Referenz zum Avatar-Div
  messages: { text: string; sender: string; timestamp: string }[] = [];
  userInput: string = '';
  isWaitingForResponse: boolean = false;

  constructor(private http: HttpClient, private talkingHeadService: TalkingHeadService) {}

  ngAfterViewInit(): void {
    if (this.avatarContainer) {
      this.talkingHeadService.initializeTalkingHead(this.avatarContainer.nativeElement);
      this.talkingHeadService.showAvatar();
    }
  }


  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.addMessage(this.userInput, 'User');
    this.talkingHeadService.speakText(this.userInput);
    this.userInput = '';
  }

  addMessage(text: string, sender: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.messages.push({ text, sender, timestamp });
  }
}
