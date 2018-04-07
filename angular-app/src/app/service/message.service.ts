import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  constructor() {}

  addMessage(message: string): void {
    this.messages = [message,  ...this.messages];
  }

  clearMessages(): void {
    this.messages = [];
  }

}
