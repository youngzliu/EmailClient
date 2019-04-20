import { Email } from "./models/email.model";

const lorem: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const EMAILS: Email[] = [
  new Email("Bob", "bob@gmail.com", new Map([["Rob", "rob@gmail.com"], ["Eva", "eva@hotmail.com"], ["Chelsea", "chelsea@yahoo.com"]]), "About next week's party",  lorem, new Date(), 1),
  new Email("Dave", "dave@gmail.com", new Map([["Rob", "rob@gmail.com"], ["Eva", "eva@hotmail.com"], ["Chelsea", "chelsea@yahoo.com"]]), "Homework due tomorrow",  lorem, new Date(), 2),
  new Email("Emily", "emily@gmail.com", new Map([["Rob", "rob@gmail.com"], ["Eva", "eva@hotmail.com"], ["Chelsea", "chelsea@yahoo.com"]]),  "Meet up", lorem, new Date(), 3),
  new Email("Samantha", "samantha@gmail.com", new Map([["Rob", "rob@gmail.com"], ["Eva", "eva@hotmail.com"], ["Chelsea", "chelsea@yahoo.com"]]), "Team Week",  lorem, new Date(), 4),
];
