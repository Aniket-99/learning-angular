import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  imports: [FormsModule,NgIf],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenForm {

  addDetails(val:NgForm){
    console.log(val);
    
  }
}
