import { Component, OnInit } from '@angular/core';
import { Email } from "../models/email.model";
import { EmailService } from "../email.service";

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css'],
  providers: [EmailService]
})
export class AddEmailComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  submitForm(fromVal, fromEmailVal, toVal, subjectVal, bodyVal, starredVal, trashVal, sentVal){
    let toInput = toVal.split(" ");
    let toArray = [];
    for(let i = 0; i < toInput.length - 1; i += 2){
      toArray.push([toInput[i], toInput[i+1]]);
    }
    let email = {
      from: fromVal,
      fromEmail: fromEmailVal,
      to: toArray,
      subject: subjectVal,
      body: bodyVal,
      date: new Date().getTime(),
      id: 0,
      starred: starredVal,
      trash: trashVal,
      sent: sentVal,
      labels: []
    }
    this.emailService.addEmail(email);
  }

}
