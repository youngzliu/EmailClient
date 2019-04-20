import { Component, OnInit } from '@angular/core';
import { Email } from "../models/email.model";
import { EmailService } from "../email.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-emails',
  templateUrl: './all-emails.component.html',
  styleUrls: ['./all-emails.component.css'],
  providers: [EmailService]
})
export class AllEmailsComponent implements OnInit {

  emails: Email[];

  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails();
  }

  goToEmail(email: Email){
    this.router.navigate(["emails", email.id]);
  }

}
