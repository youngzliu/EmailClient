import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Email } from '../models/email.model';
import { EmailService } from "../email.service";

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css'],
  providers: [EmailService]
})
export class EmailDetailComponent implements OnInit {
  emailId: number = null;
  emailToDisplay: Email;

  constructor(private route: ActivatedRoute, private location: Location, private emailService: EmailService) { }

  ngOnInit() {
    this.emailId = parseInt(this.route.params.value["id"]);
    // this.route.params.forEach((urlParameters) => {
    //   this.emailId = parseInt(urlParameters['id']);
    // }); 
    this.emailToDisplay = this.emailService.getEmailById(this.emailId);
  }

}
