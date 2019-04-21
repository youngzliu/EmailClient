import { Injectable } from '@angular/core';
import { Email } from "./models/email.model";
import { EMAILS } from "./mock-emails";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EmailService {

  emails: FirebaseListObservable<any[]>;
  emailInFirebase;

  constructor(private database: AngularFireDatabase) {
    this.emails = database.list("emails");
  }

  getEmails(){
    return this.emails;
  }

  getEmailById(emailId: string){
    return this.database.object('emails/' + emailId);
  }

  trashEmail(email){
    email.update({trash: true});
  }

}
