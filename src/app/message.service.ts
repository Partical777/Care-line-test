import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  removeFirstFour(){
    this.messages.splice(0, 4);
  }

  clear() {
    this.messages = [];
  }
}
