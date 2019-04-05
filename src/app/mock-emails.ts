import { Email } from "./models/email.model";

export const EMAILS: Email[] = [
  new Email("bob@gmail.com", ["susan@gmail.com"], "About next week's party",  "Hey what should I bring to the party?", new Date(), 1),
  new Email("dave@gmail.com", ["sarah@gmail.com"], "Homework due tomorrow",  "What is the homework for tomorrow?", new Date(), 2),
  new Email("emily@gmail.com", ["kyle@gmail.com"],  "Meet up", "We should hang out tomorrow!", new Date(), 3),
  new Email("samantha@gmail.com", ["rob@gmail.com", "eva@hotmail.com", "chelsea@yahoo.com"], "Homework due tomorrow",  "What is the homework for tomorrow?", new Date(), 4),
];
