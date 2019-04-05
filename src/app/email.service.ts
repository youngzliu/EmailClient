import { Injectable } from '@angular/core';
import { Email } from "./models/email.model";
import { EMAILS } from "./mock-emails";

@Injectable()
export class EmailService {

  constructor() { }

  getEmails(){
    return EMAILS;
  }

}
