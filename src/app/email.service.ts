import { Injectable } from '@angular/core';
import { Email } from "./models/email.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EmailService {

  emails: FirebaseListObservable<any[]>;
  emailSub;
  emailModels = [];

  constructor(private database: AngularFireDatabase) {
    this.emails = database.list("emails");
    this.getEmailsModels();
  }

  getEmails(){
    return this.emails;
  }

  getEmailsModels(){
    this.emails.subscribe(dataLastEmittedFromObserver => {
      this.emailSub = dataLastEmittedFromObserver;
      for(let email of this.emailSub){
        this.emailModels.push(new Email(email.from, email.fromEmail, new Map(email.to), email.subject, email.body, new Date(parseInt(email.date)), email.$key, email.starred, email.trash, email.sent, email.labels));
      }
    });
  }

  getEmailById(emailId: string){
    return this.database.object('emails/' + emailId);
  }

  trashEmail(email){
    email.update({trash: true});
  }

  deleteEmail(id){
    let email = this.getEmailById(id);
    email.remove();
  }

}
