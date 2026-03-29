import { Component } from '@angular/core';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  name:string = "";
  displayName = "";
  email = "";
  // If else
  display = true;
  toggle = false;
  color = "red";
  getName(event:Event){
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
  }
  showName(){
    this.displayName = this.name;
  }

  setName(){
    this.name = "Vinay";
  }

  getEmail(val:string){
    this.email = val;
  }

   setEmail(){
    this.email = "anie@gmail.com";
  }

  // hideDiv(){
  //   this.display = false;
  // }
  // showDiv(){
  //   this.display = true;
  // }

  toggleDiv(){
    this.display = !this.display;

  }

  toggleTwoDiv(){
    this.toggle = !this.toggle;
  }

  handleColor(val:string){
    this.color = val;
  }

  changeColor(event:Event){
    this.color = (event.target as HTMLInputElement).value;
  }

}
