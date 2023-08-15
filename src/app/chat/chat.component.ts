import { Component } from '@angular/core';

interface PredefinedResponses {
  [key: string]: string;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  messages: string[] = [];

  sendMessage(message: string) {
    this.messages.push(`You: ${message}`);
    this.handleBotResponse(message);
  }

  handleBotResponse(userMessage: string) {
    const botResponse = this.generateBotResponse(userMessage);
    this.messages.push(`Gigachad: ${botResponse}`);
  }

  generateBotResponse(userMessage: string): string {
    const predefinedResponses: PredefinedResponses = {
      'hi': 'Hello! How can I assist you?',
      'how are you': 'I am just a chatbot, but I am functioning well!',
      'bye': 'Goodbye! Feel free to chat again!',
      'hobby': 'BodyBuilding'
    };

    const lowerCaseMessage = userMessage.toLowerCase();
    return predefinedResponses[lowerCaseMessage] || 'I\'m not sure how to respond to that.';
  }
}









