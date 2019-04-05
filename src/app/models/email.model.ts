export class Email{
  public starred: boolean = false;
  public trash: boolean = false;
  public sent: boolean = false;
  public labels: string[] = [];

  constructor(public from: string, public fromEmail: string, public to: Map<string, string>, public subject: string, public body: string, public date: Date, public id: number){}

  getRecipients(){
    let recipientList: string = "";
    this.to.forEach(function(value, key){
      recipientList += `${key} (${value}) `;
    });
    return recipientList;
  }
}
