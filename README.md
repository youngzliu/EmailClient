* _Firebase Deployment link: https://emailclient-eec08.firebaseapp.com_

* SPECS:
  * Emails should display sender, subject, a brief preview, and the date in the list view.
  * Users can click the email to view the detailed information of the email 
  * On the top bar there is a list of email categories including All mail, starred, and trash
  * Users can click the links on the top of the bar to automatically filter emails with a pipe based on that criteria
  * Users can click on the trash button on an email to move an email to the trash
  * Users can click the empty trash button to empty all emails currently in the trash
  * Users Emails are stored in a firebase database
  * Email client is deployed to Firebase webhosting

* TODO:
  * User should be able to view their emails in chronological order
  * Emails should have different style depending on whether they are "read" or not.
  * User should be able to select an individual or multiple emails to apply an action to them.
  * User should be able to add a label or star an email
  * Users should be able to see a sent, drafts, and labels categories
  * User should be able to "compose" an email and have it appear in the sent category of emails.
  * User should be able to save an unfinished email as a draft.
  * User should be able to search for emails based on certain criteria
  * User should be able to sort emails by name, subject, or date in ascending or descending order
  * On the top bar, there will be a menu for additional settings (display density?, display theme?)
  * There should be a interface that resides on the page and doesn't move when you scroll.
  * Use gmail api to get actual emails from a user when they log in
  * Use email protocols to be able to actually send emails from the client
  * Delete emails that have been in the trash for more than 30 days


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
