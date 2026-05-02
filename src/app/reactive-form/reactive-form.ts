import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
  //name = new FormControl('Aniket');
  //password = new FormControl('123');

  profileForm = new FormGroup({
    name :new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    email : new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
  });

  onSubmit(){
    console.log(this.profileForm.value.name)
  }

  get name(){
    return this.profileForm.get("name");
  }

  
  get password(){
    return this.profileForm.get("password");
  }

  
  get email(){
    return this.profileForm.get("email");
  }
}
