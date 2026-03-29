import { Component } from '@angular/core';

@Component({
  selector: 'user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  users = ["Aniket", "Prashant","Kartik","Vinay", "Monty"];

  students = [
    {name: "Aniket",age:18,email:"ai@gmail.com"},
    {name: "Prashant",age:18,email:"Prashant@gmail.com"},
    {name: "Kartik",age:18,email:"Kartik@gmail.com"},
    {name: "Monty",age:18,email:"Monty@gmail.com"},
  ]
}
