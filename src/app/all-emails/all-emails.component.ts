import { Component, OnInit } from '@angular/core';
import { Email } from "../models/email.model";
import { EmailService } from "../email.service";
import { Router } from "@angular/router";
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-all-emails',
  templateUrl: './all-emails.component.html',
  styleUrls: ['./all-emails.component.css'],
  providers: [EmailService]
})
export class AllEmailsComponent implements OnInit {

  emails: FirebaseListObservable<any[]>;
  emailObs;
  emailModels = [];

  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails();
    this.emails.subscribe(dataLastEmittedFromObserver => {
      this.emailObs = dataLastEmittedFromObserver;
      console.log(this.emailObs);
      for(let email of this.emailObs){
        this.emailModels.push(new Email(email.from, email.fromEmail, new Map(email.to), email.subject, email.body, new Date(parseInt(email.date)), email.$key, email.starred, email.trash, email.sent, email.labels));
      }
      console.log(this.emailModels);
    })
  }

  goToEmail(email){
    this.router.navigate(["emails", email.$key]);
  }

}
