import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  users = ["Aniket", "Prashant","Kartik","Vinay", "Monty"];

  students = [
    {id:1,name: "Aniket",age:18,email:"ai@gmail.com"},
    {id:2,name: "Prashant",age:18,email:"Prashant@gmail.com"},
    {id:3,name: "Kartik",age:18,email:"Kartik@gmail.com"},
    {id:4,name: "Monty",age:18,email:"Monty@gmail.com"},
  ]
  
}
