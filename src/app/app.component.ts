import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentHeaderComponent } from "./component-header/component-header.component";
import { ComponentChatComponent } from "./component-chat/component-chat.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentHeaderComponent, ComponentChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UebungFitness';
}
