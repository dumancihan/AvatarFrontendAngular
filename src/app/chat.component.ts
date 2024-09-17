// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { CommonModule } from '@angular/common'; // Importiere CommonModule
// import { FormsModule } from '@angular/forms'; // Importiere FormsModule

// @Component({
//   selector: 'app-chat',
//   standalone: true,  // Markiere die Komponente als standalone
//   imports: [CommonModule, FormsModule],  // Importiere notwendige Module
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.scss']
// })
// export class ChatComponent {
//   messages$: Observable<any>;
//   loading$: Observable<boolean>;
//   userInput: string = '';

//   constructor(private store: Store<{ chat: ChatState }>) {
//     this.messages$ = this.store.select((state) => state.chat?.messages);
//     this.loading$ = this.store.select((state) => state.chat?.loading);
//   }

//   sendMessage() {
//     if (this.userInput.trim()) {
//       this.store.dispatch(ChatActions.sendMessage({ message: this.userInput }));
//       this.userInput = '';
//     }
//   }
// }
