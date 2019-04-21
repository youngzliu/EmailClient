import {Pipe, PipeTransform} from '@angular/core';
import {Email} from './models/email.model';

@Pipe({
  name: "emailFilter",
  pure: false
})

export class EmailFilterPipe implements PipeTransform {
  transform(input: Email[], desiredFilter){
    let output: Email[] = [];
    if(desiredFilter === "trash"){
      for(let i = 0; i < input.length; i++){
        if(input[i].trash === true){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredFilter === "starred"){
      for(let i = 0; i < input.length; i++){
        if(input[i].starred === true){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredFilter === "sent"){
      for(let i = 0; i < input.length; i++){
        if(input[i].sent === true){
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }
  }
}