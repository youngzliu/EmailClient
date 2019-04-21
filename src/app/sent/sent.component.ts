import { Component, OnInit } from '@angular/core';
import { Email } from "../models/email.model";
import { EmailService } from "../email.service";
import { Router } from "@angular/router";
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css'],
  providers: [EmailService]
})
export class SentComponent implements OnInit {

  emails: FirebaseListObservable<any[]>;
  emailObs;
  emailModels = [];

  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails();
    this.emailModels = this.emailService.emailModels;
  }

  goToEmail(email){
    this.router.navigate(["emails", email.id]);
  }

}
