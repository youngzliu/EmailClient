import { Component, OnInit } from '@angular/core';
import { Email } from "../models/email.model";
import { EmailService } from "../email.service";
import { Router } from "@angular/router";
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css'],
  providers: [EmailService]
})
export class TrashComponent implements OnInit {

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

  emptyTrash(){
    for (let email of this.emailModels){
      if(email.trash === true){
        this.emailService.deleteEmail(email.id);
      }
    }
    location.reload();
  }

}
