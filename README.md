# _Email Client_

#### _Email Client Website, 4.20.2019_

#### By _**Young Liu**_

## Description

_This website will allow uesrs to check their email._

* _SPECS:_
  * _Emails should display sender, subject, a brief preview, and the date in the list view._
  * _Users can click the email to view the detailed information of the email_
  * _On the top bar there is a list of email categories including All mail, starred, trash, and sent_
  * _Users can click the links on the top of the bar to automatically filter emails with a pipe based on that criteria_
  * _Users can click on the trash button on an email to move an email to the trash_
  * _Users can click the empty trash button to empty all emails currently in the trash_
  * _Users can add an email._
  * _Users Emails are stored in a firebase database_
  * _Email client is deployed to Firebase webhosting_

* _TODO:_
  * _User should be able to view their emails in chronological order_
  * _Emails should have different style depending on whether they are "read" or not._
  * _User should be able to select an individual or multiple emails to apply an action to them._
  * _User should be able to add a label or star an email_
  * _Users should be able to see a drafts and labels categories_
  * _User should be able to "compose" an email and have it appear in the sent category of emails._
  * _User should be able to save an unfinished email as a draft._
  * _User should be able to search for emails based on certain criteria_
  * _User should be able to sort emails by name, subject, or date in ascending or descending order_
  * _On the top bar, there will be a menu for additional settings (display density?, display theme?)_
  * _There should be a interface that resides on the page and doesn't move when you scroll._
  * _Use gmail api to get actual emails from a user when they log in_
  * _Use email protocols to be able to actually send emails from the client_
  * _Delete emails that have been in the trash for more than 30 days_

## Setup/Installation Requirements

* _Visit the website here: https://emailclient-eec08.firebaseapp.com_
* _Alternatively, to run locally:_
  * _Clone this Repository ($ git clone https://github.com/youngzliu/EmailClient name)_
  * _Change into the work directory ($ cd EmailClient)_
  * _To edit the project, open the project in your preferred text editor._
  * _Create a project in Firebase(https://firebase.google.com/) with a real time database._
  * _Import the sample-emails.json file from this repository into the database._
  * _Select add Web App, and copy the credentials into a file called "api-keys.ts" in the src/app folder._
  * _To run the website, navigate to the directory of EmailClient, and then install and serve ($ cd EmailClient; $ npm install; $ ng serve)_
    * _Then navigate to http://localhost:4200 on your browser of choice._

## Technologies Used

_This website was created using Node.js, Node.js package manager, Angular, and Firebase._

# EmailClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
