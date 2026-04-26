import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-data',
  imports: [],
  templateUrl: './user-data.html',
  styleUrl: './user-data.css'
})
export class UserData {

  name:null|String = "";
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      this.name = params['name'];
      console.log(params)
    })
  }
}
