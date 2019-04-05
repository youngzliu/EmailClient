export class Email{
  public starred: boolean = false;
  public trash: boolean = false;
  public sent: boolean = false;
  public labels: string[] = [];
  
  constructor(public from: string, public to: string[], public subject: string, public body: string, public date: Date){}
}
