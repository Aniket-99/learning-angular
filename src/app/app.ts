import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { User } from './user/user';
import { TodoApp } from './todo-app/todo-app';
import { Header } from './header/header';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login, Profile,User, TodoApp,RouterLink, Header,ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Property
  name:string = "Aniket Karmakar";
  data:string|number = "hello";
  other:any = true;

  counter:number = 0;

  title = 'Testing';
  //name = 'Aniket';

  handleCounter(val:string){
    if(val == 'minus'){
      if(this.counter != 0){
        this.counter--;
      }
    }
    else if(val == 'plus'){
      this.counter++;
    }
    else if(val == 'reset'){
      this.counter = 0;
    }
  }


  sum(a:number,b:number){
    alert(a+b);
  }


  handleClickEvent(){
    alert("That was hard!!")
    this.otherFunction();
  }

  otherFunction(){
    alert("This was too hard!!")
  }

  handleEvent(event:any){
    console.log("Function called: ",event.type);
    console.log("Function called: ",(event.target as Element).className);

  }

}
