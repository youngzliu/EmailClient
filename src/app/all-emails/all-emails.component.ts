import { Component, OnInit } from '@angular/core';
import { Email } from "../models/email.model";
import { EmailService } from "../email.service";

@Component({
  selector: 'app-all-emails',
  templateUrl: './all-emails.component.html',
  styleUrls: ['./all-emails.component.css'],
  providers: [EmailService]
})
export class AllEmailsComponent implements OnInit {

  emails: Email[];

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emails = this.emailService.getEmails();
  }

}
