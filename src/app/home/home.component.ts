import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Dummydata } from '../dummydata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email:any;
  id:any;
  name:any;
  body:any;
  lists:Dummydata[]=[]
   
  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.api.getdata().subscribe((data:any)=>{
      this.lists= data;
      console.log(data)
    })
  }
   getuser(list:any){
    this.email = list.email
    this.id = list.id
    this.name = list.name
    this.body = list.body
        console.log(list)
   }

}
