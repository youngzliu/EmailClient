import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Email } from '../models/email.model';
import { EmailService } from "../email.service";
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css'],
  providers: [EmailService]
})
export class EmailDetailComponent implements OnInit {
  emailId: string;
  emailToDisplay;
  emailToDisplayObs;
  emailToDisplayModel;

  constructor(private route: ActivatedRoute, private location: Location, private emailService: EmailService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.emailId = urlParameters['id'];
    }); 
    this.emailToDisplay = this.emailService.getEmailById(this.emailId);
    this.emailToDisplay.subscribe(dataLastEmittedFromObserver => {
        this.emailToDisplayObs = dataLastEmittedFromObserver;
        this.emailToDisplayModel = new Email(this.emailToDisplayObs.from, this.emailToDisplayObs.fromEmail, new Map(this.emailToDisplayObs.to), this.emailToDisplayObs.subject, this.emailToDisplayObs.body, new Date(parseInt(this.emailToDisplayObs.date)), this.emailToDisplayObs.$key, this.emailToDisplayObs.starred, this.emailToDisplayObs.trash, this.emailToDisplayObs.sent, this.emailToDisplayObs.labels);
        console.log(this.emailToDisplayModel);
      });
  }

  trashEmail(){
      this.emailService.trashEmail(this.emailToDisplay);
      alert("Email has been moved to the trash.");
    }
  }

