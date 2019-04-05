import { Email } from "./models/email.model";

export const EMAILS: Email[] = [
  new Email("bob@gmail.com", ["susan@gmail.com"], "About next week's party",  "Hey what should I bring to the party?", new Date()),
  new Email("dave@gmail.com", ["sarah@gmail.com"], "Homework due tomorrow",  "What is the homework for tomorrow?", new Date()),
];
