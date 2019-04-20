import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Email } from '../models/email.model';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {
  emailId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.emailId = parseInt(this.route.params.value["id"]);
    // this.route.params.forEach((urlParameters) => {
    //   this.emailId = parseInt(urlParameters['id']);
    // }); 
  }

}
