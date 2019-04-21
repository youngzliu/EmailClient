* _Firebase Deployment link: https://emailclient-eec08.firebaseapp.com_

* SPECS:
  * User should be able to view their emails in chronological order
  * Emails should display sender, subject, a brief preview, and the date in the list view.
  * Emails should have different style depending on whether they are "read" or not.
  * User should be able to select an individual or multiple emails to apply an action to them.
  * Users should be able to mark the email as read or unread, star them, delete them, or add a label to them.
  * There should be a interface that resides on the page and doesn't move when you scroll.
  * On the top bar of the interface, you can see which page of emails you are on, and have the ability to navigate pages.
  * On the top bar, you should be able to select  all emails on the page, refresh the emails, or perform an action after emails are selected.
  * On the top bar, there will be a menu for additional settings (display density?, display theme?)
  * On the right bar, there will be a list of email categories to choose from, including inbox, starred, sent, trash, drafts, and your labels.
  * The user can click any of those links to see emails belonging to that category.
  * User should be able to "compose" an email and have it appear in the sent category of emails.
  * User should be able to save an unfinished email as a draft.
  * User should be able to search for emails based on certain criteria
  * User should be able to sort emails by name, subject, or date in ascending or descending order
  * User should be able to delete an email, which gets sent to the trash
  * User should be able to permanently delete an email by deleting it from the trash

* BONUS?:
  * Use gmail api to get actual emails from a user when they log in
  * Use email protocols to be able to actually send emails from the client
  * Delete emails that have been in the trash for more than 30 days

* Components?
  * ListEmail Component - Shows all emails
  * UI Component - Contains two components
    * Top Bar Component
    * Side Bar Component
  * Starred Component
  * Email Component - single email
  * Sent Component
  * Starred Component
  * Label Component
  * Trash Component
  * Drafts Component
  * Compose Mail Component

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
