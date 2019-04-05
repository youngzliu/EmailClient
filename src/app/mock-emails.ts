import { Email } from "./models/email.model";

export const EMAILS: Email[] = [
  new Email("Bob", "bob@gmail.com", new Map([["Susan", "susan@gmail.com"]]), "About next week's party",  "Hey what should I bring to the party?", new Date(), 1),
  new Email("Dave", "dave@gmail.com", new Map([["Sarah", "sarah@gmail.com"]]), "Homework due tomorrow",  "What is the homework for tomorrow?", new Date(), 2),
  new Email("Emily", "emily@gmail.com", new Map([["Kyle", "Kyle@gmail.com"]]),  "Meet up", "We should hang out tomorrow!", new Date(), 3),
  new Email("Samantha", "samantha@gmail.com", new Map([["Rob", "rob@gmail.com"], ["Eva", "eva@hotmail.com"], ["Chelsea", "chelsea@yahoo.com"]]), "Team Week",  "We should talk about our Team week project soon.", new Date(), 4),
];
